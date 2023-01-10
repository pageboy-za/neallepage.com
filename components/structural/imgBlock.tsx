import Image from 'next/image';

type Props = {
    imgSrc: string
    altText: string
    priority?: string
}

const ImgBlock = ({ imgSrc, altText, priority}) => (
    <>
        <Image 
            src={imgSrc} 
            alt={altText} 
            className="w-full h-auto object-cover object-center rounded-lg" 
            priority={priority} 
        />
    </>
)

export default ImgBlock 