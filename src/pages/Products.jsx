import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Star, ShoppingCart, Plus, Search, SlidersHorizontal, PackageSearch } from 'lucide-react';
import Hero from '../components/Hero';

// Skeleton Component
function ProductSkeleton() {
    return (
        <div className="bg-white rounded-3xl p-6 border border-gray-50 shadow-sm animate-pulse">
            <div className="aspect-square bg-gray-100 rounded-2xl mb-6" />
            <div className="h-4 bg-gray-100 rounded w-1/3 mb-4" />
            <div className="h-6 bg-gray-100 rounded w-full mb-4" />
            <div className="h-6 bg-gray-100 rounded w-1/2 mb-6" />
            <div className="h-12 bg-gray-100 rounded-2xl w-full" />
        </div>
    );
}

function StarRating({ rate, count }) {
    const stars = Math.round(rate);
    return (
        <div className="flex items-center gap-1 my-3">
            {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} className={s <= stars ? 'fill-amber-400 text-amber-400' : 'text-gray-200'} />
            ))}
            <span className="text-xs text-gray-400 ml-1 font-medium">({count})</span>
        </div>
    );
}

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState('All');
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('default');

    const { addToCart, cart } = useCart();

    useEffect(() => {
        setLoading(true);
        fetch('https://fakestoreapi.com/products')
            .then((res) => {
                if (!res.ok) throw new Error('API request failed');
                return res.json();
            })
            .then((data) => {
                setProducts(data);
                const unique = ['All', ...new Set(data.map((p) => p.category))];
                setCategories(unique);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const getCartItem = (id) => cart.find((item) => item.id === id);

    let displayedProducts = [...products];
    if (category !== 'All') displayedProducts = displayedProducts.filter((p) => p.category === category);
    if (searchTerm.trim()) {
        displayedProducts = displayedProducts.filter((p) =>
            p.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    if (sortBy === 'price-asc') displayedProducts.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') displayedProducts.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') displayedProducts.sort((a, b) => b.rating.rate - a.rating.rate);

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="text-center">
                    <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <PackageSearch size={40} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
                    <p className="text-gray-500 mb-8">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-8 py-3 bg-gray-900 text-white rounded-2xl font-bold transition-transform hover:scale-105"
                    >
                        Retry Loading
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="pb-24">
            {category === 'All' && !searchTerm && <Hero />}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header & Filters */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
                            Browse Products
                        </h2>
                        <p className="text-gray-500 font-medium">
                            Showing {displayedProducts.length} high-quality essentials
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-2xl shadow-sm">
                            <SlidersHorizontal size={16} className="text-gray-400" />
                            <select
                                className="bg-transparent text-sm font-semibold outline-none text-gray-700 cursor-pointer"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                {categories.map(c => <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>)}
                            </select>
                        </div>

                        <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-2xl shadow-sm">
                            <select
                                className="bg-transparent text-sm font-semibold outline-none text-gray-700 cursor-pointer"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="default">Featured</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="rating">Top Rated</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {loading ? (
                        Array(8).fill(0).map((_, i) => <ProductSkeleton key={i} />)
                    ) : displayedProducts.length > 0 ? (
                        displayedProducts.map((p) => {
                            const cartItem = getCartItem(p.id);
                            return (
                                <div key={p.id} className="group bg-white rounded-3xl p-6 border border-gray-50 shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50 hover:-translate-y-2 transition-all duration-500">
                                    <div className="aspect-square bg-gray-50 rounded-2xl p-6 mb-6 flex items-center justify-center relative overflow-hidden">
                                        <img src={p.image} alt={p.title} className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" />
                                        <span className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400 border border-gray-100 shadow-sm">
                                            {p.category}
                                        </span>
                                    </div>

                                    <div className="flex-1 flex flex-col">
                                        <h3 className="text-gray-900 font-bold mb-1 line-clamp-2 min-h-[3rem] group-hover:text-indigo-600 transition-colors">
                                            {p.title}
                                        </h3>
                                        <StarRating rate={p.rating.rate} count={p.rating.count} />

                                        <div className="mt-auto flex items-center justify-between gap-4">
                                            <span className="text-2xl font-black text-gray-900">${p.price.toFixed(2)}</span>
                                            <button
                                                onClick={() => addToCart(p)}
                                                className={`p-3 rounded-2xl transition-all ${cartItem
                                                        ? 'bg-indigo-50 text-indigo-600'
                                                        : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'
                                                    }`}
                                            >
                                                {cartItem ? <Plus size={20} className="rotate-45" /> : <ShoppingCart size={20} />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <PackageSearch size={64} className="mx-auto text-gray-200 mb-6" />
                            <h3 className="text-xl font-bold text-gray-900">No products found</h3>
                            <p className="text-gray-500">Try adjusting your search or filters</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
