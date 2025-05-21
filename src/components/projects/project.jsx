import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, logoProject, projectSS } =
		props;

	return (
		<React.Fragment>
			<div className="project">
				<div className="project-container">
					{logoProject && (
						<div className="real-project-logo">
							<img src={`/${logoProject}`} alt="project-title" />
						</div>
					)}

					{projectSS && (
						<div className="project-ss">
							<img src={`/${projectSS}`} alt="project-ss" />
						</div>
					)}

					<div className="project-logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="project-title">{title}</div>
					<div className="project-description">{description}</div>
					<div className="project-link">
						<div className="project-link-icon">
							<FontAwesomeIcon icon={faLink} />
						</div>
						<Link to={link}>
							<div className="project-link-text">{linkText}</div>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
