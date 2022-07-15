const Button = ({href, type = 'button', theme = 'default', children}) => {
  const classes = [
    'button',
    `button--${theme}`,
  ]
  let button

  if (href) {
    button = <a href={href}>
      <button className={classes.join(' ')}>{children}</button>
    </a>
  } else {
    button = <button className={classes.join(' ')}>{children}</button>
  }

  return (
    <>{button}</>
  )
}

export default Button