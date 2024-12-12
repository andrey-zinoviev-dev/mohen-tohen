import "./ColorOption.css"

export default function ColorOption({ color, active }: { color: string, active: boolean }) {
    return (
        <div className={active ? "option-color_active option-color" : "option-color"}>
            <div className="option-color__inner-div" style={{backgroundColor: color}}></div>
        </div>
    )
}