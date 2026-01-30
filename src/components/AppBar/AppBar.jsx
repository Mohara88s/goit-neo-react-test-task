import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { Navigation } from "../Navigation/Navigation";
import icons from "../../assets/icons/sprite.svg";
import style from "./AppBar.module.css";

export const AppBar = () => {
	return (
		<header className={style.header}>
			<Container>
				<div className={style.header__box}>
					<Link to="/" className={style.header__logo}>
						<svg width="136" height="16">
							<use href={`${icons}#logo`} />
						</svg>
					</Link>
					<Navigation />
				</div>
			</Container>
		</header>
	);
};
