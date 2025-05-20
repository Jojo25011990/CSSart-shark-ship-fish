const Ship = () => {
	return (
		<div className="ship">
			<div className="ship__body"></div>
			<div className="ship__cargo">
				<div className="ship__cargo-line"></div>
			</div>
			<div className="ship__cargo ship__cargo-01">
				<div className="ship__cargo-line ship__cargo-01-line"></div>
			</div>
			<div className="ship__cargo ship__cargo-02">
				<div className="ship__cargo-line  ship__cargo-02-line"></div>
			</div>
			<div className="ship__crane">
				<div className="ship__crane-line"></div>
			</div>
			<div className="ship__engine">
				<div className="ship__engine-head"></div>
				<div className="ship__engine-body"></div>
				<div className="ship__engine-smoke"></div>
			</div>
		</div>
	);
};

export default Ship;
