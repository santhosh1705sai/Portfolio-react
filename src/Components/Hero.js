import Heroimg from '../asects/hero.png';
// import santho from '../asects/santho.png.jpg'
import { AiOutlineLinkedin ,AiOutlineInstagram,AiOutlineWhatsApp} from "react-icons/ai";
import Speed from './Speed';
// import Run from './Run';
// import {useTypewritter,Cursor} from "react-simple-typewriter";


export default function Hero(){

//   const config={
//       social:{
//         linkedin:'linkedin.com/in/santhosh-kamalakannan',
        
//         instagram:' https://www.instagram.com/saisanthosh_84',
//         // whatsapp:'https://wa.me/919487657701'target:'_blank',
//       }
//   }


    return <section className='flex  flex-col md:flex-row  px-5 py-32 bg-primary justify-center  '>
        
        <div className='md:w-1/2 flex flex-col  text-white '>
            <h1 className=' font-hero-font text-6xl ' > Hello Hi, IM A  <br/><span className='text-black'>SANTHOSH KAMALAKANNAN</span>
            <br/>
 
            <span className="text text-blue-400">
                <Speed/>
              </span>

            </h1>
            <div className='flex py-9 ' >
                <a href="www.linkedin.com/in/santhosh-kamalakannan"target="_blank" className='pr-5 hover:text-black '><AiOutlineLinkedin/></a>

                <a href="https://instagram.com/saisanthosh_8516" target="_blank" className='pr-5 hover:text-black'><AiOutlineInstagram/></a>
                <a href="https://wa.me/919487657701" target="_blank" className='pr-5 hover:text-black' ><AiOutlineWhatsApp/></a>
            </div>
            </div>
        <img className='md:w-1/3'src={Heroimg}/>


    </section>
}