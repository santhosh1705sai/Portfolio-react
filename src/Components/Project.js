 import ecommerce from '../asects/Ecom.png';
 import movie from '../asects/mov.png'
 import weather from '../asects/wea.png'

export default  function Project(){

         const config={
            projects:[
               {
                ima:ecommerce,
                description:'A Ecommerce website.Build with React.js',
                link:''
               },
               {
                ima:movie,
                description:'A Movie Website .Built Up Using React.js',
                link:''
               },
               {
                ima:weather,
                description:'A Weather App .Build Up USing HTML,CSS,JAVA SCRIPT ',
                link:''
               }

            ]
         }













 return <section id='project'className="flex  flex-col justify-center px-5 py-20 bg-primary text-white">
    <div className="w-full">
    <div className="flex flex-col px-10 ">
    <h1 className="text-5xl text-white border-b-4 border-red-600  w-[170] font-bold w-[230px]">PROJECTS</h1>
    <p className='px-10 py-5'> These are some of my best projects. I have build these with React ,Html,CSS,Java Script. Check Out Them....</p>
    </div>
</div>

 {/* image position */}
<div className='w-full '>
<div className='flex flex-col md:flex-row  px-10 gap-5'>

    {config.projects.map((pro)=>(

          
<div className='relative'>
 <img  className =' h-[200px] w-[500px]' src={pro.ima}/>
 <div className=' h-full w-full absolute left-0 bottom-[45px] top-0 bg-secondary opacity-0 duration-500 hover:opacity-100'>
     <p className='text-center px-5 py-5'>{pro.description}</p>
     <div className='flex justify-center'>
        <a target='blank' className='bg-primary  px-2 py-2 font-bold  hover:border-4 border-white  rounded ' href={pro.link}>VIEW PROJECT</a>
        </div>
 </div>
 </div>
 
    )
)

    }
  
    
 </div>
</div>
 
 </section>
}

