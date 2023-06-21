import Link from "next/link";
import CustomLink from "./CustomLink";
import PageTitle from "./PageTitle";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col justify-around w-full h-content sm:h-content-sm">
        <div className="space-y-2 md:space-y-5">
          <PageTitle>
            Hello!! I'm Johnny{" "}
            <span role="img" aria-label="waving hand" className="wave">
              👋
            </span>
          </PageTitle>
          <p className="text-lg leading-7 prose text-gray-500 max-w-none dark:text-gray-400">
            Just a guy looking to make my developer workflow more awesome, build
            performant projects, understand memory, and ultimately craft really
            awesome software.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
