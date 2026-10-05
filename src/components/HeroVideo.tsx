import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  mp4: string;
  webm: string;
  poster: string;
  label: string;
};

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function HeroVideo({ mp4, webm, poster, label }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(prefersReducedMotion);
  const [failed, setFailed] = useState(false);
  const showStill = reduceMotion || failed;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || showStill) return;

    let cancelled = false;

    const start = () => {
      if (cancelled) return;
      video.defaultMuted = true;
      video.muted = true;
      video.playsInline = true;
      const pending = video.play();
      if (pending === undefined) return;
      pending.catch((error: unknown) => {
        if (cancelled) return;
        if (
          error instanceof DOMException &&
          (error.name === "AbortError" || error.name === "NotAllowedError")
        ) {
          return;
        }
        setFailed(true);
      });
    };

    start();
    const onVisible = () => {
      if (!document.hidden) start();
    };
    video.addEventListener("canplay", start);
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      cancelled = true;
      video.removeEventListener("canplay", start);
      document.removeEventListener("visibilitychange", onVisible);
      video.pause();
    };
  }, [showStill, mp4, webm]);

  const mediaClass =
    "absolute inset-0 h-full w-full object-cover object-[center_18%]";

  if (showStill) {
    return (
      <img
        src={poster}
        alt={label}
        width={900}
        height={1600}
        className={mediaClass}
        decoding="async"
      />
    );
  }

  return (
    <>
      <img
        src={poster}
        alt=""
        width={900}
        height={1600}
        className={mediaClass}
        aria-hidden="true"
        decoding="async"
      />
      <video
        ref={videoRef}
        className={mediaClass}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        preload="metadata"
        controls={false}
        tabIndex={-1}
        aria-label={label}
        disablePictureInPicture
        disableRemotePlayback
        onError={() => setFailed(true)}
        onStalled={() => {
          const video = videoRef.current;
          if (video && video.readyState < 2 && video.currentTime === 0) {
            setFailed(true);
          }
        }}
      >
        <source src={webm} type="video/webm" />
        <source src={mp4} type="video/mp4" />
      </video>
    </>
  );
}
