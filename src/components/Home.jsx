import {useState} from 'react'

import profile from '../assets/profile.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
import {  faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg'

export default function Hiro () {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
        {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='md:w-3/6 md:p-4'>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200"  src={profile} alt="profile" onLoad={() => setLoaded(false)}
                   style={{width:739, height:353}} />
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-gray-400">Oi, Eu sou</h1>
                    <h1 className="text-2xl font-bold">Leonardo Francisco</h1>
                    <p class="text-xl font-bold text-gray-300">Desenvolvedor .Net</p>
                    <p className="text-md font-light text-gray-400 ">Profissional da Tecnologia da Informação. Com atuação em Desenvolvimento Web. Buscando sempre evolução.</p>
                    <p className="text-md font-light text-gray-400">Backend: C#, .Net 4.5, .Net Core, Webforms, MVC, Rest API, Repository Pattern, Dapper, DDD, Solid, Microservices, CQRS, MediatR</p>
                    <p className="text-md font-light text-gray-400">Frontend: HTML, CSS, Javascript, Bootstrap, Razor Pages, Angular 7-11, React</p>
                    <p className="text-md font-light text-gray-400">Versionamento: GIT Extensions, GIT Lab, TFS, Jenkins, Azure Devops</p>
                </div>
                <a href='http://blog.dama.ink' className='mt-2 block'>Visite minhas redes sociais <FontAwesomeIcon className='ml-2' icon={faCircleArrowRight}/> </a>
                
                <ul className='flex mt-2 gap-4 items-center'>
                   <li>
                        <a href='https://github.com/leonardo-francisco' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
                    <li>
                        <a href='https://instagram.com/yamero_francisco' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/leonardo-francisco-a2723027/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                    </li>
                </ul>
            </div>
            <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
        </div>
        </>
    )
}
