import { useState } from "react";

export default function RequestForm() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("https://thotool.com/api/insert-user-support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          content,
          amount: amount || 0 // nếu không nhập thì = 0
        })
      });

      if (!res.ok) {
        throw new Error("Gửi yêu cầu thất bại");
      }

      alert("💖 Gửi yêu cầu thành công! Cảm ơn bạn đã ủng hộ");

      // Reset form
      setName("");
      setContent("");
      setAmount("");
    } catch (error) {
      alert("❌ Có lỗi xảy ra, vui lòng thử lại");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        🎵 Gửi yêu cầu hát
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">
            Tên người yêu cầu
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Ví dụ: Nguyễn Văn A"
            className="w-full rounded-xl border border-gray-300 p-3
                       focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">
            Nội dung yêu cầu
          </label>
          <textarea
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            placeholder="Tên bài hát, lời nhắn muốn gửi..."
            className="w-full rounded-xl border border-gray-300 p-3
                       focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">
            Số tiền ủng hộ (VNĐ)
            <span className="ml-2 text-xs font-normal text-pink-500">
              (tuỳ tâm 💖)
            </span>
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Ví dụ: 50000"
            className="w-full rounded-xl border border-gray-300 p-3
                       focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600
                     py-4 text-lg font-bold text-white shadow-xl
                     hover:scale-[1.02] transition disabled:opacity-60"
        >
          {loading ? "⏳ Đang gửi..." : "💖 Gửi yêu cầu & Ủng hộ"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <img
          src="/qar.jpg"
          alt="QR ngân hàng"
          className="mx-auto w-48 rounded-2xl shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-3">
          Cảm ơn bạn đã ủng hộ 💕
        </p>
      </div>
    </div>
  );
}
