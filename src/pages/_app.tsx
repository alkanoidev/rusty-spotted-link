import "../styles/globals.css";
import type { AppProps } from "next/app";
import { motion } from "framer-motion";
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      key={router.route}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear", stiffness: 500 }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};
export default MyApp;
