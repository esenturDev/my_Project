import scss from "./Input.module.scss";

const Input = ({ type, value, setData, placeholder }) => {
	return (
		<input
			className={scss.input}
			type={type}
			value={value}
			onChange={(e) => {
				setData(e.target.value);
			}}
			placeholder={placeholder}
		/>
	);
};

export default Input;
