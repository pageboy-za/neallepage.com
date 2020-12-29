export default function title({title_text}) {
    return (
        <div className="text-center py-10">
            <h2 className=" txt_shadow text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400">{title_text}</h2>
            <style jsx>{`
              .txt_shadow { text-shadow: -1px 20px 20px rgba(0,0,0,.35);}
            `}</style>
        </div>
    )
}