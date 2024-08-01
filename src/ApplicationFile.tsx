import { FileInterface } from "./interfaces";

export default function ApplicationFile({file}:FileInterface) {
    const path = file && window.URL.createObjectURL(file);
    console.log(path);

    return (
        <img src={path} onLoad={() => {
            path && window.URL.revokeObjectURL(path);
        }}></img>
    )
}