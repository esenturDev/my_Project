import Button from "../../ul/button/Button";
import scss from "./Footer.module.scss";
import logo from '../../../assets/logo/Icon03.png';
import logo1 from '../../../assets/logo/Icon04.png';
import logo2 from '../../../assets/logo/Icon02.png';
import logo3 from '../../../assets/logo/Icon01.png';

export const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.div1}>
						<div className={scss.content11}>
							<h3>Freelancer</h3>
							<p className={scss.p}>$ 19/mo</p>
							<p>5 Psd fles included</p>
							<p>24 hours free support</p>
							<p>Multiple features installed</p>
							<p>100 Elements PSD + Al</p>
							<Button>Subscribe</Button>
						</div>
						<div className={scss.content11}>
							<h3>Corporate</h3>
							<p className={scss.p}>$ 24/mo</p>
							<p>5 Psd fles included</p>
							<p>24 hours free support</p>
							<p>Multiple features installed</p>
							<p>100 Elements PSD + Al</p>
							<Button>Subscribe</Button>
						</div>
						<div className={scss.content11}>
							<h3>Agency</h3>
							<p className={scss.p}>$ 25/mo</p>
							<p>5 Psd fles included</p>
							<p>24 hours free support</p>
							<p>Multiple features installed</p>
							<p>100 Elements PSD + Al</p>
							<Button>Subscribe</Button>
						</div>
						<div className={scss.content11}>
							<h3>Enterprise</h3>
							<p className={scss.p}>$ 15/mo</p>
							<p>5 Psd fles included</p>
							<p>24 hours free support</p>
							<p>Multiple features installed</p>
							<p>100 Elements PSD + Al</p>
							<Button>Subscribe</Button>
						</div>
					</div>
					<div className={scss.div2}>
						<div className={scss.contents11}>
							<div className={scss.div3}>
								<p>Home</p>
								<p>Privacy</p>
								<p>Terms & Conditions</p>
								<p>About us</p>
								<p>Contact us</p>
							</div>
              <div className={scss.div4}>
                <p>@ A new era 2016. Awesome wireframe  by Andrei Dorin</p>
              </div>
						</div>
						<div className={scss.footercontent}>
              <img src={logo} alt="photo" />
              <img src={logo1} alt="photo" />
              <img src={logo2} alt="photo" />
              <img src={logo3} alt="photo" />
            </div>
					</div>
				</div>
			</div>
		</footer>
	);
};
