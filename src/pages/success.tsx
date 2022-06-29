import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, withRouter } from "next/router";
import Logo from "../assets/logo.svg";
import Image from "next/image";

const Success: NextPage = ({}) => {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (
      typeof router.query.url === "string" &&
      typeof router.query.slug === "string"
    ) {
      setUrl(router.query.url);
      setSlug(router.query.slug);
    }
  }, []);

  return (
    <div className="h-full w-full flex flex-col gap-5 items-center pt-44 justify-center">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/root/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/root/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/root/favicon-16x16.png"
        />
        <link rel="icon" href="/root/favicon.ico" />
        <link rel="manifest" href="/root/manifest.json" />
        <link rel="icon" href="/root/favicon.png" />

        <title>Rusty Spotted Link</title>
      </Head>
      <Image src={Logo} width={70} height={70} />
      <p className="text-center text-dark dark:text-light text-xl">
        Your Rusty Spotted Link for <Link href={url}>{url.toString()}</Link> was
        created! <br />
        You can access it at{" "}
        <Link href={router.basePath + "/" + slug}>
          {router.basePath + "/" + slug}
        </Link>
      </p>
      <h1 className="text-8xl">🎉</h1>
    </div>
  );
};

export default withRouter(Success);
