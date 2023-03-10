import './App.css'
import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
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

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>

        <section className=' min-h-screen'>

          <nav className='py-10 flex justify-end'>
            <ul className='flex items-center'>
              {darkMode ? (
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl text-gray-600' />
                </li>
              ) : (
                <li>
                  <BsFillSunFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl' />
                </li>
              )}

              <li>
                <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' target={'_blank'} href='https://drive.google.com/file/d/13lb7ngbzYdzBtgb355ogqR7KD3BuWnKZ/view?usp=share_link'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full overflow-hidden md:w-96'>
            <img className='text-center' src={avatar} />
          </div>
          <div className='text-center p-4'>

            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Samuel Bernardo <span className=' block'>????</span></h2>

            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Desenvolvedor Front-End Jr</h3>
            <p className='text-md py-5 leading-8 text-gray-600 md:text-xl max-w-xl mx-auto dark:text-slate-300'>
              Sou um Desenvolvedor apaixonado pelo meu trabalho, sempre estou
              procurando aprender mais e adquirir experi??ncia, estou a procura de opurtinidades para me tornar um Dev Front-End cada vez melhor.
            </p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-4 text-gray-600'>
            <a className='cursor-pointer' href='https://www.linkedin.com/in/samuelbernardo/' target={'_blank'}>
              <AiFillLinkedin className='dark:hover:text-slate-50' />
            </a>
            <a className='cursor-pointer' href='https://github.com/smkhb' target={'_blank'}>
              <AiFillGithub className='dark:hover:text-slate-50' />
            </a>
            <a className='cursor-pointer' href='https://twitter.com/Smk_hb' target={'_blank'}>
              <AiFillTwitterCircle className='dark:hover:text-slate-50' />
            </a>
          </div>



        </section>

        <section>
          <div className='text-center py-10'>
            <h3 className='text-3xl py-1 dark:text-teal-600'>O que eu utilizo</h3>
            <p className='text-md py-2 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-slate-300'>Desde que comecei minha jornada como programador essas sao as ferramentas que aprendi a utilizar no meu dia a dia.</p>
          </div>

          <div className='lg:flex lg:flex-wrap gap-10 lg:justify-center'>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 basis-1/3 dark:bg-cyan-900 dark:shadow-slate-700'>
              <div className='text-6xl flex justify-center text-red-500 '>
                <AiFillHtml5 />
              </div>
              <h3 className='text-lg font-medium py-2 '>HTML</h3>
              <p className='py-2 text-gray-800 dark:text-slate-300'>
                ?? a base da web moderna e ?? utilizado para criar todos os tipos de sites e aplica????es web, desde p??ginas est??ticas at?? sistemas complexos de gerenciamento de conte??do. Sem o HTML, a internet como a conhecemos hoje n??o seria poss??vel.
              </p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 basis-1/3 dark:bg-cyan-900 dark:shadow-slate-700'>
              <div className='text-6xl flex justify-center text-sky-500 '>
                <SiCss3 />
              </div>
              <h3 className='text-lg font-medium py-2'>CSS</h3>
              <p className='py-2 text-gray-800 dark:text-slate-300'>
                ?? uma linguagem de estilo que permite que os desenvolvedores controlem a apar??ncia visual de p??ginas web. Ele ?? uma parte essencial do desenvolvimento web moderno e ?? utilizado em conjunto com o HTML e outras tecnologias para criar p??ginas web que sejam atraentes e funcionais.
              </p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 basis-1/3 dark:bg-cyan-900 dark:shadow-slate-700'>
              <div className='text-6xl flex justify-center text-yellow-400 '>
                <SiJavascript />
              </div>
              <h3 className='text-lg font-medium py-2'>Javascript</h3>
              <p className='py-2 text-gray-800 dark:text-slate-300'>
                ?? uma linguagem de estilo que permite que os desenvolvedores controlem a apar??ncia visual de p??ginas web. Ele ?? uma parte essencial do desenvolvimento web moderno e ?? utilizado em conjunto com o HTML e outras tecnologias para criar p??ginas web que sejam atraentes e funcionais.
              </p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 basis-1/3 dark:bg-cyan-900 dark:shadow-slate-700'>
              <div className='text-6xl flex justify-center text-green-600 '>
                <SiNodedotjs />
              </div>
              <h3 className='text-lg font-medium py-2'>Node.Js</h3>
              <p className='py-2 text-gray-800 dark:text-slate-300'>
                ?? uma plataforma de desenvolvimento em JavaScript que permite criar aplica????es web escal??veis e de alto desempenho. Ele ?? compat??vel com uma ampla gama de bibliotecas e m??dulos e tem uma ampla comunidade de desenvolvedores e recursos dispon??veis. Ele ?? usado para a cria????o de aplica????es web completas, ferramentas de linha de comando, aplicativos de desktop e jogos.
              </p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 basis-1/3 dark:bg-cyan-900 dark:shadow-slate-700'>
              <div className='text-6xl flex justify-center text-sky-400 '>
                <DiReact />
              </div>
              <h3 className='text-lg font-medium py-2'>React.Js</h3>
              <p className='py-2 text-gray-800 dark:text-slate-300'>
                ?? uma biblioteca de desenvolvimento de interfaces de usu??rio para aplica????es web. Ele permite que os desenvolvedores criem componentes reutiliz??veis e modulares, atualizem a interface de forma r??pida e eficiente, e ?? compat??vel com outras tecnologias e bibliotecas. Ele ?? uma escolha popular para o desenvolvimento de aplica????es web modernas e eficientes.
              </p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 basis-1/3 dark:bg-cyan-900 dark:shadow-slate-700'>
              <div className='text-6xl flex justify-center text-sky-300 '>
                <SiTailwindcss />
              </div>
              <h3 className='text-lg font-medium py-2'>Tailwind</h3>
              <p className='py-2 text-gray-800 dark:text-slate-300'>
                ?? um framework de estilo para a cria????o de interfaces de usu??rio em aplica????es web. Ele ?? projetado para tornar a cria????o de estilos em aplica????es web mais eficiente e f??cil para os desenvolvedores.
              </p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 basis-1/3 dark:bg-cyan-900 dark:shadow-slate-700'>
              <div className='text-6xl flex justify-center text-pink-400 '>
                <SiSass />
              </div>
              <h3 className='text-lg font-medium py-2'>Sass</h3>
              <p className='py-2 text-gray-800 dark:text-slate-300'>
                O SASS ?? uma extens??o do CSS que permite aos desenvolvedores escrever estilos de forma mais eficiente e organizada. Ele ?? projetado para tornar a escrita de estilos em aplica????es web mais f??cil e r??pida.
              </p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 basis-1/3 dark:bg-cyan-900 dark:shadow-slate-700'>
              <div className='text-6xl flex justify-center text-red-400 '>
                <DiGit />
              </div>
              <h3 className='text-lg font-medium py-2'>Git</h3>
              <p className='py-2 text-gray-800 dark:text-slate-300'>
                ?? uma ferramenta de controle de vers??o que ajuda os desenvolvedores de software a gerenciar e controlar as altera????es feitas em seus projetos. Essencial para o trabalho colaborativo em projetos de desenvolvimento de software, permitindo que v??rias pessoas trabalhem juntas sem que haja conflitos e sem perder o hist??rico de altera????es feitas no c??digo.
              </p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 basis-1/3 dark:bg-cyan-900 dark:shadow-slate-700'>
              <div className='text-6xl flex justify-center  '>
                <AiFillGithub />
              </div>
              <h3 className='text-lg font-medium py-2'>GitHub</h3>
              <p className='py-2 text-gray-800 dark:text-slate-300'>
                O GitHub ?? uma plataforma online que utiliza o Git como base e oferece uma s??rie de recursos adicionais para desenvolvedores de software, permitindo que eles armazenem, gerenciem, colaborem e compartilhem seus projetos de forma segura e eficiente, al??m de oferecer recursos adicionais que tornam o processo de desenvolvimento mais f??cil e r??pido.
              </p>
            </div>

          </div>

        </section>

        <section>
          <div className='text-center py-10'>
            <h3 className='text-3xl py-1 text-teal-600'>Meu Portf??lio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-slate-300'>Aqui est??o alguns projetos que eu mesmo fiz, colocando em pratica os conhecimentos adquiridos.</p>
          </div>

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <a href='https://smk-calculator-project.vercel.app/' target={'_blank'}>
                <img className='rounded-lg object-cover' width={"100%"} src={calculadora} />
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://smk-quote-generator.vercel.app/' target={'_blank'}>
                <img className='rounded-lg object-cover' width={"100%"} src={frase} />
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://smk-lista-de-gastos.vercel.app/' target={'_blank'}>
                <img className='rounded-lg object-cover' width={"100%"} src={gastos} />
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://smk-basic-form.vercel.app/' target={'_blank'}>
                <img className='rounded-lg object-cover' width={"100%"} src={formulario} />
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://smk-meus-links.vercel.app/' target={'_blank'}>
                <img className='rounded-lg object-cover' width={"100%"} src={links} />
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://smk-newsletter.vercel.app/' target={'_blank'}>
                <img className='rounded-lg object-cover' width={"100%"} src={newsletter} />
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

export default App
