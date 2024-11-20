import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[78.5vh] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-8 space-y-12">
        {/* Title and Introduction */}
        <div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-purple-600">
            Welcome to SmartCraze
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl text-muted-foreground">
            A place where creativity meets clarity. Explore stunning documentation, insightful blogs, and a portfolio showcasing innovative projects.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row items-center gap-5">
          <Link
            href={`/docs${page_routes[0].href}`}
            className={buttonVariants({ className: "px-6", size: "lg" })}
          >
            Explore Docs
          </Link>
          <Link
            href="/blog"
            className={buttonVariants({
              variant: "secondary",
              className: "px-6",
              size: "lg",
            })}
          >
            Read Blog
          </Link>
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <Link
            href="https://www.smartcraze.online/"
            
          >
            Visit portfolio
          </Link>
            </button>
        </div>
      </div>
    </div>
  );
}



