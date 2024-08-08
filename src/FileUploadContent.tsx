import React from "react";
export default function FileUploadContent ({label, photos}: {label: string, photos: File[]}) {
  //state
  // const [uploadStatus, setUploadStatus] = React.useState<{started: boolean, finished: boolean}>({started: true, finished: false});
  const [fileIndex, setFileIndex] = React.useState<number>(0);
  const [uploadFileProgress, setUploadFileProgress] = React.useState<number>(0);
  // const [loadingFile, setLoadingFile] = React.useState<File | null>(null);

  // React.useEffect(() => {
  //   photos.map((photo) => {
  //     return setLoadingFile(photo);
  //   })
  // }, []);

  // React.useEffect(() => {
  //   console.log(loadingFile);
  // }, [loadingFile]);

  // React.useEffect(() => {
    
  //     const timeout = setTimeout(() => {
  //       if(fileIndex < photos.length - 1) {
  //         setFileIndex((prevValue) => {
  //           return prevValue + 1;
  //         });
  //       }
  //     }, 3000);
  
  //     return () => {
  //       clearTimeout(timeout);
  //     }
  // }, [fileIndex, photos.length]);


  
  return (
    <div>
      <button>Закрыть</button>
      <span>{label}</span>
      <span>Всего {photos.length} файлов</span>
      <span>Грузится {photos[fileIndex].name} файл</span>
      {/* <span>{loadingFile?.name}</span> */}
      <progress max={100} value={uploadFileProgress}></progress>
    </div>
  )
}