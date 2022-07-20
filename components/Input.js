import PropTypes from 'prop-types'

const Input = ({
  type = 'text',
  theme = 'default',
  placeholder = '',
  required = true,
}) => {
  const classes = [
    'input',
    `input--${theme}`,
  ]

  return (
    <>
      <div className="input__wrapper">
        <input
          className={classes.join(' ')}
          type={type}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  theme: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export default Input