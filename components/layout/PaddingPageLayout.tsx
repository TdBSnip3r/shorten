'use client'
const PaddingPageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="p-4">
            {children}
        </div>
    )
}

export default PaddingPageLayout;