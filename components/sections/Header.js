import { motion } from 'framer-motion'
import Image from 'next/image'
import PropTypes from 'prop-types'

const Header = ({text, img}) => (
  <>
    <motion.div>
      <header className="header">
        <div className="container">
          <div className="header__row">
            <motion.h1
              className="header__title"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1}}
              transition={{ duration: 1, type: "tween" }}
            >{text}</motion.h1>
            <motion.div
              className="header__image"
              initial={{ x: 200, opacity: 0, scale: .8}}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: .8, type: "tween" }}
            >
              <Image
                src={img}
                layout="responsive"
                alt="hero image"
                width={516} height={384}
              />
            </motion.div>
          </div>
        </div>
      </header>
    </motion.div>
  </>
)

Header.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Header