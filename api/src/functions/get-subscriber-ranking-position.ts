import { redis } from "../redis/client";

interface GetSubscriberRankingPositionParams {
    subscriberId: string;
}

export async function getSubscriberRankingPosition(params: GetSubscriberRankingPositionParams) {
    const { subscriberId } = params;

    const rank = await redis.zrevrank('referral:ranking', subscriberId)

    if (rank === null) {
        return { position: null }
    }

    const position = rank + 1

    return { position }
}