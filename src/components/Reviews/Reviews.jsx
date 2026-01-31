import { useOutletContext } from "react-router-dom";
import { nanoid } from "nanoid";
import icons from "../../assets/icons/sprite.svg";
import style from "./Reviews.module.css";

const totalStars = 5;

export default function Reviews() {
	const camper = useOutletContext();
	return (
		<div className={style.reviews__box}>
			<ul className={style.reviews__list}>
				{camper.reviews.length === 0 ? (
					<p>
						Unfortunately, no one has left any reviews about this camper yet.
					</p>
				) : (
					camper.reviews.map((item) => (
						<li key={nanoid()}>
							<div className={style.review__box}>
								<div className={style.reviewer__badge}>
									<p className={style.reviewer__char}>
										{item.reviewer_name.charAt(0)}
									</p>
								</div>
								<div>
									<h3 className={style.reviewer_name}>{item.reviewer_name}</h3>
									<ul className={style.review__rate}>
										{[...Array(totalStars)].map((_, starIndex) => (
											<li>
												<svg
													width="16"
													height="16"
													className={
														starIndex < item.reviewer_rating
															? style.star__active
															: style.star
													}
													key={nanoid()}
												>
													<use href={`${icons}#star`} />
												</svg>
											</li>
										))}
									</ul>
								</div>
							</div>
							<p>{item.comment}</p>
						</li>
					))
				)}
			</ul>
		</div>
	);
}
