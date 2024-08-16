import { useEffect, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import ProCard from './../components/ProCard';
import axios from "axios";
import FilterBar from "../components/FilterBar";

const Products = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [pages, setPages] = useState([0]);
    const size = 10;

    const [productsCount, setProductsCount] = useState(40);
    const [products, setProducts] = useState([]);





    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVERURL}/products`)
            .then(({ data }) => {
                setProducts(data)
                console.log(data);
            })

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
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div className="md:flex">
            <FilterBar handleFilter={handleFilter}></FilterBar>

            <div className="md:w-3/4 mx-auto">
                <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3">
                    {
                        products.map((product, idx) => <ProCard data={product} key={idx}></ProCard>)
                    }

                </div>

                <div className="flex justify-center my-4 space-x-1 text-gray-800">
                    <button onClick={handlePrevPage} className="SSBtnOutline border rounded-md shadow-md ">
                        <MdArrowBackIos className="w-4 h-4" />
                    </button>

                    {
                        pages.map((page) => <button key={page} onClick={() => setCurrentPage(page)} className={` px-3 py-1 ${page === currentPage ? "SSBtn" : "SSBtnOutline"}  border rounded shadow-md`}>{page + 1}</button>)
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