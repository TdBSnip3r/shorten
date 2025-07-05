//Questo layout permette di mettere il contenuto della pagina al centro dello schermo

const CenteredLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen px-4">
            {children}
        </div>
    )
}

export default CenteredLayout