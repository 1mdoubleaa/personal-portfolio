import Image from "next/image";

export default function Home() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col items-center justify-center gap-6 px-6 text-center">
      <Image
        src="/me.jpg"   // add to /public
        alt="Portrait of Muhammad Anas Anwar"
        width={220}
        height={220}
        priority
        className="rounded-full shadow-lg"
      />

      <h1 className="text-4xl font-bold sm:text-6xl">Muhammad Anas Anwar</h1>
      <p className="max-w-xl text-base sm:text-lg">
        Full-stack developer • cloud-curious • security-minded. I craft robust,
        accessible software and love turning complex ideas into delightful
        products.
      </p>
    </section>
  );
}
