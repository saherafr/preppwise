import Image from "next/image";
import { cn, getTechLogos } from "@/lib/utils";

const DisplayTechIcons = async ({ techStack }: TechIconProps) => {
    const techIcons = await getTechLogos(techStack);

    return (
        <div className="flex flex-row items-center">
            {techIcons.slice(0, 3).map(({ tech, url }, index) => (
                <div
                    key={tech}
                    className={cn(
                        "relative group rounded-full p-2 backdrop-blur-md border border-white/10 bg-white/5 shadow-md transition-transform hover:scale-105",
                        index >= 1 && "-ml-3"
                    )}
                >
                    {/* Tooltip */}
                    <span className="absolute left-1/2 -top-7 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black/70 rounded-md opacity-0 group-hover:opacity-100 transition z-10 whitespace-nowrap">
            {tech}
          </span>

                    <Image
                        src={url}
                        alt={tech}
                        width={24}
                        height={24}
                        className="size-5 object-contain"
                    />
                </div>
            ))}
        </div>
    );
};

export default DisplayTechIcons;
