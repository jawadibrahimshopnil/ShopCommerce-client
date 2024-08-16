import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { Link } from "react-router-dom";

const ProCard = ({ data }) => {
    const { name, imageUrl, price, description, rating, brand, category } = data;
    return (
        <div className='flex flex-col m-2 p-5 w-60 lg:w-72 border-2 bg-white mx-auto sm:m-2 rounded-lg shadow-xl'>
            <div>
                <img className="h-52 overflow-hidden border mx-auto" src={imageUrl} />
            </div>

            <div className="grow">
                <p className="grow my-1 text-lg font-semibold">{name}</p>

                <p className="text-sm">{description}</p>
            </div>

            <div className="my-3">
                <table className="w-full">
                    <tbody>
                        <tr>
                            <th className="border-2 border-l-0 p-2 text-left font-semibold">Brand</th>
                            <td className="border-2 border-r-0 p-2">{brand}</td>
                        </tr>
                        <tr>
                            <th className="border-2 border-l-0 p-2 text-left font-semibold">Date</th>
                            <td className="border-2 border-r-0 p-2">date</td>
                        </tr>
                        <tr>
                            <th className="border-2 border-l-0 p-2 text-left font-semibold w-1/2">Category</th>
                            <td className="border-2 border-r-0 p-2">{category}</td>
                        </tr>
                        <tr>
                            <th className="border-2 border-l-0 p-2 text-left font-semibold">Price</th>
                            <td className="border-2 border-r-0 p-2 text-green-600 font-bold">{price} TK</td>
                        </tr>
                        <tr>
                            <th className="border-2 border-l-0 p-2 text-left font-semibold">Rating</th>
                            <td className="border-2 border-r-0 p-2"><Rating
                                style={{ maxWidth: 180 }}
                                value={rating}
                                readOnly
                            /></td>
                        </tr>
                    </tbody>

                </table>
            </div>
            <div className="flex justify-between gap-2">
                <Link to={`/`} className="SSBtn text-center">Buy Now</Link>
            </div>
        </div>
    );
};

export default ProCard;