import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-zinc-300">
      <div className="container p-4">
        <Link className="text-lg font-semibold" href="/">
          Home
        </Link>
      </div>
    </header>
  );
}
