import { useOutletContext } from "react-router-dom";
import { features } from "../../data/features";
import { camperDetails } from "../../data/camperDetails";
import icons from "../../assets/icons/sprite.svg";
import style from "./Features.module.css";

export default function Features() {
	const camper = useOutletContext();
	console.log(camper);
	const formatDetailValue = (key, value) => {
		if (typeof value !== "string") return value;

		// Обробка одиниць виміру (5.4m -> 5.4 m, 132l -> 132 l)
		// Шукаємо межу між цифрою та літерою і додаємо пробіл
		const withSpaces = value.replace(/(\d+(?:\.\d+)?)([a-zA-Z/]+)/, "$1 $2");

		// Якщо це поле "form", виправляємо camelCase (panelTruck -> Panel truck)
		if (key === "form") {
			const spaced = withSpaces.replace(/([A-Z])/g, " $1");
			return spaced.charAt(0).toUpperCase() + spaced.slice(1).toLowerCase();
		}

		// 3. Для інших полів (engine, transmission) робимо першу літеру великою
		return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
	};
	return (
		<div className={style.features__box}>
			<ul className={style.features__list}>
				{features.map(({ key, label, svg, value }) => {
					const isFeatureAvailable =
						camper[key] === true || camper[key] === value;
					return isFeatureAvailable ? (
						<li className={style.features__item} key={key}>
							<svg width="20" height="20" className={style.features__icon}>
								<use href={`${icons}#${svg}`} />
							</svg>
							<span className={style.features__text}>{label}</span>
						</li>
					) : null;
				})}
			</ul>
			<div>
				<h3 className={style.details__header}>Vehicle details</h3>
				<ul className={style.details__list}>
					{camperDetails.map(({ label, key }) => (
						<li key={key} className={style.details__item}>
							<p>{label}</p>
							<p>{formatDetailValue(key, camper[key])}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
