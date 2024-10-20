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
// import PortalCentered from "./PortalCentered";
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
        {/* <PortalCentered>
          
        </PortalCentered> */}
        <span>
          Поделиться
        </span>
        <ul className="share-ul">
          <li className="share-ul__li">
            <button className="share-ul__li-button" onClick={(evt) => {
                    evt.stopPropagation();
                    navigator.clipboard.writeText(href)
                    .then(() => {
                      dispatch(changeMessage({message: "Ссылка скопирована"}))
                    })
                  }}>
                <FontAwesomeIcon icon={faShareNodes} />
            </button>
            <span>Сылка</span>
          </li>
          <li className="share-ul__li">
            <EmailShareButton className="share-icon" url="">
              <EmailIcon />
            </EmailShareButton>
            <span>Почта</span>
          </li>
          <li className="share-ul__li">
            <TelegramShareButton className="share-icon" url="http://localhost:5173">
              <TelegramIcon />
            </TelegramShareButton>
            <span>Telegram</span>
          </li>
          <li className="share-ul__li">
            <WhatsappShareButton className="share-icon" url="http://localhost:5173">
              <WhatsappIcon />
            </WhatsappShareButton>
            <span>Whatsapp</span>
          </li>
        </ul>
      </PortalComp>, document.body)}
    </>

  )
}