import { motion } from 'framer-motion'
import Image from 'next/image'

const Header = ({text, img}) => {
  return (
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
}

export default Header