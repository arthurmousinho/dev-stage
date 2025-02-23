import { subscribeToEvent } from "../functions/subscribe-to-event";
import z from "zod";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";

export const subscribeToEventRoute: FastifyPluginAsyncZod = async (app) => {
    app.post(
        '/subscriptions',
        {
            schema: {
                summary: 'Subscribe to an event',
                tags: ['subscriptions'],
                body: z.object({
                    name: z.string(),
                    email: z.string().email(),
                    referrer: z.string().uuid().nullish(),
                }),
                response: {
                    201: z.object({
                        subscriberId: z.string().uuid(),
                    }),
                }
            }
        },
        async (request, reply) => {
            const { name, email, referrer } = request.body;

            const { subscriberId } = await subscribeToEvent({ 
                name, 
                email, 
                referrer
            });

            return reply.status(201).send({ subscriberId });
        }
    );
}