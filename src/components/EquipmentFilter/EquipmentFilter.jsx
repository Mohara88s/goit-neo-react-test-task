import { equipmentOptions } from "../../data/equipmentOptions";
import EquipmentOption from "../EquipmentOption/EquipmentOption";
import style from "./EquipmentFilter.module.css";

export default function EquipmentFilter() {
	return (
		<>
			<h3 className={style.h3}>Vehicle equipment</h3>
			<ul className={style.equipment__list}>
				{equipmentOptions.map((option) => (
					<li key={option.value} className={style.equipment__item}>
						<EquipmentOption option={option} />
					</li>
				))}
			</ul>
		</>
	);
}
