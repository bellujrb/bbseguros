"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis } from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
    { date: "2024-04-23", mamou: 70, naoMamou: 10 },
    { date: "2024-04-24", mamou: 75, naoMamou: 8 },
    { date: "2024-04-25", mamou: 73, naoMamou: 12 },
    { date: "2024-04-26", mamou: 65, naoMamou: 18 },
    { date: "2024-04-27", mamou: 80, naoMamou: 5 },
    { date: "2024-04-28", mamou: 78, naoMamou: 7 },
    { date: "2024-04-29", mamou: 72, naoMamou: 10 },
    { date: "2024-04-30", mamou: 85, naoMamou: 3 },
    { date: "2024-05-01", mamou: 70, naoMamou: 15 },
    { date: "2024-05-02", mamou: 74, naoMamou: 12 },
    // Continue com mais dados conforme necessário
];

const chartConfig = {
    mamou: {
        label: "Leitos que Amamentou",
        color: "#bc9b89",
    },
    naoMamou: {
        label: "Leitos que Não Amamentou",
        color: "#260c09 ",
    },
} satisfies ChartConfig;

const tickFormatter = (value: string) => {
    const date = new Date(value);
    return date.toLocaleDateString("pt-br", {
        month: "short",
        day: "numeric",
    });
};

const labelFormatter = (value: string) => {
    return new Date(value).toLocaleDateString("pt-br", {
        month: "short",
        day: "numeric",
    });
};

export function GraficoLeitosMamouNaoMamou() {
    return (
        <Card className="border-none drop-shadow-md h-full w-full bg-white">
            <CardHeader className="flex flex-col items-center gap-2 space-y-0 border-b py-5">
                <div className="grid gap-1 text-center">
                    <CardTitle>Controle de Leitos: Amamentou vs Não Amamentou</CardTitle>
                    <CardDescription>Acompanhamento de Abril a Junho de 2024</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="pt-4">
                <ChartContainer config={chartConfig} className="w-full h-full max-h-[290px] aspect-square">
                    <ResponsiveContainer>
                        <AreaChart data={chartData}>
                            <defs>
                                <linearGradient id="fillnaoMamou" x1="1" y1="1" x2="1" y2="1">
                                    <stop offset="5%" stopColor="#bc9b89" stopOpacity={1} /> {/* Marrom claro */}
                                    <stop offset="70%" stopColor="#bc9b89" stopOpacity={1} /> {/* Marrom claro */}
                                </linearGradient>
                                <linearGradient id="fillmamou" x1="1" y1="1" x2="1" y2="1">
                                    <stop offset="5%" stopColor="#260c09" stopOpacity={1} /> {/* Marrom escuro */}
                                    <stop offset="70%" stopColor="#260c09" stopOpacity={0.8} /> {/* Marrom escuro */}
                                </linearGradient>
                            </defs>

                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="date"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                minTickGap={32}
                                tickFormatter={tickFormatter}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent labelFormatter={labelFormatter} indicator="dot" />}
                            />
                            <Area dataKey="mamou" type="natural" fill="url(#fillmamou)" stroke="var(--color-mamou)" stackId="a" />
                            <Area dataKey="naoMamou" type="natural" fill="url(#fillnaoMamou)" stroke="var(--color-naoMamou)" stackId="a" />
                            <ChartLegend content={<ChartLegendContent />} />
                        </AreaChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}

GraficoLeitosMamouNaoMamou.displayName = "GraficoLeitosMamouNaoMamou";
