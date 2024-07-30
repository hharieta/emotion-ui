import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function SummaryCard({ data }: { data: any }) {
  const usageData = [
    { name: "Text Units", value: data.usage.text_units },
    { name: "Text Characters", value: data.usage.text_characters },
    { name: "Features", value: data.usage.features },
  ];

  return (
    <div className="flex flex-col  content-center justify-between">
        <div className="h-min">
            <Card className="mb-4">
                <CardHeader className="items-center pb-0">
                    <h2 className="pb-4">Usage Summary</h2>
                </CardHeader>
                <CardContent>
                {usageData.map((item, index) => (
                    <div key={index}>
                    <strong>{item.name}:</strong> {item.value}
                    </div>
                ))}
                </CardContent>
            </Card>
        </div>
        <div className="h-min">
        <Card className="mb-4">
            <CardHeader className="items-center pb-0">
                <h2 className="pb-4">Document Sentiment</h2>
            </CardHeader>
            <CardContent>
                <div>
                    <strong>Score:</strong> {data.sentiment.document.score}
                </div>
                <div>
                    <strong>Mixed:</strong> {data.sentiment.document.mixed}
                </div>
                <div>
                    <strong>Label:</strong> {data.sentiment.document.label}
                </div>
            </CardContent>
        </Card>
        </div>
    </div>
  );
}
