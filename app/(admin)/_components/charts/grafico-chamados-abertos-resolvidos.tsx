"use client"

import {TrendingUp} from "lucide-react"
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis} from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import React from "react";

const chartData = [
    {month: "T.I", abertos: 186, resolvidos: 150},
    {month: "Vendas", abertos: 305, resolvidos: 200},
    {month: "Suporte", abertos: 237, resolvidos: 120},
    {month: "Outros", abertos: 73, resolvidos: 190},
    {month: "Infra", abertos: 209, resolvidos: 130},
    {month: "R.H", abertos: 214, resolvidos: 140},
]

const chartConfig = {
    abertos: {
        label: "Abertos",
        color: "#CECDEE",
    },
    resolvidos: {
        label: "Resolvidos",
        color: "#5F5DF1",
    },
} satisfies ChartConfig

export function GraficoChsmadosAbertosResolvidosSegmento() {
    return (
        <Card className="border-none drop-shadow-md h-full w-full">
            <CardHeader className="text-center">
                <CardTitle>Número de chamados Abertos x Resolvidos por segmento</CardTitle>
                <CardDescription>Agosto - 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="w-full h-auto max-h-[300px]">
                    <ResponsiveContainer>
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false}/>
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="line"/>}
                            />
                            <Bar dataKey="abertos" fill="#CECDEE" radius={4}/>
                            <Bar dataKey="resolvidos" fill="#5F5DF1" radius={4}/>
                        </BarChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm px-2">
                <div className="flex gap-2 font-medium text-center leading-none">
                    <p className={"flex items-center"}>Número de chamados concluídos aumentou em 3.4% <TrendingUp className="h-4 w-4"/></p>
                </div>
                <div className="leading-none text-muted-foreground">
                    Porcentagem baseada nos últimos 3 meses
                </div>
            </CardFooter>
        </Card>
    )
}
