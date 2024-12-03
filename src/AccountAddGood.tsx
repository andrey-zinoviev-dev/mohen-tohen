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
import { categories } from "./utils";
// import { IColor } from "react-color-palette";

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { useLocation } from "react-router-dom";

export default function AccountAddGood() {
  //location
  const location = useLocation();
  const state = location.state as {title: string, category: string, description: string, material: string, dimensions: string, photos: {title: string, url: string}[], price: number, batch: number, color?: string, madeToOrder: boolean};
  // console.log(state);
  //states
  const [formData, setFormData] = React.useState<{title: string, category: string, description: string, material: string, dimensions: string, photos: {title: string, file: File}[], price: number, batch: number, color?: string, madeToOrder: boolean}>(
    state ? 
    {...state, photos: []}
    :
    {
    title: "",
    category: "",
    description: "",
    material: "",
    dimensions: "",
    photos: [],
    price: 0,
    batch: 0,
    madeToOrder: false,
  });

  const [oldPhotos, setOldPhotos] = React.useState<{title: string, url: string}[]>(state ? state.photos : []);
  
  const [color, setColor] = useColor(state && state.color ? state.color : "#ffffff");

  const [uploadStarted, setUploadStarted] = React.useState<boolean>(false);

  //dispatch
  const dispatch = useAppDispatch();

  //RTK
  const [addGood] = usePostGoodToServerMutation();

  //state
  // const [updloadStarted, setUploadStarted] = useState<boolean>(false);

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

  function removeOldPhoto(url: string) {
   
    setOldPhotos((prevValue) => {
      return prevValue.filter((prevPhoto) => {
        return prevPhoto.url !== url;
      })
    })
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

  // console.log(formNotCompleted);
  
  return (
    <>
      <LinkCompBack to="../mygoods" text="Назад к товарам"></LinkCompBack>
      {state ? <h3>Редактирование товара</h3> : <h3>Добавление нового товара</h3>}
      <form className="addGoodform" onSubmit={(evt) => {
        evt.preventDefault();
        // console.log(formData);
        // console.log(color);
        formData.color = color.hex;
        // console.log(formData);

        state ? console.log("update good here") : setUploadStarted(true);

        // uploadGood(formData)
        // .then((data) => {
        //   console.log(data);
        // })
      }}>
        <div className="addGoodform__text-wrapper">
          <div className="addGoodform__text-wrapper-div">
            <label className="addGoodform__label">
              Название
              <InputEl name="title" value={formData.title} placeHolder="Ночной торшер" updateState={setFormData}></InputEl>
              {/* <input></input> */}
            </label>
          </div>
          <div className="addGoodform__text-wrapper-div">
            <label className="addGoodform__label">
              Категория
            </label>
            <div className="addGoodform__text-wrapper-div-categories">
              {categories.map((category) => {
                return <>
                  <label>
                    <input checked={state && state.category === category.title && true } name="category" onChange={() => {
                      setFormData((prevValue) => {
                        return {...prevValue, category: category.title};
                      })
                    }} type="radio" value={category.title}>
                    </input>
                    {category.title}
                  </label>
                  {/* <span>{category.title}</span> */}
                </>
              })}
            </div>
          </div>
          <div className="addGoodform__text-wrapper-div">
            <label className="addGoodform__label">
              Описание
              <textarea value={formData.description} className="addGoodform__textarea" name="description" onChange={(evt) => {
                setFormData((prevValue) => {
                  return {...prevValue, description: evt.target.value}
                })
              }} placeholder="Описание товара"></textarea>
              {/* <InputEl updateState={setFormData} placeHolder="Этот торшер сделан из премиальных материалов" name="description"></InputEl> */}
              {/* <input></input> */}
            </label>
          </div>
          <div className="addGoodform__text-wrapper-div">
            <label className="addGoodform__label">
              Материал
              <InputEl value={formData.material} updateState={setFormData} placeHolder="Акрил, металл и стекло" name="material"></InputEl>
              {/* <input></input> */}
            </label>
          </div>
          <div className="addGoodform__text-wrapper-div">
            <label className="addGoodform__label">
              
              <div className="addGoodform__color-wrapper">
                <span>Цвет из палитры</span>
                <ColorPicker color={color} onChange={setColor}>
                </ColorPicker>
              </div>
              {/* <InputEl updateState={setFormData} placeHolder="(hex)#ffffff" name="color"></InputEl> */}
            </label>
          </div>
          <div className="addGoodform__text-wrapper-div">
            <label className="addGoodform__label">
              Габариты
              <InputEl value={formData.dimensions} updateState={setFormData} placeHolder="125(Ш)x60(В)x90(Г)" name="dimensions"></InputEl>
            </label>
          </div>
          <div className="addGoodform__text-wrapper-div">
            <label className="addGoodform__label">
              Тираж
              <InputEl value={formData.batch.toString()} disabled={formData.madeToOrder} updateState={setFormData} placeHolder="5" name="batch"></InputEl>
            </label>
            <label className="addGoodform__label">
              <div className="addGoodform__text-wrapper-div-made-to-order">
                <input checked={formData.madeToOrder} type="checkbox" onInput={() => {
                  setFormData((prevValue) => {
                    return {...prevValue, madeToOrder: !prevValue.madeToOrder, batch: prevValue.batch? prevValue.batch : 0};
                  })
                }}></input>
                Товар на заказ
              </div>
            </label>
          </div>
          <div className="addGoodform__text-wrapper-div">
            <label className="addGoodform__label">
              Цена
              <InputEl value={formData.price.toString()} updateState={setFormData} placeHolder="12500" name="price" type={"number"}></InputEl>
            </label>
          </div>
          <button className="addGoodform__button-submit" disabled={(!formNotCompleted && formData.photos.length > 0 ) || (!formNotCompleted && oldPhotos.length > 0 )  ? false : true} type="submit">
            Отправить товар
          </button>
        </div>
        <div className="addGoodform__files-wrapper">
          <span>Фото</span>
          <ListGrid removeOldPhoto={removeOldPhoto} oldPics={oldPhotos} gridElements={formData.photos} openInput={openInput} removePhoto={removePhoto} />
        </div>
      </form>
      <input type="file" accept=".png, .jpg" ref={fileInputRef} onChange={(evt) => {
        processFileAdd(evt)
      }} style={{display: "none"}}></input>
      {uploadStarted && createPortal(<PortalMultimedia>
        {/* <button></button> */}
        <PortalContainer>
          <UploadComp submitData={submitData} application={false} linkBack={{text: "Назад к товарам", to: "../mygoods"}} photos={formData.photos.map((photo) => {
            return photo.file;
          })}></UploadComp>
          {/* <FileUpload></FileUpload> */}
        </PortalContainer>
      </PortalMultimedia>, document.body)}
    </>
  )
}