import { ScaleLoader } from "react-spinners";
import PropTypes from 'prop-types'
export default function Loading({ smallHeight }) {
    return (
        <div
            className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
        >
            <ScaleLoader size={100} color='red' />
        </div>
    )
}
Loading.propTypes = {
    smallHeight: PropTypes.bool,
  }