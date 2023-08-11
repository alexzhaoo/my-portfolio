"use client";
import Head from 'next/head';
import { BsFullscreen, BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import design from "../app/design.png"
import me from "../public/me.jpg"
import homepage from "../public/homepage.jpg"
import dynamic from 'next/dynamic';
import cover from "../public/coverforport.jpg"

import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {


  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    const handleResize = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);





  let imageHeight = 0;

  let clientHeight = 0;

  let projectHeight = 0;

  
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const img = document.getElementById('yes');
    if (img) {
      imageHeight = img.clientHeight;
    }
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const img = document.getElementById('no');
    if (img) {
      clientHeight = img.clientHeight;
    }
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const img = document.getElementById('yur');
    if (img) {
      projectHeight = img.clientHeight;
    }
  }


  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function scrollToAbout(){
    window.scrollTo({
      top: imageHeight,
      behavior: 'smooth'
    });
  }

  function scrollToExperiences(){
    window.scrollTo({
      top: clientHeight + imageHeight -50 ,
      behavior: 'smooth'
    });
  }

  function scrollToProjects(){
    window.scrollTo({
      top: clientHeight + imageHeight + projectHeight - 50,
      behavior: 'smooth'
    });
  }

   
  const navbarBackground = scrollPosition > imageHeight ? 'bg-neutral-400' : '';
  const navbarColor = scrollPosition > imageHeight ? 'text-white' : '';

  const [darkMode, setDarkMode] = useState(false);

  const darken = darkMode ? "dark" : ""

  useEffect(()=>{
    AOS.init();
  },[])


  return (
  
    <div className={darkMode ? 'dark' : ''}>
      
      <main className=''>
      <nav className={`font-Lato text-lg hidden py-7 md:flex justify-between w-full fixed transition-colors ${navbarBackground} ${navbarColor} ${darken} z-20 `}>
      <ul className={'flex items-center ml-auto'}>
      <li>
        <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl text-black dark:text-white mr-8 hover:-translate-y-1' />
      </li>
      <li className=' mx-5 hover:-translate-y-1 ' onClick={scrollToTop}>
        <a> Home</a>
      </li>
      <li className=' mx-5 hover:-translate-y-1' onClick={scrollToAbout}>
        <a >About</a>
      </li>
      <li className='mx-5 hover:-translate-y-1' onClick={scrollToExperiences}>
        <a>Experiences</a>
      </li>
      <li className='mx-5 hover:-translate-y-1' onClick={scrollToProjects}>
      <a>Projects</a>
      </li>
      <li className='mx-5 hover:-translate-y-1'>
        <a className='bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md' href="https://drive.google.com/file/d/1_jNZNPKrMCj4XdgVHAviRhQO3RX8lrPm/view?usp=sharing" target='_blank' rel="noopener noreferrer" >Resume</a>
      </li> 
    </ul>
      </nav>
        <section  className='relative bg-gray-300 dark:bg-black'>
        <div >
        <h3 id='sec'  className='text-white  font-Bebas_Neue text-xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center z-10'>My Portfolio</h3>
        <h2  id='name' className='text-white font-Bebas_Neue font-bold text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-40 text-center z-10 md:text-5xl xl:text-7xl '>Alexander Zhao </h2>
        </div>
          <div className= 'bg-cover bg-fixed bg-center bg-no-repeat'>
          <Image id='yes' src={homepage} className='w-full md:h-auto block' />
          </div>
        </section>
        <section id='no' className="min-h-screen font-Bebas_Neue bg-zinc-50 dark:bg-gray-800 flex flex-col justify-center items-center  md:flex-row sm:flex-row">
        <div  className='text-center p-5 py-20 mx-auto md:ml-96 sm:ml-96'>
        <h3 data-aos="fade-in"  data-aos-duration="400"  style={{ borderBottom: '2px solid gray' }} className='text-black text-3xl py-2 dark:text-white font-semibold max-w-5xl mx-auto'>Fullstack and Machine Learning Developer | Computer Science Student</h3>
        <h3 data-aos="fade-in"  data-aos-duration="2000" style={{ borderBottom: '2px solid gray' }} className='mt-10 text-2xl max-w-md mx-auto text-black font-semibold dark:text-white'>About Me</h3>
        <p data-aos="fade-in"  data-aos-duration="2000" className='text-black text-lg py-5 leading-8 dark:text-white mx-auto'>I am a self-motivated second-year undergraduate student at Queen&apos;s University studying computer science with a specialization in Software Design. I am passionate about programming and am always eager to learn and try out new technologies. I have experience in developing software applications and am also interested in machine learning and data analysis.</p>
        <h3 data-aos="fade-in"  data-aos-duration="2000" style={{ borderBottom: '2px solid gray' }} className='mt-2 text-2xl max-w-md mx-auto text-black font-semibold dark:text-white'>Details</h3>
        <p data-aos="fade-in"  data-aos-duration="2000" className="text-black text-md py-5 leading-8 dark:text-white max-w-2xl mx-auto" style={{ display: 'flex', flexDirection: 'column' }}>
          Location: Toronto<br />
          Age: 19
        </p>
        <div data-aos="fade-in"  data-aos-duration="2000" className='text-gray-600 text-3xl flex justify-center gap-10'>
          <a href="https://www.instagram.com/alexzhaoooo/" target="_blank" rel="noopener noreferrer" className='transition-opacity delay-100 hover:opacity-90 hover:-translate-y-1 '>
            <AiFillInstagram className='hover:shadow hover:shadow-black hover:rounded-xl text-gray-500 dark:text-pink-400' />
          </a>
          <a href="https://www.linkedin.com/in/alexander-zhao-926225211/" target="_blank" rel="noopener noreferrer" className='transition-opacity delay-100 hover:opacity-90 hover:-translate-y-1' >
            <AiFillLinkedin className='hover:shadow hover:shadow-blue-700 rounded-md text-blue-700' />
          </a>
          <a href="https://github.com/alexzhaoo" target="_blank" rel="noopener noreferrer" className='transition-opacity delay-100 hover:opacity-90 hover:-translate-y-1 '>
            <AiFillGithub className=' text-black hover:shadow hover:shadow-black rounded-full dark:text-white' />
          </a>
        </div>
      </div>
      <div className='mt-8 md:mt-0 sm:mt-0'>
        <div data-aos="slide-down"  data-aos-duration="2100" className='mx-auto mb-7 sm:mr-96 bg-gradient-to-b from-gray-600 to-orange-100 rounded-full w-72 h-72 overflow-hidden md:w-350 md:h-350 lg:w-450 lg:h-450'>
          <Image
            src={me}
            alt='Image'
            className='mr-8'
          />
        </div>
      </div>
      </section>

      
      <section id='yur' className="min-h-screen bg-orange-50 dark:bg-gray-700 font-Lato">
      <div className="text-stone-950 text-center">
        <h3 data-aos="slide-up"  data-aos-duration="2000"  className="text-5xl pt-16 text-teal-500 font-semibold">Experiences</h3>
        <p data-aos="slide-down"  data-aos-duration="2000" className="mt-5 font-light">&quot;Experience gives us the tests first and the lessons later&quot;</p>
        <p data-aos="fade-in"  data-aos-duration="3000" className="mt-1 font-light">- Naomi Judd</p>
        <p style={{ borderBottom: '1px solid gray' }} className="text-orange-50 max-w-6xl mx-auto mt-10">    </p>
      </div>
      <div   className="text-center text-black">
        <h3 data-aos="fade-in" data-aos-duration="3000" className="mt-5 text-teal-500 text-3xl font-light md:-ml-950">Education</h3>
        <div data-aos="zoom-in"  data-aos-duration="2000" className="flex justify-center md:-ml-36">
          <div className="py-5 text-zinc-900">
            <p className='font-semibold '>Toronto Montessori School</p>
            <p className='text-xs mt-4 '>September 2016 - May 2022</p> 
            <p className='mt-20 font-semibold md:mt-12'>Queen&apos;s University</p>
            <p className='text-xs mt-4 '>September 2022 - Present</p>
          </div>
          <div className="mx-2 py-5 ml-28">
            <p className='font-semibold text-sm '>International Baccalaureate Program Diploma</p>
            <p className='text-sm font-light '> I finished my last two years of middle school and 4 years of high school at TMS. During my last 2 years of</p>
            <p className='text-sm font-light '> high school I participated in the IB DP Programme, where I enrolled in higher level Math, Physics</p>
            <p className='text-sm font-light '> and Economics. Completed an extended essay, and multiple individual assesments.  </p>
            <p className='font-semibold text-sm mt-5 '>Bachelor of Computing(Honours) / BCmpH</p>
            <p className='text-sm font-light '> I am currently entering my second year of studies at Queen&apos;s University for Computing. The curriculum  </p>
            <p className='text-sm font-light '>is designed to include multiple languages such as Python, Java, and C. I also have learned different </p>
            <p className='text-sm font-light '>developmental strategies such as the waterfall approach and agile development.</p>

          </div>
        </div>
      </div>
      <p style={{ borderBottom: '1px solid gray' }} className="text-orange-50 max-w-6xl mx-auto mt-10">    </p>
      <div className="text-center text-black">
      <h3 data-aos="fade-in"  data-aos-duration="2000" className="mt-5 text-teal-500 text-3xl font-light md:-ml-935">Careers</h3>
      <div data-aos="zoom-in"  data-aos-duration="2000" className="flex justify-center md:-ml-16">
        <div className="py-5 text-zinc-900">
          <p className='font-semibold '>QMIND</p>
          <p className='text-xs mt-4 '>September 2022 - April 2023</p> 
          <p className='mt-130 font-semibold md:mt-12'>QHACKS</p>
          <p className='text-xs mt-4 '>September 2023 - April 2023</p>
          <p className='mt-24 font-semibold md:mt-12'>Triway Education</p>
          <p className='text-xs mt-4 '>May 2023 - August 2023</p>
        </div>
        <div className="mx-2 py-5 ml-24">
          <p className='font-semibold text-sm '>Innovation Design Team Member</p>
          <p className='text-sm font-light '> At QMIND, I worked in the innovation sector with 3 teammates, on a project called &quot;Rocket Landing&quot;.</p>
          <p className='text-sm font-light '> We used OpenAI Gym to set up an enviornment to train a Deep Reinforcment Learning Model. </p>
          <p className='text-sm font-light '> To help train the model we used a Deep Q Network, along with an appropriate reward system. </p>
          <p className='font-semibold text-sm mt-5 '>First Year Representative</p>
          <p className='text-sm font-light '>Working at QHACKS as a first-year representative was an amazing experience. I worked in every department, logistics, </p>
          <p className='text-sm font-light '> technology, partnerships, operations, and marketing. Two of my largest tasks,  </p>
          <p className='text-sm font-light '> I worked with sponsors, and utilized Discord.js to build a server for hackers.</p>
          <p className='font-semibold text-sm mt-5 '>Python || Java || Math Tutor </p>
          <p className='text-sm font-light '> As a tutor I prepared many lessons in advance catering to every student&apos;s personal needs. </p>
          <p className='text-sm font-light '>Using various online resources such as coderpad, desmos, and dmoj I facilitated hands</p>
          <p className='text-sm font-light '>on sessions were I could interact with students for a enhanced learning experience.</p>

        </div>
      </div>
    </div>
    </section>

        <section className="min-h-screen bg-gray-100 dark:bg-gray-700"> 
          <div className='text-black text-center '>
            <h3 data-aos="fade-down"  data-aos-duration="2000"  className="text-5xl pt-16 text-black-500 font-semibold">Projects</h3>
            <p data-aos="fade-in"  data-aos-duration="2000" className='mt-5 font-light'>&quot;The best way to predict the future is to create it.&quot;</p>
            <p data-aos="fade-in"  data-aos-duration="2000" className='mt-5 font-light' >- Peter Drucker</p>
          </div>
            <div  className='flex flex-wrap  justify-center gap-10 '>
              <div data-aos="zoom-in"  data-aos-duration="2000" className='text-center text-black py-10 mt-10 shadow  rounded-md max-w-xl dark:text-white'>
                <div className='flex justify-center'>
                  <Image src={cover} className='h-1/2 w-1/2' />
                </div>
            <h3 className='text-lg font-bold pt-8 pb-2'>Personal Portfolio</h3>
            <p className='py-2'>
              Crafed a dynamic personal website using React, Next.js, JavaScript, featuring a seamless user experience
              and modern design. Leveraged Tailwind CSS for responsive UI components and NPM for library integration.
            </p>
            <div data-aos="flip-up"  data-aos-duration="2000" className='flex justify-center'>
              <a href="https://github.com/alexzhaoo/my-portfolio" target="_blank" rel="noopener noreferrer"  className='transition-opacity delay-100 hover:opacity-90 hover:-translate-y-1 text-3xl'>
                <AiFillGithub className='text-black hover:shadow hover:shadow-black rounded-full dark:text-white' />
              </a>
          </div>
        </div>
        <div data-aos="zoom-in"  data-aos-duration="2000" className='text-center text-black py-10 mt-10 shadow  rounded-md max-w-xl dark:text-white'>
          <div className='flex justify-center'>
            <Image src={design} width={100} height={100} />
          </div>
          <h3 className='text-lg font-bold pt-8 pb-2'>Project Name</h3>
          <p className='py-2'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            when an unknown printer took a galley of type and scrambled it to make a t
          </p>
          <div className='flex justify-center'>
            <a data-aos="flip-up"  data-aos-duration="2000" href="https://github.com/alexzhaoo" target="_blank" rel="noopener noreferrer"  className='transition-opacity delay-100 hover:opacity-90 hover:-translate-y-1 text-3xl'>
              <AiFillGithub className='text-black hover:shadow hover:shadow-black rounded-full dark:text-white' />
            </a>
          </div>
      </div>
      <div data-aos="zoom-in"  data-aos-duration="2000" className='text-center text-black py-10 mt-10 shadow rounded-md max-w-xl dark:text-white'>
        <div className='flex justify-center'>
          <Image src={design} width={100} height={100} />
        </div>
        <h3 className='text-lg font-bold pt-8 pb-2'>Project Name</h3>
        <p className='py-2'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          when an unknown printer took a galley of type and scrambled it to make a t
        </p>
        <div data-aos="flip-up"  data-aos-duration="2000" className='flex justify-center'>
          <a href="https://github.com/alexzhaoo" target="_blank" rel="noopener noreferrer"  className='transition-opacity delay-100 hover:opacity-90 hover:-translate-y-1 text-3xl'>
            <AiFillGithub className='text-black hover:shadow hover:shadow-black rounded-full dark:text-white' />
          </a>
        </div>
    </div>
            <div data-aos="zoom-in"  data-aos-duration="2000" className='text-center text-black py-10 mt-10 shadow rounded-md max-w-xl dark:text-white'>
              <div className='flex justify-center'>
                <Image src={design} width={100} height={100} />
              </div>
              <h3 className='text-lg font-bold pt-8 pb-2'>Project Name</h3>
              <p className='py-2'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                when an unknown printer took a galley of type and scrambled it to make a t
              </p>
              <div className='flex justify-center'>
                <a href="https://github.com/alexzhaoo" target="_blank" rel="noopener noreferrer"  className='transition-opacity delay-100 hover:opacity-90 hover:-translate-y-1 text-3xl'>
                  <AiFillGithub className='text-black hover:shadow hover:shadow-black rounded-full dark:text-white' />
                </a>
            </div>
          </div>
          <div data-aos="zoom-in"  data-aos-duration="2000" className='text-center text-black py-10 mt-10 shadow  rounded-md max-w-xl dark:text-white'>
            <div className='flex justify-center'>
              <Image src={design} width={100} height={100} />
            </div>
            <h3 className='text-lg font-bold pt-8 pb-2'>Project Name</h3>
            <p className='py-2'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              when an unknown printer took a galley of type and scrambled it to make a t
            </p>
            <div  className='flex justify-center'>
              <a href="https://github.com/alexzhaoo" target="_blank" rel="noopener noreferrer"  className='transition-opacity delay-100 hover:opacity-90 hover:-translate-y-1 text-3xl'>
                <AiFillGithub className='text-black hover:shadow hover:shadow-black rounded-full dark:text-white' />
              </a>
            </div>
        </div>
        <div data-aos="zoom-in"  data-aos-duration="2000" className='text-center text-black py-10 mt-10 shadow  rounded-md max-w-xl dark:text-white'>
          <div className='flex justify-center'>
            <Image src={design} width={100} height={100} />
          </div>
          <h3 className='text-lg font-bold pt-8 pb-2'>Project Name</h3>
          <p className='py-2'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            when an unknown printer took a galley of type and scrambled it to make a t
          </p>
          <div className='flex justify-center'>
            <a href="https://github.com/alexzhaoo" target="_blank" rel="noopener noreferrer"  className='transition-opacity delay-100 hover:opacity-90 hover:-translate-y-1 text-3xl'>
              <AiFillGithub className='text-black hover:shadow hover:shadow-black rounded-full dark:text-white' />
            </a>
          </div>
      </div>
    </div>
        </section>
      </main>

    </div>
  );
}

export default Home;