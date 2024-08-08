import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

export default function VideoTitle({title,overview}) {
    return (
        <div className='absolute text-white mt-[18%] p-12 w-[VW] aspect-video'>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p className='w-1/3 mt-4'>{overview}</p>
            <div className='flex mt-8'>
                <button className='flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
                    <CiPlay1 size="24px" />
                    <span className='ml-1'> Play</span>
                </button>
                <button className='mx-2 flex items-centerpx-6 py-2 bg-gray-500 bg-opacity-50 text-black rounded-md'>
                    <CiCircleInfo size="24px" />  <span className='ml-1'> Watch more</span> </button>
            </div>
        </div>
    )
}
