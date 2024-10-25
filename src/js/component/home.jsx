import React from "react";
import Light from "./Light";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="text-center">
		<Light className="btn btn-danger rounded-circle h-500 position-absolute" style={{width:'100px'}} />
		</div>
	);
};

export default Home;
