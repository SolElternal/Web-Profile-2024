import React from "react";
import Card from "./common/Card";
import Badge from "./common/Badge";
import Badge2 from "./common/Badge2";
import Badge3 from "./common/Badge3";
import Badge4 from "./common/Badge4";
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
          <Badge2>FUNING</Badge2>
          <Badge3>FEELING</Badge3>
          <Badge4>PROSPECTING</Badge4>
        </div>
      </div>
    </Card>
  );
};

export default Personality;
