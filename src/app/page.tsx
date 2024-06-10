import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="">
       <Link href='/to-do' className="border px-5 py-2 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 text-xl font-semibold">🫡 To-Do App</Link>
      </div>
    </main>
  );
}
