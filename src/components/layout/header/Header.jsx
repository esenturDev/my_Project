import scss from "./Header.module.scss";
import logo from "../../../assets/logo/Ellipse 21.png";
import Button from "../../ul/button/Button";
import { useNavigate } from "react-router-dom";
const Header = () => {
	const navigate = useNavigate();
	function navigeteResult() {
		navigate("/registr");
	}
	function loginHandel() {
		navigate("/login");
	}
	return (
		<header className={scss.header}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.divcontent}>
						<img src={logo} alt="logo photo" />
						<p className={scss.p}>Maker</p>
					</div>
					<div className={scss.divcontent1}>
						<p>Home</p>
						<p>Services</p>
						<p>About</p>
						<p>The Team</p>
						<p>Pricing</p>
						<p>Contact</p>
					</div>
					<Button onClick={loginHandel}>Login</Button>
					<Button onClick={navigeteResult}>Sign Up</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
