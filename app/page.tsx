"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const photos = [
  { src: "/KakaoTalk_20260503_021820390.jpg", alt: "jihee photo 1", rotate: "-rotate-3", caption: "✨ my moment" },
  { src: "/KakaoTalk_20260503_022250469.jpg",  alt: "jihee photo 2", rotate: "rotate-2",  caption: "🌸 my photo"  },
  { src: "/KakaoTalk_20260503_022250469_01.jpg", alt: "jihee photo 3", rotate: "-rotate-1", caption: "🤝 my people" },
];

const hobbies = [
  { id: "baseball", emoji: "⚾", label: "야구보기",               title: "⚾ 야구보기",               src: "/야구"  },
  { id: "friends",  emoji: "🤝", label: "좋아하는 사람들과 시간보내기", title: "🤝 소중한 사람들",            src: "/사람"  },
  { id: "challenge",emoji: "🚀", label: "도전하기",               title: "🚀 도전하기",               src: "/도전"  },
];

type WinState = { id: string; title: string; src: string; x: number; y: number };

function Win95Window({
  win,
  onClose,
  onTitleBarMouseDown,
}: {
  win: WinState;
  onClose: (id: string) => void;
  onTitleBarMouseDown: (e: React.MouseEvent, id: string) => void;
}) {
  return (
    <div className="fixed z-50" style={{ left: win.x, top: win.y, width: 300, userSelect: "none" }}>
      <div
        style={{
          background: "#c0c0c0",
          border: "2px solid",
          borderColor: "#ffffff #808080 #808080 #ffffff",
          boxShadow: "2px 2px 0 #000000",
        }}
      >
        {/* 제목 바 */}
        <div
          className="flex items-center justify-between px-2 py-1 cursor-move"
          style={{ background: "linear-gradient(to right, #000080, #1084d0)" }}
          onMouseDown={(e) => onTitleBarMouseDown(e, win.id)}
        >
          <span className="text-white text-xs font-bold truncate">{win.title}</span>
          <button
            onClick={() => onClose(win.id)}
            className="flex items-center justify-center flex-shrink-0 ml-2 text-black text-xs font-bold leading-none"
            style={{
              width: 16,
              height: 14,
              background: "#c0c0c0",
              border: "1px solid",
              borderColor: "#ffffff #808080 #808080 #ffffff",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        {/* 본문 */}
        <div className="p-2" style={{ background: "#c0c0c0" }}>
          <div
            className="relative overflow-hidden"
            style={{
              height: 220,
              border: "2px solid",
              borderColor: "#808080 #ffffff #ffffff #808080",
              background: "#000",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={win.src}
              alt={win.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <p
            className="text-center mt-2 mb-1 text-xs"
            style={{ fontFamily: "monospace", color: "#000080" }}
          >
            {win.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [windows, setWindows] = useState<WinState[]>([]);
  const dragging = useRef<{ id: string; startX: number; startY: number; winX: number; winY: number } | null>(null);

  const openWindow = (hobby: (typeof hobbies)[number]) => {
    if (windows.find((w) => w.id === hobby.id)) return;
    setWindows((prev) => [
      ...prev,
      { id: hobby.id, title: hobby.title, src: hobby.src, x: 80 + prev.length * 30, y: 80 + prev.length * 30 },
    ]);
  };

  const closeWindow = (id: string) => setWindows((prev) => prev.filter((w) => w.id !== id));

  const handleTitleBarMouseDown = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const win = windows.find((w) => w.id === id);
    if (!win) return;
    dragging.current = { id, startX: e.clientX, startY: e.clientY, winX: win.x, winY: win.y };
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      const { id, startX, startY, winX, winY } = dragging.current;
      setWindows((prev) =>
        prev.map((w) =>
          w.id === id ? { ...w, x: winX + e.clientX - startX, y: winY + e.clientY - startY } : w
        )
      );
    };
    const onMouseUp = () => { dragging.current = null; };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      {/* Win95 팝업 창들 */}
      {windows.map((win) => (
        <Win95Window
          key={win.id}
          win={win}
          onClose={closeWindow}
          onTitleBarMouseDown={handleTitleBarMouseDown}
        />
      ))}

      <div
        className="min-h-full flex flex-col items-center justify-center px-6 py-16"
        style={{ background: "linear-gradient(160deg, #e0f2fe 0%, #f0f9ff 50%, #ffffff 100%)" }}
      >
        {/* 이름 헤더 */}
        <div className="mb-12 text-center">
          <p className="text-sm tracking-[0.3em] text-sky-400 uppercase mb-2 font-medium">
            introduce myself
          </p>
          <h1
            className="text-5xl font-bold text-sky-900"
            style={{ fontFamily: "var(--font-geist-sans)", letterSpacing: "-0.02em" }}
          >
            Jihee Kim
          </h1>
          <div className="mt-3 w-12 h-0.5 bg-sky-300 mx-auto rounded-full" />
        </div>

        {/* 필름 스트립 */}
        <div className="relative w-full max-w-3xl">
          <div className="flex justify-between px-4 mb-3">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="w-5 h-3 rounded-sm bg-sky-200/60" />
            ))}
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap sm:flex-nowrap px-4 py-6">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className={`flex-shrink-0 ${photo.rotate} transition-transform duration-300 hover:rotate-0 hover:scale-105`}
              >
                <div
                  className="bg-white rounded-sm"
                  style={{
                    padding: "12px 12px 44px 12px",
                    boxShadow: "0 8px 30px rgba(125,196,232,0.25), 0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="relative w-52 h-52 overflow-hidden">
                    <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                  </div>
                  <p className="mt-2 text-center text-xs text-sky-400 tracking-wide font-medium">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between px-4 mt-3">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="w-5 h-3 rounded-sm bg-sky-200/60" />
            ))}
          </div>
        </div>

        {/* 소개 카드 */}
        <div
          className="mt-14 w-full max-w-md rounded-3xl px-8 py-8 text-center"
          style={{
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 4px 24px rgba(125,196,232,0.2)",
            border: "1px solid rgba(186,230,253,0.6)",
          }}
        >
          <p className="text-xs tracking-[0.25em] text-sky-400 uppercase mb-5">about me</p>
          <div className="flex justify-center gap-6 mb-6">
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs text-sky-400 tracking-widest uppercase">birthday</span>
              <span className="text-sm font-semibold text-sky-800">2005.08.04</span>
            </div>
            <div className="w-px bg-sky-100" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs text-sky-400 tracking-widest uppercase">MBTI</span>
              <span className="text-sm font-semibold text-sky-800">ENFJ</span>
            </div>
          </div>
          <div className="w-full h-px bg-sky-100 mb-6" />

          {/* 클릭 가능한 취미 목록 */}
          <ul className="flex flex-col gap-3 mb-7">
            {hobbies.map((hobby) => (
              <li key={hobby.id}>
                <button
                  onClick={() => openWindow(hobby)}
                  className="flex items-center justify-center gap-3 text-sky-800 w-full rounded-xl px-4 py-2 transition-all duration-150 hover:bg-sky-50 active:scale-95 cursor-pointer group"
                >
                  <span className="text-lg">{hobby.emoji}</span>
                  <span className="text-sm font-medium group-hover:text-sky-600">{hobby.label}</span>
                  <span className="text-xs text-sky-300 group-hover:text-sky-400 ml-auto">클릭 ›</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="border-t border-sky-100 pt-6">
            <p className="text-sky-700 text-sm leading-relaxed font-medium">
              &ldquo;다 같이 시바코 완주해봐요. 화이팅! 💪&rdquo;
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
