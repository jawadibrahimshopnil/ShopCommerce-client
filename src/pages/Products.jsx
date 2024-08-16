import { useEffect, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import ProCard from './../components/ProCard';
import axios from "axios";

const Products = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [pages, setPages] = useState([0]);
    const size = 10;

    const [productsCount, setProductsCount] = useState(40);
    const [products, setProducts] = useState([]);

    axios.get(`${import.meta.env.VITE_SERVERURL}/products`)
    .then(({data})=>{
        console.log(data);
    })

    useEffect(() => {
        
        // set page count
        if (productsCount) {
            const pageCount = Math.ceil(productsCount / size);
            setPages([...Array(pageCount).keys()]);
        }
    }, [productsCount, size])


    const handleFilter = (e) => {
        e.preventDefault();

        const form = e.target;
        // filtering code


    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages.length-1) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div className="md:flex">
            <div className="md:w-1/4 border shadow-md md:">
                <form onSubmit={handleFilter} className="my-4 p-4">
                    <h3 className="text-center text-2xl mb-2">Filters</h3>
                    <div className="mb-2">
                        <label>Type:</label>
                        <select
                            name="type"
                            className="w-full px-4 py-2 border rounded-md border-gray-400"
                        >
                            <option value="">Choose gender…</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label>Division:</label>
                        <select
                            name="division"
                            className="w-full px-4 py-2 border rounded-md border-gray-400"
                        >
                            <option value="">Choose Division...</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chattogram">Chattogram</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Barisal">Barisal</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Maymansign">Maymansign</option>
                            <option value="Sylhet">Sylhet</option>
                        </select>
                    </div>
                    <button className="SSBtn my-2 w-full font-semibold text-lg">Apply</button>
                </form>
            </div>

            <div className="md:w-3/4 mx-auto">
                <div className="p-6 grid place-items-center sm:grid-cols-2 lg:grid-cols-3">
                    {
                        Array(7).fill().map((_, idx) => <ProCard key={idx}></ProCard>)
                    }

                </div>

                <div className="flex justify-center my-4 space-x-1 text-gray-800">
                    <button onClick={handlePrevPage} className="SSBtnOutline border rounded-md shadow-md ">
                        <MdArrowBackIos className="w-4 h-4" />
                    </button>

                    {
                        pages.map((page)=><button key={page} onClick={()=>setCurrentPage(page)} className={` px-3 py-1 ${page === currentPage ? "SSBtn" : "SSBtnOutline"}  border rounded shadow-md`}>{page+1}</button>)
                    }

                    <button onClick={handleNextPage} className="SSBtnOutline border rounded-md shadow-md ">
                        <MdArrowForwardIos className="w-4 h-4" />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Products;