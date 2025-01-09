import Project from "./Project";
import { ProjectsContainer } from "./Projects.styles";

const Projects = () => {
  return (
    <ProjectsContainer>
      <Project
        title="Leitlearn"
        description="Leitlearn is an innovative learning platform that enhances effectiveness through daily repetition for better review."
        img="/xra/portfolio/leitlearn-portfolio.avif"
        link="https://leitlearn.com"
      />
      <Project
        title="HyperID"
        description="HyperID is a universal digital identity service that allows users to log into all projects within an ecosystem using a single account."
        img="/xra/portfolio/hyperid-portfolio.avif"
        link="https://id.xra.fr"
      />
    </ProjectsContainer>
  );
};

export default Projects;
