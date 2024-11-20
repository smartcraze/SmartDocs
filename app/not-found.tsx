import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[87vh] px-4 sm:py-28 py-36 flex flex-col items-center justify-center text-center gap-6">
      {/* Error Code and Message */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-8xl font-extrabold text-gradient bg-gradient-to-r from-purple-500 to-blue-500">
          404
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground font-medium">
          Oops! We can't find the page you're looking for.
        </p>
        <p className="text-muted-foreground max-w-md">
          The page might have been moved, deleted, or does not exist. Let’s get you back to exploring the wonders of **SmartCraze**.
        </p>
      </div>

      {/* Call to Action */}
      <Link href="/" className={buttonVariants({ className: "px-6", size: "lg" })}>
        Back to Homepage
      </Link>
    </div>
  );
}
