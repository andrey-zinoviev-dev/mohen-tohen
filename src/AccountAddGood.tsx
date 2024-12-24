import React, { useState } from "react";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import InputEl from "./InputEl";
import "./AccountAddGood.css"
import "./ListGrid.css"
// import ListGrid from "./ListGrid";
import LinkCompBack from "./LinkCompBack";
// import { usePostGoodToServerMutation } from "./features/apiSlice";
import { createPortal } from "react-dom";
// import PortalComp from "./PortalComp";
import PortalMultimedia from "./PortalMultimedia";
import PortalContainer from "./PortalContainer";
// import FileUpload from "./FileUpload";
import UploadComp from "./UploadComp";
import { usePostGoodToServerMutation, useUpdateGoodMutation } from "./features/apiSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { addNewGoodToUser, updateGoodData } from "./features/userSlice";
import { categories } from "./utils";
// import { IColor } from "react-color-palette";

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { useLocation } from "react-router-dom";
import { changeMessage } from "./features/notificationSlice";
import { AccountGoodInterface, FileUrlInterface } from "./interfaces";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NoteWrapper from "./NoteWrapper";
import GoodConstructor from "./GoodConstructor";
// import ListElementGeneric from "./ListElementGeneric";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ListElementGeneric from "./ListElementGeneric";
import ListGridOldPhoto from "./ListGridOldPhoto";

import ListFiles from "./ListFiles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import ColorOption from "./ColorOption";
import OptionWrapper from "./OptionWrapper";

