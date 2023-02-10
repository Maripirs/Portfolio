import { HashLink } from "react-router-hash-link";
import svg from "./svg";
const Nav = () => {
	return (
		<>
			<div className="navbar h-12 w-full sticky top-0 bg-base-100 flex justify-center gap-2">
				<HashLink smooth to="/#home">
					<button className="btn">{svg.line.home1}</button>
				</HashLink>
				<HashLink smooth to="/#about">
					<button className="btn">{svg.line.about1}</button>
				</HashLink>
				<HashLink smooth to="/#projects">
					<button className="btn">{svg.line.projects1}</button>
				</HashLink>
				<HashLink smooth to="/#skills">
					<button className="btn">{svg.line.skills1}</button>
				</HashLink>
				<HashLink smooth to="/#contact">
					<button className="btn">{svg.line.contact1}</button>
				</HashLink>
			</div>
		</>
	);
};

export default Nav;
