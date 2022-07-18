const Input = ({
  type = 'text',
  theme = 'default',
  placeholder = null,
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

export default Input