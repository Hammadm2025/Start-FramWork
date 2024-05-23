import React from 'react';


export default function Footer() {
  return (
    <>
      <div className='text-center fixed bottom-0 left-0 right-0 pt-8 bg-slate-800 text-white'>
        <div className='container m-auto flex w-full text-center justify-around pb-4'>
          <div>
            <h2 className='font-bold'>LOCATION</h2>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div>
            <h2 className='font-bold'>AROUND THE WEB</h2>
            <div className='flex justify-center space-x-4'>

            </div>
          </div>
          <div>
            <h2 className='font-bold'>ABOUT FREELANCER</h2>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
        <h2 className='bg-slate-900 py-6'>Copyright © Your Website 2021</h2>
      </div>
    </>
  );
}
