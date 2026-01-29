export default function ProfileCard() {
  return (
    <div className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center">
      <img
        src="/avatar.jpeg"
        alt="Bùi Thanh Thuận"
        className="w-44 h-44 rounded-full object-cover shadow-xl mb-6"
      />

      <h1 className="text-4xl font-extrabold mb-2 text-gray-800">
        Bùi Thanh Thuận
      </h1>

      <p className="text-pink-600 font-semibold mb-4">
        TikToker 🎤 | Ca hát theo yêu cầu
      </p>

      <p className="text-gray-700 leading-relaxed">
        Xin chào! Mình là Thuận – TikToker chuyên làm video ca hát, cover theo yêu
        cầu và gửi tặng những bài hát mang dấu ấn riêng cho bạn hoặc người bạn yêu
        thương.
        <br />
        Mỗi sự ủng hộ của bạn là động lực để mình tiếp tục theo đuổi âm nhạc 🎶
      </p>

      {/* Social buttons */}
      <div className="mt-6 flex gap-4">
        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@buithanhthuan1993"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21 8.3c-1.5 0-3-.5-4.2-1.4v7.1a6.5 6.5 0 11-6.5-6.5c.3 0 .7 0 1 .1v3.2a3.3 3.3 0 10 2.3 3.1V2h3.4c.2 1.3.8 2.5 1.8 3.4A5.7 5.7 0 0021 6.1v2.2z" />
          </svg>
          TikTok
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/bui.thuan.39948856"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2v-2.9h2V9.7c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.3L15.9 15h-2v7A10 10 0 0022 12z" />
          </svg>
          Facebook
        </a>
      </div>
    </div>
  );
}
