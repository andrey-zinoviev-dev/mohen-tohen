import { useEffect, useState } from "react";
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client } from "@aws-sdk/client-s3";
// import FileUploadContent from "./FileUploadContent";

// export default function FileUpload({files, submitStatus, updateStatus}: {files: File[],  submitStatus: {ready: boolean, submitted: boolean, filesUploaded: boolean, applicationSent: boolean, finished: boolean},  updateStatus: React.Dispatch<React.SetStateAction<{ready: boolean, submitted: boolean, filesUploaded: boolean, applicationSent: boolean, finished: boolean}>>}) {
  //state
export default function FileUpload({ files, setUploadStatus }: { files: {title: string, file: File}[], setUploadStatus: React.Dispatch<React.SetStateAction<string>> }) {

  //s3Client
  const S3 = new S3Client({
    credentials: {
      accessKeyId: import.meta.env.VITE_AWS_KEY_ACCESS,
      secretAccessKey: import.meta.env.VITE_AWS_KEY_SECRET,
    },
    endpoint: import.meta.env.VITE_AWS_ENDPOINT,
    region: import.meta.env.VITE_AWS_REGION
  });

  //states
  const [index, setIndex] = useState<number>(0);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  // const [finishedUpload, setFinishedUpload] = useState<boolean>(false);

  const file = files[index];

  useEffect(() => {
    if(file) {
      const s3Upload = new Upload({
        client: S3,
        params: {
          Bucket: import.meta.env.VITE_AWS_NAME,
          Key: file.title,
          Body: file.file,
          ContentType: file.file.type,
        }
      });

      s3Upload.on("httpUploadProgress", (progress) => {
        const { loaded, total } = progress;
        if(loaded && total ) {
          setUploadProgress(loaded/total * 100);
        }
      })
  
      s3Upload.done()
      .then(() => {
        // console.log(data);
        setIndex((prevValue) => {
          return prevValue + 1;
        })
      })
    } else {
      setUploadStatus("files_uploaded");
    }

    return () => {
      // clearInterval(interval);
    }

  }, [file]);

  return (
    <>
      <h3>Вот тут будет вся логика выгрузки файлов и форм</h3>
      <p>Название: {files[index] && files[index].title}</p>
      <progress max={100} value={uploadProgress}></progress>
      </>
    // createPortal(<FileUploadContent label="Загрузка файлов" files={files} submitStatus={submitStatus} updateStatus={updateStatus}></FileUploadContent>, document.body)
  )
}