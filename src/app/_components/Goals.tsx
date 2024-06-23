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
import { faDatabase , faC ,faBullseye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const Goals = (props: Props) => {
  return (
    <Card title=""><p className='flex text-head'>Goals&nbsp;&nbsp;<FontAwesomeIcon icon={faBullseye} className="h-8" /></p>
      <div>
        <ul className="list-inside list-disc">
          <li>like challenges in my life.</li>
          <li>Learn a new coding skill</li>
          <li>Create a complete team to work with.</li>
          <li>Improve communication skills</li>
        </ul>
      </div>
    </Card>
  );
};

export default Goals;
