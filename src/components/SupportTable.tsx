import { useEffect, useState } from 'react';

interface SupportItem {
  id: number;
  name: string;
  content: string;
  amount: number;
}

export default function SupportTable() {
  const [data, setData] = useState<SupportItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://thotool.com/user-support')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.error('Fetch support error:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-8">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
        💝 Danh sách người đã ủng hộ
      </h3>

      {loading && (
        <p className="text-center text-gray-500">
          Đang tải dữ liệu...
        </p>
      )}

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
                <th className="py-3 px-4 text-left">Tên</th>
                <th className="py-3 px-4 text-left">Nội dung</th>
                <th className="py-3 px-4 text-right">Ủng hộ</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-pink-50">
                  <td className="px-4 py-3 font-semibold">
                    {item.name}
                  </td>
                  <td className="px-4 py-3">
                    {item.content}
                  </td>
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
