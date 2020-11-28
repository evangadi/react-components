import React from 'react';

class HeaderLink extends React.Component {
	render(){
		return (
			<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/mac/">{this.props.linkName}</a></li>
		)		
	}
}

export default HeaderLink;