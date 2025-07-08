const AboutPage = () => {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white py-12 px-4">
            <div className="max-w-2xl w-full text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Chi Siamo</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Siamo un team di appassionati di tecnologia e innovazione, dedicati a rendere la condivisione dei link semplice, veloce e sicura. La nostra missione è offrire uno strumento affidabile e intuitivo per accorciare i tuoi URL e monitorare le tue condivisioni online.
                </p>
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-8">
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600 mb-2">VB</div>
                        <div className="font-semibold text-gray-800">Vincenzo Brunale</div>
                        <div className="text-gray-500 text-sm">Founder & Developer</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600 mb-2">AG</div>
                        <div className="font-semibold text-gray-800">Antonello Gianfelice</div>
                        <div className="text-gray-500 text-sm">Co-Founder</div>
                    </div>
                </div>
                <div className="mt-10 text-gray-400 text-sm">&copy; {new Date().getFullYear()} Shorten. Tutti i diritti riservati.</div>
            </div>
        </div>
    )
}

export default AboutPage