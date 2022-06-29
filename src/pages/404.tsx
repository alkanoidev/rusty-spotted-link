import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const FourOhFour: NextPage = () => {
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
      <div className="p-4 bg-light dark:bg-dark flex items-center text-center flex-col gap-4 rounded-lg w-full sm:w-[500px]">
        <h1>Oh no :(</h1>
        <h2>This rusty spotted link does not exist</h2>
        <Link href="/">Go ahead and make one!</Link>
      </div>
    </div>
  );
};

export default FourOhFour;
