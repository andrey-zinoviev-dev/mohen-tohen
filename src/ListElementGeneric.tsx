import { AccountGoodInterface, GoodInterface, goodPageInt, TransactionInterface } from "./interfaces";

//interface
interface GenericListInterface<T> {
    items: T[];
    renderItems: (item: T) => React.ReactNode;
    classUl: string;
    children?: React.ReactNode | React.ReactNode[],
}

export default function ListElementGeneric<T extends GoodInterface | AccountGoodInterface | TransactionInterface | goodPageInt | string | File | {url: string, name: string}>({ items, renderItems, classUl, children }: GenericListInterface<T>) {

    return (
        <ul className={classUl}>
            {children}
            {items.map((item) => {
                return <li key={Math.ceil(Math.random() * 100)}>
                    {renderItems(item)}
                </li>
            })}
        </ul>
    )
}