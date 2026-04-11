// SupportQR.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const SupportQR = () => {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-xl border border-pink-100/50 backdrop-blur-sm"
      >
        <div className="text-center">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-800 leading-tight">
            Donate
          </h3>
          <h3 className="text-xl font-bold text-gray-800 leading-tight">
            Bùi Thanh Thuận
          </h3>
          <h3 className="text-xl font-bold text-gray-800 leading-tight">
            STK: 5631996446500 MBBank
          </h3>
          <motion.img
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            src="/qr.png"
            alt="QR ủng hộ ngân hàng"
            className="mx-auto w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain rounded-3xl shadow-2xl border-8 border-white/60 hover:shadow-3xl hover:border-pink-200/70 transition-all duration-500 cursor-pointer active:scale-[0.98] hover:rotate-3"
            onClick={() => setIsQRModalOpen(true)}
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg lg:text-xl text-pink-500 font-bold mt-6 lg:mt-8 animate-pulse tracking-wide drop-shadow-sm"
          >
            Cảm ơn bạn 💕
          </motion.p>
        </div>
      </motion.div>


      {/* QR Modal Fullscreen */}
      <AnimatePresence>
        {isQRModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-8"
            onClick={() => setIsQRModalOpen(false)}
          >
            <motion.img
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src="/qr.png"
              alt="QR ủng hộ ngân hàng"
              className="max-w-full max-h-[90vh] w-[400px] h-[400px] object-contain rounded-3xl shadow-4xl border-8 border-white/30 hover:scale-105 transition-transform duration-200"
              onClick={(e) => e.stopPropagation()} // Prevent modal close khi click vào QR
            />
            
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-8 right-8 w-14 h-14 bg-white/90 hover:bg-white rounded-3xl shadow-2xl flex items-center justify-center text-gray-800 text-xl font-bold backdrop-blur-md hover:scale-110 transition-all duration-300"
              onClick={() => setIsQRModalOpen(false)}
            >
              ✕
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SupportQR;
