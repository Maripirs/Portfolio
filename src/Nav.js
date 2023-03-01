import { HashLink } from "react-router-hash-link";
import svg from "./svg";
import "./Nav.css";
import { useState } from "react";
const Nav = () => {
	const [activeNav, setActiveNav] = useState("home");
	const setActive = (e) => {
		setActiveNav(e.target.closest("a").id);
	};
	const sections = ["home", "projects", "about", "skills", "contact"];
	return (
		<>
			<div className="navbar h-12 w-full sticky top-0 flex justify-center gap-2 text-white">
				{sections.map((section) => (
					<HashLink
						onClick={setActive}
						className="hash-nav"
						key={section}
						smooth
						to={"/#" + section}
						id={section + "Nav"}
					>
						<button className={"btn btn-ghost"}>
							{
								svg[activeNav === section.concat("Nav") ? "solid" : "line"][
									section.concat("1")
								]
							}
						</button>
						<div
							className={
								"selected bg-secondary " +
								(activeNav === section.concat("Nav") && "active")
							}
						></div>
					</HashLink>
				))}
			</div>
		</>
	);
};

export default Nav;
