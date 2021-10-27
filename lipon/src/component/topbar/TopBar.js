import React from 'react';
import { FaAngular, FaGithub, FaPaypal } from 'react-icons/fa';
const TopBar = () => {
	return (
		<>
			<div className="topBar">
				<div className="logo">
					<span>Beauty</span>
				</div>
				<div className="contactUs">
					<span>Contact Us</span>
					<span>+8801734010550</span>
				</div>
				<div className="emailUs">
					<span>Email Us</span>
					<span>liponbd@gmail.com</span>
				</div>
				<div className="FollowUs">
					<span>Follow Us</span>
					<div className="socialIcon">
						<FaAngular></FaAngular>
						<FaGithub></FaGithub>
						<FaPaypal></FaPaypal>
					</div>
				</div>
			</div>
		</>
	);
};

export default TopBar;
