import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return ( 
    <footer className="w-full border-t-2 border-solid border-black font-medium text-lg dark:text-white dark:border-white sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 lg:gap-3">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Built with <span className="text-pink-800 dark:text-emerald-500 text-2xl px-1">&#9825;</span>
          by&nbsp;
          <Link href='/' className="underline underline-offset-2">Rodrigo Meliande</Link>
        </div>
        <Link href='/' className="underline underline-offset-2">Check my projects</Link>
      </Layout>
    </footer>
   );
}
 
export default Footer;