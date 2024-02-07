import logo from "../../../../assets/logo/Background.png";
import scss from "./Section4.module.scss";

export const Section4 = () => {
	return (
		<section className={scss.section4}>
			{/* <img src={logo} alt="logo" /> */}
			<div className="container">
				<div className={scss.content}>
					<h2>Watch how we work</h2>
					<p>
						Capture more customers with a great brand recall. Whether you need a
						tising or as a tagline for <br /> your business, our slogan
						generator will help you come up with us.
					</p>
				</div>
			</div>
		</section>
	);
};
