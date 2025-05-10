import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

import { cn, getRandomInterviewCover } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import DisplayTechIcons from "@/components/DisplayTechIcons";
import { getFeedbackByInterviewId } from "@/lib/actions/general.actions";

const InterviewCard = async ({
                                 interviewId,
                                 userId,
                                 role,
                                 type,
                                 techstack,
                                 createdAt,
                             }: InterviewCardProps) => {
    const feedback =
        userId && interviewId
            ? await getFeedbackByInterviewId({ interviewId, userId })
            : null;

    const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
    const badgeColor = {
        Behavioral: "bg-[#FDE68A] text-black",
        Mixed: "bg-[#A5F3FC] text-black",
        Technical: "bg-[#C4B5FD] text-black",
    }[normalizedType] || "bg-gray-300 text-black";

    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format("MMM D, YYYY");

    return (
        <div className="bg-white/5 border border-white/10 backdrop-blur-md shadow-md rounded-2xl p-6 w-[360px] max-sm:w-full transition hover:scale-[1.02] hover:shadow-xl">
            <div className="relative">
                {/* Badge */}
                <div className={cn("absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-medium", badgeColor)}>
                    {normalizedType}
                </div>

                {/* Profile Image */}
                <div className="flex justify-center">
                    <Image
                        src={getRandomInterviewCover()}
                        alt="cover"
                        width={80}
                        height={80}
                        className="rounded-full border border-gray-500"
                    />
                </div>

                {/* Title */}
                <h3 className="text-xl text-center font-semibold mt-4 capitalize">{role} Interview</h3>

                {/* Date + Score */}
                <div className="flex items-center justify-center gap-6 mt-3 text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                        <Image src="/calendar.svg" alt="calendar" width={18} height={18} />
                        <span>{formattedDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src="/star.svg" alt="score" width={18} height={18} />
                        <span>{feedback?.totalScore ?? "---"}/100</span>
                    </div>
                </div>

                {/* Feedback */}
                <p className="text-sm mt-4 line-clamp-3 text-center text-gray-300">
                    {feedback?.finalAssessment || "You haven't taken this interview yet. Start now and level up your skills!"}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-5">
                    <DisplayTechIcons techStack={techstack} />
                    <Button className="btn-primary text-sm">
                        <Link href={feedback ? `/interview/${interviewId}/feedback` : `/interview/${interviewId}`}>
                            {feedback ? "View Feedback" : "Start Now"}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default InterviewCard;
