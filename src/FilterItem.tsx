import { useState } from "react"

export default function FilterItem({text}: {text: string}) {
    //state
    const [clicked, setClicked] = useState<boolean>(false);
    return (
        <>
            <button onClick={() => {
                setClicked((prevValue) => {
                    return !prevValue;
                })
            }}>{text}</button>
            {clicked && <div>
                <p>Вот тут будут фильтры</p>    
            </div>}
        </>
    )
}