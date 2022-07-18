import Image from 'next/image'

const Header = ({text, img}) => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__row">
            <h1 className="header__title">{text}</h1>
            <div className="header__image">
              <Image
                src={img}
                layout="responsive"
                alt="hero image"
                width={516} height={384}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header