import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Cart from './pages/Cart';
import About from './pages/About';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>

          <footer className="bg-white border-t border-gray-50 py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-xs">SM</div>
                  <span className="text-gray-900 font-black tracking-tight">ShopModern</span>
                </div>
                <div className="flex gap-8">
                  {['Shop', 'Privacy', 'Terms', 'Support'].map(link => (
                    <a key={link} href="#" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-indigo-600 transition-colors">{link}</a>
                  ))}
                </div>
                <p className="text-xs font-bold text-gray-300">© 2026 Modern Essentials Inc.</p>
              </div>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
