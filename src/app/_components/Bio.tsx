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
import { faDatabase , faC ,faCircleUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const Bio = (props: Props) => {
  return (
    
      <Card title=""><p className='flex text-head'>Bio&nbsp;&nbsp;<FontAwesomeIcon icon={faCircleUser} className="h-8" /></p>
        <div>
          &nbsp;&nbsp;Hello everyone! I'm Teeranai Sangtaera can call me Time, someone who enjoys working independently but is also ready to collaborate with teams on projects that bring fresh perspectives. With high level of ambition, I strive relentlessly towards achieving any goal set before me.<br></br><br></br>

          &nbsp;&nbsp;I'm someone who leans towards introversion in some situations but can easily switch to being extroverted on other days as needed.<br></br><br></br>

          &nbsp;&nbsp;My passion lies in continuous self-improvement, and I'm always eager to learn and adapt to ensure that any team or project I'm involved with achieves outstanding success.
        </div>
      </Card>
    
  );
};

export default Bio;
