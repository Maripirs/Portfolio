import "./App.css";
import Background from "./Background";
import Nav from "./Nav";
import drawing from "./drawing";
function App() {
	return (
		<div className="App">
			<Background />
			<div className="main">
				<div className="h-16 w-full"></div>
				<div id="home" className="section flex justify-center items-center">
					{drawing}
				</div>
				<Nav />
				<div id="about" className="section scroll-mt-16">
					About
				</div>
				<div id="projects" className="section scroll-mt-16">
					Projects
				</div>
				<div id="skills" className=" section scroll-mt-16">
					Skills
				</div>
				<div id="contact" className="section scroll-mt-16">
					contact
				</div>
			</div>
		</div>
	);
}

export default App;
