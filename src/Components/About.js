import aboutme from '../asects/about.png'
export default function About(){

    const config={
       line1:' .I am Full Stack Web Developer. I Build Beautiful Website Using React.js & Tailwind.Css',
       line2:'Html,Css,Bootstrap,Tailwindcss,Java Script,React.js',
       line3:'I know BackEnd Like Core Java,Oracle SQL,MYSQL'
    }

    return <section id='about'className='flex  flex-col bg-secondary px-5 md:flex-row'>
        <div className='md:w-1/2 py-5'>
            <img  src={aboutme}/>
        </div>
        <div className='md:w-1/2 flex justify-center ' >
        <div className='flex flex-col justify-center '>
            <h1 className='text-5xl text-white border-b-4 border-color  w-[170] font-bold w-[240px] '>About Me</h1>
            <p className='text-white text-3xl py-4'>Hi,My Name is <span className='text-orange-600'>Santhosh kamalakannan</span>{config.line1} </p>
            <p className='text-white text-3xl py-4 inline-block'>I am Proficient Front Skills like <sapn className='text-orange-600 '></sapn>  and <span className='text-orange-600'>Many More</span>{config.line2} </p>
            <p className='text-white text-3xl py-4'>{config.line3}</p>
            </div>
        </div>
    </section>
}