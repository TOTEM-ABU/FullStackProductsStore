import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const ProductCard = ({ product }) => {
    const { user } = useUserStore();
    const { addToCart } = useCartStore();

    const handleAddToCart = () => {
        if (!user) {
            toast.error("Please login to add products to cart", { id: "login" });
            return;
        }
        addToCart(product);
    };

    return (
        <div className='flex w-full relative flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-lg hover:shadow-emerald-500/20 transition'>
            {/* ✅ Image Container */}
            <div className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl group'>
                <img
                    src={product.image}
                    alt={product.name}
                    className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-105'
                    onError={(e) => (e.target.src = "https://via.placeholder.com/300?text=No+Image")}
                />

                {/* ✅ Hover Overlay - endi to‘liq qora emas */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </div>

            {/* ✅ Text & Button */}
            <div className='mt-4 px-5 pb-5'>
                <h5 className='text-xl font-semibold tracking-tight text-white line-clamp-1'>
                    {product.name}
                </h5>

                <div className='mt-2 mb-5 flex items-center justify-between'>
                    <p>
                        <span className='text-3xl font-bold text-emerald-400'>
                            ${product.price}
                        </span>
                    </p>
                </div>

                <button
                    className='flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 transition'
                    onClick={handleAddToCart}
                >
                    <ShoppingCart size={22} className='mr-2' />
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
