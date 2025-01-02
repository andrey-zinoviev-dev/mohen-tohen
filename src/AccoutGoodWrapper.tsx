import React, { useMemo, useState } from "react";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import InputEl from "./InputEl";
import "./AccountAddGood.css"
import "./ListGrid.css"
// import ListGrid from "./ListGrid";
import LinkCompBack from "./LinkCompBack";
// import { usePostGoodToServerMutation } from "./features/apiSlice";
import { createPortal } from "react-dom";
// // import PortalComp from "./PortalComp";
import PortalMultimedia from "./PortalMultimedia";
import PortalContainer from "./PortalContainer";
// // import FileUpload from "./FileUpload";
import UploadComp from "./UploadComp";
// import { usePostGoodToServerMutation } from "./features/apiSlice";
// import { useAppDispatch, useAppSelector } from "./hooks";
// import { addNewGoodToUser, updateGoodData } from "./features/userSlice";
import { categories } from "./utils";
// import { IColor } from "react-color-palette";
// import { useAppSelector } from "./hooks";
// import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
// import { useLocation } from "react-router-dom";
// import { changeMessage } from "./features/notificationSlice";
import { AccountGoodInterface, FileUrlInterface, GoodInterface } from "./interfaces";
import NoteWrapper from "./NoteWrapper";

import ListElementGeneric from "./ListElementGeneric";
import ListGridOldPhoto from "./ListGridOldPhoto";

import ListFiles from "./ListFiles";
import GoodColors from "./GoodColors";
// import OptionWrapper from "./OptionWrapper";
// import NonSizeOption from "./NonSizeOption";
// import GoodOptionsGeneric from "./GoodOptionsGeneric";
import TextOptions from "./TextOptions";
import Headline from "./Headline";
// import { updateGoodData } from "./features/userSlice";
import TextareaEl from "./TextareaEl";

interface AccountGoodWrapperInterface<T> {
  headline: string,
  goodData: T,
  updateGoodData: React.Dispatch<React.SetStateAction<T>>,
  onSubmit: (photos: string[]) => Promise<void>,
}

