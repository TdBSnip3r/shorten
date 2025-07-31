const LinksHeroSection = () => (
    <section className="w-full flex flex-col items-center justify-center py-10 rounded-xl mb-6 shadow-sm">
      <div className="flex items-center flex-col sm:flex-row gap-3 mb-2">
        {/* Icona SVG di un link */}
        <span className="inline-block p-2 bg-blue-100 rounded-full">
          <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
            <path
              d="M17 7a5 5 0 0 1 0 7l-3 3a5 5 0 0 1-7-7l1-1"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 17a5 5 0 0 1 0-7l3-3a5 5 0 0 1 7 7l-1 1"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">I tuoi link accorciati</h1>
      </div>
      <p className="text-white text-lg max-w-2xl text-center">
        Qui puoi gestire, copiare, eliminare e monitorare tutti i tuoi shortlink in modo semplice e veloce.<br />
        Tieni traccia delle tue URL e condividile con un click!
      </p>
    </section>
  );
  
  export default LinksHeroSection;