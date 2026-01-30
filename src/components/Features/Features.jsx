import { useOutletContext } from "react-router-dom";
import { features } from "../../data/features";
import { camperDetails } from "../../data/camperDetails";
import icons from "../../assets/icons/sprite.svg";
import style from "./Features.module.css";

export default function Features() {
	const camper = useOutletContext();
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
			<h3 className={style.details__h3}>Vehicle details</h3>
			<ul className={style.details__list}>
				{camperDetails.map(({ label, key }) => (
					<li key={key} className={style.details__item}>
						<p>{label}</p>
						<p className={style.details__info}>{camper[key]}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
