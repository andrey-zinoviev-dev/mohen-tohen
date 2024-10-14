import { useState } from "react";
// import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { GoodInterface } from "./interfaces";
import { useAppDispatch } from "./hooks";
import { changeMessage } from "./features/notificationSlice";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import "./ShareButton.css"
import { createPortal } from "react-dom";
import PortalComp from "./PortalComp";
import { faShareNodes, faXmark } from "@fortawesome/free-solid-svg-icons";
import { EmailIcon, TelegramIcon, WhatsappIcon, EmailShareButton, TelegramShareButton, WhatsappShareButton } from "react-share";
// import { faNode } from "@fortawesome/free-brands-svg-icons";

export default function ShareButton({ href }: { href: string }) {
  const dispatch = useAppDispatch();

  //state
  const [openedShare, setOpenedShare] = useState<boolean>(false);

  return (
    <>
      <button className="share-button" onClick={(evt) => {
        evt.stopPropagation();
        setOpenedShare(true);
        // navigator.clipboard.writeText(href)
        // .then(() => {
        //   dispatch(changeMessage({message: "Ссылка на товар скопирована!"}))
        // })
      }}>
        <FontAwesomeIcon icon={faCopy} />
      </button>
      {openedShare && createPortal(<PortalComp>
        <button onClick={(evt) => {
          evt.stopPropagation();
          setOpenedShare(false);
        }}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <span>
          Поделиться
        </span>
        <div>
          <button onClick={(evt) => {
            evt.stopPropagation();
            navigator.clipboard.writeText(href)
            .then(() => {
              dispatch(changeMessage({message: "Ссылка скопирована"}))
            })
          }}>
            <FontAwesomeIcon icon={faShareNodes} />
            <span>Скопировать ссылку</span>
          </button>
          <EmailShareButton url="">
            <EmailIcon />
            <span>Почта</span>
          </EmailShareButton>
          <TelegramShareButton url="http://localhost:5173">
            <TelegramIcon />
            <span>Telegram</span>
          </TelegramShareButton>
          <WhatsappShareButton url="http://localhost:5173">
            <WhatsappIcon />
            <span>Whatsapp</span>
          </WhatsappShareButton>
        </div>
      </PortalComp>, document.body)}
    </>

  )
}