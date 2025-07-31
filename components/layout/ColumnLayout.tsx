//Questo layout permette di mettere il contenuto della pagina al centro dello schermo

const ColumnLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col items-center justify-start h-screen px-4 overflow-y-auto border-2 border-red-500">
            {children}
        </div>
    )
}

export default ColumnLayout