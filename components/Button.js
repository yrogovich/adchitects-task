const Button = ({href, type = 'button', theme = 'default', children}) => {
  const classes = [
    'button',
    `button--${theme}`,
  ]
  let button

  if (href) {
    button = <a href={href} className={classes.join(' ')}>
      {children}
    </a>
  } else {
    button = <button className={classes.join(' ')}>{children}</button>
  }

  return (
    <>{button}</>
  )
}

export default Button