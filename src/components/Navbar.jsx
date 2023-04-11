import { useEffect } from 'react';
import logo from '../assets/Dourado.png';
import resume from "../assets/Currículo Leo.pdf";
import brazil from '../assets/flags/brasil-flag.svg';
import usa from '../assets/flags/usa-flag.svg';
import spain from '../assets/flags/spain-flag.svg';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export default function Navbar() {
    const { i18n, t } = useTranslation(["navbar"]);

    useEffect( () => {
        if(localStorage.getItem("i18nextLng")?.length > 2){
            i18next.changeLanguage("pt-BR");
        }
    }, []);

    const handleLanguageChange = (e,lng) => {      
        i18n.changeLanguage(lng);
    }

    return (
    <div className='fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
        <div className="flex justify-between items-center text-white">
            <img src={logo} className="App-logo w-10 " alt="logo" style={{width:180,height:100}} />
            <ul className="hidden md:flex">
            <li className="p-4"><a href="#home" className="hover:underline">{t("about")}</a></li>
            <li className="p-4"><a href="#skills" className="hover:underline">{t("skills")}</a></li>
            {/* <li className="p-4"><a href="#honors" className="hover:underline">Honor & Awards</a></li>
            <li className="p-4"><a href="#certs" className="hover:underline">Certfications</a></li> */}
            </ul>
            <a href={resume} rel="noreferrer" target="_blank" className=" bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border border-4">{t("resume")}</a>
            <div className="flex items-right">
               <img src={brazil} className="w-6" alt="brazil" onClick={event => handleLanguageChange(event,"pt-BR")} />
               <img src={usa} className="w-6" alt="usa" onClick={event => handleLanguageChange(event,"en")} />
               <img src={spain} className="w-6" alt="spain" onClick={event => handleLanguageChange(event,"es")} />
            </div>
        </div>
    </div>
    )
}
