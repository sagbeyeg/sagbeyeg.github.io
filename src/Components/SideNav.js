import React from "react";
import { Menu, Icon, Sticky } from "semantic-ui-react";

function SideNav() {
  return (
    <Sticky className="socials">
      <Menu secondary vertical>
        <a href="https://github.com/sagbeyeg" target="_blank" rel="noreferrer">
          <Icon link name="github" size="big" inverted color="grey" />
        </a>
        <br />
        <br />
        <a
          href="https://www.linkedin.com/in/sisanwunmi-agbeyegbe/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon link name="linkedin" size="big" inverted color="grey" />
        </a>
        <br />
        <br />
        <a href="https://twitter.com/sagbeyeg" target="_blank" rel="noreferrer">
          <Icon link name="twitter" size="big" inverted color="grey" />
        </a>
        <br />
        <br />
        <a
          href="https://agbeyegbesisan.medium.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon link name="medium" size="big" inverted color="grey" />
        </a>
      </Menu>
    </Sticky>
  );
}

export default SideNav;
