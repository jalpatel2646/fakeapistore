import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, CreditCard, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import CheckoutModal from '../components/CheckoutModal';
import SuccessPopup from '../components/SuccessPopup';

export default function Cart() {
    const { cart, removeFromCart, increaseQty, decreaseQty, clearCart, cartCount, totalPrice } = useCart();
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);

    const handleCheckoutConfirm = () => {
        setIsCheckoutOpen(false);
        setIsSuccessOpen(true);
        clearCart(); // Clear cart after success
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-8">
                    <ShoppingBag size={40} className="text-gray-300" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight text-center">Your cart is empty</h2>
                <p className="text-gray-500 mb-10 font-medium text-center max-w-sm">
                    Looks like you haven't added anything to your cart yet. Browse our products to find something you love!
                </p>
                <Link
                    to="/"
                    className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center gap-2 transition-all hover:bg-indigo-700 hover:scale-105 shadow-xl shadow-indigo-200"
                >
                    Browse Products
                    <ArrowRight size={20} />
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Shopping Cart</h1>
                    <p className="text-gray-500 font-medium">You have {cartCount} items in your bag</p>
                </div>
                <button
                    onClick={clearCart}
                    className="flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-600 transition-colors px-4 py-2 rounded-xl hover:bg-red-50"
                >
                    <Trash2 size={16} />
                    Clear Bag
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Items List */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                    {cart.map((item) => (
                        <div key={item.id} className="group bg-white p-6 rounded-[32px] border border-gray-50 shadow-sm hover:shadow-xl hover:shadow-indigo-50/30 transition-all flex flex-col sm:flex-row items-center gap-8">
                            <div className="w-32 h-32 bg-gray-50 rounded-2xl p-4 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                                <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                            </div>

                            <div className="flex-1 text-center sm:text-left">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 mb-2 block">
                                    {item.category}
                                </span>
                                <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">{item.title}</h3>
                                <p className="text-gray-400 font-medium text-sm mb-4">${item.price.toFixed(2)} per unit</p>

                                <div className="flex items-center justify-center sm:justify-start gap-4">
                                    <div className="flex items-center bg-gray-50 p-1 rounded-xl border border-gray-100">
                                        <button
                                            onClick={() => decreaseQty(item.id)}
                                            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm text-gray-500 hover:text-indigo-600 transition-all"
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span className="w-10 text-center text-sm font-bold text-gray-900">{item.quantity}</span>
                                        <button
                                            onClick={() => increaseQty(item.id)}
                                            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm text-gray-500 hover:text-indigo-600 transition-all"
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:text-right flex flex-row sm:flex-col items-center sm:items-end gap-8 sm:gap-2">
                                <p className="text-xl font-black text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Card */}
                <div className="lg:col-span-4 sticky top-24">
                    <div className="bg-gray-900 rounded-[40px] p-8 text-white shadow-3xl shadow-indigo-200/20">
                        <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
                            <CreditCard className="text-indigo-400" size={24} />
                            Order Summary
                        </h2>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-gray-400 font-medium">
                                <span>Subtotal</span>
                                <span className="text-white">${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-400 font-medium">
                                <span>Shipping</span>
                                <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs">Free</span>
                            </div>
                            <div className="flex justify-between text-gray-400 font-medium">
                                <span>Tax</span>
                                <span className="text-white">$0.00</span>
                            </div>
                        </div>

                        <div className="h-px bg-gray-800 mb-8" />

                        <div className="flex justify-between items-end mb-10">
                            <span className="text-gray-400 font-medium">Total Price</span>
                            <span className="text-3xl font-black tracking-tight">${totalPrice.toFixed(2)}</span>
                        </div>

                        <button
                            onClick={() => setIsCheckoutOpen(true)}
                            className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-bold text-lg flex items-center justify-center gap-2 transition-all hover:bg-indigo-700 hover:scale-[1.03] active:scale-95 shadow-xl shadow-indigo-900/40 group"
                        >
                            Checkout Now
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <Link
                            to="/"
                            className="mt-6 w-full py-4 text-gray-400 hover:text-white transition-colors text-center block font-bold text-sm"
                        >
                            Continue Shopping
                        </Link>
                    </div>

                    <div className="mt-8 p-6 bg-white border border-gray-100 rounded-[32px] shadow-sm flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <ShoppingBag size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-900">Safe & Secure Checkout</p>
                            <p className="text-xs text-gray-500 font-medium">100% money back guarantee</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* New Components */}
            <CheckoutModal
                isOpen={isCheckoutOpen}
                onClose={() => setIsCheckoutOpen(false)}
                onConfirm={handleCheckoutConfirm}
                totalPrice={totalPrice}
            />
            <SuccessPopup
                isOpen={isSuccessOpen}
                onClose={() => setIsSuccessOpen(false)}
            />
        </div>
    );
}
