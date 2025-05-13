import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Cart from './pages/Cart';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { motion } from 'framer-motion';

export default function App() {
  const notify = (msg) =>
    toast.success(msg, {
      position: 'top-right',
      theme: 'dark',
      transition: Slide,
      autoClose: 5000,
      hideProgressBar: false,
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
        newestOnTop={false}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        closeButton={false}
      />
    </div>
  );
}
