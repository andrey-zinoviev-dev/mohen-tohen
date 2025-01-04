import ShareButton, { ShareButtonInterface } from "./ShareButton";

type ShareButtonTextType = Omit<ShareButtonInterface, "children">;

interface ShareButtonTextInterface extends ShareButtonTextType {
    text: string,
    classParam: string,
}

export default function ShareButtonText({href, text, classParam}: ShareButtonTextInterface) {
    return (
        <ShareButton classParam={classParam} href={href}>
            <span>{text}</span>
        </ShareButton>
    )
}