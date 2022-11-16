import Image from "next/image";
import NlwCopa from "public/nlw-copa.png"
import NlwEsports from "public/nlw-esports.png"
import Bolsis from "public/bolsis.png"

export default function Projects() {

    return(
        <div className="text-center grid grid-cols-1 sm:grid-cols-1 overflow-hidden">
            <div className="md:flex">
                <Image
                    src={NlwCopa}
                    alt=""
                />
                <div className="lg:pt-48">
                    <h1 className="font-bold">NLW-Copa</h1>
                    <p>Descrição: </p>
                    <div>
                        <h1>Stacks</h1>

                    </div>
                </div>
            </div>
            <div className="md:flex">
                <Image
                    src={NlwEsports}
                    alt=""
                />
                <div className="lg:pt-48">
                    <h1 className="font-bold">NLW-Copa</h1>
                    <p>Descrição: </p>
                    <div>
                        <h1>Stacks</h1>

                    </div>
                </div>
            </div>
            <div className="md:flex">
                <Image
                    src={Bolsis}
                    alt=""
                />
                <div className="lg:pt-48">
                    <h1 className="font-bold">NLW-Copa</h1>
                    <p>Descrição: </p>
                    <div>
                        <h1>Stacks</h1>

                    </div>
                </div>
            </div>
        </div>
    )
}