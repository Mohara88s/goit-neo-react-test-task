import { Link, useLocation } from "react-router-dom";
import icons from "../../assets/icons/sprite.svg";
import style from "./Rate.module.css";

export default function Rate({ camper }) {
	const { id, rating, reviews, location } = camper;
	const targetLink = `/catalog/${id}/reviews`;
	const { pathname } = useLocation();
	const isDetailsPage = pathname.includes(`/catalog/${id}`);
	return (
		<div className={style.ratebox}>
			<svg width="16" height="16" className={style.ratebox__icon}>
				<use href={`${icons}#star`} />
			</svg>
			<Link
				to={targetLink}
				target={isDetailsPage ? "_self" : "_blank"}
				rel={isDetailsPage ? "" : "noopener noreferrer"}
				aria-label="to the campers reviews"
			>
				<p className={style.ratebox__rate}>
					{rating} ({reviews ? reviews.length : 0} Reviews)
				</p>
			</Link>
			<svg width="20" height="20" className={style.ratebox__icon}>
				<use href={`${icons}#map`} />
			</svg>
			<p className={style.ratebox__info}>{location}</p>
		</div>
	);
}
