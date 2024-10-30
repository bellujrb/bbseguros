import { GithubIcon , Linkedin } from "lucide-react";
import React from "react";
// noinspection ES6PreferShortImport
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  image: string;
  name: string;
  description: string;
  github?: string;
  linkedin?: string;
  color: string
}

export const TeamCard = ({
  image,
  name,
  description,
  github,
  linkedin,
  color
}: CardProps) => {
  return (
    <div className="relative h-[300px] w-full group">
      <div className={"flex h-1/2 flex-col justify-center p-6"} style={{ backgroundColor: color}}>
        <h2 className="mb-2 text-xl font-semibold text-white">{name}</h2>
        <p className="text-sm font-semibold text-slate-300">{description}</p>
      </div>
      <div className="absolute inset-0 z-10 bg-slate-200 transition-all ease-in-out duration-300 group-hover:right-1/2 group-hover:top-1/2">
        <Image className="object-cover w-full h-full" src={image} alt={name} fill/>
      </div>
      <div className="absolute bottom-0 right-0 z-0 grid h-1/2 w-1/2 place-content-center bg-white text-black">
        <div className="p-4 grid grid-cols-2 gap-x-4 gap-y-1">
          <Button variant={"outline"} className="col-span-2">
            <Link href={github ? `https://github.com/${github}` : "#"}>
              <GithubIcon/>
            </Link>
          </Button>
          <Button variant={"outline"} className="col-span-2">
            <Link href={linkedin ? linkedin : "#"}>
              <Linkedin />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
