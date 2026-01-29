import { useSelector, useDispatch } from "react-redux";
import { changeType } from "../../redux/filters/slice";
import { selectType } from "../../redux/filters/selectors";
import icons from "../../assets/icons/sprite.svg";
import clsx from "clsx";
import styles from "./TypeOption.module.css";

export default function TypeOption({ type: { value, icon, label } }) {
	const dispatch = useDispatch();
	const type = useSelector(selectType);

	const isChecked = type === value;

	const handleChange = () => {
		dispatch(changeType(value));
	};

	return (
		<label className={clsx(styles.checkbox_label, isChecked && styles.active)}>
			<input
				type="checkbox"
				className={styles.visually_hidden}
				checked={isChecked}
				onChange={handleChange}
			/>
			<svg className={styles.icon} width="32" height="32">
				<use href={`${icons}#${icon}`} />
			</svg>
			<span className={styles.text}>{label}</span>
		</label>
	);
}
