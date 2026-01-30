import { motion } from 'framer-motion';
import ProfileCard from './components/ProfileCard';
import RequestForm from './components/RequestForm';
import SupportTable from './components/SupportTable';
import SupportQR from './components/SupportQR';
import Contact from './components/Contact';

export default function App() {
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
          <RequestForm />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SupportQR />
          <SupportTable />
        </div>
      </div>

      <Contact/>
    </div>
  );
}
