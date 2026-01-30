import { useSelector, useDispatch } from "react-redux";
import { changeType } from "../../redux/filters/slice";
import { selectType } from "../../redux/filters/selectors";
import icons from "../../assets/icons/sprite.svg";
import clsx from "clsx";
import style from "./TypeOption.module.css";

export default function TypeOption({ type: { value, icon, label } }) {
	const dispatch = useDispatch();
	const type = useSelector(selectType);

	const isChecked = type === value;

	const handleChange = () => {
		dispatch(changeType(value));
	};

	return (
		<label className={clsx(style.checkbox_label, isChecked && style.active)}>
			<input
				type="checkbox"
				className={style.visually_hidden}
				checked={isChecked}
				onChange={handleChange}
			/>
			<svg className={style.icon} width="32" height="32">
				<use href={`${icons}#${icon}`} />
			</svg>
			<span className={style.text}>{label}</span>
		</label>
	);
}
