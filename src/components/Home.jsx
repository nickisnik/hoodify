import React from 'react';
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home__wrapper'>
        <div className="home__preview__container">
          <span className='home__preview__header'>Welcome!</span>
          <span className='home__preview__details'>The homepage will live here. <br/> While it's in development, you can click 'shop' to view our products!</span>
        </div>
    </div>
  )
}

export default Home