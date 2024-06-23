import Image from "next/image";
import Profile from "./_components/Profile";
import Bio from "./_components/Bio";
import Personality from "./_components/Personality";
import Education from "./_components/Education";
import Skill from "./_components/Skill";
import Goals from "./_components/Goals";
import Portfolio from "./_components/Portfolio";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto pt-4">
      <div className="flex gap-4 justify-end pb-4">
        <div>

        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            
          <Link href="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Profile</Link>
          <Link href="/blog" className="rounded-md px-3 py-2 text-sm font-medium text-neutral-950 hover:bg-gray-700 hover:text-white flex">Blog&nbsp;&nbsp;
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
             </span>
          </Link>
            
          </div>
        </div>
        </div>
      </div>
      <div className="grid grid-flow-col grid-cols-8 gap-4">
        <div className="col-span-2">
          <Profile />
        </div>
        <div className="grid col-span-6 grid-cols-3 xl:grid-cols-6 gap-4">
          <div className="grid col-span-3 gap-4">
            <Bio />
            <Personality />
            <Goals />
          </div>
          <div className="grid col-span-3 gap-4">
            <Skill />
            <Education />
            <Portfolio />
          </div>
        </div>
      </div>
    </div>
  );
}
