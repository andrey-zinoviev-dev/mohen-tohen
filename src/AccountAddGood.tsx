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
import { usePostGoodToServerMutation } from "./features/apiSlice";
// import { useAppDispatch, useAppSelector } from "./hooks";
// import { addNewGoodToUser, updateGoodData } from "./features/userSlice";
import { categories } from "./utils";
// import { IColor } from "react-color-palette";
import { useAppSelector } from "./hooks";
// import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { useLocation } from "react-router-dom";
// import { changeMessage } from "./features/notificationSlice";
import { AccountGoodInterface, FileUrlInterface } from "./interfaces";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NoteWrapper from "./NoteWrapper";
// import GoodConstructor from "./GoodConstructor";
// import ListElementGeneric from "./ListElementGeneric";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ListElementGeneric from "./ListElementGeneric";
import ListGridOldPhoto from "./ListGridOldPhoto";

import ListFiles from "./ListFiles";
import GoodColors from "./GoodColors";
// import OptionWrapper from "./OptionWrapper";
// import NonSizeOption from "./NonSizeOption";
// import GoodOptionsGeneric from "./GoodOptionsGeneric";
import TextOptions from "./TextOptions";

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
    {
      title: "",
      category: "",
      description: "",
      photos: [],
      price: 0,
      batch: 1,
      madeToOrder: false,
    }
  );

  const [photos, setPhotos] = React.useState<FileUrlInterface[]>([]);

  // const [oldPhotos, setOldPhotos] = React.useState<string[]>(state ? state.photos : []);
  
  // const [color, setColor] = useColor(goodToEdit && goodToEdit.color ? goodToEdit.color : "#ffffff");

  const [uploadStarted, setUploadStarted] = React.useState<boolean>(false);

  // const [optionsOpened, setOptionsOpened] = React.useState<boolean>(false);
  
  // const [goodOptions, setGoodOptions] = React.useState<{title: string, price: number, type: string}[]>([]);

  const [colors, setColors] = useState<{ option: string, price: number }[]>([]);
  const [materials, setMaterials] = useState<{ option: string, price: number}[]>([]);
  const [dimensions, setDimensions] = useState<{ option: string, price: number}[]>([]);

  //test
  // const [newMaterial, setNewMaterial] = useState<{ material: string, price: number}>({material: "", price: 0})
  // //dispatch
  // const dispatch = useAppDispatch();

  // //RTK
  const [addGood] = usePostGoodToServerMutation();
  // const [editGood] = useUpdateGoodMutation();
  
  const formNotCompleted = Object.values(formData).filter((entry) => {
    return typeof entry === 'string';
  }).some((entry) => {
    return entry.length === 0;
  });

  //useMemo
  const filesToUpload = useMemo(() => {
    return photos.map((photo) => {
      return photo.file;
    })
  }, [photos.length])
  // console.log(filesToUpload);

  const linksOfPhotos = useMemo(() => {
    return photos.map((photo) => {
      return `https://cdn.mohen-tohen.ru/${photo.file.name}`
    })
  }, [photos.length])

  //functions
  function addColor({option, price}: {option: string, price: number}) {
    setColors((prevValue) => {
      return [...prevValue, {option, price}];
    })
  }

  function removeColor( option: string ) {
    setColors((prevValue) => {
      return prevValue.filter((prevColor) => {
        return prevColor.option !== option;
      })
    })
  }

  // function removePhoto(name: string) {
  //   // setPhotos((prevValue) => {
  //   //   return prevValue.filter((prevPhoto) => {
  //   //     return prevPhoto.name !== name;
  //   //   })
  //   // })
  //   // setFormData((prevValue) => {
  //   //   return {
  //   //     ...prevValue, photos: prevValue.photos.filter((photo) => {
  //   //       return photo.title !== file.name;
  //   //     })
  //   //   }

  //   // });
  // }

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
    const dataToSend = {...formData, colors: colors, materials: materials, dimensions: dimensions, photos: [...linksOfPhotos, ...formData.photos]};
    // console.log(dataToSend);
    return addGood(dataToSend).unwrap()
    .then((data) => {
      console.log(data);
      // data && dispatch(addNewGoodToUser(data));
      // dispatch(changeMessage({message: "Товар успешно добавлен!"}))
    })
  }

  // function submitEditData() {
  //   // const dataToSend = {...formData, color: color.hex, photos: [...photos.map((photo) => {
  //   //   return `https://cdn.mohen-tohen.ru/${photo.name}`;
  //   // }), ...formData.photos]};
  //   // // console.log(dataToSend);

  //   // return editGood(dataToSend).unwrap()
  //   // .then((data) => {
  //   //   dispatch(updateGoodData(data));
  //   //   dispatch(changeMessage({message: "Товар успешно обновлен!"}))
  //   // })
  // }

  // function showOptions(options: {colors?: {title: string, options: string[], }}) {
  //   console.log(options);
  // }


  // console.log(linksOfPhotos);
  React.useEffect(() => {
    if(goodToEdit) {
      setFormData(goodToEdit);
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
        // console.log(formData);
        // console.log(colors);
        // console.log(dimensions);
        // console.log(materials);
        // console.log(photos);
        if (!goodToEdit) {
        //   // submitData();
        //   // console.log(photos);
        //   // console.log(formData);
        //   // const photosStrings = photos.map((photo) => {
        //   //   return `https://cdn.mohen-tohen.ru/${photo.name}`;
        //   // });
        //   // formData.photos = photosStrings;

        //   // getOptions();

          setUploadStarted(true);

        //   // console.log(formData);
        } else if (goodToEdit) {
        //   // photos.length > 0 ? 
        //   // setUploadStarted(true) 
        //   // : 
        //   // submitEditData()
        //   // console.log('edit good here');

        //   // formData.photos = [...oldPhotos, ...photos.map((photo) => {
        //   //   return `https://cdn.mohen-tohen.ru/${photo.name}`;
        //   // })];
        //   photos.length > 0 ? 
        //   setUploadStarted(true) 
        //   : 
        //   submitEditData()
        //   // .then
        //   // console.log(formData);
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
            </label>
            <TextOptions options={materials} addOptionText="Добавить материал" addOption={({option, price}) => {
              setMaterials((prevValue) => {
                return [...prevValue, {option, price}];
              })
            }} removeOption={(option) => {
              setMaterials((prevValue) => {
                return prevValue.filter((prevOption) => {
                  return prevOption.option !== option;
                })
              })
            }}></TextOptions>

          </div>
          <div className="addGoodform__text-wrapper-div">
            <label className="addGoodform__label">
              
              <div className="addGoodform__color-wrapper">
                <span>Цвет товара</span>
                <NoteWrapper text="Выбреите цвет в палитре, добавьте цену опции, если она увеличивает стоимость товара и нажмите кнопку +"></NoteWrapper>

                <GoodColors colors={colors} addColor={addColor} removeColor={removeColor} />

              </div>
            </label>
          </div>
          <div className="addGoodform__text-wrapper-div">
            <label className="addGoodform__label">
              Габариты
              {/* <InputEl value={formData.dimensions} updateState={setFormData} placeHolder="125(Ш)x60(В)x90(Г)" name="dimensions"></InputEl> */}
            </label>
            <TextOptions options={dimensions} addOptionText="Добавить материал" addOption={({option, price}) => {
              setDimensions((prevValue) => {
                return [...prevValue, {option, price}];
              })
            }} removeOption={(option) => {
              setDimensions((prevValue) => {
                return prevValue.filter((prevOption) => {
                  return prevOption.option !== option;
                })
              })
            }}></TextOptions>

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
          <button className="addGoodform__button-submit" disabled={(!formNotCompleted && photos.length > 0 ) || (!formNotCompleted && formData.photos.length > 0 )  ? false : true} type="submit">
            Отправить товар
          </button>
        </div>
      </form>


      {uploadStarted && createPortal(<PortalMultimedia>
        <PortalContainer>
          <UploadComp submitData={submitData} application={false} linkBack={{text: "Назад к товарам", to: "../mygoods"}} photos={filesToUpload}></UploadComp>

          {/* <UploadComp submitData={goodToEdit ? submitEditData : submitData} application={false} linkBack={{text: "Назад к товарам", to: "../mygoods"}} photos={photos.map((photo) =>)}></UploadComp> */}
        </PortalContainer>
      </PortalMultimedia>, document.body)}
    </>
  )
}