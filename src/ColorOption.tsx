import "./ColorOption.css"

export default function ColorOption({ color }: { color: string }) {
    return (
        <div className="option-color" style={{backgroundColor: color}}>

        </div>
    )
}