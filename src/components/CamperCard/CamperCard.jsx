import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import { toggleFavorite } from "../../redux/favorites/slice";
import { features } from "../../data/features";
import Rate from "../Rate/Rate";
import icons from "../../assets/icons/sprite.svg";
import clsx from "clsx";
import style from "./CamperCard.module.css";
import { Link } from "react-router-dom";

export default function CamperCard({ camper }) {
	const dispatch = useDispatch();

	const { id, name, price, description, gallery } = camper;

	const favorites = useSelector(selectFavorites);
	const isFavorite = Array.isArray(favorites) && favorites.includes(id);

	const handleToggleFavorite = () => {
		dispatch(toggleFavorite(id));
	};

	return (
		<div className={style.card}>
			{gallery?.[0]?.thumb && (
				<img className={style.card__img} src={gallery[0].thumb} alt={name} />
			)}
			<div className={style.card__info}>
				<div className={style.card__namebox}>
					<h2 className={style.card__name}>{name}</h2>
					<div className={style.card__pricebox}>
						<p className={style.card__price}>{`€${Number(price).toFixed(
							2,
						)}`}</p>
						<svg
							width="26"
							height="24"
							onClick={handleToggleFavorite}
							className={clsx(
								style.favorite__icon,
								isFavorite && style.active__favorite__icon,
							)}
						>
							<use href={`${icons}#heart`} />
						</svg>
					</div>
				</div>

				<div className={style.rate__box}>
					<Rate camper={camper} />
				</div>

				<p className={style.card__description}>{description}</p>

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

				<Link
					to={`/catalog/${id}`}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="to the campers details page"
					className={style.card__link}
				>
					Show more
				</Link>
			</div>
		</div>
	);
}
