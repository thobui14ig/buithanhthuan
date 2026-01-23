import { useState } from 'react';
import { useSupportStore } from '../store/useSupportStore';

export default function RequestForm() {
  const addSupport = useSupportStore((state) => state.addSupport);

  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [amount, setAmount] = useState<number | ''>('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addSupport({
        name,
        content,
        amount: amount || 0,
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

        <div>
          <label className="block mb-1 text-sm font-semibold">
            Số tiền ủng hộ <span className="text-xs text-pink-500">(tuỳ tâm 💖)</span>
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full rounded-xl border p-3 focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <button
          disabled={loading}
          className="w-full rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 py-4 font-bold text-white"
        >
          {loading ? '⏳ Đang gửi...' : '💖 Gửi yêu cầu & Ủng hộ'}
        </button>
      </form>
    </div>
  );
}
