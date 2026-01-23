import { useEffect } from 'react';
import { useSupportStore } from '../store/useSupportStore';

export default function SupportTable() {
  const { data, loading, fetchSupports } = useSupportStore();

  useEffect(() => {
    fetchSupports();
  }, []);

  return (
    <div className="bg-white/95 rounded-3xl shadow-2xl p-8">
      <h3 className="text-2xl font-bold mb-6 text-center">
        💝 Danh sách người đã ủng hộ
      </h3>

      {loading && <p className="text-center">Đang tải...</p>}

      {!loading && data.length === 0 && (
        <p className="text-center text-gray-500">
          Chưa có ai ủng hộ 🥹
        </p>
      )}

      {!loading && data.length > 0 && (
        <div className="overflow-hidden rounded-2xl border">
          <table className="w-full text-sm">
            <thead className="bg-pink-500 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Tên</th>
                <th className="px-4 py-3 text-left">Nội dung</th>
                <th className="px-4 py-3 text-right">Ủng hộ</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-pink-50">
                  <td className="px-4 py-3 font-semibold">{item.name}</td>
                  <td className="px-4 py-3">{item.content}</td>
                  <td className="px-4 py-3 text-right text-pink-600 font-bold">
                    {item.amount.toLocaleString()} VNĐ
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