export default function AccountGoodWrapper<T extends AccountGoodInterface | GoodInterface>({ headline, goodData, updateGoodData, onSubmit, }: AccountGoodWrapperInterface<T>) {

  const [uploadStarted, setUploadStarted] = React.useState<boolean>(false);

  const [files, setFiles] = useState<FileUrlInterface[]>([]);

  // //useMemo
  const filesToUpload = useMemo(() => {
    return files.map((photo) => {
      return photo.file;
    })
  }, [files.length])
  
  return (
    <>
      <LinkCompBack to="../mygoods" text="Назад к товарам"></LinkCompBack>
      <Headline text={headline}></Headline>

      <ListElementGeneric classUl="ulgrid" items={goodData.photos} renderItems={(photo) => {
          return <ListGridOldPhoto image={photo} removePhoto={(photo) => {
            updateGoodData((prevValue) => {
              return {...prevValue, photos: prevValue.photos.filter((prevPhoto) => {
                return prevPhoto !== photo;
              })}
            })
          }}></ListGridOldPhoto>
        }}></ListElementGeneric>
      <ListFiles files={files} updateFiles={setFiles}></ListFiles>
      
      <form className="addGoodform" onSubmit={(evt) => {
        evt.preventDefault();
        setUploadStarted(true);
      }}>
        <div className="addGoodform__text-wrapper">
          <div className="addGoodform__text-wrapper-div">
            <label className="addGoodform__label">
              <div className="addGoodform__text-wrapper-div-made-to-order">
                <input checked={goodData.madeToOrder} type="checkbox" onChange={() => {
                  updateGoodData((prevValue) => {
                    return {...prevValue, madeToOrder: !prevValue.madeToOrder }
                  })

                }}></input>
                Товар на заказ
              </div>
              <NoteWrapper text="Если Вы делаете товар на заказ, то тираж вашего товара - 1 штука"></NoteWrapper>
            </label>
          </div>
          <div className="addGoodform__text-wrapper-div">
            <label className="addGoodform__label">
              Название
              <InputEl name="title" value={goodData.title} placeHolder="Ночной торшер" updateState={updateGoodData}></InputEl>
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
                    <input checked={goodData.category === category.title && true} name="category" onChange={() => {
                        updateGoodData((prevValue) => {
                          return {...prevValue, category: category.title}
                        })

                      }} type="radio" value={category.title}>
                      </input>
                    {category.title}
                  </label>
                </>
              })}
            </div>
          </div>
          <div className="addGoodform__text-wrapper-div">
            <label className="addGoodform__label">
              Описание
              <TextareaEl name="description" value={goodData.description} placeholder="Описание товара" updateValue={updateGoodData}></TextareaEl>
            </label>
          </div>
          <div className="addGoodform__text-wrapper-div">
            <label className="addGoodform__label">
              Материал
            </label>
            <TextOptions options={goodData.materials} addOptionText="Добавить материал" addOption={({option, price}) => {
              updateGoodData((prevValue) => {
                return {...prevValue, materials: [...prevValue.materials, {option, price}]}
              })
            }} removeOption={(option) => {
              updateGoodData((prevValue) => {
                return {...prevValue, materials: prevValue.materials.filter((prevOption) => {
                  return prevOption.option !== option;
                })}
              })
            }}></TextOptions>

          </div>
          <div className="addGoodform__text-wrapper-div">
            <label className="addGoodform__label">
              
              <div className="addGoodform__color-wrapper">
                <span>Цвет товара</span>
                <NoteWrapper text="Выбреите цвет в палитре, добавьте цену опции, если она увеличивает стоимость товара и нажмите кнопку +"></NoteWrapper>

                <GoodColors colors={goodData.colors} updateColors={updateGoodData} />

              </div>
            </label>
          </div>
          <div className="addGoodform__text-wrapper-div">
            <label className="addGoodform__label">
              Габариты
            </label>
            <TextOptions options={goodData.dimensions} addOptionText="Добавить материал" addOption={({option, price}) => {
              updateGoodData((prevValue) => {
                return {...prevValue, dimensions: [...prevValue.dimensions, {option, price}]}
              })
              // setDimensions((prevValue) => {
              //   return [...prevValue, {option, price}];
              // })
            }} removeOption={(option) => {
              updateGoodData((prevValue) => {
                return {...prevValue, dimensions: prevValue.dimensions.filter((prevOption) => {
                  return prevOption.option !== option
                })}
              })
              // setDimensions((prevValue) => {
              //   return prevValue.filter((prevOption) => {
              //     return prevOption.option !== option;
              //   })
              // })
            }}></TextOptions>

          </div>
          <div className="addGoodform__text-wrapper-div">
            <label className="addGoodform__label">
              Тираж
              <InputEl value={goodData.batch.toString()} disabled={goodData.madeToOrder} updateState={updateGoodData} placeHolder="5" name="batch"></InputEl>
            </label>
          </div>
          <div className="addGoodform__text-wrapper-div">
            <label className="addGoodform__label">
              Цена
              <InputEl value={goodData.price.toString()} updateState={updateGoodData} placeHolder="12500" name="price" type={"number"}></InputEl>
            </label>
          </div>
          {/* <button className="addGoodform__button-submit" disabled={(!formNotCompleted && photos.length > 0 ) || (!formNotCompleted && formData.photos.length > 0 )  ? false : true} type="submit"> */}
          <button className="addGoodform__button-submit" type="submit">
  
            Отправить товар
          </button>
        </div>
      </form>


      {uploadStarted && createPortal(<PortalMultimedia>
        <PortalContainer>

          <UploadComp submitData={onSubmit} application={false} linkBack={{text: "Назад к товарам", to: "../mygoods"}} photos={filesToUpload}></UploadComp>
        </PortalContainer>
      </PortalMultimedia>, document.body)}
    </>
  )
}