import Link from "next/link";
import { Layout } from "./Layout";

export function Footer() {
    return(
        <footer className="w-full border-t-2 border-solid border-black font-medium text-lg">
            <Layout className="py-8">
                <div className="flex items-center justify-between">
                    <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                    <Link href='/'>Rodrigo Meliande</Link>
                    <Link href='/'>Contact me</Link>
                </div>
            </Layout>
        </footer>
    )
}