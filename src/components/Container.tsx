import { useRouter } from "next/router";
import NextLink from "next/link";
import cn from "classnames";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";

const NavItem = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink
      href={href}
      className={cn(
        isActive
          ? "font-semibold text-gray-800 dark:text-gray-200"
          : "font-normal text-gray-600 dark:text-gray-400",
        "hidden rounded-lg p-1 transition-all hover:bg-gray-200 dark:hover:bg-gray-800 sm:px-3 sm:py-2 md:inline-block"
      )}
    >
      <span className="capsize">{text}</span>
    </NextLink>
  );
};

const Container = (props) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Roshan Swain – Software Engineer, Writer.",
    description: `Building on Web, Mobile and Cloud. Blogs on System Design and Distributed Systems.`,
    image: "https://roshanswain.com/static/images/Roshan_Swain_Banner.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        {/* SEO Stuff going on here */}
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta
          property="og:url"
          content={`https://roshanswain.com${router.asPath}`}
        />
        <link rel="canonical" href="https://roshanswain.com${router.asPath}" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Roshan Swain" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@_SnRoshan" />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:image" content={meta.image} />
        <meta property="twitter:description" content={meta.description} />
        {meta.data && (
          <meta property="article:published_time" content={meta.data} />
        )}
      </Head>

      <div>
        <nav>
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
          <div>
            <MobileMenu />
            <NavItem href="/" text="Home" />
            <NavItem href="/guestbook" text="Guestbook" />
            <NavItem href="/dashboard" text="Dashboard" />
            <NavItem href="/blog" text="Blog" />
            <NavItem href="/snippets" text="Snippet" />
          </div>
          <button>
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-5 w-5 text-gray-800 dark:text-gray-200"
              >
                {resolvedTheme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </nav>
      </div>
      <main>
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Container;
