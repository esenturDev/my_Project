import scss from "./Layout.module.scss";
import { Footer } from "./footer/Footer";
import Header from "./header/Header";
import HomeResult from "../pages/homeResult/HomeResult";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginPages from "../pages/LoginPages";
import Registr from "../pages/Registr";
import HomePages from "../pages/HomePages";
import { useLocation } from "react-router-dom";

export const Layout = () => {
	const { pathname } = useLocation();
	if (pathname === "/login") {
		return (
			<Routes>
				<Route path="/login" element={<LoginPages />} />
			</Routes>
		);
	} else if (pathname === "/registr") {
		return (
			<Routes>
				<Route path="/registr" element={<Registr />} />
			</Routes>
		);
	}
	return (
		<div className={scss.Layout}>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<HomeResult />} />
					<Route path="/home" element={<HomePages />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};
