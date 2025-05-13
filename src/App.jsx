import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Cart from './pages/Cart';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';

export default function App() {
  // функция для показа тоста
  const notify = (msg) =>
    toast.success(msg, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      theme: 'dark',
    });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 p-4 mx-auto flex flex-col items-center justify-center ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog notify={notify} />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
