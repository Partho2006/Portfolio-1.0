import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
    {
        name: "React JS",
        username: "@react",
        img: "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",
    },
    {
        name: "Next JS",
        username: "@nextjs",
        img: "https://raw.githubusercontent.com/github/explore/main/topics/nextjs/nextjs.png",
    },
    {
        name: "Node JS",
        username: "@nodejs",
        img: "https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png",
    },
    {
        name: "Tailwind CSS",
        username: "@tailwind",
        img: "https://raw.githubusercontent.com/github/explore/main/topics/tailwind/tailwind.png",
    },
    {
        name: "Framer Motion",
        username: "@framer",
        img: "https://raw.githubusercontent.com/github/explore/main/topics/framer-motion/framer-motion.png",
    },
    {
        name: "Vercel",
        username: "@vercel",
        img: "https://raw.githubusercontent.com/github/explore/main/topics/vercel/vercel.png",
    },
    {
        name: "GitHub",
        username: "@github",
        img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    {
        name: "ShadCN UI",
        username: "@shadcn",
        img: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4", // official shadcn avatar
    },
];

const ReviewCard = ({ img, name, username }) => {
    return (
        <figure
            className={cn(
                "relative h-36 w-36 cursor-default overflow-hidden rounded-2xl p-6 transition flex flex-col items-center justify-center",
                // 🌌 Transparent glassmorphism
                "border border-white/20 bg-transparent backdrop-blur-md",
                "dark:border-white/10 dark:bg-transparent",
                // ✨ Glow effect
                "hover:scale-105 border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] duration-300"
            )}
        >
            <img
                className="rounded-full border border-white/30 dark:border-gray-600"
                width="50"
                height="50"
                alt={name}
                src={img}
            />
            <figcaption className="mt-2 text-sm font-semibold text-white">
                {name}
            </figcaption>
            <p className="text-xs text-gray-400">{username}</p>
        </figure>
    );
};

export default function ReviewsGrid() {
    return (
        <section className="w-full py-16 px-0 md:px-6 bg-transparent">
            {/* Header Section */}
            <div className="mx-auto max-w-4xl text-center mb-12">
                <h2 className="text-3xl font-bold text-white">
                    My Tech Stack 🚀
                </h2>
                <p className="mt-2 text-gray-400">
                    The tools, frameworks, and platforms I use to design, build, and deploy modern applications.
                </p>
            </div>

            {/* Grid */}
            <div className="grid gap-2 md:gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                {reviews.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </div>
        </section>
    );
}
