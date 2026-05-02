import Image from "next/image";

const photos = [
  {
    src: "/KakaoTalk_20260503_021820390.jpg",
    alt: "jihee photo 1",
    rotate: "-rotate-3",
    caption: "✨ my moment",
  },
  {
    src: "/KakaoTalk_20260503_022250469.jpg",
    alt: "jihee photo 2",
    rotate: "rotate-2",
    caption: "⚾ my life",
  },
  {
    src: "/KakaoTalk_20260503_022250469_01.jpg",
    alt: "jihee photo 3",
    rotate: "-rotate-1",
    caption: "🤝 my people",
  },
];

export default function Home() {
  return (
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
        {/* 필름 구멍 — 상단 */}
        <div className="flex justify-between px-4 mb-3">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="w-5 h-3 rounded-sm bg-sky-200/60" />
          ))}
        </div>

        {/* 폴라로이드 카드 3장 */}
        <div className="flex items-center justify-center gap-6 flex-wrap sm:flex-nowrap px-4 py-6">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`flex-shrink-0 ${photo.rotate} transition-transform duration-300 hover:rotate-0 hover:scale-105`}
            >
              <div
                className="bg-white rounded-sm shadow-xl"
                style={{
                  padding: "12px 12px 44px 12px",
                  boxShadow: "0 8px 30px rgba(125, 196, 232, 0.25), 0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                <div className="relative w-52 h-52 overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 text-center text-xs text-sky-400 tracking-wide font-medium">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 필름 구멍 — 하단 */}
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
          boxShadow: "0 4px 24px rgba(125, 196, 232, 0.2)",
          border: "1px solid rgba(186, 230, 253, 0.6)",
        }}
      >
        <p className="text-xs tracking-[0.25em] text-sky-400 uppercase mb-5">about me</p>
        <ul className="flex flex-col gap-3 mb-7">
          {[
            { emoji: "⚾", label: "야구보기" },
            { emoji: "🤝", label: "좋아하는 사람들과 시간보내기" },
            { emoji: "🚀", label: "도전하기" },
          ].map(({ emoji, label }) => (
            <li key={label} className="flex items-center justify-center gap-3 text-sky-800">
              <span className="text-lg">{emoji}</span>
              <span className="text-sm font-medium">{label}</span>
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
  );
}
