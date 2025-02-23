import Image from "next/image";

import medalCooperImg from "@/assets/medal-cooper.svg";
import medalSilverImg from "@/assets/medal-silver.svg";
import medalGoldImg from "@/assets/medal-gold.svg";
import { getRanking } from "@/http/api";

export async function Ranking() {

    const { ranking } = await getRanking();

    return (
        <main className="w-full max-w-[440px] space-y-5">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
                Ranking de indicações
            </h2>
            {ranking.map((subscriber, index) => (
                <article className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col
                justify-center gap-3 relative" key={subscriber.id}>
                    <span className="text-sm text-gray-300 leading-none">
                        <span>{index + 1}°</span> | {subscriber.name}
                    </span>
                    <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                        {subscriber.score}
                    </span>
                    <Image
                        src={
                            index + 1 === 1 && medalGoldImg ||
                            index + 1 === 2 && medalSilverImg ||
                            index + 1 === 3 && medalCooperImg
                        }
                        alt="Medalha do DevStage"
                        className="absolute top-0 right-8"
                    />
                </article>
            ))}
        </main>
    )
}