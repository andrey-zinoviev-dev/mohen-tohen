import React from "react";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import InputEl from "./InputEl";
import "./AccountAddGood.css"
import ListGrid from "./ListGrid";
import LinkCompBack from "./LinkCompBack";
// import { usePostGoodToServerMutation } from "./features/apiSlice";
import { createPortal } from "react-dom";
// import PortalComp from "./PortalComp";
import PortalMultimedia from "./PortalMultimedia";
import PortalContainer from "./PortalContainer";
// import FileUpload from "./FileUpload";
import UploadComp from "./UploadComp";
import { usePostGoodToServerMutation } from "./features/apiSlice";
import { useAppDispatch } from "./hooks";
import { addNewGoodToUser } from "./features/userSlice";

export default function AccountAddGood() {
  //states
  const [formData, setFormData] = React.useState<{title: string, description: string, material: string, dimensions: string, photos: {title: string, file: File}[], price: number, batch: number}>({
    title: "",
    description: "",
    material: "",
    dimensions: "",
    photos: [],
    price: 0,
    batch: 0,
  });
  const [uploadStarted, setUploadStarted] = React.useState<boolean>(false);

  //dispatch
  const dispatch = useAppDispatch();

  //RTK
  const [addGood] = usePostGoodToServerMutation();

  //refs
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  //functions
  function openInput() {
    fileInputRef.current && fileInputRef.current.click();
  }

  function processFileAdd(evt:React.ChangeEvent<HTMLInputElement>) {
    const fileuploaded = evt.target.files && {title: evt.target.files[0].name, file: evt.target.files[0]};
    
    fileuploaded && setFormData((prevValue) => {
      const photoInState = prevValue.photos.find((photo) => {
        return photo.title === fileuploaded.title;
      });

      return {...prevValue, photos: photoInState ? prevValue.photos.filter((photo) => {
        return photo.title !== photoInState.title;
      }) : [...prevValue.photos, fileuploaded]}
      // return {...prevValue, photos: [...prevValue.photos, fileuploaded]}
    })
  }

  function removePhoto(file:File) {
    setFormData((prevValue) => {
      return {
        ...prevValue, photos: prevValue.photos.filter((photo) => {
          return photo.title !== file.name;
        })
      }

    });
  }

  function submitData() {
    return addGood(formData)
    .then((data) => {
      // console.log(data);
      data.data && dispatch(addNewGoodToUser(data.data));
    })
  }

  const formNotCompleted = Object.values(formData).filter((entry) => {
    return typeof entry === 'string';
  }).some((entry) => {
    return entry.length === 0;
  });
  
  return (
    <>
      <LinkCompBack to="../mygoods" text="Назад к товарам"></LinkCompBack>
      <h3>Добавление нового товара</h3>
      <form className="addGoodform" onSubmit={(evt) => {
        evt.preventDefault();
        setUploadStarted(true);

        // uploadGood(formData)
        // .then((data) => {
        //   console.log(data);
        // })
      }}>
        <div className="addGoodform__text-wrapper">
          <label className="addGoodform__label">
            Название
            <InputEl name="title" placeHolder="Ночной торшер" updateState={setFormData}></InputEl>
            {/* <input></input> */}
          </label>
          <label className="addGoodform__label">
            Описание
            <InputEl updateState={setFormData} placeHolder="Этот торшер сделан из премиальных материалов" name="description"></InputEl>
            {/* <input></input> */}
          </label>
          <label className="addGoodform__label">
            Материал
            <InputEl updateState={setFormData} placeHolder="Акрил, металл и стекло" name="material"></InputEl>
            {/* <input></input> */}
          </label>
          <label className="addGoodform__label">
            Цвет
            <InputEl updateState={setFormData} placeHolder="(hex)#ffffff" name="color"></InputEl>
          </label>
          <label className="addGoodform__label">
            Габариты
            <InputEl updateState={setFormData} placeHolder="125(Ш)x60(В)x90(Г)" name="dimensions"></InputEl>
          </label>
          <label className="addGoodform__label">
            Тираж
            <InputEl updateState={setFormData} placeHolder="5" name="batch"></InputEl>
          </label>
          <label className="addGoodform__label">
            Цена
            <InputEl updateState={setFormData} placeHolder="12500" name="price" type={"number"}></InputEl>
          </label>

          <button disabled={!formNotCompleted && formData.photos.length > 0 ? false : true} type="submit">
          {/* <button type="submit"> */}
            Отправить товар
          </button>
        </div>
        <div className="addGoodform__files-wrapper">
          <span>Фото</span>
          <ListGrid gridElements={formData.photos} openInput={openInput} removePhoto={removePhoto} />
        </div>
      </form>
      <input type="file" accept=".png, .jpg" ref={fileInputRef} onChange={(evt) => {
        processFileAdd(evt)
      }} style={{display: "none"}}></input>
      {uploadStarted && createPortal(<PortalMultimedia>
        {/* <button></button> */}
        <PortalContainer>
          <UploadComp submitData={submitData} application={false} linkBack={{text: "Назад к товарам", to: "./goods"}} photos={formData.photos.map((photo) => {
            return photo.file;
          })}></UploadComp>
          {/* <FileUpload></FileUpload> */}
        </PortalContainer>
      </PortalMultimedia>, document.body)}
    </>
  )
}