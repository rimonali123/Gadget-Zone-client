
import PropTypes from 'prop-types'
export default function SearchPhone({setName}) {

  
    const handleSearch = (e) => {
        const data = e.target.value;
        setName(data)

    }

    return (

        <div className="">
            <div className="label">
                <span className="label-text">Search By Name</span>
                
            </div>
            <input
                onChange={handleSearch}
                type="text"
                placeholder="Type here"
                className="input input-bordered border border-[#578de1] w-full input-sm" />
        </div>
    )

}
SearchPhone.propTypes = {
    setName: PropTypes.any,
}
