import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container min-h-screen flex justify-center items-center flex-col">
      <h1 className="text-7xl mb-4 font-bold">404</h1>
      <p className="text-2xl">Страница не найдена</p>
      <Link href="/" className="text-2xl mt-4 px-4 py-2 bg-[--primary-color] text-white rounded-xl">На главную</Link>
    </div>
  );
}
