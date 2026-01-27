import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import clsx from "clsx";

const getActiveClassNames = ({ isActive }) => clsx(isActive && styles.active);

export const Navigation = () => {
	return (
		<nav>
			<ul className={styles.nav_list}>
				<li>
					<NavLink className={getActiveClassNames} to="/">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink className={getActiveClassNames} to="/catalog">
						Catalog
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
