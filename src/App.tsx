import { motion } from 'framer-motion';
import ProfileCard from './components/ProfileCard';
import RequestForm from './components/RequestForm';
import SupportTable from './components/SupportTable';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 p-6">
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

        <SupportTable />
      </div>
    </div>
  );
}
