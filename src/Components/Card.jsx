import PropTypes from 'prop-types'
import ReactStarsRating from 'react-awesome-stars-rating';
import { FaCartPlus } from 'react-icons/fa';

export default function Card({ phone }) {


    return (
        <div>

            <div data-aos="zoom-in" data-aos-duration="1000" className='col-span-1 cursor-pointer group bg-white hover:border hover:border-green-500 rounded-xl'>
                <div className='flex flex-col gap-2 w-full pb-5'>
                    <div
                        className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
                    >
                        <img
                            className='object-cover h-full w-full group-hover:scale-110 transition  p-10' 
                            src={phone?.ProductImage}
                            alt='image'
                        />
                    
                    </div>
                    <div className='font-semibold text-lg'>{phone?.productname}</div>
                    <div className='font-semibold text-base'>{phone?.category} Phone</div>
                    <div className='font-light text-neutral-500 '>
                        <ReactStarsRating className="flex justify-center" value={phone?.Ratings} />;
                    </div>
                    <div className='flex flex-row items-center justify-center gap-4'>
                        <div className='font-semibold'>$ {phone?.price}</div>
                        <div className='font-semibold'>$ {new Date(phone?.creationdate).toLocaleDateString()}</div>

                        <div className='font-light text-2xl'><FaCartPlus />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
Card.propTypes = {
    phone: PropTypes.object,
}
