import hr from '../assets/curve-hr.svg'
import { useTranslation } from 'react-i18next';


export default function Footer(){
  const { t } = useTranslation(["navbar", "footer"]);

  return (
    <div className="mt-4 bg-dark-200 rounded-md text-white px-8 py-4">
      <ul className="text-center">
        <li><a href="#home" className="hover:underline">{t("about")}</a></li>
        <li><a href="#skills" className="hover:underline">{t("skills")}</a></li>
        {/* <li><a href="#honors" className="hover:underline">Honor & Awards</a></li>
        <li><a href="#certs" className="hover:underline">Certfications</a></li> */}
      </ul>

      <img src={hr} className="mb-4 mt-4 w-full md:h-1 text-white bottom-0" alt="hr" />

      <p className="text-sm font-light text-center">{t("footer:copyright")}</p>

    </div>
  )
}
