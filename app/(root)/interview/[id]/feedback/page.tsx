import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

import {
    getFeedbackByInterviewId,
    getInterviewById,
} from "@/lib/actions/general.actions";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Feedback = async ({ params }: RouteParams) => {
    const { id } = await params;
    const user = await getCurrentUser();

    const interview = await getInterviewById(id);
    if (!interview) redirect("/");

    const feedback = await getFeedbackByInterviewId({
        interviewId: id,
        userId: user?.id!,
    });

    return (
        <section className="w-full min-h-screen px-6 py-10 sm:px-10 md:px-20 bg-[url('/pattern.png')] bg-top bg-no-repeat text-white">
            <div className="max-w-5xl mx-auto bg-dark-200/80 rounded-2xl shadow-xl border border-gray-700 p-8 space-y-10 backdrop-blur-md">
                <header className="space-y-3 text-center">
                    <h1 className="text-4xl font-bold leading-snug">
                        Feedback on <span className="capitalize text-primary-200">{interview.role}</span> Interview
                    </h1>
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-light-100">
                        <div className="flex items-center gap-2">
                            <Image src="/star.svg" width={20} height={20} alt="star" />
                            <p>
                                <span className="font-semibold text-primary-200">{feedback?.totalScore}</span> /100 Overall Score
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src="/calendar.svg" width={20} height={20} alt="calendar" />
                            <p>{feedback?.createdAt ? dayjs(feedback.createdAt).format("MMM D, YYYY h:mm A") : "N/A"}</p>
                        </div>
                    </div>
                </header>

                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold">🧠 Final Assessment</h2>
                    <p className="text-light-100">{feedback?.finalAssessment}</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">📊 Interview Breakdown</h2>
                    <div className="space-y-3">
                        {feedback?.categoryScores?.map((category, index) => (
                            <div key={index} className="bg-dark-300 rounded-xl p-4 border border-gray-700">
                                <p className="text-lg font-bold">
                                    {index + 1}. {category.name} <span className="text-primary-200">({category.score}/100)</span>
                                </p>
                                <p className="text-light-100 mt-1">{category.comment}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">✅ Strengths</h3>
                        <ul className="list-disc list-inside space-y-1 text-light-100">
                            {feedback?.strengths?.map((strength, index) => (
                                <li key={index}>{strength}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">⚠️ Areas for Improvement</h3>
                        <ul className="list-disc list-inside space-y-1 text-light-100">
                            {feedback?.areasForImprovement?.map((area, index) => (
                                <li key={index}>{area}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4 pt-6">
                    <Button className="btn-secondary w-full sm:w-1/2">
                        <Link href="/" className="w-full text-center">
                            Back to Dashboard
                        </Link>
                    </Button>

                    <Button className="btn-primary w-full sm:w-1/2">
                        <Link href={`/interview/${id}`} className="w-full text-center">
                            Retake Interview
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
