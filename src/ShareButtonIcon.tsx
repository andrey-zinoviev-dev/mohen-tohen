import { Icon } from "@fortawesome/fontawesome-svg-core";
// import ShareButton from "./ShareButton";
import ShareButton, { ShareButtonInterface } from "./ShareButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

type ShareButtonIconInterface = Omit<ShareButtonInterface, "children">
// type ShareButtonIconInterface = React.ComponentType<typeof ShareButton>

export default function ShareButtonIcon({href, classParam}: ShareButtonIconInterface) {
    return <ShareButton classParam={classParam} href={href}>
        <FontAwesomeIcon icon={faArrowUpFromBracket} />
    </ShareButton>
}