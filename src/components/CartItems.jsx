//inside the cart button the selected items will be display

import { XCircle, Trash2 } from 'lucide-react';

const CartItems= ({ isOpen, cartComponent, onClose, removeCart }) => {
    if (!isOpen) return null; 

    // Calculate Total Value
    const cartTotal = cartComponent.reduce((acc, item) => acc + item.price, 0);

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
            onClick={onClose}
        >
            <div 
                className="bg-white w-full max-w-lg h-full p-6 shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-in-out"
                onClick={e => e.stopPropagation()} 
            >
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Your Cart ({cartComponent.length} items)
                    </h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition" aria-label="Close Cart">
                        <XCircle size={30} />
                    </button>
                </div>

              
                {cartComponent.length === 0 ? (
                    <p className="text-lg text-gray-500 text-center py-10">Your cart is empty.</p>
                ) : (
                    <div className="space-y-4">
                        {cartComponent.map(item => (
                            <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain rounded-lg border" />
                                
                                <div className="flex-1 min-w-0">
                                    <p className="text-base font-medium text-gray-800 truncate">{item.title}</p>
                                    <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                                </div>

                                <button 
                                    onClick={() => removeCart(item.id)}
                                    className="text-red-500 hover:text-red-700 transition p-2 rounded-full hover:bg-red-50"
                                    aria-label={`Remove ${item.title} from cart`}
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-8 pt-4 border-t-2 border-indigo-100 sticky bottom-0 bg-white">
                    <div className="flex justify-between items-center text-2xl font-bold mb-4">
                        <span>Total:</span>
                        <span className="text-green-600">${cartTotal.toFixed(2)}</span>
                    </div>
                    <button className="w-full py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition"  disabled={cartComponent.length === 0}>
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItems;