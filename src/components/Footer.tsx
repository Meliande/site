import Image from "next/image";
import Link from "next/link";
import GitHubLogo from "/public/github.png"
import LinkedinLogo from "/public/linkedin.png"
import TwitterLogo from "/public/twitter.png"
import EmailLogo from '/public/email.png'
import WhatsappLogo from '/public/whatsapp.png'


export default function Footer() {
    return (
        <div className="flex justify-center object-center bg-zinc-500 font-mono text-sm text-black w-screen h-10 invisible xl:visible">
            <div className="pt-3">
                © Copyright 2022. Made by 
                <Link
                    className="pl-2"
                    href="/"     
                >
                    Rodrigo Meliande
                </Link>
            </div>
            <div className="flex pt-2 pl-8">
                <a
                    className="px-2 hover:scale-110"
                    href="https://github.com/Meliande"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        src={GitHubLogo}
                        alt=""
                        width={25}
                        height={25}
                    />
                </a>
                <a
                    className="px-2 hover:scale-110"
                    href="https://www.linkedin.com/in/rodrigo-meliande-081433128"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        src={LinkedinLogo}
                        alt=""
                        width={25}
                        height={25}
                    />
                </a>
                <a
                    className="px-2 hover:scale-110"
                    href="https://twitter.com/MeliandeRodrigo"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        src={TwitterLogo}
                        alt=""
                        width={25}
                        height={25}
                    />
                </a>
                <a
                    className="px-2 hover:scale-110"
                    href="mailto: rodrigomeliande@msn.com"
                >
                    <Image
                        src={EmailLogo}
                        alt=""
                        width={25}
                        height={25}
                    />
                </a>
                <a
                    className="px-2 hover:scale-110"
                    href="https://api.whatsapp.com/send?phone=5571992201640"
                >
                    <Image
                        src={WhatsappLogo}
                        alt=""
                        width={25}
                        height={25}
                    />
                </a>
            </div>
        </div>
    )
}