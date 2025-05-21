import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="pusbis.png"
								alt="Pusbis UINSA"
								className="work-image"
							/>
							<div className="work-title">Pusat Bisnis UINSA</div>
							<div className="work-subtitle">
								Backend Developer
							</div>
							<div className="work-duration">
								Januari 2024 - April 2024
							</div>
						</div>
						<div className="work">
							<img
								src="press.png"
								alt="Uinsa Press"
								className="work-image"
							/>
							<div className="work-title">UINSA Press</div>
							<div className="work-subtitle">
								Fullstack Developer
							</div>
							<div className="work-duration">
								Desember 2025 - April 2025
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
