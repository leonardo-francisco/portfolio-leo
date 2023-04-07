import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.jsx";

import angular from "../assets/skills/angular.svg"
import bootstrap from '../assets/skills/bootstrap.svg'
import csharp from '../assets/skills/csharp.svg'
import ddd from '../assets/skills/ddd.svg'
import git from '../assets/skills/git.svg'
import jenkins from '../assets/skills/jenkins.svg'
import microservices from '../assets/skills/microservices.svg'
import mongodb from '../assets/skills/mongodb.svg'
import mvc from '../assets/skills/mvc.svg'
import netcore from '../assets/skills/netcore.svg'
import react from '../assets/skills/react.svg'
import solid from '../assets/skills/solid.svg'
import sqlserver from '../assets/skills/sql_server.svg'

import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Algumas de minhas habilidades</p>

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="Angular" experience="2 anos" img={angular} />
                <SkillCard name="Bootstrap" experience="4 anos" img={bootstrap} />
                <SkillCard name="C#" experience="4 anos" img={csharp} />
                <SkillCard name="DDD" experience="3 anos" img={ddd} />
                <SkillCard name="Git" experience="4 anos" img={git} />
                <SkillCard name="Jenkins" experience="2 anos" img={jenkins} />
                <SkillCard name="Microservices" experience="2 anos" img={microservices} />
                <SkillCard name="Mongodb" experience="2 anos" img={mongodb} />
                <SkillCard name="MVC" experience="4 anos" img={mvc} />
                <SkillCard name="NetCore" experience="3 anos" img={netcore} />
                <SkillCard name="React" experience="1 ano" img={react} />
                <SkillCard name="Solid" experience="3 anos" img={solid} />
                <SkillCard name="SQL Server" experience="4 anos" img={sqlserver} />
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}