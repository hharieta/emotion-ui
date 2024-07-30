import React from "react";
import { Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function EntitiesChart({ data }: { data: any }) {

  const sentimentData = data.entities.map((entity: any) => ({
    name: entity.text,
    score: parseFloat(entity.sentiment.score.toFixed(2)),
  }));

  return (
    <div>
      <Card>
        <CardHeader className="items-center pb-0">
          <h2 className="pb-4">Entities Sentiment</h2>
        </CardHeader>
        <CardContent>
          <BarChart width={600} height={250} data={sentimentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="score" fill="#82ca9d" />
          </BarChart>
        </CardContent>
      </Card>
    </div>
  );
}
