import PropTypes from 'prop-types'

export default function SortByDate({ setDateSort, DateSort }) {
  return (
    <div>
      
      <div>

        <div className="label">
          <span className="label-text">Sort By Date</span>

        </div>
        <select
          onChange={e => {
            setDateSort(e.target.value)

          }}
          value={DateSort}
          name='sort'
          id='sort'
          className="select border border-[#578de1] select-sm text-center w-full"
       
        >
          <option value=""  selected>Sort by Date</option>
          <option value="newest"> Newest first</option>
          <option value="oldest"> Oldest first</option>
        </select>
      </div>
    </div>
  )
}
SortByDate.propTypes = {
  setDateSort: PropTypes.any,
  DateSort: PropTypes.any,

}