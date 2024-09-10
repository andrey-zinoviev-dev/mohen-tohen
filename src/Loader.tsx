import { useEffect } from "react"
import "./Loader.css";
export default function Loader({ text, setUploadStatus }: { text: string, setUploadStatus: React.Dispatch<React.SetStateAction<string>> }) {

  return (
    <div className="loader">
      <div className="spinner"></div>
      <h3>{text}</h3>
    </div>

  )
}