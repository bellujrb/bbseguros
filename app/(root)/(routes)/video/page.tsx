"use client";

import { Eye2SVG, EyeSVG } from "@/svgs/svgs";

const VideoPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-full relative -mt-20">
      <iframe
        src="https://www.youtube.com/embed/1TN4x9MU1eo?si=IV1l6puwtxDNBrL8"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; gyroscope"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute aspect-video z-40 w-80 md:w-144 lg:w-256 border-2 border-black bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 translate-x-[-6px] translate-y-[-6px] rounded-md shadow-[6px_6px_0px_black] hover:translate-x-[0px] hover:translate-y-[0px] hover:shadow-none"
      ></iframe>
      <div
        className="absolute transform z-10 hidden xl:block rotate-12"
        style={{ top: "5%", left: "85%" }}
      >
        <EyeSVG />
      </div>
      <div
        className="absolute transform z-10 hidden xl:block rotate-12"
        style={{ top: "35%", left: "80%" }}
      >
        <Eye2SVG />
      </div>
      <div
        className="absolute transform z-10 hidden xl:block"
        style={{ top: "55%", left: "90%" }}
      >
        <EyeSVG />
      </div>
      <div
        className="absolute transform z-10 hidden xl:block -rotate-12"
        style={{ top: "81%", left: "81%" }}
      >
        <Eye2SVG />
      </div>
      


      <div
        className="absolute transform z-10 hidden xl:block -rotate-12"
        style={{ top: "5%", left: "7%" }}
      >
        <Eye2SVG />
      </div>
      <div
        className="absolute transform z-10 hidden xl:block rotate-12"
        style={{ top: "35%", left: "11%" }}
      >
        <EyeSVG />
      </div>
      <div
        className="absolute transform z-10 hidden xl:block"
        style={{ top: "55%", left: "5%" }}
      >
        <Eye2SVG />
      </div>
      <div
        className="absolute transform z-10 hidden xl:block -rotate-12"
        style={{ top: "81%", left: "11%" }}
      >
        <EyeSVG />
      </div>
    </div>
  );
};

export default VideoPage;
