import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <header className="header">
          <div className="container">
            <div className="header__row">
              <div className="header__title">In oculis quidem rerum facilis est et aperta.</div>
              <div className="header__image">
                <img src="https://source.unsplash.com/random" />
              </div>
            </div>
          </div>
        </header>
      </main>
    </>
  )
}
