import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Search, Info, LayoutGrid } from 'lucide-react';

export default function Navbar() {
    const { cartCount } = useCart();

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <NavLink to="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
                                <ShoppingCart className="text-white w-6 h-6" />
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 tracking-tight">
                                ShopModern
                            </span>
                        </NavLink>
                    </div>

                    {/* Nav Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `flex items-center gap-2 text-sm font-medium transition-colors ${isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-900'
                                }`
                            }
                        >
                            <LayoutGrid size={18} />
                            Products
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `flex items-center gap-2 text-sm font-medium transition-colors ${isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-900'
                                }`
                            }
                        >
                            <Info size={18} />
                            About
                        </NavLink>
                    </div>

                    {/* Search & Cart */}
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center relative group">
                            <Search className="absolute left-3 text-gray-400 group-focus-within:text-indigo-500 transition-colors" size={16} />
                            <input
                                type="text"
                                placeholder="Search items..."
                                className="pl-10 pr-4 py-2 bg-gray-50 border border-transparent rounded-full text-sm focus:bg-white focus:border-indigo-100 focus:ring-4 focus:ring-indigo-50/50 outline-none w-48 md:w-64 transition-all"
                            />
                        </div>

                        <NavLink to="/cart" className="relative p-2 text-gray-500 hover:text-indigo-600 transition-all hover:scale-110">
                            <ShoppingCart size={24} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-in fade-in zoom-in duration-300">
                                    {cartCount}
                                </span>
                            )}
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}
