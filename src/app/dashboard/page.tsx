"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import EmotionChart from "@/components/EmotionChart";
import { EmotionPie } from "@/components/EmotionPie";
import { SummaryCard } from "@/components/SummaryCard";
import { EntitiesChart } from "@/components/EntitiesChart";
import { useResult } from "@/components/ResultContext";

const DashboardPage = () => {
  const router = useRouter();

  const { result } = useResult();

  if (!result) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 bg-slate-200 text-black">
      <div className="flex items-center justify-center mb-6">
        <button
          className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded mr-4"
          onClick={() => router.push("/")}
        >
          Back
        </button>
        <h1 className="text-2xl font-bold">Emotions Analyzed</h1>
      </div>
      <section className="flex flex-col items-center content-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 w-full h-max">
          <div className="w-full">
            <SummaryCard data={result} />
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="w-full overflow-x-scroll">
            <EntitiesChart data={result} />
            </div>
          </div>
 
        </div>
      </section>
      <section className="flex flex-col items-center content-center gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 content-center gap-4">
        <div className="w-full h-max gap-4 overflow-x-scroll">
          <EmotionPie data={result} />
        </div>
        <div className="w-min gap-4 overflow-x-scroll">
          <EmotionChart data={result} />
        </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
