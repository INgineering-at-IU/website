import "hamburgers/_sass/hamburgers/hamburgers.scss";
import HamburgerMenu from "./Hamburger";

interface NavbarProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
  }

export default function Navbar({ isOpen, setIsOpen }: NavbarProps){
    return(
        <div className="w-screen flex h-[10vh] bg-[#5C658E] p-5">
            <div className="flex items-center w-screen px-5">
              <div className="flex items-center mr-auto">
                <img 
                src="../LogoAssets/TransparentLogo.png"
                className="filter invert"
                width={40}
                />
                <p className="font-bold">INgineering @ IU</p>
                </div>
                <div className="mr-0">
                <HamburgerMenu landing={isOpen} setLanding={setIsOpen} />
            </div>
            </div>
            
        </div>
    )
}