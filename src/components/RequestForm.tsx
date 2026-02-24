import { useState } from 'react';
import { useSupportStore } from '../store/useSupportStore';

export default function RequestForm() {
  const addSupport = useSupportStore((state) => state.addSupport);

  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [amount, setAmount] = useState('0');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addSupport({
        name,
        content,
        amount: Number(amount),
      });

      setName('');
      setContent('');
      setAmount('');
      alert('💖 Gửi yêu cầu thành công!');
    } catch {
      alert('❌ Có lỗi xảy ra');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/95 rounded-3xl shadow-2xl p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        🎵 Gửi yêu cầu hát
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Tên */}
        <div>
          <label className="block mb-1 text-sm font-semibold">
            Tên người yêu cầu
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-xl border p-3 focus:ring-2 focus:ring-pink-500"
          />
        </div>

        {/* Nội dung */}
        <div>
          <label className="block mb-1 text-sm font-semibold">
            Nội dung yêu cầu
          </label>
          <textarea
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full rounded-xl border p-3 focus:ring-2 focus:ring-pink-500"
          />
        </div>

          {/* Số tiền */}
        {/* <div className="relative">
          <label className="block mb-1 text-sm font-semibold">
            Gửi tặng tôi ly cafe{' '}
            <span className="text-xs text-pink-500">(tuỳ tâm 💖)</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={amount}
              defaultValue="0"
              pattern="^\d+(\.\d{1,2})?$"
              inputMode="decimal"
              placeholder="0"
              onChange={(e) => {
                const val = e.target.value.replace(/[^\d.]/g, '');
                setAmount(val === '' ? '' : val);
              }}
              className="w-full pr-10 rounded-xl border p-3 focus:ring-2 focus:ring-pink-500"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-lg">
              ₫
            </span>
          </div>
        </div> */}
        <button
          disabled={loading}
          className="w-full rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 py-4 font-bold text-white disabled:opacity-60"
        >
          {loading ? '⏳ Đang gửi...' : '💖 Gửi yêu cầu'}
        </button>
      </form>

      {/* ===== QR ỦNG HỘ ===== */}
      {/* <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 mb-3">
          📌 Bạn có thể ủng hộ tôi ly cafe qua QR bên dưới
        </p>

        <img
          src="/qar.jpg"   // hoặc /qar.jpg nếu file bạn đặt vậy
          alt="QR ủng hộ"
          className="mx-auto w-48 rounded-2xl shadow-lg border"
        />

        <p className="text-sm text-gray-500 mt-3">
          Cảm ơn bạn đã ủng hộ 💕
        </p>
      </div> */}
    </div>
  );
}
