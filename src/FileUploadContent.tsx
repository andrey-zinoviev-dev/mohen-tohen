import React from "react";
import "./FileUploadContent.css";
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client } from "@aws-sdk/client-s3";
import SuccessWrapper from "./SuccessWrapper";
export default function FileUploadContent ({label, photos, submitStatus, updateStatus}: {label: string, photos: File[], submitStatus: {ready: boolean, submitted: boolean, filesUploaded: boolean, applicationSent: boolean, finished: boolean}, updateStatus: React.Dispatch<React.SetStateAction<{ready: boolean, submitted: boolean, filesUploaded: boolean, applicationSent: boolean, finished: boolean}>>}) {
  // console.log(photos);
  //state
  // const [uploadStatus, setUploadStatus] = React.useState<{started: boolean, finished: boolean}>({started: true, finished: false});
  // const [fileIndex, setFileIndex] = React.useState<number>(0);
  // const [uploadingFile, setUploadingFile] = React.useState<{file: File, progress: number} | null>(null);
  const [index, setIndex] = React.useState<number>(0);
  const [uploadFileProgress, setUploadFileProgress] = React.useState<number>(0);
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
        if(progress.loaded && progress.total) {
          setUploadFileProgress((progress.loaded / progress.total * 100));
        }
        // (progress.loaded && progress.total) && setUploadFileProgress(Math.ceil((progress.loaded / progress.total * 100)));
        // setUploadFileProgress(progress.loaded/)
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
        return {...prevValue, filesUploaded: true};
      });
      // setFinishedUpload(true);
    }
  }, [index]);

  // React.useEffect(() => {
  //   console.log(uploadFileProgress);
  // }, [uploadFileProgress])

  return (
    <section className="file-upload">
      <div className="file-upload__content">
        {!submitStatus.applicationSent ? 
        <>
          {!submitStatus.filesUploaded ? 
          <>
            <span>{label}</span>
            <span>Грузится {index < photos.length - 1 ? index + 1 : index} файл из {photos.length}</span>
            <progress max={100} value={uploadFileProgress}></progress>
          </> 
          : 
          <>
            <SuccessWrapper label="Файлы успешно загружены" />
          </> }
        </>
        :
        <>  
          {!submitStatus.finished ? 
          <>
          <span>Анкета отправляется</span>
          </> 
            : 
          <>
            <SuccessWrapper label="Анкета успешно отправлена" />
            <p>Поздравляем, ты- молодец! Твоя анкета будет рассмотрена в течение 1-2 дней, а пока мы его изучаем, приглашаем в <a href="#">наш блог о декоре и об искусстве</a></p>
            <p>Мы свяжемся с тобой в самое ближайшее время, спасибо, что проявил интерес к Mohen-Tohen и что хочешь сделать этот мир красивее!</p>
          </>}
          {/* {submitStatus.} */}
        
        </>}
        {/* <button>Закрыть</button> */}
        {/* {!submitStatus.filesUploaded ? <>
          <span>{label}</span>
          <span>Грузится {index < photos.length - 1 ? index + 1 : index} файл из {photos.length}</span>
          <progress max={100} value={uploadFileProgress}></progress>
        </>
        :
        <>
          {!submitStatus.applicationSent ? <SuccessWrapper label="Файлы успешно загружены" />
          :
          }

        </>
        } */}
      </div>
    </section>
  )
}