type Props = {
    children: JSX.Element,
}

export function Layout({children}: Props, className="") {
    return(
        <div className={`w-full ${className}`}>
            Home
            {children}
        </div>
    )
}