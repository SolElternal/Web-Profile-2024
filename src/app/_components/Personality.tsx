import React from "react";
import Card from "./common/Card";
import Badge from "./common/Badge";
import {
  faDocker,
  faJava,
  faJs,
  faPython,
  faReact,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase , faC , faUserInjured} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const Personality = (props: Props) => {
  return (
    <Card title=""><p className='flex text-head'>Personality&nbsp;&nbsp;<FontAwesomeIcon icon={faUserInjured} className="h-8" /></p>
      <div>
        <p className="text-lg text-green-600 flex"><p className="text-teal-900">Supporter</p> &nbsp;(INFj-T)</p>
        <p className="pb-2">
          &nbsp;&nbsp;Supporters are quiet dreamers. But they always inspire and adhere to their ideals without giving up.
        </p>
        <div className="flex gap-1">
          <Badge>AMBIVERTED</Badge>
          <Badge>FUNING</Badge>
          <Badge>FEELING</Badge>
          <Badge>PROSPECTING</Badge>
        </div>
      </div>
    </Card>
  );
};

export default Personality;
