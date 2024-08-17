export default function HomeStagingStep({index, title, description}: {index: number, title: string, description: string}) {
    return (
        <>
            <span>{index}</span>
            <h3>{title}</h3>
            <span>{description}</span>
            {/* <button></button> */}
        </>
    )
};