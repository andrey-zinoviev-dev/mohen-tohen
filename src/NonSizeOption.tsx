interface NonSizeOptionInterface {
    option: string,
}

export default function NonSizeOption({ option }: NonSizeOptionInterface) {
    return (
        <span>{option}</span>
    )
}