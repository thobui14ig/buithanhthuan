import { Send } from "lucide-react";

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
        cầu và gửi tặng những bài hát cho bạn hoặc người bạn yêu
        thương.
      </p>

      {/* Social buttons */}
        <span className="text-3xl font-bold mb-2 mt-2">Booking</span>
        <div className="flex">
            <a
              href="https://zalo.me/0898456907"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 animate-bounce-slow group relative"
              aria-label="Chat Zalo"
            >
            <svg id="svg_zalo_icon" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 614.501 613.667">
                <path fill="#FFFFFF" d="M464.721,301.399c-13.984-0.014-23.707,11.478-23.944,28.312c-0.251,17.771,9.168,29.208,24.037,29.202   c14.287-0.007,23.799-11.095,24.01-27.995C489.028,313.536,479.127,301.399,464.721,301.399z" />
                <path fill="#FFFFFF" d="M291.83,301.392c-14.473-0.316-24.578,11.603-24.604,29.024c-0.02,16.959,9.294,28.259,23.496,28.502   c15.072,0.251,24.592-10.87,24.539-28.707C315.214,313.318,305.769,301.696,291.83,301.392z" />
                <path fill="#FFFFFF" d="M310.518,3.158C143.102,3.158,7.375,138.884,7.375,306.3s135.727,303.142,303.143,303.142   c167.415,0,303.143-135.727,303.143-303.142S477.933,3.158,310.518,3.158z M217.858,391.083   c-33.364,0.818-66.828,1.353-100.133-0.343c-21.326-1.095-27.652-18.647-14.248-36.583c21.55-28.826,43.886-57.065,65.792-85.621   c2.546-3.305,6.214-5.996,7.15-12.705c-16.609,0-32.784,0.04-48.958-0.013c-19.195-0.066-28.278-5.805-28.14-17.652   c0.132-11.768,9.175-17.329,28.397-17.348c25.159-0.026,50.324-0.06,75.476,0.026c9.637,0.033,19.604,0.105,25.304,9.789   c6.22,10.561,0.284,19.512-5.646,27.454c-21.26,28.497-43.015,56.624-64.559,84.902c-2.599,3.41-5.119,6.88-9.453,12.725   c23.424,0,44.123-0.053,64.816,0.026c8.674,0.026,16.662,1.873,19.941,11.267C237.892,379.329,231.368,390.752,217.858,391.083z    M350.854,330.211c0,13.417-0.093,26.841,0.039,40.265c0.073,7.599-2.599,13.647-9.512,17.084   c-7.296,3.642-14.71,3.028-20.304-2.968c-3.997-4.281-6.214-3.213-10.488-0.422c-17.955,11.728-39.908,9.96-56.597-3.866   c-29.928-24.789-30.026-74.803-0.211-99.776c16.194-13.562,39.592-15.462,56.709-4.143c3.951,2.619,6.201,4.815,10.396-0.053   c5.39-6.267,13.055-6.761,20.271-3.357c7.454,3.509,9.935,10.165,9.776,18.265C350.67,304.222,350.86,317.217,350.854,330.211z    M395.617,369.579c-0.118,12.837-6.398,19.783-17.196,19.908c-10.779,0.132-17.593-6.966-17.646-19.512   c-0.179-43.352-0.185-86.696,0.007-130.041c0.059-12.256,7.302-19.921,17.896-19.222c11.425,0.752,16.992,7.448,16.992,18.833   c0,22.104,0,44.216,0,66.327C395.677,327.105,395.828,348.345,395.617,369.579z M463.981,391.868   c-34.399-0.336-59.037-26.444-58.786-62.289c0.251-35.66,25.304-60.713,60.383-60.396c34.631,0.304,59.374,26.306,58.998,61.986   C524.207,366.492,498.534,392.205,463.981,391.868z" />
            </svg>
            <span className="absolute -top-10 right-0 bg-green-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
                Zalo
            </span>
            </a>

            <a
              href="https://t.me/thobui1996"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 animate-pulse group relative"
            aria-label="Chat Telegram"
            >
              <Send className="w-8 h-8" />
              <span className="absolute -top-10 left-0 bg-blue-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
                  Telegram
              </span>
            </a>
            <a
              href="https://www.facebook.com/bui.thanhthuan39948856"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-16 h-16 bg-gradient-to-r from-[#1877F2] to-[#1977F3] rounded-3xl shadow-2xl hover:scale-125 hover:rotate-12 hover:shadow-blue-500/25 transition-all duration-500 border-4 border-white/20 backdrop-blur-sm flex items-center justify-center"
              aria-label="Facebook Bùi Thanh Thuận"
            >
              <svg className="w-7 h-7 text-white drop-shadow-lg group-hover:animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2v-2.9h2V9.7c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.3L15.9 15h-2v7A10 10 0 0022 12z" />
              </svg>
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
        </div>
        <span className="text-3xl font-bold mb-2 mt-2">Hoặc gọi 0898456907</span>
    </div>
  );
}
