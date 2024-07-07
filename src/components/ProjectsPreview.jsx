/* eslint-disable react/prop-types */
const ProjectsPreview = ({ resumeInfo }) => {
	return (
		<div>
			<h3 className='section-title'>Projects</h3>

			{resumeInfo?.projects?.map(project => (
				<li
					key={project.id}
					className='section-body grid grid-rows-[min-content_auto] mt-2 first:mt-1 '>
					<div className='inline-flex items-center justify-between font-semibold text-base'>
						<h3> {project.title} </h3>
						<h3>
							{project.startDate} - {project.currentlyWorking ? 'Present' : project.endDate}
						</h3>
					</div>
					<div>
						<p>
							<span className='font-semibold'>Technology Used:</span> {project.techStack.join(', ')}
						</p>
						<p> {project.description} </p>
					</div>
				</li>
			))}

			<hr className='divider' />
		</div>
	);
};

export default ProjectsPreview;
