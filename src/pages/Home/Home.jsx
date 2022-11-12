import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='wrapper-home'>
        <section>
          <div className='image'>
            <img
              src='/mw1.png'
              alt=''
            />
          </div>
          <article>
            <div className='text'>
              <h1>
              Obchody <br /> Święta<br />
              Niepodległości
              </h1>
            </div>
            <div className='desc'>
              <p>
              Podczas wystąpienia Prezydent dziękował wszystkim, którzy przypominali o wielkiej wartości, jaką jest suwerenne państwo; edukowali młodzież i przypominali o bohaterach, o przodkach. 
              </p>
              <button>READ MORE</button>
            </div>
          </article>
        </section>
        <aside>
          <h1>New</h1>
          <h4>Taktyka negocjacyjna Solidarnej Polski z UE </h4>
          <p>Poczekamy, aż Unia skruszeje... <br /> Ciekawe  kto skruszeje wcześniej?</p>
          <hr />
          <h4>Demografia a 'dawanie w szyję'</h4>
          <p>
          Prezes poczuł się w obowiązku poświęcić kilka zdań problemowi alkoholu. 
          </p>
          <hr />
          <h4>Kuratorzy a patriotyzm</h4>
          <p>
          Ministerstwo Edukacji i Nauki wykłada karty na stół bez kuratorów nie ma patriotyzmu.
          </p>
        </aside>
      </div>
      <footer>
        <div className='card'>
          <div className='img'>
            <img
              src='gb.jpg'
              alt=''
            />
          </div>
          <div className="content">
            <h2>01</h2>
            <h3>Narodowcy pokłóceni?</h3>
            <p> Na Marszu Niepodległości Bąkiewicz zepchnięty do tyłu. "Wyrolowali go"</p>
          </div>
        </div>
        <div className='card'>
          <div className='img'>
            <img
              src='mz.jpg'
              alt=''
            />
          </div>
          <div className="content">
            <h2>02</h2>
            <h3> VIPs Marszu</h3>
            <p> W tym roku nie brakowało wybitnych i szanowanych osobistości.</p>
          </div>
        </div>
        <div className='card'>
          <div className='img'>
            <img
              src='/pol.jpg'
              alt=''
            />
          </div>
          <div className="content">
            <h2>03</h2>
            <h3>Policja jak ratownicy</h3>
            <p>Ofiarni policjanci pomagają obywatelom RP.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
