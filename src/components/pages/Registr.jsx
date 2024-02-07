import { useState } from "react";
import scss from "./Registr.module.scss";
import Input from "../ul/input/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../ul/button/Button";
const url =
	"https://api.elchocrud.pro/api/v1/c42c42758e7e6bb4969e75eb3a2b9390/figma";

const Registr = () => {
	const navigate = useNavigate();
	const [userName, setUserName] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const handleAuth = () => {
		const newUsers = {
			loginUser: userName,
			passwordUser: userPassword,
		};
		postUser(newUsers);
	};
	const postUser = async (newUsers) => {
		try {
			const response = await axios.post(url, newUsers);
			navigate("/login");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={scss.reg}>
			<div className="container">
				<div className={scss.content}>
					<label>Регистрация</label>
					<Input value={userName} setData={setUserName} type="email" placeholder='email'/>
					<Input
						value={userPassword}
						setData={setUserPassword}
						type="password"
						placeholder='password'
					/>
					<Button onClick={handleAuth}>Регистрация</Button>
				</div>
			</div>
		</div>
	);
};

export default Registr;