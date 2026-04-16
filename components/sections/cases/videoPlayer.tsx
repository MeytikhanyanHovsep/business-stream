"use client";

import { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    const isHoverSupported = window.matchMedia("(hover: hover)").matches;

    if (isHovered && isHoverSupported) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isHovered]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="aspect-video w-full bg-[#1A1A1A] rounded overflow-hidden relative pointer-events-auto md:hover:scale-95 transition-all duration-300">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="w-full h-full object-cover rounded"
          loop
          muted
          playsInline
          preload="metadata"
        />
      </div>

      <div className="rounded-tl transition-opacity md:group-hover:opacity-100 opacity-0 border-white border-t-3 border-l-3 absolute top-0 left-0 w-[20px] h-[20px]" />
      <div className="rounded-tr transition-opacity md:group-hover:opacity-100 opacity-0 border-white border-t-3 border-r-3 absolute top-0 right-0 w-[20px] h-[20px]" />
      <div className="rounded-bl transition-opacity md:group-hover:opacity-100 opacity-0 border-white border-b-3 border-l-3 absolute bottom-0 left-0 w-[20px] h-[20px]" />
      <div className="rounded-br transition-opacity md:group-hover:opacity-100 opacity-0 border-white border-b-3 border-r-3 absolute bottom-0 right-0 w-[20px] h-[20px]" />
    </div>
  );
};

export default VideoPlayer;
