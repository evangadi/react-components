import React from "react";
import { NavLink } from "react-router-dom";

class HeaderLink extends React.Component {
  render() {
    return (
      <li className="nav-item">
        <NavLink
          to={this.props.linkUrl}
          activeClassName="active"
          className="nav-link js-scroll-trigger"
        >
          {this.props.linkName}
        </NavLink>
      </li>
    );
  }
}

export default HeaderLink;
