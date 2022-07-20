import {motion} from 'framer-motion'

const ResponseError = () => (
  <>
    <section className="responseError">
      <div className="container">
        <motion.h1
          className="responseError__title"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1}}
          transition={{ duration: 1, type: "tween" }}
        >Server response error</motion.h1>
      </div>
    </section>
  </>
)

export default ResponseError