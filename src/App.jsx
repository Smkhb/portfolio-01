import './App.css'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import avatar from '../images/smk-avatar.png'

function App() {

  return (
    <div>
      <main className='bg-white px-10'>
        
        <section className=' min-h-screen'>
          
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className=' text-xl'>Samuel Bernardo</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className=' cursor-pointer text-2xl' />
              </li>
              <li>
                <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
              </li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Samuel Bernardo</h2>
            <h3 className='text-2xl py-2'>Desenvolvedor Front-End Jr.</h3>
            <p className='text-md py-5 leading-8 text-gray-600'>
              sou um Desenvolvedor apaixonado pelo meu trabalho, sempre estou
              procurando aprender mais e adquirir mais experiência, por isso peço que vocês me ajudem a
              ser um Dev Front-End cada vez melhor.
            </p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-4 text-gray-600'>
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillTwitterCircle />
          </div>

          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 mt-20 overflow-hidden'>
            <img src={avatar} />
          </div>

        </section>
      </main>
    </div>
  )
}

export default App
