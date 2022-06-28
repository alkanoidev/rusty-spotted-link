import type { NextPage } from "next";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="h-full w-full flex flex-col gap-5 items-center pt-44 justify-center">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./root/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./root/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./root/favicon-16x16.png"
        />
        <link rel="icon" href="./root/favicon.ico" />
        <link rel="manifest" href="./root/manifest.json" />
        <link rel="icon" href="./root/favicon.png" />

        <title>Rusty Spotted Link</title>
      </Head>

      <Image src={Logo} width={70} height={70} />
      <h1>Rusty Spotted Link</h1>
      <form className="p-4 flex flex-col gap-4 rounded-lg w-full sm:w-[400px]">
        <p className="flex flex-col gap-2">
          <label
            className="text-dark dark:text-light text-base font-semibold"
            htmlFor="url"
          >
            Enter a long URL to shorten it:
          </label>
          <input
            className="rounded py-3 px-2 outline-none transition hover:outline-none hover:ring-1 hover:ring-primary
                    bg-off-white dark:bg-off-dark text-dark dark:text-light
                      focus:ring-1 focus:ring-primary"
            type="text"
            name="url"
            id="url"
            required
          />
        </p>
        <p className="flex flex-col gap-2">
          <label
            className="text-dark dark:text-light text-base font-semibold"
            htmlFor="url"
          >
            Customize your link:
          </label>
          <input
            className="rounded py-3 px-2 outline-none transition hover:outline-none hover:ring-1 hover:ring-primary
                     first:bg-off-white dark:bg-off-dark text-dark dark:text-light
                       focus:ring-1 focus:ring-primary"
            type="text"
            name="url"
            id="url"
            required
          />
        </p>
        <p className="flex flex-col gap-2">
          <button
            className="transition w-full border relative border-primary rounded text-lg text-dark dark:text-light py-2 
                       z-0 after:w-full after:h-full after:bg-primary after:top-0 after:left-0 after:absolute 
                       after:z-[-1] after:opacity-50 after:transition hover:after:opacity-80 font-semibold"
          >
            Make a Short Link
          </button>
        </p>
      </form>
    </div>
  );
};

export default Home;
