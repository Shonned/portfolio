import { cdn } from "@/app/config";
import {
  ProjectContainer,
  ProjectContent,
  ProjectDescription,
  ProjectImage,
  ProjectLink,
  ProjectTitle,
} from "./Projects.styles";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  img: string;
  link: string;
}

const Project = (props: ProjectProps) => {
  return (
    <ProjectContainer>
      <ProjectImage>
        <Image
          src={cdn + props.img}
          alt={props.title}
          layout="fill"
          objectFit="contain"
        />
      </ProjectImage>
      <ProjectContent>
        <ProjectTitle>{props.title}</ProjectTitle>
        <ProjectDescription>{props.description}</ProjectDescription>
      </ProjectContent>
      <ProjectLink href={props.link}>
        <ChevronRight />
      </ProjectLink>
    </ProjectContainer>
  );
};

export default Project;
