import React, { useEffect, useRef, useState } from 'react';
import { headerElements } from "./Header";
import useClickOutside from "./hooks/useClickOutside";
import { MobileSection, MobileButton, MobileMenu } from "./styles/Mobile.style";

const Mobile: React.FC  = () => {
  const [mobileBtn, setMobileBtn] = useState<boolean>(false);
  const menuRef = useRef(null);
  const { clickOutside } = useClickOutside();

  useEffect(() => {
    clickOutside(menuRef, setMobileBtn);
  },[clickOutside, menuRef, setMobileBtn])

  return (
    <MobileSection className={mobileBtn ? "active-menu" : ""} >
      <main ref={ menuRef }>
        <MobileButton
          onClick={() => setMobileBtn(!mobileBtn)}
          className={mobileBtn ? "active" : ""}
        >
          <span id="hamburger"></span>
        </MobileButton>

        <MobileMenu className={mobileBtn ? "mobile-active" : ""} >
          <ul>
            {headerElements.map((element, index) => 
              <li key={index}>
                {element}
              </li>
            )}
          </ul>
        </MobileMenu>
      </main>
    </MobileSection>
  )
}

export default Mobile;