import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-10">
      
      <h1 className="text-5xl font-bold">
        Hello Next JS Application
      </h1>

      <p className="mt-5 text-xl">
        This is Home Page
      </p>

      <Link href="/myapp">
        <button className="bg-green-300 border-2 px-4 py-2 mt-6 rounded">
          Go To MyApp Page
        </button>
      </Link>

    </div>
  );
}
