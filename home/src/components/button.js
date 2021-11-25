import PropTypes from 'prop-types'

const button = ({ color, text }) => {
    const onClick = (e) => {
        alert("Hello");
    }

    return (
        <div>
            <button 
                onClick={buttonFcnt}
                style={{ backgroundColor:color }}
                className='btn'
            >

                {text}

            </button>
        </div>
    )
}

button.defaultProps = {
    color: 'blue',
}

button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default button
