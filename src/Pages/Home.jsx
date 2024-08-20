



import PropTypes from 'prop-types';
import BrandCategories from "../Components/BrandCategories";
import Phones from "../Components/Phones";
import SearchPhone from "../Components/SearchPhone";
import SeriesCategories from "../Components/SeriesCategories";
import LowToHighOrHighToLow from "../Components/LowToHighOrHighToLow";
import SortByDate from "../Components/SortByDate";
import { useState } from 'react';
import { GrLogout } from 'react-icons/gr';
import { AiOutlineBars } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from "../Hooks/useAuth";
import { FaUser } from "react-icons/fa";
import Loading from '../Components/Loading';

// Modal Component
function ProfileModal({ show, onClose, user }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="bg-gray-100 flex flex-col items-center justify-center">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-24"></div>
            <div className="relative flex justify-center">
              <img
                className="w-24 h-24 rounded-full border-4 border-white -mt-12"
                src={user?.photoURL || "https://i.ibb.co/Rz9Yd5k/profile-avatar.png"} // User's profile picture
                alt="Profile Avatar"
              />
            </div>
            <div className="p-4 text-center ">
              <h3 className="text-2xl font-semibold text-gray-800">{user?.displayName || "No Name"}</h3>
              <p className="text-gray-500 py-1">{user?.email}</p>


              <button
                onClick={onClose}
                className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { user, logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setActive(!isActive);
  };

  const [name, setName] = useState('');
  const [sort, setSort] = useState('');
  const [DateSort, setDateSort] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const {loading}=useAuth();

  if(loading) return <Loading/>

  return (
    <div className="relative min-h-screen md:flex">
      <div>
        {/* Small Screen Navbar */}
        <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
          <div>
            <div className="block cursor-pointer p-4 font-bold">
              <Link to="/">
                <img
                  className="flex items-center"
                  src="https://i.ibb.co/5L8tWX5/logo.png"
                  alt="logo"
                  width="100"
                  height="100"
                />
              </Link>
            </div>
          </div>
          <button
            onClick={handleToggle}
            className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
          >
            <AiOutlineBars className="h-5 w-5" />
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
            } md:translate-x-0 transition duration-200 ease-in-out`}
        >
          <div>
            <div>
              <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto">
                <Link to="/">
                  <img
                    src="https://i.ibb.co/5L8tWX5/logo.png"
                    alt="logo"
                    width="100"
                    height="100"
                  />
                </Link>
              </div>
            </div>

            {/* Nav Items */}
            <div className="flex flex-col justify-between flex-1 mt-6">
              <nav className="space-y-3">


                <BrandCategories />
                <SeriesCategories />

                <SearchPhone setName={setName} />
                <LowToHighOrHighToLow sort={sort} setSort={setSort} />
                <SortByDate DateSort={DateSort} setDateSort={setDateSort} />
                <div className='flex justify-center'>
                  <button onClick={() => navigate("/")} className='btn w-1/2 border btn-sm border-[#578de1]'>Reset</button>
                </div>
                <div className='flex justify-center'>
                  <div>
                    <div>
                      {user && (
                        <div>
                          {/* Profile Menu */}
                          <button
                            onClick={() => setShowProfileModal(true)}
                            className="flex items-center px-4 py-2 my-5 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700 text-gray-600"
                          >
                            <FaUser className="w-5 h-5" />
                            <span className="mx-4 font-medium">Profile</span>
                          </button>
                          <button
                            onClick={logOut}
                            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform"
                          >
                            
                            <GrLogout className="w-5 h-5" />
                            <span className="mx-4 font-medium">Logout</span>
                          </button>
                        </div>
                      )}
                    </div>
                    <div>
                      {!user && (
                        <Link className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform" to="/login">
                          <GrLogout className="w-5 h-5" />
                          <span className="mx-4 font-medium">Login</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <div>


          </div>
        </div>
      </div>

      <div className="flex-1 md:ml-64">
        <Phones
          DateSort={DateSort}
          sort={sort}
          productname={name}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
      </div>

      {/* Profile Modal */}
      <ProfileModal show={showProfileModal} onClose={() => setShowProfileModal(false)} user={user} />
    </div>
  );
}

ProfileModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
