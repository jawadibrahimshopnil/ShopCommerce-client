import { Outlet } from "react-router-dom";
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';

const Root = () => {
    return (
        <>
            <div className=' max-w-screen-xl mx-auto'>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>

        </>
    );
};

export default Root;