import { getSubscriberInviteClicks, getSubscriberInviteCount, getSubscriberRankingPosition } from "@/http/api";
import {
    MousePointerClick,
    Medal,
    BadgeCheck
} from "lucide-react";

type StatsProps = {
    subscriberId: string;
}

export async function Stats(props: StatsProps) {

    const { count: accessCount } = await getSubscriberInviteClicks(props.subscriberId);
    const { count: inviteCount } = await getSubscriberInviteCount(props.subscriberId);
    const { position: rankingPosition } = await getSubscriberRankingPosition(props.subscriberId);

    return (
        <div className="grid gap-3 md:grid-cols-3">
            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex
        flex-col items-center justify-center gap-1 rounded-xl">
                <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                    {accessCount}
                </span>
                <span className="text-sm text-gray-300 leading-none text-center">
                    Acessos ao link
                </span>
                <MousePointerClick
                    size={20}
                    className="text-purple absolute top-3 left-3"
                />
            </div>
            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex
        flex-col items-center justify-center gap-1 rounded-xl">
                <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                    {inviteCount}
                </span>
                <span className="text-sm text-gray-300 leading-none text-center">
                    Inscrições feitas
                </span>
                <BadgeCheck
                    size={20}
                    className="text-purple absolute top-3 left-3"
                />
            </div>
            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex
        flex-col items-center justify-center gap-1 rounded-xl">
                <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                    {rankingPosition ? `${rankingPosition}°` : '-'}
                </span>
                <span className="text-sm text-gray-300 leading-none text-center">
                    Posição no ranking
                </span>
                <Medal
                    size={20}
                    className="text-purple absolute top-3 left-3"
                />
            </div>
        </div>
    )
}