import PropTypes from 'prop-types'

const Header = ({ title }) => {

    return (
        <div className='container'>
            <h1>Hello Again</h1>
            <h2 style={{color:'red'}}>{title}</h2>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
