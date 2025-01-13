import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
export function Footer(){
    return(
        <section className='flex justify-around items-center 
        bg-[linear-gradient(#040406,#D0F0C0,#030303)] h-[120px] font-semibold
        hover:cursor-pointer'>
            <p className='text-sm'>
                Always value your time.
            </p>
            <Link to='mailto:mohammedhussain2727@gmail.com'>
            <button className='text-sm sm:text-lg m-auto'>
            <FontAwesomeIcon icon={faEnvelope} /></button>
            </Link>
        </section>
    )
}