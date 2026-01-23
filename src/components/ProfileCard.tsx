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
        Mỗi sự ủng hộ của bạn không chỉ là động lực tinh thần, mà còn giúp cuộc
        sống của mình ổn định hơn để tiếp tục theo đuổi âm nhạc 🎶
      </p>

      <a
        href="https://www.tiktok.com/@buithanhthuan1993"
        target="_blank"
        className="mt-6 rounded-full bg-pink-500 px-6 py-3 text-white font-semibold shadow-lg hover:bg-pink-600 transition"
      >
        🎬 Xem kênh TikTok
      </a>
    </div>
  );
}
