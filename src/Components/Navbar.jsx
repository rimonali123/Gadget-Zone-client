import { FaShoppingCart, FaUser } from "react-icons/fa";
export default function Navbar() {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                       
                    </div>
                    <a className="btn btn-ghost text-xl">Smart Gadget zone</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                   
                </div>
                <div className="navbar-end ">
                    <div className="flex items-center lg:gap-10 md:gap-7 gap-5">
                        <p className="text-2xl"><FaShoppingCart /></p>
                        <p className="text-2xl"><FaUser /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
