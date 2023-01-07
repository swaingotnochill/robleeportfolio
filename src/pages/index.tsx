import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Roshan Swain</h1>
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
  );
};

export default Home;
