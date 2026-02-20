import { motion, AnimatePresence } from 'framer-motion';
import { X, QrCode, CreditCard, Wallet, CheckCircle2, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

export default function CheckoutModal({ isOpen, onClose, onConfirm, totalPrice }) {
    const [paymentMethod, setPaymentMethod] = useState('online');
    const [isProcessing, setIsProcessing] = useState(false);

    if (!isOpen) return null;

    const handlePay = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            onConfirm();
        }, 2000);
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
                />

                {/* Modal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative bg-white w-full max-w-md rounded-[32px] overflow-hidden shadow-2xl"
                >
                    <div className="p-8">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-black text-gray-900 tracking-tight">Checkout</h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                            >
                                <X size={20} className="text-gray-400" />
                            </button>
                        </div>

                        {/* Payment Options */}
                        <div className="flex flex-col gap-4 mb-8">
                            <button
                                onClick={() => setPaymentMethod('online')}
                                className={`flex items-center gap-4 p-5 rounded-3xl border-2 transition-all ${paymentMethod === 'online' ? 'border-indigo-600 bg-indigo-50/50' : 'border-gray-50 bg-gray-50/30'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${paymentMethod === 'online' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-400'
                                    }`}>
                                    <CreditCard size={24} />
                                </div>
                                <div className="text-left">
                                    <p className={`font-bold ${paymentMethod === 'online' ? 'text-indigo-900' : 'text-gray-900'}`}>Online Payment</p>
                                    <p className="text-sm text-gray-500 font-medium text-opacity-80">Pay via GPay / UPI</p>
                                </div>
                            </button>

                            <button
                                onClick={() => setPaymentMethod('cod')}
                                className={`flex items-center gap-4 p-5 rounded-3xl border-2 transition-all ${paymentMethod === 'cod' ? 'border-indigo-600 bg-indigo-50/50' : 'border-gray-50 bg-gray-50/30'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${paymentMethod === 'cod' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-400'
                                    }`}>
                                    <Wallet size={24} />
                                </div>
                                <div className="text-left">
                                    <p className={`font-bold ${paymentMethod === 'cod' ? 'text-indigo-900' : 'text-gray-900'}`}>Cash on Delivery</p>
                                    <p className="text-sm text-gray-500 font-medium text-opacity-80">Pay when receiving</p>
                                </div>
                            </button>
                        </div>

                        {/* QR Code Section for Online Payment */}
                        {paymentMethod === 'online' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="mb-8 p-6 bg-slate-50 rounded-3xl text-center border border-dashed border-indigo-200"
                            >
                                <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4">Scan QR to Pay</p>
                                <div className="w-48 h-48 bg-white mx-auto rounded-2xl flex items-center justify-center shadow-sm p-4 mb-2">
                                    {/* Using a generic URL placeholder since image gen might fail, or can try to reference the user's image if saved */}
                                    <img
                                        src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=ShopModernPayment"
                                        alt="Payment QR"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <p className="text-sm font-bold text-gray-900">${totalPrice.toFixed(2)}</p>
                            </motion.div>
                        )}

                        <button
                            onClick={handlePay}
                            disabled={isProcessing}
                            className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-bold text-lg transition-all hover:bg-indigo-700 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-3 overflow-hidden"
                        >
                            {isProcessing ? (
                                <>
                                    <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                `Complete Order — $${totalPrice.toFixed(2)}`
                            )}
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
