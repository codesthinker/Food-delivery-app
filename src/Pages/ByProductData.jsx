import React, { useContext } from 'react';
import { RestaurantContext } from '../components/Restorent/Contextapi';
import { MdDelete } from "react-icons/md";

const ByProductData = () => {
    const { addcart, Remove } = useContext(RestaurantContext); useContext
    console.log(addcart)
    return (
        <div>
            <header className="bg-gray-100 p-4 text-center mt-24">
                <h1 className="text-3xl font-bold">Your Products Details</h1>
            </header>

            <div className="mt-8 flex justify-center">
                {addcart.length === 0 ? (
                    <div className="text-lg font-semibold text-red-700">
                        Sorry Your cart is empty.
                    </div>
                ) : (
                    <table className="w-3/4 border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-4 border border-gray-300">Image</th>
                                <th className="p-4 border border-gray-300">Name</th>
                                <th className="p-4 border border-gray-300">Difficulty</th>
                                <th className="p-4 border border-gray-300">Calories per Serving</th>
                                <th className="p-4 border border-gray-300">Rating</th>
                                <th className="border border-gray-300">Cancel Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            {addcart.map((product) => (
                                <tr key={product.id}>
                                    <td className="p-4 border border-gray-300">
                                        <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
                                    </td>
                                    <td className="p-4 border border-gray-300">{product.name}</td>
                                    <td className="p-4 border border-gray-300">{product.difficulty}</td>
                                    <td className="p-4 border border-gray-300">{product.caloriesPerServing}</td>
                                    <td className="p-4 border border-gray-300">{product.rating}</td>
                                    <td className="p-4 border border-gray-300 text-center">
                                        <button onClick={() => Remove(product.id)} className="border text-red-600 hover:bg-red-100">
                                            <MdDelete />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default ByProductData;
