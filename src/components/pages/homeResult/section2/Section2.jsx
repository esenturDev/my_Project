import scss from "./Section2.module.scss";
import logo from "../../../../assets/logo/icon.png";
import logo1 from "../../../../assets/logo/icon (1).png";

const Section2 = () => {
	return (
		<section className={scss.section2}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.content1}>
						<p>We provide great services</p>
						<p className={scss.texts}>
							We help people to think independent. Be the boss of your brand and
							be the
						</p>
						<p className={scss.texts}> storyteller. An appropriate approach.</p>
					</div>
					<div className={scss.content2}>
						<div className={scss.card}>
							<img src={logo} alt="logo" />
							<h3>Web Design</h3>
							<p>Powerful creations for the practice safe design.</p>
						</div>
						<div className={scss.card}>
							<img src={logo1} alt="logo1" />
							<h3>Identity & Branding</h3>
							<p>Powerful creations for the practice safe design.</p>
						</div>
						<div className={scss.card}>
							<img src={logo} alt="logo" />
							<h3>Print and Packaging</h3>
							<p>Powerful creations for the practice safe design.</p>
						</div>
						<div className={scss.card}>
							<img src={logo1} alt="logo1" />
							<h3>Content Writing</h3>
							<p>Powerful creations for the practice safe design.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section2;
