"use client"
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="background w-[100%] h-[100vh] flex flex-col justify-center items-center gap-8">
      <p className="text-white text-[150px] font-bold ">Articles</p>
      <Link href={"/index1"}> <button className="btn">Start</button></Link>
    </div>

    </>
  );
}
