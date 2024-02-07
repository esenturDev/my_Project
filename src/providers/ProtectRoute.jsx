import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const ProtectRoute = ({ children }) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	console.log(pathname);
	const isAuth = localStorage.getItem("isAuth");
	const isAuthBoolean = !!isAuth;
	useEffect(() => {
		if (isAuthBoolean && pathname === "/login") {
			navigate("/home");
		} else if (isAuthBoolean && pathname === "/registr") {
			navigate("/home");
		} else if (!isAuthBoolean && pathname === "/home") {
			navigate("/");
		} else if (isAuthBoolean && pathname === "/") {
			navigate("/home");
		}
	}, [pathname]);
	return children;
};
