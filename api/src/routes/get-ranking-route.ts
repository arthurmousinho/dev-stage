import z from "zod";
import { getRanking } from "../functions/get-ranking";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";

export const getRankingRoute: FastifyPluginAsyncZod = async (app) => {
    app.get(
        '/ranking',
        {
            schema: {
                summary: 'Get ranking',
                tags: ['referral'],
                response: {
                    200: z.object({
                        ranking: z.array(
                            z.object({
                                id: z.string(),
                                name: z.string(),
                                score: z.number()
                            })
                        )
                    }),
                }
            }
        },
        async (request, reply) => {
            const { ranking } = await getRanking();
            return reply.status(200).send({ ranking });
        }
    );
}