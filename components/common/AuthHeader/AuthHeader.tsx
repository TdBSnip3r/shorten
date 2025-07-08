'use client'
import { useWindowSize } from "@uidotdev/usehooks";
import AuthHeaderDesktop from "./AuthHeaderDesktop";
import AuthHeaderMobile from "./AuthHeaderMobile";

const AuthHeader = () => {
    const size = useWindowSize();

    if (size && size.width && size.width < 870) {
      return <AuthHeaderMobile />
    }
  
    return <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <AuthHeaderDesktop />
    </header>
}

export default AuthHeader