import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import Link from "next/link";
import { ReactElement } from "react";

interface Icon {
  path: string;
  name: ReactElement;
  label: string;
}

const icons: Icon[] = [
  {
    path: "/", // TODO: Replace with real LinkedIn URL
    name: <RiLinkedinFill />,
    label: "LinkedIn",
  },
  {
    path: "/", // TODO: Replace with real GitHub URL
    name: <RiGithubFill />,
    label: "GitHub",
  },
];

interface SocialsProps {
  containerStyles: string;
  iconsStyles: string;
}

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={containerStyles}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index} aria-label={icon.label}>
          <div className={iconsStyles}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
