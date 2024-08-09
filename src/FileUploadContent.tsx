import React from "react";
import "./FileUploadContent.css";
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client } from "@aws-sdk/client-s3";
export default function FileUploadContent ({label, photos, updateStatus}: {label: string, photos: File[], updateStatus: React.Dispatch<React.SetStateAction<{ready: boolean, submitted: boolean, finished: boolean}>>}) {
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
  const S3 = new S3Client({
    credentials: {
      accessKeyId: import.meta.env.VITE_AWS_KEY_ACCESS,
      secretAccessKey: import.meta.env.VITE_AWS_KEY_SECRET,
    },
    endpoint: import.meta.env.VITE_AWS_ENDPOINT,
    region: import.meta.env.VITE_AWS_REGION
  });

  //derived state
  const fileToUpload = photos[index];
  // console.log(fileToUpload);

  React.useEffect(() => {
    if(fileToUpload) {
      const uploadS3 = new Upload({
        client: S3,
        params: {
          Bucket: import.meta.env.VITE_AWS_NAME,
          Key: fileToUpload.name,
          Body: fileToUpload,
          ContentType: fileToUpload.type,
        }
      });
  
      uploadS3.on("httpUploadProgress", (progress) => {
        console.log(progress);
      });
  
      uploadS3.done()
      .then(() => {
        if(index < photos.length -1 ) {
          setIndex((prevValue) => {
            return prevValue + 1;
          })
        } 
      })
    } 
    else {
      updateStatus((prevValue) => {
        return {...prevValue, submitted: false, finished: true};
      })
    }
    // console.log(index);
    // const timeout = setTimeout(() => {
    //   if(index < photos.length -1 ) {
    //     setIndex((prevValue) => {
    //       return prevValue + 1;
    //     })
    //   } else {
    //     console.log("finish upload");
    //     updateStatus((prevValue) => {
    //       return {...prevValue, submitted: false, finished: true};
    //     })
    //   }
    // }, 3000)
    
    // return () => {
    //   clearTimeout(timeout);
    // }
  }, [index]);

  return (
    <section className="file-upload">
      <div className="file-upload__content">
        {/* <button>Закрыть</button> */}
        <span>{label}</span>
        <span>Грузится {index + 1} файл из {photos.length}</span>
        {/* <span>Грузится {photos[fileIndex].name} файл</span> */}
        {/* <span>{loadingFile?.name}</span> */}
        <progress max={100} value={37}></progress>
      </div>
    </section>
  )
}