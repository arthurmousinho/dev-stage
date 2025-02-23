'use client'

import { Button } from "@/components/button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { ArrowRight, Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { subscribeToEvent } from "@/http/api";
import { useRouter, useSearchParams } from "next/navigation";

const subscriptionSchema = z.object({
    name: z.string().min(2, { message: "O nome precisa de no mínimo 2 caracteres" }),
    email: z.string().email({ message: "Digite um e-mail válido" })
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {

    const router = useRouter();
    const searchParams = useSearchParams();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SubscriptionSchema>({
        resolver: zodResolver(subscriptionSchema)
    });

    async function handleSubscribe(data: SubscriptionSchema) {
        const { subscriberId } = await subscribeToEvent({
            email: data.email,
            name: data.name,
            referrer: searchParams.get("referrer")
        });
        router.push(`/invite/${subscriberId}`);
    }

    return (
        <form
            onSubmit={handleSubmit(handleSubscribe)}
            className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
        >
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
                Inscrição
            </h2>
            <div className="space-y-3">
                <div className="space-y-2">
                    <InputRoot>
                        <InputIcon>
                            <User />
                        </InputIcon>
                        <InputField
                            type="text"
                            placeholder="Nome completo"
                            {...register("name")}
                        />
                    </InputRoot>
                    {errors.name && (
                        <p className="text-danger text-sm">
                            {errors.name.message}
                        </p>
                    )}
                </div>
                <div className="space-y-2">
                    <InputRoot>
                        <InputIcon>
                            <Mail />
                        </InputIcon>
                        <InputField
                            type="email"
                            placeholder="E-mail"
                            {...register("email")}
                        />
                    </InputRoot>
                    {errors.email && (
                        <p className="text-danger text-sm">
                            {errors.email.message}
                        </p>
                    )}
                </div>
            </div>
            <Button type="submit">
                Confirmar
                <ArrowRight />
            </Button>
        </form>
    )
}