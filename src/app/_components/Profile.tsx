import Image from "next/image";
import React from "react";
import "./style.css";
import {
  faDocker,
  faJava,
  faJs,
  faPython,
  faReact,
  faHtml5,
  faSquareOdnoklassniki,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase , faC , faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-blue-100 h-full p-4 rounded-xl px-4">
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="/289489333_2525518237610556_8684803949355561487_n.jpg"
          width={400}
          height={550}
          alt="profile picture"
          className="w-3/4 aspect-square rounded-full border-4 border-white skew-y-6"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Teeranai Sangtaera</h1>
        <p className="text-base">Software Engineer</p>
      </div>

      <div className="py-10 text-center ">" Effort never hurt anyone. "</div>
      <div className="p-6 mx-1 xl:mx-6 bg-blue-200 rounded-md">
      <p>
          <FontAwesomeIcon icon={faSquareOdnoklassniki} className='h-7'/>&nbsp;&nbsp;<b className='text2'>Information</b>
        </p>
        <p>
          <b>Age:</b> 20
        </p>
        <p>
          <b>Status:</b> Single
        </p>
        <p>
          <b>Location:</b> Trang
        </p>
      </div>

      <div className="p-6 mx-1 xl:mx-6 bg-blue-200 rounded-md margin-box">
        <p>
          <FontAwesomeIcon icon={faLanguage} className='h-7'/>&nbsp;&nbsp;<b className='text2'>Languages</b>
        </p>
        <p>
          <b>Thailand:</b> Native
        </p>
        <p>
          <b>English:</b> Intermediate
        </p>
      </div>
      
    </div>
  );
};

export default Profile;
