
import PropTypes from 'prop-types'

export default function LowToHighOrHighToLow({ sort, setSort }) {
    return (
        <div>
            {/* sort in new method */}
            <div>
                <div className="label">
                    <span className="label-text">Sort By Price</span>

                </div>
                <select
                    onChange={e => {
                        setSort(e.target.value)

                    }}
                    value={sort}
                    name='sort'
                    id='sort'
                    className="select border border-[#578de1] select-sm text-center w-full"
                // className='border p-4 rounded-md'
                >
                    <option selected>Sort By Price</option>
                    <option value='dsc'>High to Low</option>
                    <option value='asc'>Low to High</option>
                </select>
            </div>
        </div>
    )
}
LowToHighOrHighToLow.propTypes = {
    sort: PropTypes.any,
    setSort: PropTypes.any,
    
}