import { useEffect } from "react"

export default function Loader({ setUploadStatus }: { setUploadStatus: React.Dispatch<React.SetStateAction<string>> }) {
  
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setUploadStatus("finished");
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    }
  }, []);

  return (
    <h3>тут будет прелоудер и сообщение про загрузку на сайт</h3>
  )
}