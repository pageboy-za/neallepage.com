import ButtonLink from "./buttonLink";

export default function hero() {
    return (
    <div className="flex flex-auto flex-row">
      <div className="h-1/2 min-h-full">
        <div className="pt-16 px-4 pb-4">
          <span className="block w-screen font-sans text-8xl md:text-9xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400 mb-10 p-4 txt_shadow" >Nealle Page</span>
        </div>
        <div className="mt-6 px-4 py-8">
          <p className="text-lg md:text-xl flex-shrink justify-end font-semibold dark:text-gray-200">A technology product manager with experience delivering products to B2B clients and consumers around the world. 
            <br/>
            <span className="text-blue-600">
              Experienced in e-commerce, payments, fulfilment and logistics
            </span>  
          </p>
        </div>
        <ButtonLink label="learn more →" href="#about" />
      </div>
      <style jsx>{`
      .txt_shadow {
        text-shadow: 4px 2px 10px rgba(0,0,0,0.15);
      }
    `}</style>
    </div>
    )
}
