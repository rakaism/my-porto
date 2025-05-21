import React, { useState } from "react";
import Project from "./project";
import INFO from "../../data/user";
import "./styles/allProjects.css";

// Simple Modal component
const Modal = ({ show, onClose, project }) => {
	if (!show) return null;
	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<Project
					logoProject={project.logoProject}
					logo={project.logo}
					title={project.title}
					projectSS={project.projectSS}
					description={project.description}
					linkText={project.linkText}
					link={project.link}
				/>
			</div>
		</div>
	);
};

const AllProjects = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);

	const handleProjectClick = (project) => {
		setSelectedProject(project);
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
		setSelectedProject(null);
	};

	return (
		<div className="all-projects-container">
			<Modal
				show={modalOpen}
				onClose={handleCloseModal}
				project={selectedProject || {}}
			/>
			{INFO.projects.map((project, index) => (
				<div
					className="all-projects-project"
					key={index}
					onClick={() => handleProjectClick(project)}
					style={{ cursor: "pointer" }}
				>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
