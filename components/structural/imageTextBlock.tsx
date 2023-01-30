import React from 'react';
import ImgBlock from './imgBlock';

type Props = {
    title: string
    imgSrc: string
    altText: string
    priority?: string
    children: string
}

const ImageTextBlock = ({ imgSrc, altText, title, priority, children }) => {
  return (
    <div className='flex flex-col w-auto h-full p-4 m-2 bg-gold-100 rounded-lg border-copper-500 border-2'>
      <div className='flex justify-center items-start flex-col'>
      <h2 className="text-block text-xl font-medium mb-2 prose-headings:">{title}</h2>
      <hr className="px-4 h-1 bg-copper-500 rounded-lg w-full"/>
      <p className="text-gray-700 text-base pt-4 mb-4 h-50">
          {children}
        </p>
        <div>
        <ImgBlock imgSrc={imgSrc} altText={altText} priority={priority}/>
        </div>
      </div>
    </div>
  );
  }

export default ImageTextBlock


