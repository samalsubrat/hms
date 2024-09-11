import Image from "next/image";
import Ripple from "@/components/magicui/ripple";

export default function Home() {
  return (
    <>
      {/* <Image src="/landingpage.png" alt="landing page" width={3000} height={9000} className="p-0 m-0 w-full"/> */}
      <div className="p-0 m-0">
        <div className="relative flex h-[95vh] w-full flex-col items-center justify-center overflow-hidden bg-green-main space-y-2">
          <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
            Explore Modern
          </p>
          <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
            Health Management with
          </p>
          <p className="z-10 whitespace-pre-wrap text-center text-7xl font-medium tracking-tighter text-white">
            AI-driven Solutions
          </p>
          <Ripple className="opacity-70" />
        </div>
        <div className="bg-[#D4E4DA] rounded-xl p-10 absolute bottom-0 w-full"></div>
      </div>
    </>
  );
}
