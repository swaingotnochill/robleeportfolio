import { NextPage } from "next";
import Image from "next/image";
import Container from "../components/Container";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-start justify-center border-gray-200 pb-16 dark:border-gray-700">
          <div className="flex flex-col-reverse items-start sm:flex-row">
            <div className="flex flex-col pr-8">
              <h1 className="mb-1 text-3xl font-bold tracking-tight text-black  md:text-5xl">
                Roshan Swain
              </h1>
              {/* TODO: Dark mode for name is not working. Removed the dark:text-white css. Fix it. */}
              <h2>Software Engineer</h2>
              <p>
                Building on Web, Mobile and Cloud. Blogs on System Design and
                Distributed Systems.
              </p>
            </div>
            <div>
              <Image
                alt="Roshan Swain"
                src="/avatar.jpg"
                width={180}
                height={180}
                sizes="30vw"
                priority
                className="rounded-full grayscale filter"
              />
            </div>
          </div>

          <h3>Featured Posts</h3>
          <div>
            {/* BlogCard */}
            {/* BlogCard */}
            {/* BlogCard */}
          </div>
          {/* <Link></Link> */}

          <h3>Learn Web, Mobile and Cloud</h3>
          <p>Build and deploy web, mobile and cloud applications.</p>

          {/* VideoCard */}
          {/* BlogCard */}
          {/* <Link></Link> */}
          <span className="h-16" />
          <div>Subscribe to News Letter.</div>
        </div>
      </Container>
    </Suspense>
  );
}
