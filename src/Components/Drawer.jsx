import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { BsFillHouseAddFill } from 'react-icons/bs'
import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MdHomeWork } from 'react-icons/md'
export default function Drawer() {

    const [isActive, setActive] = useState(false)

    const handleToggle = () => {
        setActive(!isActive)
    }

    return (
        <div>
            {/* Small Screen Navbar */}
            <div className='bg-base-100 text-base-content flex justify-between md:hidden shadow-lg'>
                <div className='p-4'>
                    <Link to='/'>
                        <img
                            src='https://i.ibb.co/4ZXzmq5/logo.png'
                            alt='logo'
                            className='w-24'
                        />
                    </Link>
                </div>

                <button
                    onClick={handleToggle}
                    className='btn btn-ghost btn-square focus:outline-none'
                >
                    <AiOutlineBars className='h-6 w-6' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`drawer-side z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-base-100 shadow-lg w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive ? '-translate-x-full' : 'translate-x-0'
                    } md:translate-x-0 transition duration-200 ease-in-out`}
            >
                <div>
                    {/* Logo */}
                    <div className='hidden md:flex justify-center items-center py-4'>
                        <Link to='/'>
                            <img
                                src='https://i.ibb.co/4ZXzmq5/logo.png'
                                alt='logo'
                                className='w-28'
                            />
                        </Link>
                    </div>

                    {/* Nav Items */}
                    <nav className='flex flex-col mt-6 space-y-2'>
                        <NavLink
                            to='statistics'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 transition-colors duration-300 transform rounded-lg ${isActive
                                    ? 'bg-primary text-white'
                                    : 'text-base-content hover:bg-base-200'
                                }`
                            }
                        >
                            <BsGraphUp className='w-5 h-5' />
                            <span className='ml-4 font-medium'>Statistics</span>
                        </NavLink>

                        <NavLink
                            to='add-room'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 transition-colors duration-300 transform rounded-lg ${isActive
                                    ? 'bg-primary text-white'
                                    : 'text-base-content hover:bg-base-200'
                                }`
                            }
                        >
                            <BsFillHouseAddFill className='w-5 h-5' />
                            <span className='ml-4 font-medium'>Add Room</span>
                        </NavLink>

                        <NavLink
                            to='my-listings'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 transition-colors duration-300 transform rounded-lg ${isActive
                                    ? 'bg-primary text-white'
                                    : 'text-base-content hover:bg-base-200'
                                }`
                            }
                        >
                            <MdHomeWork className='w-5 h-5' />
                            <span className='ml-4 font-medium'>My Listings</span>
                        </NavLink>
                    </nav>
                </div>

                {/* Profile and Logout */}
                <div>
                    <hr className='my-4' />
                    <NavLink
                        to='/dashboard/profile'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 transition-colors duration-300 transform rounded-lg ${isActive
                                ? 'bg-primary text-white'
                                : 'text-base-content hover:bg-base-200'
                            }`
                        }
                    >
                        <FcSettings className='w-5 h-5' />
                        <span className='ml-4 font-medium'>Profile</span>
                    </NavLink>
                    <button
                        // onClick={logOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-base-content hover:bg-base-200 transition-colors duration-300 transform rounded-lg'
                    >
                        <GrLogout className='w-5 h-5' />
                        <span className='ml-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
