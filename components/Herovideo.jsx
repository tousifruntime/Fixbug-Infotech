"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="Fixbug Infotech software company and training institute in Ponda, Goa - background showreel"
      className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
    >
      <source
        src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/creative_studio_video.mp4"
        type="video/mp4"
      />
    </video>
  );
}