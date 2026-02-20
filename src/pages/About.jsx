import { Info, Code2, Rocket, Heart, ExternalLink } from 'lucide-react';

export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-8">
                    <Info size={14} />
                    <span>About Project</span>
                </div>

                <h1 className="text-5xl font-black text-gray-900 mb-8 tracking-tight">
                    Modern Mini <span className="text-indigo-600">eCommerce</span> Experience.
                </h1>

                <p className="text-xl text-gray-500 font-medium leading-relaxed mb-12">
                    ShopModern is a functional demonstration of a modern minimal eCommerce interface
                    built with cutting-edge web technologies. Inspired by high-end startup
                    design systems, it focuses on clarity, speed, and premium user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-[32px] border border-gray-50 shadow-sm hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-100">
                            <Code2 size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">The Tech Stack</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'React', desc: 'UI Library' },
                                { name: 'Tailwind CSS v4', desc: 'Modern Styling' },
                                { name: 'Framer Motion', desc: 'Premium Animations' },
                                { name: 'Lucide Icons', desc: 'Minimal Iconography' }
                            ].map((tech) => (
                                <li key={tech.name} className="flex items-center justify-between">
                                    <span className="font-bold text-gray-700">{tech.name}</span>
                                    <span className="text-xs text-indigo-400 font-bold uppercase tracking-widest">{tech.desc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-[32px] border border-gray-50 shadow-sm hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-100">
                            <Rocket size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Core Principles</h3>
                        <ul className="space-y-3">
                            {[
                                'Apple-inspired Simplicity',
                                'Responsive first design',
                                'Real-time state persistence',
                                'Performance optimized paths'
                            ].map((p) => (
                                <li key={p} className="flex items-center gap-2 text-gray-600 font-medium">
                                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                                    {p}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-[40px] p-10 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <ExternalLink size={24} className="text-indigo-400" />
                            FakeStore API
                        </h2>
                        <p className="text-gray-400 font-medium mb-8 leading-relaxed">
                            This application consumes production-ready product data from the FakeStore API.
                            It provides a realistic simulation of a live eCommerce inventory, including titles,
                            descriptions, prices, categories, and high-quality product images.
                        </p>
                        <a
                            href="https://fakestoreapi.com"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-2xl font-bold hover:bg-gray-50 transition-colors"
                        >
                            API Documentation
                            <ExternalLink size={18} />
                        </a>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
                </div>

                <div className="mt-20 pt-10 border-t border-gray-100 text-center">
                    <p className="flex items-center justify-center gap-2 text-gray-400 font-bold text-sm tracking-widest uppercase">
                        Built with <Heart className="text-red-400 fill-red-400" size={14} /> for Modern Web
                    </p>
                </div>
            </div>
        </div>
    );
}
