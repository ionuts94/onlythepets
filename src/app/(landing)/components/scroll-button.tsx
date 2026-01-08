"use client"

type Props = {
    children?: React.ReactNode,
    scrollToId: string,
    className?: string
}

export const ScrollButton: React.FC<Props> = ({ children, scrollToId, className }) => {
    const scrollTo = () => {
        document.getElementById(scrollToId)?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <button
            onClick={scrollTo}
            className={`${className}`}
        >
            {children}
        </button>
    )
}