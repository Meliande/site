import Image from "next/image";
import Link from "next/link";
import GitHubLogo from "/public/github.png"
import LinkedinLogo from "/public/linkedin.png"
import TwitterLogo from "/public/twitter.png"
import EmailLogo from '/public/email.png'
import WhatsappLogo from '/public/whatsapp.png'


export default function Footer() {
    return (
        <div className="bg-zinc-500 px-52 text-black invisible xl:visible">
            <div className="flex justify-between text-center py-4">
                <div className="text-justify">
                    <span className="font-bold">
                        Rodrigo Meliande
                    </span>
                    <p className="pt-2 text-sm">Carioca criado na bahia, apaixonado por desenvolvimento web e mobile. Adepto do ecossistema Javascript</p>
                </div>
                <div className="flex-col">
                    <h1 className="pb-2 font-bold">SOCIALS</h1>
                    <div className="flex pl-8">
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
            </div>
            <div className="text-center font-mono py-4 border-t-2 border-black">
                © Copyright 2022. Made by
                    <Link
                        className="pl-2 text-white underline"
                        href="/"     
                    >
                        Rodrigo Meliande
                    </Link>
            </div>
        </div>
    )
}