import { redis } from "../redis/client";

interface AccessInviteLinkParams {
    subscriberId: string;
}

export async function accessInviteLink(params: AccessInviteLinkParams) {
    const { subscriberId } = params;
    await redis.hincrby("referral:access-count", subscriberId, 1);
}