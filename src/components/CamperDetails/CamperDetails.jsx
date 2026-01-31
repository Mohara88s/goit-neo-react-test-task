import { NavLink, Outlet } from "react-router-dom";
import icons from "../../assets/icons/sprite.svg";
import clsx from "clsx";
import style from "./CamperDetails.module.css";
import BookForm from "../BookForm/BookForm";

const getActiveClassNames = ({ isActive }) => clsx(isActive && style.active);

export default function CamperDetails({ camper }) {
	const { id, name, rating, reviews, location, price, gallery, description } =
		camper;
	return (
		<>
			<h2 className={style.name}>{name}</h2>
			<div className={style.ratebox}>
				<svg width="16" height="16" className={style.ratebox__icon}>
					<use href={`${icons}#star`} />
				</svg>
				<p className={style.ratebox__rate}>
					{rating} ({reviews ? reviews.length : 0} Reviews)
				</p>
				<svg width="20" height="20" className={style.ratebox__icon}>
					<use href={`${icons}#map`} />
				</svg>
				<p className={style.ratebox__info}>{location}</p>
			</div>
			<p className={style.price}>{`€${Number(price).toFixed(2)}`}</p>

			{gallery.length > 0 ? (
				<ul className={style.gallery__list}>
					{gallery.map((item, index) => (
						<li key={index} className={style.gallery__item}>
							<img
								className={style.gallery__img}
								src={item.thumb}
								alt={`Camper picture №${index + 1}`}
							/>
						</li>
					))}
				</ul>
			) : (
				<p className={style.gallery__warning}>
					Photos are not available for this camper.
				</p>
			)}
			<p className={style.description}>{description}</p>

			<ul className={style.nav__list}>
				<li className={style.nav__item}>
					<NavLink className={getActiveClassNames} to="features">
						Features
					</NavLink>
				</li>
				<li className={style.nav__item}>
					<NavLink className={getActiveClassNames} to="reviews">
						Reviews
					</NavLink>
				</li>
			</ul>
			<div className={style.featuresReviewsForm__box}>
				<div className={style.featuresReviews}>
					<Outlet context={camper} />
				</div>
				<div className={style.form}>
					<BookForm camperId={id}></BookForm>
				</div>
			</div>
		</>
	);
}
