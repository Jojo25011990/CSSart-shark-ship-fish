import Fish from "./fish";
import Rocks from "./rocks";
import Shark from "./Shark";

export const Sea = () => {
	// vytvor pole s 20 položkami (čísla 0-19)

	const waveElements = Array.from({ length: 20 }, (_, i) => i);

	return (
		<div className="sea" style={{ display: "flex", overflow: "hidden" }}>
			{waveElements.map((i) => (
				<div
					key={i}
					style={{
						position: "relative",
						zIndex: 50,
						top: "1rem",
						width: "30%",
						height: "6vh",
						backgroundColor: "steelblue",

						borderTopLeftRadius: "50%",
						borderTopRightRadius: "50% ",
						marginRight: "-10px",
						transform: `translateY(${Math.sin(i * 0.5) * 10}px)`,
					}}
				></div>
			))}

			<div className="sea__helper">
				<Shark />
				<Fish />
				<Rocks />
			</div>
		</div>
	);
};

export default Sea;
