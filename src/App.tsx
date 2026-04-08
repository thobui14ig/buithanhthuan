'use client';
import { useState, type FormEvent, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileCard from './components/ProfileCard';
import SupportQR from './components/SupportQR';

interface FormData {
  name: string;
  phone: string;
  song: string;
  content: string;
  type: 'birthday' | 'livestream' | '';
  amount: string;
  birthdayDate: string;
  livestreamDate: string;
  livestreamTime: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  song?: string;
  content?: string;
  type?: string;
  amount?: string;
  birthdayDate?: string;
  livestreamDate?: string;
  livestreamTime?: string;
}

const timeSlots = [
  '20:00', '20:15', '20:30', '20:45',
  '21:00', '21:15', '21:30', '21:45',
  '22:00'
] as const;

export default function App() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: "",
    song: '',
    content: '',
    type: '',
    amount: '',
    birthdayDate: '',
    livestreamDate: '',
    livestreamTime: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate phone number Việt Nam
  const validatePhone = (phone: string): string | null => {
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})\b$/;
    if (!phone.trim()) return 'Số điện thoại là bắt buộc';
    if (!phoneRegex.test(phone)) return 'Số điện thoại không hợp lệ (VD: 0987654321)';
    return null;
  };

  // Validate name
  const validateName = (name: string): string | null => {
    if (!name.trim()) return 'Tên là bắt buộc';
    if (name.length < 2) return 'Tên phải có ít nhất 2 ký tự';
    return null;
  };

  // Validate song
  const validateSong = (song: string): string | null => {
    if (!song.trim()) return 'Tên bài hát là bắt buộc';
    if (song.length < 2) return 'Tên bài hát phải có ít nhất 2 ký tự';
    return null;
  };

  const validateForm = useCallback((): FormErrors => {
    const newErrors: FormErrors = {};

    // Common fields
    const nameError = validateName(formData.name);
    if (nameError) newErrors.name = nameError;

    const phoneError = validatePhone(formData.phone);
    if (phoneError) newErrors.phone = phoneError;

    const songError = validateSong(formData.song);
    if (songError) newErrors.song = songError;

    if (!formData.content.trim()) newErrors.content = 'Nội dung yêu cầu là bắt buộc';
    if (formData.type === '') newErrors.type = 'Vui lòng chọn loại yêu cầu';

    // 🔥 LIVESTREAM: Chỉ trước 15h hôm nay
    if (formData.type === 'livestream') {
      const now = new Date();
      const today15h = new Date();
      today15h.setHours(15, 0, 0, 0); // 15:00:00 hôm nay
      
      const selectedDate = new Date(formData.livestreamDate);
      
      if (!formData.livestreamDate) {
        newErrors.livestreamDate = 'Ngày livestream là bắt buộc';
      } else if (selectedDate.toDateString() === now.toDateString()) {
        // Hôm nay: chỉ trước 15h
        if (now >= today15h) {
          newErrors.livestreamDate = 'Livestream hôm nay chỉ nhận trước 15h!';
        }
      } else if (selectedDate < now) {
        // Ngày quá khứ
        newErrors.livestreamDate = 'Ngày livestream phải từ hôm nay trở đi';
      }
      
      if (!formData.livestreamTime) {
        newErrors.livestreamTime = 'Giờ livestream là bắt buộc';
      }
    }

    // 🔥 BIRTHDAY: Ngày > hôm nay
    if (formData.type === 'birthday') {
      const today = new Date();
      today.setHours(23, 59, 59, 999); // Cuối ngày hôm nay
      
      const selectedDate = new Date(formData.birthdayDate);
      
      if (!formData.birthdayDate) {
        newErrors.birthdayDate = 'Ngày sinh nhật là bắt buộc';
      } else if (selectedDate <= today) {
        newErrors.birthdayDate = 'Ngày sinh nhật phải sau hôm nay';
      }
    }

    // Amount validation
    const amountNum = parseInt(formData.amount);
    if (formData.amount && (isNaN(amountNum) || amountNum < 0)) {
      newErrors.amount = 'Số tiền phải >= 0';
    }

    console.log('✅ Validation result:', newErrors);
    return newErrors;
  }, [formData]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setErrors(prev => ({ ...prev, [name]: undefined }));
    
    // 🔥 AUTO-FILL AMOUNT khi chọn TYPE
    if (name === 'type' && (value === 'birthday' || value === 'livestream')) {
      const autoAmount = value === 'birthday' ? '200000' : '50000';
      setFormData({ 
        ...formData, 
        [name]: value,
        amount: autoAmount  // Tự động điền tiền!
      });
      return;
    }
    
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    // ✅ Fix: Check Object.values thay vì Object.keys
    const hasErrors = Object.values(formErrors).some(error => error);
    
    console.log('Form data:', formData);
    console.log('Form errors:', formErrors);
    console.log('Has errors:', hasErrors);
    
    if (hasErrors) {
      setErrors(formErrors);
      alert('Vui lòng kiểm tra lại thông tin!');
      return;
    }

    setIsSubmitting(true);
    try {
      const submitData = {
        name: formData.name,
        phone: formData.phone,
        song: formData.song,
        content: formData.content,
        type: formData.type as 'birthday' | 'livestream',
        amount: formData.amount || '0',
        ...(formData.type === 'birthday' && { birthdayDate: formData.birthdayDate }),
        ...(formData.type === 'livestream' && { 
          livestreamDate: formData.livestreamDate,
          livestreamTime: formData.livestreamTime 
        })
      };

      
      const response = await fetch('https://thotool.com/api/user-support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      alert('✅ Yêu cầu đã gửi thành công! Cảm ơn bạn!');
      
      // Reset form
      setFormData({
        name: '',
        phone: "",
        song: '',
        content: '',
        type: '',
        amount: '',
        birthdayDate: '',
        livestreamDate: '',
        livestreamTime: ''
      });
      setErrors({});
    } catch (error: any) {
      console.error('Submit error:', error);
      alert(`❌ Có lỗi xảy ra: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 p-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <ProfileCard />
          <SupportQR />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Yêu Cầu Bài Hát 🎤</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-white font-semibold mb-2">Tên của bạn *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-4 rounded-xl bg-white/30 backdrop-blur-md border-2 ${
                  errors.name 
                    ? 'border-red-400 ring-4 ring-red-200/50' 
                    : 'border-white/40 focus:ring-white/50'
                } text-white placeholder-white/70 focus:outline-none focus:ring-4 transition-all duration-300`}
                placeholder="Nhập tên bạn..."
              />
              {errors.name && (
                <p className="text-red-300 text-sm mt-1 font-medium">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-white font-semibold mb-2">Số điện thoại *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-4 rounded-xl bg-white/30 backdrop-blur-md border-2 ${
                  errors.phone 
                    ? 'border-red-400 ring-4 ring-red-200/50' 
                    : 'border-white/40 focus:ring-white/50'
                } text-white placeholder-white/70 focus:outline-none focus:ring-4 transition-all duration-300`}
                placeholder="VD: 0987654321"
              />
              {errors.phone && (
                <p className="text-red-300 text-sm mt-1 font-medium">{errors.phone}</p>
              )}
            </div>

            {/* Song */}
            <div>
              <label className="block text-white font-semibold mb-2">Bài hát yêu cầu *</label>
              <input
                type="text"
                name="song"
                value={formData.song}
                onChange={handleChange}
                className={`w-full p-4 rounded-xl bg-white/30 backdrop-blur-md border-2 ${
                  errors.song 
                    ? 'border-red-400 ring-4 ring-red-200/50' 
                    : 'border-white/40 focus:ring-white/50'
                } text-white placeholder-white/70 focus:outline-none focus:ring-4 transition-all duration-300`}
                placeholder="VD: Em ơi hà nội phố"
              />
              {errors.song && (
                <p className="text-red-300 text-sm mt-1 font-medium">{errors.song}</p>
              )}
            </div>

            {/* Content */}
            <div>
              <label className="block text-white font-semibold mb-2">Nội dung yêu cầu *</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={3}
                className={`w-full p-4 rounded-xl bg-white/30 backdrop-blur-md border-2 ${
                  errors.content 
                    ? 'border-red-400 ring-4 ring-red-200/50' 
                    : 'border-white/40 focus:ring-white/50'
                } text-white placeholder-white/70 focus:outline-none focus:ring-4 transition-all duration-300 resize-vertical`}
                placeholder="Tin nhắn đặc biệt dành cho người được hát..."
              />
              {errors.content && (
                <p className="text-red-300 text-sm mt-1 font-medium">{errors.content}</p>
              )}
            </div>

            {/* Type */}
            <div>
              <label className="block text-white font-semibold mb-2">Loại yêu cầu *</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className={`w-full p-4 rounded-xl bg-white/30 backdrop-blur-md border-2 ${
                  errors.type 
                    ? 'border-red-400 ring-4 ring-red-200/50' 
                    : 'border-white/40 focus:ring-white/50'
                } text-white focus:outline-none focus:ring-4 transition-all duration-300`}
              >
                <option value="">Chọn loại...</option>
                <option value="birthday">Lên video hát mừng sinh nhật</option>
                <option value="livestream">Hát trên livestream</option>
              </select>
              {errors.type && (
                <p className="text-red-300 text-sm mt-1 font-medium">{errors.type}</p>
              )}
            </div>

            {/* Conditional Fields */}
            <AnimatePresence mode="wait">
              {formData.type === 'birthday' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <label className="block text-white font-semibold mb-2">Ngày hát sinh nhật *</label>
                  <input
                    type="date"
                    name="birthdayDate"
                    value={formData.birthdayDate}
                    onChange={handleChange}
                    className={`w-full p-4 rounded-xl bg-white/30 backdrop-blur-md border-2 ${
                      errors.birthdayDate 
                        ? 'border-red-400 ring-4 ring-red-200/50' 
                        : 'border-white/40 focus:ring-white/50'
                    } text-white focus:outline-none focus:ring-4 transition-all duration-300`}
                  />
                  {errors.birthdayDate && (
                    <p className="text-red-300 text-sm mt-1 font-medium">{errors.birthdayDate}</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {formData.type === 'livestream' && (
                <>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <label className="block text-white font-semibold mb-2">Ngày livestream *</label>
                    <input
                      type="date"
                      name="livestreamDate"
                      value={formData.livestreamDate}
                      onChange={handleChange}
                      className={`w-full p-4 rounded-xl bg-white/30 backdrop-blur-md border-2 ${
                        errors.livestreamDate 
                          ? 'border-red-400 ring-4 ring-red-200/50' 
                          : 'border-white/40 focus:ring-white/50'
                      } text-white focus:outline-none focus:ring-4 transition-all duration-300`}
                    />
                    {errors.livestreamDate && (
                      <p className="text-red-300 text-sm mt-1 font-medium">{errors.livestreamDate}</p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="overflow-hidden"
                  >
                    <label className="block text-white font-semibold mb-2">Giờ livestream (20h-22h) *</label>
                    <select
                      name="livestreamTime"
                      value={formData.livestreamTime}
                      onChange={handleChange}
                      className={`w-full p-4 rounded-xl bg-white/30 backdrop-blur-md border-2 ${
                        errors.livestreamTime 
                          ? 'border-red-400 ring-4 ring-red-200/50' 
                          : 'border-white/40 focus:ring-white/50'
                      } text-white focus:outline-none focus:ring-4 transition-all duration-300`}
                    >
                      <option value="">Chọn khung giờ...</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    {errors.livestreamTime && (
                      <p className="text-red-300 text-sm mt-1 font-medium">{errors.livestreamTime}</p>
                    )}
                    <p className="text-white/70 text-sm mt-1">Chỉ hát theo lịch 20:00, 20:15, 20:30, 20:45, 21:00, 21:15, 21:30, 21:45, 22:00</p>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* Amount */}
            <div>
              <label className="block text-white font-semibold mb-2 flex items-center gap-3">
                Số tiền tặng (VNĐ)
                <motion.span 
                  key={formData.type}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-sm text-yellow-300 font-bold bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-3 py-1 rounded-full shadow-lg border border-yellow-400/30"
                >
                  {formData.type === 'birthday' ? '200k/video' : formData.type === 'livestream' ? '50k/bài' : ''}
                </motion.span>
              </label>
              
              {/* Thêm text động lực PHÍA DƯỚI label */}
              <p className="text-yellow-200/90 text-xs lg:text-sm font-medium mb-3 italic bg-gradient-to-r from-yellow-400/10 to-pink-400/10 px-3 py-2 rounded-xl border border-yellow-300/30 shadow-md">
                Ai cũng cần có công việc, mọi người hãy ủng hộ em 💕
              </p>
              
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                min="0"
                step="1000"
                className={`w-full p-5 rounded-xl bg-white/30 backdrop-blur-md border-2 text-lg font-semibold ${
                  errors.amount 
                    ? 'border-red-400 ring-4 ring-red-200/50 shadow-red-500/20' 
                    : 'border-white/40 focus:ring-white/50 hover:border-white/60'
                } text-white placeholder-yellow-200/70 focus:outline-none focus:ring-4 transition-all duration-500 pr-12`}
                placeholder={formData.type === 'birthday' ? '200000' : formData.type === 'livestream' ? '50000' : ''}
              />
              
              {errors.amount && (
                <motion.p 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-red-300 text-sm mt-1 font-semibold bg-red-500/20 px-4 py-2 rounded-xl border border-red-400/50 shadow-lg"
                >
                  {errors.amount}
                </motion.p>
              )}
            </div>



            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={isSubmitting ? {} : { scale: 1.05 }}
              whileTap={isSubmitting ? {} : { scale: 0.95 }}
              className="w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold py-6 px-8 rounded-2xl text-xl shadow-2xl hover:shadow-3xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 uppercase tracking-wide flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Đang gửi...
                </>
              ) : (
                'Gửi Yêu Cầu 🎵'
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
