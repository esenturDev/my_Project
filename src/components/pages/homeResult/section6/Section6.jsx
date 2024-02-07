import Button from "../../../ul/button/Button";
import scss from "./Section6.module.scss";

const Section6 = () => {
	return (
		<section className={scss.section6}>
			<div className="container">
				<div className={scss.content}>
					<p>People have tried to predict the future since</p>
					<p>the dawn of time.</p>
					<Button>Get Started</Button>
				</div>
			</div>
		</section>
	);
};

export default Section6;
