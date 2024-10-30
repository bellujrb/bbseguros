"use client"

import * as React from "react"

import {Pie, PieChart, } from "recharts"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {demandas} from "@/mocks/contracts";
import {filtrarDemandasPorRework} from "../actions/rework";
import {TrendingDown} from "lucide-react"
import {Label} from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
    N1: {
        label: "N1",
        color: "#fbe300",
    },
    N2: {
        label: "N2",
        color: "#260c09 ",
    },
    N3: {
        label: "N3",
        color: "#D9014B",
    },
} satisfies ChartConfig

export function GraficoRetrabalho() {

    const reworkData = filtrarDemandasPorRework(demandas);

    const chartData = [
        {complexidade: "N1", horas: 0, fill: "#fbe300"},
        {complexidade: "N2", horas: 0, fill: "#D9014B"},
        {complexidade: "N3", horas: 0, fill: "#260c09 "},
    ]

    const totalRework = reworkData.reduce((sum, entry) => sum + entry.value, 0);

    chartData.forEach((chartItem) => {
        const reworkItem = reworkData.find((item) => item.name === chartItem.complexidade);
        if (reworkItem) {
            chartItem.horas = reworkItem.value;
        }
    });

    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle className={"text-center"}>Horas Retrabalhadas por Complexidade</CardTitle>
                <CardDescription>Setembro - 2024</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel/>}
                        />
                        <Pie
                            data={chartData}
                            dataKey="horas"
                            nameKey="complexidade"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({viewBox}) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalRework.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Horas
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Horas retrabalhadas caíram em 5.2% <TrendingDown className="h-4 w-4"/>
                </div>
                <div className="leading-none text-muted-foreground">
                    Horas retrabalhadas em Setembro
                </div>
            </CardFooter>
        </Card>
    )
}