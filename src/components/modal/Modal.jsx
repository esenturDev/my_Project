import Button from "../ul/button/Button";
import scss from "./Modal.module.scss";
const Modal = ({ children, setModal }) => {
	function modalNoo() {
		setModal(false);
	}
	return (
		<div className={scss.modal}>
			<div className={scss.modal2}>{children}</div>
			<Button onClick={modalNoo}>modal noo</Button>
		</div>
	);
};

export default Modal;
