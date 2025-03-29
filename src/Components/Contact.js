export default function Contact(){

       const config={
        email:'santhoshkamalakannan1705@gmail.com.',
        phone:'+91 9487657701.'
       }

    return <section  id='contact'className='flex  flex-col bg-primary px-5 py-10 text-white'>
        
        <div className=' flex flex-col items-center ' >       
            
         <h1 className='text-5xl  border-b-4 border-secondary  w-[170] font-bold w-[240px] '>CONTACT</h1>
        <p className='text-white  py-8'> If Yoy Want  Discuss More In Detail,Please Contact Me</p>

        <p className=' py-5'> <span className="text-bold">EMAIL: </span> {config.email}  </p>
        <p className=' py-3'> <span className="text-bold">PHONE: </span>{config.phone} </p>

            
            
                  </div>
    </section>
}
