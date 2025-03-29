import resumeimg from '../asects/resume.jpg'
export default function Resume(){
    const config = {
        link:''
    }

    return <section id='resume'className='flex  flex-col bg-secondary px-5 md:flex-row'>
        <div className=' flex justify-center md:w-1/2 py-5 w-[300px]h-[300px] '>
            <img  className='w-[300px]' src={resumeimg}/>
        </div>
        <div className='md:w-1/2 flex flex-row justify-center ' >
        <div className='flex flex-col justify-center '>
            <h1 className='text-5xl text-white border-b-4 border-color  w-[170] font-bold w-[240px] '>RESUME</h1>
            <p className='text-white  py-12'>You Can View My Resume <a className=' bg-primary  px-2 py-2 font-bold  hover:border-4 border-white  rounded 'href='config.link'>Dowlaod</a></p>
            </div>
        </div>
    </section>
}