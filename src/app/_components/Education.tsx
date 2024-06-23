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
import { faDatabase , faC , faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const Education = (props: Props) => {
  return (
    <Card title=""><p className='flex text-head'>Education&nbsp;&nbsp;<FontAwesomeIcon icon={faGraduationCap} className="h-8" /></p>
      <div className="relative border-l-4 border-blue-500">
        <div className="mb-5 ml-4">
          <div className="absolute -left-2 mt-1.5 h-3 w-3 rounded-full border border-white bg-blue-500"></div>
          <div className="rounded-lg bg-white p-2 shadow-md">
            <time className="text-sm font-semibold text-gray-500">
              June 2021
            </time>
            <h2 className="mb-2 text-sm font-semibold">Walailak University</h2>
          </div>
        </div>
        <div className="mb-5 ml-4">
          <div className="absolute -left-2 mt-1.5 h-3 w-3 rounded-full border border-white bg-blue-500"></div>
          <div className="rounded-lg bg-white p-2 shadow-md">
            <time className="text-sm font-semibold text-gray-500">
              March 2018
            </time>
            <h2 className="mb-2 text-sm font-semibold">Sparachinee School</h2>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Education;
