import { useState } from "react"

export default function FilterItem({text, children}: {text: string, children: React.ReactNode | React.ReactNode[]}) {
    //state
    // const [clicked, setClicked] = useState<boolean>(false);
    return (
        <>
            {/* <button onClick={() => {
                setClicked((prevValue) => {
                    return !prevValue;
                })
            }}>{text}</button> */}
            {children}
        </>
    )
}