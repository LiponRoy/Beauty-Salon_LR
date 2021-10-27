import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../Asset/images/carasol/salon1.jpg';
import img2 from '../Asset/images/carasol/salon2.jpg';
import img3 from '../Asset/images/carasol/salon3.jpg';
import img4 from '../Asset/images/carasol/salon4.jpg';
import img5 from '../Asset/images/carasol/salon5.jpg';

const SliderImgs = () => {
	const SliderData = [
		{
			price: '312',

			desc: 'Lorem ipsum dolor sit amet ',
			img: img1,
		},
		{
			price: '5445',

			desc: 'Lorem ipsum dolor sit amet',
			img: img2,
		},
		{
			price: '4339',

			desc: 'Lorem ipsum dolor sit amet',
			img: img3,
		},
		{
			price: '10945',

			desc: 'Lorem ipsum dolor sit amet',
			img: img4,
		},
		{
			price: '9014 ',

			desc: 'Lorem ipsum dolor sit amet',
			img: img5,
		},
	];

	//propertice
	let properticeMe = {
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		//koyta kore show korbe
		// slidesToShow:3,
		//arrow press korle koyta kore asbe
		// slidesToScroll:1,
		// vertical:true,
		// verticalSwiping:true,
		pauseOnHover: false,
		fade: true,
		touchMove: true,
		//initialSlide:3,
		// infinite:false,
		// customPaging={i => {
		// 	return (
		// 		<div>
		// 			<div className="castomMe"></div>
		// 		</div>
		// 	);
		// }}
		// dotsClass="slick-dots castomMe"
	};

	return (
		<div className="mainSld">
			<Slider {...properticeMe}>
				{SliderData.map(daa => (
					<div className="carddMe">
						<div className="iteams">
							<div className="imgPart">
								<img
									src={daa.img}
									alt="no img found"
									// className=" img-fluid"
								/>
								<div className="textAll">
									<div className="">
										<h1>{daa.price}</h1>
										<span>
											{daa.desc}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default SliderImgs;
