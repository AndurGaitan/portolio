import { experiences, skills } from "../constants";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import CTA from "../components/CTA";
import 'react-vertical-timeline-component/style.min.css';

const Home = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hola soy <span className="blue-gradient_text font-semibold drop-shadow"> Andrés Gaitán</span>     
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-700">
        <p>
        Soy desarrollador web full stack y mobile en React Native, con experiencia freelance y un enfoque en entender y satisfacer las necesidades de mis clientes. He trabajado en aplicaciones web para salud, optimizando el almacenamiento de datos de pacientes e incorporando tecnología innovadora. Me formé en IA aplicada a la salud y actualmente estoy aprendiendo sobre aplicaciones interactivas y modelos 3D. Me gusta crear experiencias digitales atractivas y fáciles de usar, aplicando siempre las mejores prácticas de programación y diseño UX/UI
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-700">
        <p>
        He trabajado con diferentes clientes y en proyectos propios, lo que me ha permitido desarrollar y perfeccionar mis habilidades. Aquí te comparto los detalles:
        </p>
      </div>
      </div>
      <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-600 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-600 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        
      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default Home