export type CaseStudy = {
  context: string;
  decisions: string[];
  id: string;
  problem: string;
  solution: string;
  technologies: string[];
  title: string;
};

export type StudyProps = {
  decisionsLabel: string;
  item: CaseStudy;
  problemLabel: string;
  solutionLabel: string;
  technologiesLabel: string;
};
