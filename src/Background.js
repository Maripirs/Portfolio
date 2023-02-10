import "./Background.css";

//blurry dots going up
const Background = () => {
	const newblob = () => {
		let randomsize = ` size${Math.floor(Math.random() * 3) + 1} `;
		let randomanimation = `movement ${Math.floor(
			Math.random() * 10 + 2
		)}s linear infinite ${Math.floor(Math.random() * 4 + 1)}s`;
		let randomleft = `${Math.floor(Math.random() * 100)}vw`;
		return (
			<div
				className={"blob" + randomsize}
				style={{
					animation: randomanimation,
					left: randomleft,
				}}
			></div>
		);
	};
	return (
		<div className="background">{[...Array(8)].map((e) => newblob())}</div>
	);
};

export default Background;
