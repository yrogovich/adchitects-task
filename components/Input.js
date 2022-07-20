import PropTypes from 'prop-types'
import {useState} from 'react'

const Input = ({
  type = 'text',
  theme = 'default',
  placeholder = '',
  required = true,
  setRef,
}) => {
  const classes = [
    'input',
    `input--${theme}`,
  ]

  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="input__wrapper">
        <input
          className={classes.join(' ')}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={handleChange}
          ref={setRef}
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
  setRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object }),
  ]),
}

export default Input