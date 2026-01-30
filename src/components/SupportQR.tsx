// SupportQR.tsx
import { motion } from 'framer-motion';

const SupportQR = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-xl border border-pink-100/50 backdrop-blur-sm"
    >
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-3">Ủng hộ tôi! Mọi sự đóng góp sẽ giúp tôi tự tin làm thêm nhiều video cover hay nhé!</h3>
        
        <motion.img
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          src="/qar1.png"
          alt="QR ủng hộ ngân hàng"
          className="mx-auto w-48 h-48 object-contain rounded-2xl shadow-2xl border-4 border-white/50 hover:shadow-3xl transition-all duration-300 cursor-pointer"
        />
        
        <p className="text-sm text-pink-500 font-medium mt-4 animate-pulse">
          Cảm ơn bạn đã ủng hộ 💕
        </p>
      </div>
    </motion.div>
  );
};

export default SupportQR;
