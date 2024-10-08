import { useEffect, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import ProCard from './../components/ProCard';
import axios from "axios";
import FilterBar from "../components/FilterBar";
import queryString from 'query-string';

const Products = () => {
    
    const [currentPage, setCurrentPage] = useState(0);
    const [pages, setPages] = useState([0]);
    const [size, setSize] = useState(9);

    const [productsCount, setProductsCount] = useState(0);
    // const initProductCount = useLoaderData();
    // setProductsCount(initProductCount);

    const [products, setProducts] = useState([]);

    const [filterData, setFilterData] = useState({})


    useEffect(() => {
        const query = queryString.stringify(filterData);
        
        // get products
        axios.get(`${import.meta.env.VITE_SERVERURL}/products?${query}&page=${currentPage}&size=${size}`)
            .then(({ data }) => {
                console.log(data);
                setProducts(data.result);
                setProductsCount(data.count)
            })

        // // get products count
        // axios.get(`${import.meta.env.VITE_SERVERURL}/productscount?${query}`)
        //     .then(({ data }) => {
        //         setProductsCount(data.count)
        //     })

        // set page count
        if (productsCount) {
            const pageCount = Math.ceil(productsCount / size);
            setPages([...Array(pageCount).keys()]);
        }
    }, [ productsCount, size, filterData, currentPage])


    const handleFilter = e => {
        e.preventDefault();

        console.log(e);
        const { name, value } = e.target;

        setFilterData(prevData => {
            const newData = {
                ...prevData,
                [name]: value
            }
            return newData
        })
        setCurrentPage(0)
    }

    // handle pagination
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
    const handleSize = e =>{
        e.preventDefault();
        setSize(e.target.value)
    }

    return (
        <div className="md:flex">
            {/* sidebar */}
            <FilterBar handleFilter={handleFilter}></FilterBar>

            <div className="md:w-3/4 mx-auto">
                {/* products */}
                <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3">
                    {
                        products.map((product, idx) => <ProCard data={product} key={idx}></ProCard>)
                    }

                </div>

                {/* pagination btn */}
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

                    <select onChange={handleSize} className="SSBtnOutline">
                        <option value="9">9</option>
                        <option value="12">12</option>
                        <option value="18">18</option>
                        <option value="24">24</option>
                    </select>
                </div>
            </div>

        </div>
    );
};

export default Products;