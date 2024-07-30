"use client"

import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export function EmotionPie({ data }: { data: any }) {

  const chartConfig = {
    emotions: {
      label: "Emotions",
    },
    joy: {
      label: "Joy",
      color: "hsl(var(--chart-1))",
    },
    fear: {
      label: "Fear",
      color: "hsl(var(--chart-2))",
    },
    sadness: {
      label: "Sadness",
      color: "hsl(var(--chart-3))",
    },
    disgust: {
      label: "Disgust",
      color: "hsl(var(--chart-4))",
    },
    anger: {
      label: "Anger",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig

  const emotionColors: { [key: string]: string } = {
    "disgust": "#14ba2d", 
    "joy": "#f2c40c", 
    "sadness": "#0c78f2", 
    "fear": "#9a0cf2", 
    "anger": "#f2420c"}

  const emotionData = Object.keys(data.emotion.document.emotion).map(key => ({
    name: key,
    value: Number(data.emotion.document.emotion[key].toFixed(2)),
    fill: emotionColors[key],
  }))

  return (
    <Card>
      <CardHeader className="items-center pb-0">
        <h2 className="pb-4">Document Emotions</h2>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <ChartContainer
          className="mx-auto aspect-square max-h-[300px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
          config={chartConfig}
        >
          <PieChart width={500} height={300}>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={emotionData} dataKey="value" label nameKey="name" />
            <ChartLegend
              content={<ChartLegendContent nameKey="name" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
  )
}
