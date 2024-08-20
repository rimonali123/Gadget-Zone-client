import PropTypes from 'prop-types'

export default function Heading({ title, subtitle, center }) {
    return (
        <div>
            <div className={center ? 'text-center' : 'text-start'}>
                <div className='text-2xl font-bold'>{title}</div>
                <div className='font-light text-neutral-500 mt-2'>{subtitle}</div>
            </div>
        </div>
    )
}
Heading.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    center: PropTypes.bool,
}
