import React, {Component} from 'react';


class Fourth extends Component {
	render() {
		return (
			<div className={`col-12 col-sm-12 col-md-6 col-lg-6 ${this.props.wrapperClass}`}>
				<div className={this.props.innerclassName}>
					<div className="top-logo-wrapper">
						<div className="logo-wrapper">
							
						</div>
					</div>
					<div className="description-wraper">
						{this.props.description}
					</div>
					<div className="links-wrapper">
						<ul>
							<li><a href="">Learn more</a></li>
							<li><a href="">Buy</a></li>
						</ul> 
					</div>					
				</div>				
			</div>
		)		
	}

}
export default Fourth;