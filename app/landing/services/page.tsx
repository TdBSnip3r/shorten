"use client"
const ServicesPage = () => {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center bg-black py-12 px-4">
            <div className="max-w-2xl w-full text-center">
                <h1 className="text-4xl font-extrabold text-white mb-4">Our Services</h1>
                <p className="text-lg text-white mb-8">
                    We offer a free and instant service to shorten your URLs, making link sharing easier, faster, and more professional. You can monitor your shares and easily manage all your links from a single platform.
                </p>
                <div className="text-whiterounded-xl p-6 mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">Short URL</h2>
                    <p className="text-white">Create short and customized links in seconds, with no limits and no hidden costs.</p>
                </div>
                <div className="rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-2">Coming Soon: Subscriptions</h2>
                    <p className="text-white">We are working to offer you advanced features through premium subscriptions. Stay tuned: soon you will be able to access detailed statistics, advanced customization, and much more! For now, the service is completely free.</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage