import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
      ¿Tienes un proyecto en mente? <br className='sm:block hidden' />
      ¡Construyamos algo juntos!
      </p>
      {/* <Link to='/contact' className='btn'>
        Contact
      </Link> */}
      <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-8 h-8 object-contain'
              />
            </Link>
          ))}
        </div>
    </section>
  );
};

export default CTA;