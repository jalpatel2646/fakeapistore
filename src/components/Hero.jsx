import { ShoppingBag, ArrowRight, Zap, ShieldCheck, Truck } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Hero() {
    return (
        <div className="relative overflow-hidden bg-white mb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6 animate-bounce">
                        <Zap size={14} />
                        <span>New Collection 2026</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8">
                        Elevate Your <span className="text-indigo-600">Style</span> <br />
                        With Minimal Design.
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-500 mb-10">
                        Discover a curated collection of premium essentials designed for modern life.
                        Quality meets simplicity in every piece we offer.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <NavLink
                            to="/"
                            className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center gap-2 transition-all hover:bg-indigo-700 hover:scale-105 shadow-xl shadow-indigo-200"
                        >
                            Shop Collection
                            <ArrowRight size={20} />
                        </NavLink>
                        <NavLink
                            to="/about"
                            className="px-8 py-4 bg-white text-gray-900 border border-gray-100 rounded-2xl font-bold transition-all hover:bg-gray-50 flex items-center gap-2"
                        >
                            Learn More
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-0 opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-200 blur-[120px] rounded-full" />
            </div>

            {/* Features Bar */}
            <div className="bg-gray-50/50 border-y border-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600">
                            <Truck size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Free Shipping</h3>
                            <p className="text-sm text-gray-500">On all orders over $99</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Secure Payment</h3>
                            <p className="text-sm text-gray-500">100% encrypted checkout</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600">
                            <ShoppingBag size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Easy Returns</h3>
                            <p className="text-sm text-gray-500">30-day money back guarantee</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
