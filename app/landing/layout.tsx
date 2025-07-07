import Header from "@/components/layout/Header/Header";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default LandingLayout