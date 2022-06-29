import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type Props = {
  host: string | null;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => ({
  props: { host: context.req.headers.host || null },
});

const Success: NextPage<Props> = ({ host }) => {
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
        <title>Rusty Spotted Link</title>
      </Head>

      <p className="text-center text-dark dark:text-light text-xl">
        Your Rusty Spotted Link was created!
      </p>
      <h1 className="text-8xl">🎉</h1>
      <div className="p-4 flex text-dark dark:text-light flex-col gap-4 rounded-lg w-full sm:w-[400px]">
        <label>Your long url:</label>
        <div
          className="rounded w-full overflow-x-auto flex py-3 px-2
                    bg-off-white dark:bg-off-dark text-dark dark:text-light"
        >
          <Link href={url}>{url.toString()}</Link>{" "}
        </div>

        <label>Your rusty spotted link:</label>

        <div
          className="rounded w-full overflow-x-auto flex py-3 px-2
                    bg-off-white dark:bg-off-dark text-dark dark:text-light"
        >
          <Link href={host + "/" + slug}>{host + "/" + slug}</Link>
        </div>

        <button
          className="transition capitalize w-full border relative border-primary rounded text-lg text-dark dark:text-light py-2 
                       z-0 after:w-full after:h-full after:bg-primary after:top-0 after:left-0 after:absolute 
                       after:z-[-1] after:opacity-50 after:transition hover:after:opacity-80 font-semibold"
          onClick={() => {
            router.replace("/");
          }}
        >
          Make another short link
        </button>
      </div>
    </div>
  );
};

export default Success;
