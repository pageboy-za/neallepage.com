

type Props = {
    title: string
    svgIcon?: string
    children: string
}

const SkillCard = ({title, svgIcon, children }) => {
  return (
    <div className='flex flex-col items-start justify-start w-full h-full p-4 m-2 bg-gold-100 border-copper-500 border-2 rounded-lg min-h-60'>
      <div className='flex justify-center items-start flex-col '>
        <div className="flex justify-center align-middle px-2">
          {svgIcon}
        </div> 
    
      <h2 className="text-copper-700 text-xl font-medium mb-2 prose-headings mx-4 my-4">{title}</h2>
      <hr className="px-4 h-1 bg-copper-500 rounded-lg w-full"/>
      <p className="text-gray-700 text-base my-4 px-4 h-auto">
          {children}
        </p>
        <div>

        </div>
      </div>
    </div>
  );
  }

export default SkillCard


