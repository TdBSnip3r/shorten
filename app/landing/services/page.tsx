"use client"
const ServicesPage = () => {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white py-12 px-4">
            <div className="max-w-2xl w-full text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">I nostri Servizi</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Offriamo un servizio gratuito e immediato per accorciare i tuoi URL, rendendo la condivisione dei link più semplice, veloce e professionale. Puoi monitorare le tue condivisioni e gestire facilmente tutti i tuoi link da un'unica piattaforma.
                </p>
                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                    <h2 className="text-2xl font-bold text-blue-700 mb-2">Short URL</h2>
                    <p className="text-gray-700">Crea link brevi e personalizzati in pochi secondi, senza limiti e senza costi nascosti.</p>
                </div>
                <div className="bg-yellow-50 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-yellow-700 mb-2">Prossimamente: Abbonamenti</h2>
                    <p className="text-gray-700">Stiamo lavorando per offrirti funzionalità avanzate tramite abbonamenti premium. Resta sintonizzato: presto potrai accedere a statistiche dettagliate, personalizzazione avanzata e molto altro! Al momento il servizio è completamente gratuito.</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage