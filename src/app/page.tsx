import ApiConsumer from "@/components/ApiConsumer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col content-center items-center justify-center p-24 bg-white text-black">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <ApiConsumer/>
      </div>
    </main>
  );
}
