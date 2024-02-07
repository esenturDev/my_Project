import { useNavigate } from "react-router-dom";
import scss from "./Login.module.scss";
import { useState } from "react";
import Input from "../ul/input/Input";
import axios from "axios";
import Button from "../ul/button/Button";
import { createPortal } from "react-dom";
import Modal from "../modal/Modal";
const url =
	"https://api.elchocrud.pro/api/v1/c42c42758e7e6bb4969e75eb3a2b9390/figma";
const LoginPages = () => {
	const navigate = useNavigate();
	const [modal, setModal] = useState(false);
	const [userName, setUserName] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const getUser = async () => {
		try {
			const response = await axios.get(url);
			const responseData = await response.data;
			const findUser = responseData.find(
				(item) =>
					item.loginUser === userName && item.passwordUser === userPassword
			);
			if (findUser) {
				localStorage.setItem("isAuth", findUser._id);
				navigate("/home");
			} else {
				setModal(true);
			}
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			<div className={scss.logindiv}>
				<div className="container">
					<div className={scss.content}>
						<label>Login</label>
						<Input value={userName} setData={setUserName} type="email" placeholder='email'/>
						<Input
							value={userPassword}
							setData={setUserPassword}
							type="password"
							placeholder='password'
						/>
						<Button onClick={getUser}>Login</Button>
					</div>
				</div>
			</div>
			{modal &&
				createPortal(
					<Modal setModal={setModal}>
						<h1>user is not auth</h1>
					</Modal>,
					document.getElementById("modal")
				)}
		</>
	);
};

export default LoginPages;
