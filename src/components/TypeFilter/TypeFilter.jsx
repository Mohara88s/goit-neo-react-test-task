import { camperTypes } from "../../data/camperTypes";
import TypeOption from "../TypeOption/TypeOption";
import style from "./TypeFilter.module.css";

export default function TypeFilter() {
	return (
		<>
			<h3 className={style.h3}>Vehicle type</h3>
			<ul className={style.type__list}>
				{camperTypes.map((type) => (
					<li key={type.value} className={style.type__item}>
						<TypeOption type={type} />
					</li>
				))}
			</ul>
		</>
	);
}
