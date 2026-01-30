import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from "./Navigation.module.css";

const getActiveClassNames = ({ isActive }) => clsx(isActive && style.active);

export const Navigation = () => {
	return (
		<nav>
			<ul className={style.nav_list}>
				<li>
					<NavLink className={getActiveClassNames} to="/">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink className={getActiveClassNames} to="/catalog" end>
						Catalog
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
