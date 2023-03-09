import './App.css'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin, AiFillHtml5 } from "react-icons/ai";
import { SiCss3, SiJavascript, SiNodedotjs, SiTailwindcss, SiSass } from "react-icons/si";
import { DiReact, DiGit } from "react-icons/di";
import avatar from '../images/smk-avatar.png';
import calculadora from '../images/calculadora.png';
import formulario from '../images/form.png';
import gastos from '../images/gastos.png';
import links from '../images/links.png';
import newsletter from '../images/newsletter.png';
import frase from '../images/quote.png';






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
              procurando aprender mais e adquirir experiência, estou a procura de opurtinidades para me tornar um Dev Front-End cada vez melhor.
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

        <section>
          <div>
            <h3 className='text-3xl py-1'>O que eu utilizo</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>Desde que comecei minha jornada como programador essas sao algumas das ferramentas que aprendi a utilizar no meu dia a dia.</p>
          </div>

          <div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <div className='text-6xl flex justify-center text-red-500 '>
                <AiFillHtml5 />
              </div>
              <h3 className='text-lg font-medium py-2'>HTML</h3>
              <p className='py-2 text-gray-800'>
                É a base da web moderna e é utilizado para criar todos os tipos de sites e aplicações web, desde páginas estáticas até sistemas complexos de gerenciamento de conteúdo. Sem o HTML, a internet como a conhecemos hoje não seria possível.
              </p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <div className='text-6xl flex justify-center text-sky-500 '>
                <SiCss3 />
              </div>
              <h3 className='text-lg font-medium py-2'>CSS</h3>
              <p className='py-2 text-gray-800'>
                É uma linguagem de estilo que permite que os desenvolvedores controlem a aparência visual de páginas web. Ele é uma parte essencial do desenvolvimento web moderno e é utilizado em conjunto com o HTML e outras tecnologias para criar páginas web que sejam atraentes e funcionais.
              </p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <div className='text-6xl flex justify-center text-yellow-400 '>
                <SiJavascript />
              </div>
              <h3 className='text-lg font-medium py-2'>Javascript</h3>
              <p className='py-2 text-gray-800'>
                É uma linguagem de estilo que permite que os desenvolvedores controlem a aparência visual de páginas web. Ele é uma parte essencial do desenvolvimento web moderno e é utilizado em conjunto com o HTML e outras tecnologias para criar páginas web que sejam atraentes e funcionais.
              </p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <div className='text-6xl flex justify-center text-green-600 '>
                <SiNodedotjs />
              </div>
              <h3 className='text-lg font-medium py-2'>Node.Js</h3>
              <p className='py-2 text-gray-800'>
                É uma plataforma de desenvolvimento em JavaScript que permite criar aplicações web escaláveis e de alto desempenho. Ele é compatível com uma ampla gama de bibliotecas e módulos e tem uma ampla comunidade de desenvolvedores e recursos disponíveis. Ele é usado para a criação de aplicações web completas, ferramentas de linha de comando, aplicativos de desktop e jogos.
              </p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <div className='text-6xl flex justify-center text-sky-400 '>
                <DiReact />
              </div>
              <h3 className='text-lg font-medium py-2'>React.Js</h3>
              <p className='py-2 text-gray-800'>
                É uma biblioteca de desenvolvimento de interfaces de usuário para aplicações web. Ele permite que os desenvolvedores criem componentes reutilizáveis e modulares, atualizem a interface de forma rápida e eficiente, e é compatível com outras tecnologias e bibliotecas. Ele é uma escolha popular para o desenvolvimento de aplicações web modernas e eficientes.
              </p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <div className='text-6xl flex justify-center text-sky-300 '>
                <SiTailwindcss />
              </div>
              <h3 className='text-lg font-medium py-2'>Tailwind</h3>
              <p className='py-2 text-gray-800'>
                É um framework de estilo para a criação de interfaces de usuário em aplicações web. Ele é projetado para tornar a criação de estilos em aplicações web mais eficiente e fácil para os desenvolvedores.
              </p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <div className='text-6xl flex justify-center text-pink-400 '>
                <SiSass />
              </div>
              <h3 className='text-lg font-medium py-2'>Sass</h3>
              <p className='py-2 text-gray-800'>
                O SASS é uma extensão do CSS que permite aos desenvolvedores escrever estilos de forma mais eficiente e organizada. Ele é projetado para tornar a escrita de estilos em aplicações web mais fácil e rápida.
              </p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <div className='text-6xl flex justify-center text-red-400 '>
                <DiGit />
              </div>
              <h3 className='text-lg font-medium py-2'>Git</h3>
              <p className='py-2 text-gray-800'>
                É uma ferramenta de controle de versão que ajuda os desenvolvedores de software a gerenciar e controlar as alterações feitas em seus projetos. Essencial para o trabalho colaborativo em projetos de desenvolvimento de software, permitindo que várias pessoas trabalhem juntas sem que haja conflitos e sem perder o histórico de alterações feitas no código.
              </p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <div className='text-6xl flex justify-center  '>
                <AiFillGithub />
              </div>
              <h3 className='text-lg font-medium py-2'>GitHub</h3>
              <p className='py-2 text-gray-800'>
              O GitHub é uma plataforma online que utiliza o Git como base e oferece uma série de recursos adicionais para desenvolvedores de software, permitindo que eles armazenem, gerenciem, colaborem e compartilhem seus projetos de forma segura e eficiente, além de oferecer recursos adicionais que tornam o processo de desenvolvimento mais fácil e rápido.
              </p>
            </div>

          </div>

        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Portifolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>Aqui estão alguns projetos que eu mesmo fiz, colocando em pratica meus conhecimentos</p>
          </div>

          <div>
            <div>
              <img src={calculadora} />
            </div>
            <div>
              <img src={frase} />
            </div>
            <div>
              <img src={gastos} />
            </div>
            <div>
              <img src={formulario} />
            </div>
            <div>
              <img src={links} />
            </div>
            <div>
              <img src={newsletter} />
            </div>
          </div>
        </section>
      
      </main>
    </div>
  )
}

export default App
