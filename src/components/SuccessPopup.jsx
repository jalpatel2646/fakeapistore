import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShoppingBag, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function SuccessPopup({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/90 backdrop-blur-xl"
                />

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 100 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 100 }}
                    className="relative text-center max-w-sm"
                >
                    <div className="w-32 h-32 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-3xl shadow-indigo-300">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: 'spring' }}
                        >
                            <CheckCircle2 size={64} className="text-white" />
                        </motion.div>
                    </div>

                    <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Congratulations!</h2>
                    <p className="text-lg text-gray-500 font-medium mb-12">
                        Your order has been placed successfully. Thank you for shopping with us!
                    </p>

                    <div className="flex flex-col gap-4">
                        <NavLink
                            to="/"
                            onClick={onClose}
                            className="px-8 py-5 bg-indigo-600 text-white rounded-[24px] font-bold text-lg transition-all hover:bg-indigo-700 hover:scale-105 active:scale-95 shadow-xl shadow-indigo-200 flex items-center justify-center gap-2"
                        >
                            Continue Shopping
                            <ArrowRight size={20} />
                        </NavLink>
                    </div>
                </motion.div>

                {/* Confetti-like effect (Simplified) */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {Array(20).fill(0).map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: -10,
                                rotate: 0,
                                opacity: 1
                            }}
                            animate={{
                                y: window.innerHeight + 10,
                                rotate: 360,
                                opacity: 0
                            }}
                            transition={{
                                duration: Math.random() * 2 + 1,
                                delay: Math.random() * 0.5,
                                repeat: Infinity,
                                repeatDelay: Math.random() * 2
                            }}
                            className="w-3 h-3 rounded-sm absolute"
                            style={{ backgroundColor: ['#4F46E5', '#818CF8', '#C084FC', '#F472B6'][i % 4] }}
                        />
                    ))}
                </div>
            </div>
        </AnimatePresence>
    );
}
