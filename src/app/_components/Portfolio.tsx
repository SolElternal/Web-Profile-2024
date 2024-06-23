import React from "react";
import Card from "./common/Card";
import {
  faDocker,
  faJava,
  faJs,
  faPython,
  faReact,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase , faC , faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <Card title=""><p className='flex text-head'>Portfolio&nbsp;&nbsp;<FontAwesomeIcon icon={faAddressBook} className="h-8" /></p>
      <div>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://github.com/SolElternal/Web-Profile-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Go - Programming Language
            </a>
          </li>
          <li>
            <a
              href="https://teeranai-profile-2024.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              web-profile-2024 - Personal Website
            </a>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default Portfolio;
