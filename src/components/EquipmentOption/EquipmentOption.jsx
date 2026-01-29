import { useSelector, useDispatch } from "react-redux";
import { toggleEquipment } from "../../redux/filters/slice";
import { selectEquipment } from "../../redux/filters/selectors";
import icons from "../../assets/icons/sprite.svg";
import clsx from "clsx";
import style from "./EquipmentOption.module.css";

export default function EquipmentOption({ option: { value, icon, label } }) {
	const dispatch = useDispatch();
	const equipment = useSelector(selectEquipment);

	const isChecked = equipment.includes(value);

	const handleChange = () => {
		dispatch(toggleEquipment(value));
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
