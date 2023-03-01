import "./App.css";
import Background from "./Background";
import Nav from "./Nav";
import drawing from "./drawing";
import "./Drawing.css";
function App() {
	return (
		<div className="App">
			<Background />
			<div className="main">
				<div className="h-16 w-full text-white"></div>
				<div
					id="home"
					className="section flex flex-col justify-center items-center"
				>
					<h1 className="font-bold text-2xl text-white">Hey! I'm Maripi</h1>
					<h3 className="font-bold text-xl text-white my-4">
						Welcome to my Portfolio
					</h3>
					{drawing}
					<div className="btn my-4">View my Work</div>
				</div>
				<Nav />
				<div id="projects" className="section scroll-mt-16">
					<div className="section-title-wrap">
						<div className="section-title">
							<h2 className="font-bold text-xl text-white mt-24 ml-6 sm:m-6 text-left">
								Projects
							</h2>
						</div>
					</div>
				</div>
				<div id="about" className="section scroll-mt-16">
					<h2 className="font-bold text-xl text-white m-2 sm:m-6 text-center">
						About
					</h2>
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
