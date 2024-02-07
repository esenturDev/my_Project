import scss from "./Section5.module.scss";
import logo from "../../../../assets/logo/icon (2).png";

export const Section5 = () => {
	return (
		<section className={scss.section5}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.content1}>
						<div className={scss.div1}>
							<h2>Best features in the world</h2>
						</div>
						<div className={scss.div2}>
							<p>
								Capture more customers wd recall. Whether you need a tising or
								as a tagline for you. Capture more <br />
								customers wd recall. Whether you need a tising or as a tagline
								for you.
							</p>
						</div>
					</div>
					<div className={scss.content2}>
						<div className={scss.card}>
							<img src={logo} alt="logo" />
							<p className={scss.p}>Sleek and smooth animation</p>
							<p>
								Powerful creations for the practice safe <br /> design creations
								for the prac.
							</p>
						</div>
						<div className={scss.card}>
							<img src={logo} alt="logo" />
							<p className={scss.p}>Crafted with detail</p>
							<p>
								Powerful creations for the practice safe <br /> design creations
								for the prac.
							</p>
						</div>
						<div className={scss.card}>
							<img src={logo} alt="logo" />
							<p className={scss.p}>Save your time</p>
							<p>
								Powerful creations for the practice safe <br /> design creations
								for the prac.
							</p>
						</div>
					</div>
					<div className={scss.content2}>
						<div className={scss.card}>
							<img src={logo} alt="logo" />
							<p className={scss.p}>Responsive on any device</p>
							<p>
								Powerful creations for the practice safe <br /> design creations
								for the prac.
							</p>
						</div>
						<div className={scss.card}>
							<img src={logo} alt="logo" />
							<p className={scss.p}>Easy to customize</p>
							<p>
								Powerful creations for the practice safe <br /> design creations
								for the prac.
							</p>
						</div>
						<div className={scss.card}>
							<img src={logo} alt="logo" />
							<p className={scss.p}>Save your time</p>
							<p>
								Powerful creations for the practice safe <br /> design creations
								for the prac.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
