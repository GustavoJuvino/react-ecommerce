import React, { useState } from 'react';
import { MobileSection, MobileButton } from "./styles/Mobile.style";

const Mobile = () => {
  const [mobileBtn, setMobileBtn] = useState<boolean>(false);

  return (
    <MobileSection>
      <MobileButton
        onClick={() => setMobileBtn(!mobileBtn)}
        className={mobileBtn ? "active" : ""}
      >
        <span id="hamburger"></span>
      </MobileButton>
    </MobileSection>
  )
}

export default Mobile;