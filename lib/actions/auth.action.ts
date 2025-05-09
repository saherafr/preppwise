'use server';
import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";
const SESSION_DURATION = 60 * 60 * 24 * 7;

export async function signUp(params: SignUpParams) {
    const {uid, name, email} = params;
    try{
        const userRecord = await db.collection('users').doc(uid).get();
        if(userRecord.exists){
            return {
                success: false,
                message: 'User already exists'
            }
        }
        await db.collection('users').doc(uid).set({
            name,
            email
        })
        return {
            success: true,
            message: 'User created successfully'
        }

    } catch (error) {
        console.error('Error creating a user',error);
        if(error.code === 'auth/email-already-in-use') {
            return{
                success: false,
                message: 'Email already in use'
            }
        }
        return {
            success: false,
            message: 'Something went wrong'
        }
    }
}
export async function setSessionCookie(idToken: string) {
    const cookieStore = await cookies();


    const sessionCookie = await auth.createSessionCookie(idToken, {
        expiresIn: SESSION_DURATION * 1000, // milliseconds
    });

    // Set cookie in the browser
    cookieStore.set("session", sessionCookie, {
        maxAge: SESSION_DURATION,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: "lax",
    });
}
export async function signIn(params: SignInParams) {
    const { email, idToken } = params;

    try {
        const userRecord = await auth.getUserByEmail(email);
        if (!userRecord)
            return {
                success: false,
                message: "User does not exist. Create an account.",
            };

        await setSessionCookie(idToken);
    } catch (e) {
        console.log(e);

        return {
            success: false,
            message: "Failed to log into account. Please try again.",
        };
    }
}

// Sign out user by clearing the session cookie
export async function signOut() {
    const cookieStore = await cookies();

    cookieStore.delete("session");
}

// Get current user from session cookie
export async function getCurrentUser(): Promise<User | null> {
    const cookieStore = await cookies();

    const sessionCookie = cookieStore.get("session")?.value;
    if (!sessionCookie) return null;

    try {
        const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);

        // get user info from db
        const userRecord = await db
            .collection("users")
            .doc(decodedClaims.uid)
            .get();
        if (!userRecord.exists) return null;

        return {
            ...userRecord.data(),
            id: userRecord.id,
        } as User;
    } catch (error) {
        console.log(error);

        // Invalid or expired session
        return null;
    }
}


export async function isAuthenticated() {
    const user = await getCurrentUser();
    return !!user;
}
