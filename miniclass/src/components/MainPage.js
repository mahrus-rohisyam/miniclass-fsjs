import React from 'react'
import { AtIcon, dockerIcon, facebookIcon, flutterIcon, githubIcon, imageOne, imageThree, imageTwo, linkedinIcon, mongodbIcon, reactIcon, twitterIcon, typescriptIcon } from '../assets/images'

const MainPage = () => {
  return (
    <>
      <section id='welcome'>
        <img width='300px' height='300px' src='https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg' />
        <h2>Mahrus Sayid</h2>
        <p>Technology Enthusiast</p>
      </section>

      <section id='about'>
        <h2>#About</h2>
        <p>Software Engineer, Fullstack developer, Instructor who loves adventure around the world and share his experience !</p>
        <h2>#Stack</h2>
        <ul id='stack'>
          <li>
            <span className='sr-only' id='react'>React</span>
            <img src={reactIcon} alt='Gambar React'/>
          </li>
          <li>
            <span className='sr-only' id='docker'>Docker</span>
            <img src={dockerIcon} />
          </li>
          <li>
            <span className='sr-only' id='mongodb'>MongoDB</span>
            <img src={mongodbIcon} />
          </li>
          <li>
            <span className='sr-only' id='flutter'>Flutter</span>
            <img src={flutterIcon} />
          </li>
          <li>
            <span className='sr-only' id='typescript'>TypeScript</span>
            <img src={typescriptIcon} />
          </li>
        </ul>
      </section>

      <section id='project'>
        <h2>#Projects</h2>
        <p>Here are some of my projects !</p>
        <ul id='project-grid'>
          <li>
            <a href='#'>
              <img src={imageOne} alt='Gambar React'/>
              <span>Project pertama saya</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <img src={imageTwo} />
              <span>Project kedua saya</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={imageThree} />
              <span>Project ke empat saya</span>
            </a>
          </li>
        </ul>
      </section>

      <section id='contact'>
        <h2>#Contacts</h2>
        <p>Let’s Work Together..</p>
        <span>Pick your favorite social media to get started.</span>
        <ul>
          <li id='facebook'>
            <a href='https://www.facebook.com/'>
              <span className='sr-only'>Facebook</span>
              <img src={facebookIcon} />
            </a>
          </li>
          <li id='github'>
            <a href='https://www.github.com/mahrus-rohisyam'>
              <span className='sr-only'>Github</span>
              <img src={githubIcon} />
            </a>
          </li>
          <li id='twitter'>
            <a href='https://www.twitter.com/'>
              <span className='sr-only'>Twitter</span>
              <img src={twitterIcon} />
            </a>
          </li>
          <li id='email'>
            <a href='mailto:mahrusaim@gmail.com'>
              <span className='sr-only'>Email</span>
              <img src={AtIcon} />
            </a>
          </li>
          <li id='linkedin'>
            <a href='https://linkedin.com/in/mahrus'>
              <span className='sr-only'>Linkedin</span>
              <img src={linkedinIcon} />
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}

export default MainPage