const SPLINE_EMBED_URL = "https://my.spline.design/9951u9cumiw2Ehj8/";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-16">
      <h1 className="mb-10 max-w-2xl text-center text-5xl font-bold tracking-tight sm:text-6xl">
        Welcome to the third dimension
      </h1>
      <div className="h-[70vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl">
        <iframe
          src={SPLINE_EMBED_URL}
          title="Spline 3D scene"
          className="h-full w-full"
          frameBorder={0}
        />
      </div>
    </main>
  );
}
