import Button from "../../../ul/button/Button";
import scss from "./Section3.module.scss";
import logo from "../../../../assets/logo/Image (1).png";
export const Section3 = () => {
	return (
		<section className={scss.section3}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.div1}>
						<div className={scss.contents1}>
							<h2>Johnatan Doe </h2>
							<p>Marketing Specialist</p>
						</div>
						<div className={scss.contents2}>
							<p>
								To make your web design company famous in the little <br /> we
								are here to provide you as many as catchy and <br /> web design
								company will surely help your company.
							</p>
						</div>
						<div className={scss.buttons}>
							<Button>Learn More</Button>
						</div>
					</div>
					<div className={scss.div2}>
						<img src={logo} alt="logo photo" />
					</div>
				</div>
			</div>
		</section>
	);
};
