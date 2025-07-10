import Header from "@/components/layout/Header/Header";
import { RedirectToDashboardForAuthenticatedUser } from "@/components/providers/RedirectToDashboardForAuthenticatedUser";


const LandingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <RedirectToDashboardForAuthenticatedUser>
                <Header />
                {children}
            </RedirectToDashboardForAuthenticatedUser>
        </>
    )
}

export default LandingLayout