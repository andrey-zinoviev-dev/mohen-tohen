import { AccountGoodInterface, GoodInterface, goodPageInt, TransactionInterface } from "./interfaces";

//interface
interface GenericListInterface<T> {
    items: T[];
    renderItems: (item: T) => React.ReactNode;
    classUl: string;
}

export default function ListElementGeneric<T extends GoodInterface | AccountGoodInterface | TransactionInterface | goodPageInt>({ items, renderItems, classUl }: GenericListInterface<T>) {

    return (
        <ul className={classUl}>
            {items.map((item) => {
                return <li key={Math.ceil(Math.random() * 100)}>
                    {renderItems(item)}
                </li>
            })}
        </ul>
    )
}