export default function AccountAddGood() {
  //location
  const location = useLocation();
  const state = location.state as string;

  //redux
  const userStateGoods = useAppSelector((state) => {
    return state.user.goods;
  });

  const goodToEdit = userStateGoods && userStateGoods.find((good) => {
    return good._id === state;
  }) ? userStateGoods.find((good) => {
    return good._id === state;
  }) as AccountGoodInterface : undefined;
  // const state = location.state as {title: string, category: string, description: string, material: string, dimensions: string, photos: string[], price: number, batch: number, color?: string, madeToOrder: boolean, _id: string};
  // console.log(state);
  //states
  const [formData, setFormData] = React.useState<AccountGoodInterface>(
  //   state ? 
  //   {...state}
  //   :
    {
      title: "",
      category: "",
      description: "",
      material: "",
      dimensions: "",
      photos: [],
      price: 0,
      batch: 1,
      madeToOrder: false,
      goodOptions: [],
    }
  );

  const [photos, setPhotos] = React.useState<FileUrlInterface[]>([]);

  // const [oldPhotos, setOldPhotos] = React.useState<string[]>(state ? state.photos : []);
  
  const [color, setColor] = useColor(goodToEdit && goodToEdit.color ? goodToEdit.color : "#ffffff");

  const [uploadStarted, setUploadStarted] = React.useState<boolean>(false);

  const [optionsOpened, setOptionsOpened] = React.useState<boolean>(false);
  
  const [goodOptions, setGoodOptions] = React.useState<{title: string, price: number, type: string}[]>([]);

  const [colors, setColors] = useState<string[]>([]);
  //dispatch
  const dispatch = useAppDispatch();

  //RTK
  const [addGood] = usePostGoodToServerMutation();
  const [editGood] = useUpdateGoodMutation();
  
  //state
  // const [updloadStarted, setUploadStarted] = useState<boolean>(false);

  //functions

  function removePhoto(name: string) {
    // setPhotos((prevValue) => {
    //   return prevValue.filter((prevPhoto) => {
    //     return prevPhoto.name !== name;
    //   })
    // })
    // setFormData((prevValue) => {
    //   return {
    //     ...prevValue, photos: prevValue.photos.filter((photo) => {
    //       return photo.title !== file.name;
    //     })
    //   }

    // });
  }

  // function removeOldPhoto(url: string) {
  //   setFormData((prevValue) => {
  //     return {...prevValue, photos: prevValue.photos.filter((prevPhoto) => {
  //       return prevPhoto !== url;
  //     })}
  //   })
  //   // setOldPhotos((prevValue) => {
  //   //   return prevValue.filter((prevPhoto) => {
  //   //     return prevPhoto !== url;
  //   //   })
  //   // })
  // }

  // function getOptions(goodOptions) {
  //   console.log(goodOptions)
  // }

  function submitData() {
    // const dataToSend = {...formData, color: color.hex, photos: [...photos.map((photo) => {
    //   return `https://cdn.mohen-tohen.ru/${photo.name}`;
    // }), ...formData.photos], goodOptions: goodOptions};
    // // console.log(dataToSend);
    // return addGood(dataToSend).unwrap()
    // .then((data) => {
    //   // console.log(data);
    //   data && dispatch(addNewGoodToUser(data));
    //   dispatch(changeMessage({message: "Товар успешно добавлен!"}))
    // })
  }

  function submitEditData() {
    // const dataToSend = {...formData, color: color.hex, photos: [...photos.map((photo) => {
    //   return `https://cdn.mohen-tohen.ru/${photo.name}`;
    // }), ...formData.photos]};
    // // console.log(dataToSend);

    // return editGood(dataToSend).unwrap()
    // .then((data) => {
    //   dispatch(updateGoodData(data));
    //   dispatch(changeMessage({message: "Товар успешно обновлен!"}))
    // })
  }

  // function showOptions(options: {colors?: {title: string, options: string[], }}) {
  //   console.log(options);
  // }

  const formNotCompleted = Object.values(formData).filter((entry) => {
    return typeof entry === 'string';
  }).some((entry) => {
    return entry.length === 0;
  });

  React.useEffect(() => {
    if(goodToEdit) {
      setFormData(goodToEdit);
      console.log(goodToEdit.goodOptions)
      goodToEdit.goodOptions && goodToEdit.goodOptions.length > 0 && setOptionsOpened(true)
      goodToEdit.goodOptions && goodToEdit.goodOptions.length > 0 && setGoodOptions(goodToEdit.goodOptions);
    }
  }, [goodToEdit]);
  
  return (
    <>
      <LinkCompBack to="../mygoods" text="Назад к товарам"></LinkCompBack>
      {state ? <h3>Редактирование товара</h3> : <h3>Добавление нового товара</h3>}
      {goodToEdit?.photos && <ListElementGeneric classUl="ulgrid" items={formData.photos} renderItems={(photo) => {
          return <ListGridOldPhoto image={photo} removePhoto={(photo) => {
            setFormData((prevValue) => {
              return {...prevValue, photos: prevValue.photos.filter((prevPhoto) => {
                return prevPhoto !== photo;
              })}
            })
          }}></ListGridOldPhoto>
        }}></ListElementGeneric>}
        <ListFiles files={photos} updateFiles={setPhotos}></ListFiles>
      

      <form className="addGoodform" onSubmit={(evt) => {
        evt.preventDefault();

        if (!goodToEdit) {
          // submitData();
          // console.log(photos);
          // console.log(formData);
          // const photosStrings = photos.map((photo) => {
          //   return `https://cdn.mohen-tohen.ru/${photo.name}`;
          // });
          // formData.photos = photosStrings;

          // getOptions();

          setUploadStarted(true);

          // console.log(formData);
        } else if (goodToEdit) {
          // photos.length > 0 ? 
          // setUploadStarted(true) 
          // : 
          // submitEditData()
          // console.log('edit good here');

          // formData.photos = [...oldPhotos, ...photos.map((photo) => {
          //   return `https://cdn.mohen-tohen.ru/${photo.name}`;
          // })];
          photos.length > 0 ? 
          setUploadStarted(true) 
          : 
          submitEditData()
          // .then
          // console.log(formData);
        }


        // state ? console.log("update good here") : setUploadStarted(true);

        // uploadGood(formData)
        // .then((data) => {
        //   console.log(data);
        // })
      }}>
        <div className="addGoodform__text-wrapper">
          <div className="addGoodform__text-wrapper-div">
            <label className="addGoodform__label">
              <div className="addGoodform__text-wrapper-div-made-to-order">
                <input checked={formData.madeToOrder} type="checkbox" onChange={() => {
                  setFormData((prevValue) => {
                    return {...prevValue, madeToOrder: !prevValue.madeToOrder, batch: prevValue.batch? prevValue.batch : 1};
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
                    <input checked={goodToEdit && goodToEdit.category === category.title && true } name="category" onChange={() => {
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
          {/* {formData.madeToOrder && <GoodConstructorStart />} */}
          <div className="addGoodform__text-wrapper-div">
            <label className="addGoodform__label">
              Материал
              <InputEl value={formData.material} updateState={setFormData} placeHolder="Акрил, металл и стекло" name="material"></InputEl>
            </label>
          </div>
          <div className="addGoodform__text-wrapper-div">
            <label className="addGoodform__label">
              
              <div className="addGoodform__color-wrapper">
                <span>Цвет товара</span>
                <ColorPicker hideAlpha hideInput={["hsv", "rgb"]} color={color} onChange={setColor}>
                </ColorPicker>
                <div className="addGoodform__option-wrapper">
                  <NoteWrapper text="Выберите цвет в палитре и добавьте его, нажав на кнопку +"></NoteWrapper>
                  <button style={{backgroundColor: color.hex}} type="button" onClick={() => {
                    setColors((prevValue) => {
                      return [...prevValue, color.hex]
                    });
                    setColor({hex: "#ffffff", rgb: {r: 255, g: 255, b: 255, a: 1}, hsv: {h: 0, s: 0, v: 100, a: 1} })
                  }}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>

                <ListElementGeneric classUl="ul-options" items={colors} renderItems={(color) => {
                  return <OptionWrapper removeOption={() => {
                    setColors((prevValue) => {
                      return prevValue.filter((prevColor) => {
                        return prevColor !== color
                      })
                    })
                  }}>
                    <ColorOption color={color} active={true}></ColorOption>
                  </OptionWrapper>
                }}>

                </ListElementGeneric>

                {/* <InputEl placeHolder="#ffffff" name= updateState={setFormData}></InputEl> */}
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
          </div>
          <div className="addGoodform__text-wrapper-div">
            <label className="addGoodform__label">
              Цена
              <InputEl value={formData.price.toString()} updateState={setFormData} placeHolder="12500" name="price" type={"number"}></InputEl>
            </label>
          </div>
          {/* {formData.madeToOrder && <div className="addGoodform__text-wrapper-div">
            <NoteWrapper text="Если Вы делаете товар с опциями, их можно добавить в полях ввода ниже"></NoteWrapper>
            {<label className="addGoodform__label">
              <div className="addGoodform__text-wrapper-div-made-to-order">
                <input checked={formData.goodOptions && true} type="checkbox" onChange={() => {
                  setOptionsOpened(!optionsOpened);
                }}>
                </input>
                  Добавить опции к товару
              </div>
            </label>}
            {optionsOpened && <GoodConstructor options={goodOptions} changeOption={setGoodOptions} />}
          </div>} */}

          <button className="addGoodform__button-submit" disabled={(!formNotCompleted && photos.length > 0 ) || (!formNotCompleted && formData.photos.length > 0 )  ? false : true} type="submit">
            Отправить товар
          </button>
        </div>
        <div className="addGoodform__files-wrapper">
          {/* <span>Фото</span>
          <ListElementGeneric classUl="" items={formData.photos} renderItems={(item) => {
            return <>
              <img src={item}></img>
            </>
          }} /> */}
          {/* <button type="button">
            <FontAwesomeIcon icon={faPlus} />
          </button> */}
          {/* <ListGrid removeOldPhoto={removeOldPhoto} oldPics={formData.photos} gridElements={photos} openInput={openInput} removePhoto={removePhoto} /> */}
        </div>
      </form>
      {/* <input type="file" accept=".png, .jpg" ref={fileInputRef} onChange={(evt) => {
        processFileAdd(evt)
      }} style={{display: "none"}}></input> */}

      {/* {uploadStarted && createPortal(<PortalMultimedia>
        <PortalContainer>
          <UploadComp submitData={goodToEdit ? submitEditData : submitData} application={false} linkBack={{text: "Назад к товарам", to: "../mygoods"}} photos={photos}></UploadComp>
        </PortalContainer>
      </PortalMultimedia>, document.body)} */}
    </>
  )
}