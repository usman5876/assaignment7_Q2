import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <main className=' w-screen h-screen relative'>
    <div className='flex items-center w-full h-full bg-center bg-cover' style={{backgroundImage:"url(/main-bg.webp)"}}>
      <div className='pl-20 md:pl-40 pb-56 mt-40 md:pd-20 flex flex-col gap-5 z-10 max-w-[750px]'>
        <h1 className='text-[50px] text-white font-semibold'>
          Hello I'm
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
           {" "}Muhammad Usman
          </span>
        </h1>
        <p className='text-gray-200 text-2xl hidden md:block '>
          Webdeveloper and designer based in Pakistan
        </p>

        <div className='flex-col hidden md:flex-row md:flex gap-5'>
          <Link href="/mySkills" className='rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
          Learn More
          </Link>
          <Link href="/myProjects" className='rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
           <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20'/>
           My Projects
          </Link>
          <Link href="/contactMe" className='rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
           <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20'/>
           Contact Me
          </Link>
        </div>
      </div>
    </div>

    <div className='absolute bottom-10 z-20 right-5 flex-col md:hidden gap-5'>
          <Link href="/mySkills" className='rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
          Learn More
          </Link>
          <Link href="/myProjects" className='rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'> 
           My Projects
          </Link>
          <Link href="/contactMe" className='rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
           Contact Me
          </Link>

    </div>
    <div className='flex absolute bottom-0 right-0 z-[10]'>
      <img src="/profile.png" alt='Hore Picture' height={500} width={500}
           className='pb-28 mr-40 rounded-b-lg'
      />
      
    </div>
    <div className='absolute bottom-0 z-[5] h-full w-full'>
      <img 
           src="/trees.webp" alt='trees' width={2000} height={2000} 
           className='w-full h-full' 
      />
      <img 
          src="/stars.png" alt='stars' height={300}  width={300}
          className='absolute top-0 left-0 z-10'
      />
    </div>

    
   </main>
  )
}
