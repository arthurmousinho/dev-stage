import { redis } from "../redis/client";

interface GetSubscriberInviteParams {
    subscriberId: string;
}

export async function getSubscriberInviteClicks(params: GetSubscriberInviteParams) {
    const { subscriberId } = params;

    const accessCount = await redis.hget('referral:access-count', subscriberId)

    return { count: accessCount ? Number.parseInt(accessCount) : 0 }
}