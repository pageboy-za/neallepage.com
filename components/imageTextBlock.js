import Image from 'next/image';


  function ImageTextBlock({imgSrc, imgPos, altText, title, children }) {
    return (
      <div className="flex flex-col md:flex-row bg-white dark:bg-gray-700 pt-5 pl-5">
        {imgPos === 'left' ? (
          <div className="w-full md:w-1/2 px-4 py-2">
            <Image src={imgSrc} alt={altText} className="w-full rounded-lg shadow-md" width={900} height={600}  />
          </div>
        ) : (<div></div>)}
        <div className="w-full md:w-1/2 pl-4">
          <h2 className="md:text-xl text-blue-600 font-semibold border-b-2 border-blue-400">{title}</h2>
          <p className='pt-4 md:pt-6 dark:text-gray-200'>
          {children}
          </p>
        </div>
        {imgPos === 'right' ? (
            <div className="w-full md:w-1/2 px-4 py-2">
            <Image src={imgSrc} alt={altText} className="w-full rounded-lg shadow-md" width={900} height={600}  />
          </div>
          ) :(<div></div>)}
      </div>
    );
  } 


export default ImageTextBlock;
