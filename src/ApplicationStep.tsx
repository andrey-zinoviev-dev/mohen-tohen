export default function ApplicationStep({ children, stepTitle}: {children: React.ReactNode[], stepTitle: string}) {
    return (
        <>
            <h3>{stepTitle}</h3>
            {children}
        </>
    )
}