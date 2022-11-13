import Image from "next/image";
import GitHubLogo from "/public/github.png"
import LinkedinLogo from "/public/linkedin.png"
import TwitterLogo from "/public/twitter.png"
import EmailLogo from '/public/email.png'
import WhatsappLogo from '/public/whatsapp.png'

export default function Sidebar() {
    return (
        <aside className=" bg-[#546A76] p-3 absolute top-1/4 rounded-full invisible md:visible">  
            <a
                target="_blank"
                className=""
                href="https://github.com/Meliande"
                rel="noreferrer"
            >
                <Image
                    className="py-2 rounded-full hover:scale-125"
                    src={GitHubLogo}
                    alt=""
                    width={50}
                    height={50}
                />
            </a>     
            <a
                target="_blank"
                className=""
                href="https://www.linkedin.com/in/rodrigo-meliande-081433128"
                rel="noreferrer"
            >
                <Image
                    className="py-2 rounded-full hover:scale-125"
                    src={LinkedinLogo}
                    alt=""
                    width={50}
                    height={50}
                />
            </a>     
            <a
                target="_blank"
                className=""
                href="https://twitter.com/MeliandeRodrigo"
                rel="noreferrer"
            >
                <Image
                    className="py-2 hover:scale-125"
                    src={TwitterLogo}
                    alt=""
                    width={50}
                    height={50}
                />
            </a>     
            <a
                className=""
                href="mailto: rodrigomeliande@msn.com"
            >
                <Image
                    className="py-2 hover:scale-125"
                    src={EmailLogo}
                    alt=""
                    width={50}
                    height={50}
                />
            </a>     
            <a
                target="_blank"
                className=""
                href="https://api.whatsapp.com/send?phone=5571992201640"
                rel="noreferrer"
            >
                <Image
                    className="py-2 hover:scale-125"
                    src={WhatsappLogo}
                    alt=""
                    width={50}
                    height={50}
                />
            </a>  
        </aside>
    )
}

