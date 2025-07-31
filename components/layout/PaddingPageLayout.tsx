'use client'
const PaddingPageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="p-4">
            <div className="main"/>
            {children}
        </div>
    )
}

export default PaddingPageLayout;