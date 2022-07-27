import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Devarat, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I'm a very ambitious full-stack developer looking for a role in established IT company with the opportunity to work with the latest
              technologies on challenging and diverse projects.
            </p>
            <br></br>
            <p>I'm quietly confident, naturally curious, and perpetually working on improving myself everyday.</p>
            <br></br>
            <p>If I need to define myself in one sentence that would be a family person, a sports fan, travel enthusiast, and tech-obsessed!!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
