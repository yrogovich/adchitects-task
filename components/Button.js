import PropTypes from 'prop-types'

const Button = ({href, theme = 'default', children}) => {
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

Button.propTypes = {
  href: PropTypes.string,
  theme: PropTypes.string,
  children: PropTypes.node,
};

export default Button