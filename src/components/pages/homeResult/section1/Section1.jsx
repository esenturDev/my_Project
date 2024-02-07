import Button from "../../../ul/button/Button";
import scss from "./Section1.module.scss";
import logo from '../../../../assets/logo/Hero area Image.png';
export const Section1 = () => {
	return (
		<section className={scss.section1}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.content1}>
						<div className={scss.div1}>
							<p>
								Make <span>Make a Creative solutions for your Creative</span>
								ideas.
							</p>
						</div>
						<div className={scss.div2}>
							<p>
								We are here to give you effective ideas. We help the brands to
								become what they want.
							</p>
						</div>
						<div className={scss.buttons}>
							<Button>Get Started</Button>
						</div>
					</div>
					<div className={scss.photos}>
            <img src={logo} alt="logo" />
          </div>
				</div>
			</div>
		</section>
	);
};
