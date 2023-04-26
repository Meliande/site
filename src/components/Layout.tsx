type Props = {
    children: JSX.Element,
    className: string,
}

export function Layout({children,className}: Props) {
    return(
        <div className={`w-full h-full inline-block z-0 bg-white p-32 ${className}`}>
            {children}
        </div>
    )
}