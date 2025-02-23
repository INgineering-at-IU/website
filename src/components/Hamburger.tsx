import { useState } from "react";
interface HamburgerMenuProps {
    landing: boolean;
    setLanding: (open: boolean) => void;
  }

export default function HamburgerMenu({ landing, setLanding }: HamburgerMenuProps) {
   const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
  };

  const toggleLanding = () => {
    setLanding(!landing)
  }

  return (
    <div>
      <button
        className={`hamburger hamburger--minus ${isOpen ? "is-active" : ""} outline-none filter-invert`}
        style={{
            outline: "none",
          }}
        type="button"
        onMouseDown={toggleMenu}
        onClick={toggleLanding}
        aria-label="Menu"
        aria-controls="navigation"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  );
}
