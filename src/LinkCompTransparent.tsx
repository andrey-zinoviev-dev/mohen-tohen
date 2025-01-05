import { ComponentProps } from "react";
import LinkComp from "./LinkComp";

type LinkTransparentType = Omit<ComponentProps<typeof LinkComp>, "className">


export default function LinkCompTransparent({href, children}: LinkTransparentType) {
    return (
        <LinkComp className="link-comp_transparent" href={href}>
            {children}
        </LinkComp>
    )
}