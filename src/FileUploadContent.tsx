import React from "react";
import "./FileUploadContent.css";
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client } from "@aws-sdk/client-s3";
export default function FileUploadContent ({label, photos}: {label: string, photos: File[]}) {
  // console.log(photos);
  //state
  // const [uploadStatus, setUploadStatus] = React.useState<{started: boolean, finished: boolean}>({started: true, finished: false});
  // const [fileIndex, setFileIndex] = React.useState<number>(0);
  // const [uploadingFile, setUploadingFile] = React.useState<{file: File, progress: number} | null>(null);
  const [index, setIndex] = React.useState<number>(0);
  // const [uploadFileProgress, setUploadFileProgress] = React.useState<number>(0);
  // const [loadingFile, setLoadingFile] = React.useState<File | null>(null);

  // React.useEffect(() => {
  //   console.log(uploadingFile);
  // }, []);

  //s3
  // const S3 = new S3Client({
  //   region: import.meta.env.AWS_REGION,
  //   bucketEndpoint: 
  // })

  //derived state
  const fileToUpload = photos[index];
  console.log(fileToUpload);

  React.useEffect(() => {
    // console.log(index);
    const timeout = setTimeout(() => {
      if(index < photos.length -1 ) {
        setIndex((prevValue) => {
          return prevValue + 1;
        })
      }
    }, 3000)
    
    return () => {
      clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="file-upload">
      <div className="file-upload__content">
        {/* <button>Закрыть</button> */}
        <span>{label}</span>
        <span>Грузится {index + 1} файл из {photos.length}</span>
        {/* <span>Грузится {photos[fileIndex].name} файл</span> */}
        {/* <span>{loadingFile?.name}</span> */}
        {/* <progress max={100} value={uploadFileProgress}></progress> */}
      </div>
    </section>
  )
}