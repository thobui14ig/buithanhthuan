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

    </div>
  );
}
