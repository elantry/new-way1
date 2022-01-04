import React from "react";

import {
  NavbarSection,
  Logo,
  Listitem,
  Logotext,
  Linkstayle,
  Anchor,
  Ullist,
} from "./style";

const Navbar = () => {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <Logotext>Ultra Profile</Logotext>
        </Logo>

        <Ullist>
          <Listitem>
            <Linkstayle to="/">Home</Linkstayle>
          </Listitem>
          <Listitem>
            <Anchor>Work</Anchor>
          </Listitem>
          <Listitem>
            <Anchor>Portfolio</Anchor>
          </Listitem>
          <Listitem>
            <Anchor>Resume</Anchor>
          </Listitem>
          <Listitem>
            <Anchor>About</Anchor>
          </Listitem>
          <Listitem>
            <Linkstayle to="/contact">Contact</Linkstayle>
          </Listitem>
        </Ullist>
      </div>
    </NavbarSection>
  );
};

export default Navbar;
