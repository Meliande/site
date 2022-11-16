import Image from "next/image";
import NlwCopa from "public/nlw-copa.png"
import NlwEsports from "public/nlw-esports.png"
import Bolsis from "public/bolsis.png"

export default function Projects() {

    return(
        <div className="text-center grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 h-full">
            <div>
                <Image
                    src={NlwCopa}
                    alt=""
                />
            </div>
            <div>
                <Image
                    src={NlwEsports}
                    alt=""
                />
            </div>
            <div>
                <Image
                    src={Bolsis}
                    alt=""
                />
            </div>
        </div>
    )
}