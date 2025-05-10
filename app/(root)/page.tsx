import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";

import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.actions";

async function Home() {
  const user = await getCurrentUser();

  const [userInterviews, allInterview] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasPastInterviews = userInterviews?.length! > 0;
  const hasUpcomingInterviews = allInterview?.length! > 0;

  return (
      <main className="flex flex-col gap-12 px-6 py-12 sm:px-12 lg:px-24">
        {/* Hero */}
        <section className="flex flex-col-reverse lg:flex-row justify-between items-center bg-gradient-to-br from-[#101010] to-[#1f1f1f] rounded-3xl p-10 shadow-2xl">
          <div className="flex flex-col gap-6 max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white tracking-tight">
              Ace Your Next Interview with Confidence
            </h1>
            <p className="text-lg text-gray-300">
              Practice AI-generated questions tailored to your role & tech stack — get real-time feedback and improve faster.
            </p>

            <Button asChild className="btn-primary w-fit mt-4">
              <Link href="/interview">🎯 Start Practicing</Link>
            </Button>
          </div>

          <Image
              src="/robot.png"
              alt="AI Interview Assistant"
              width={350}
              height={350}
              className="object-contain"
          />
        </section>

        {/* Past Interviews */}
        <section className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-white">📁 Your Interviews</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hasPastInterviews ? (
                userInterviews?.map((interview) => (
                    <InterviewCard
                        key={interview.id}
                        userId={user?.id}
                        interviewId={interview.id}
                        role={interview.role}
                        type={interview.type}
                        techstack={interview.techstack}
                        createdAt={interview.createdAt}
                    />
                ))
            ) : (
                <p className="text-gray-400">No interviews yet. Start one today!</p>
            )}
          </div>
        </section>

        {/* Public Interviews */}
        <section className="flex flex-col gap-6 mt-12">
          <h2 className="text-3xl font-bold text-white">🌍 Explore Public Interviews</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hasUpcomingInterviews ? (
                allInterview?.map((interview) => (
                    <InterviewCard
                        key={interview.id}
                        userId={user?.id}
                        interviewId={interview.id}
                        role={interview.role}
                        type={interview.type}
                        techstack={interview.techstack}
                        createdAt={interview.createdAt}
                    />
                ))
            ) : (
                <p className="text-gray-400">No public interviews available right now.</p>
            )}
          </div>
        </section>
      </main>
  );
}

export default Home;
