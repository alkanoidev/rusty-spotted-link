import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../components/Button";

const Home: NextPage = () => {
  const router = useRouter();
  const urlRef = useRef<HTMLInputElement>(null);
  const slugRef = useRef<HTMLInputElement>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setTheme(
      window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post("/api/new-url", {
        url: urlRef.current?.value,
        slug: slugRef.current?.value,
      })
      .then((res) => {
        router.push(
          {
            pathname: "/success",
            query: { url: urlRef.current?.value, slug: slugRef.current?.value },
          },
          "/success"
        );
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className="h-full w-full flex flex-col gap-5 items-center pt-44 justify-center">
      <Head>
        <title>Rusty Spotted Link</title>
      </Head>

      <form
        method="post"
        onSubmit={handleSubmit}
        className="p-4 bg-light dark:bg-dark flex flex-col gap-4 rounded-lg w-full sm:w-[500px]"
      >
        <h1 className="text-center mb-3">Rusty Spotted Link</h1>
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
            placeholder="https://..."
            ref={urlRef}
          />
        </p>
        <p className="flex flex-col gap-2">
          <label
            className="text-dark dark:text-light text-base font-semibold"
            htmlFor="slug"
          >
            Customize your link:
          </label>
          <input
            className="rounded py-3 px-2 outline-none transition hover:outline-none hover:ring-1 hover:ring-primary
                     first:bg-off-white dark:bg-off-dark text-dark dark:text-light
                       focus:ring-1 focus:ring-primary"
            type="text"
            name="slug"
            id="slug"
            placeholder="my-path"
            ref={slugRef}
          />
        </p>
        <p className="flex flex-col gap-2">
          <Button>Make a Short Link</Button>
        </p>
      </form>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
        toastClassName={
          theme === "light"
            ? "border-2 border-off-white"
            : "border-2 border-off-dark"
        }
      />
    </div>
  );
};

export default Home;
