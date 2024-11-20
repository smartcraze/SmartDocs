import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { HeartIcon, RocketIcon } from "lucide-react";
import { page_routes } from "@/lib/routes-config";

export function Footer() {
  return (
    <footer className="border-t w-full h-16 bg-white dark:bg-black">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        {/* Branding Section */}
        <div className="flex items-center gap-3">
          <RocketIcon className="sm:block hidden w-5 h-5 text-primary" />
          <p className="text-center">
            Powered by{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://smartcraze.in"
            >
              SmartCraze
            </Link>
            . Your go-to platform for blogs, documentation, and inspiring projects.
          </p>
        </div>

        {/* Footer Buttons */}
        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
       href={`/docs${page_routes[0].href}`}
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        Documentation
      </Link>
      <Link
        href="/blog"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        Blogs
      </Link>
      <Link
        href="https://www.smartcraze.online/Social"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
        Contact Us
      </Link>
    </>
  );
}
