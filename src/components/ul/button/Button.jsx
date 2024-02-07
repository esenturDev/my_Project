import scss from "./Button.module.scss";
// import scss2 from './Button2.module.scss';

const Button = ({ children, onClick }) => {
	return (
		<button className={scss.button1} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
