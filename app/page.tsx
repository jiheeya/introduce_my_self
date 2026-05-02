export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-2xl flex-col items-center justify-center gap-10 py-24 px-8 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-2">
          <div className="w-24 h-24 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-4xl">
            👋
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
            Jihee Kim
          </h1>
        </div>

        <div className="w-full rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-8 flex flex-col gap-6">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
              좋아하는 것
            </h2>
            <ul className="flex flex-col gap-2">
              {["⚾ 야구보기", "🤝 좋아하는 사람들과 시간보내기", "🚀 도전하기"].map((item) => (
                <li
                  key={item}
                  className="text-lg text-zinc-700 dark:text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-zinc-100 dark:border-zinc-800 pt-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
              한마디
            </h2>
            <p className="text-lg font-medium text-zinc-800 dark:text-zinc-200">
              다 같이 시바코 완주해봐요. 화이팅! 💪
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
