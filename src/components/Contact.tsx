import { motion } from 'framer-motion';


function Contact() {
  return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed bottom-8 right-8 flex flex-col gap-4 z-50"
      >
        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@buithanhthuan1993"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-16 h-16 bg-gradient-to-r from-[#000000] to-[#333333] rounded-3xl shadow-2xl hover:scale-125 hover:rotate-12 hover:shadow-pink-500/25 transition-all duration-500 border-4 border-white/20 backdrop-blur-sm flex items-center justify-center"
          aria-label="TikTok Bùi Thanh Thuận"
        >
          <svg className="w-7 h-7 text-white drop-shadow-lg group-hover:animate-bounce" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 8.3c-1.5 0-3-.5-4.2-1.4v7.1a6.5 6.5 0 11-6.5-6.5c.3 0 .7 0 1 .1v3.2a3.3 3.3 0 10 2.3 3.1V2h3.4c.2 1.3.8 2.5 1.8 3.4A5.7 5.7 0 0021 6.1v2.2z" />
          </svg>
          <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </a>

        {/* Facebook */}
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
      </motion.div>
  )
}

export default Contact
