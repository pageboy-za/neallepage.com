type Props = {
    children?: React.ReactNode
  }
  
  const SectionHead = ({ children }: Props) => {
    return ( 
        <div className="flex flex-col items-start justify-center">
            <h2 className="mx-6 mb-8 text-7xl md:text-8xl font-bold tracking-tighter leading-tight text-black">
                    {children}
            </h2>
        </div>
     );
  }
  
  export default SectionHead