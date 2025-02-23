import { eq } from "drizzle-orm";
import { db } from "../drizzle/client";
import { subscriptions } from "../drizzle/schema/subscriptions";
import { redis } from "../redis/client";

interface SubscribeToEventParams {
    name: string;
    email: string;
    referrer?: string | null;
}

export async function subscribeToEvent(params: SubscribeToEventParams) {
    const { name, email, referrer } = params;

    const results = await db
        .select()
        .from(subscriptions)
        .where(eq(subscriptions.email, email))

    if (results.length > 0) {
        return { subscriberId: results[0].id }
    }

    const [{ subscriberId }] = await db
        .insert(subscriptions)
        .values({
            name,
            email,
        })
        .returning({
            subscriberId: subscriptions.id,
        })

    if (referrer) {
        await redis.zincrby('referral:ranking', 1, referrer)
    }

    return { subscriberId }
}