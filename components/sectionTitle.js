export default function title({title_text}) {
    return (
        <div className="text-center">
            <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400">{title_text}</h2>
        </div>
    )
}