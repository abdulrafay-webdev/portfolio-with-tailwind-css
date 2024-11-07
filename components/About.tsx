import React from "react";
import Image from "next/image";
import Button2 from "./ui components/Button2";
import profilepic from "../images/rp.jpeg"

const About = () => {
  const shortBio: string =
    "Hi, I'm Abdulrafay, a passionate front-end developer and designer from Pakistan With a background in computer science and graphic design, I bring creativity and technical expertise to my work.";

  const LongBio: string =
    "Specialized in HTML, CSS, JavaScript, and React with a strong focus on creating user-friendly web interfaces.Over 2 years of experience teaching computer science, with hands-on projects in web development.Known for attention to deta problem-solving skills, and a commitment to delivering high-qual work.Currently working on enhancing my portfolio with Next.js  exploring new front-end technologies.Interested in working together? Feel free reach out";

  return (
    <>
      <h1 style={{paddingTop:'60px'}} className="h1 text-2xl font-bold text-[#e8f1f2] text-center bg-[#1a2b3c] pt-0">About Me</h1>
      <div className="main w-full bg-[#1a2b3c] p-7 flex md:flex-row gap-2 items-center pb-10 flex-col sm:px-0">
        {/* left  */}
        <div className="left md:w-[48%] md:p-5 p-3 flex flex-col items-center justify-center w-[90%]">
          {/* image  */}
          <div className="img w-[60%] mb-5 h-auto">
            <Image
              className="profile w-full rounded-full h-full"
              src={profilepic}
              width={500}
              height={500}
              alt="profile pic"
            />
          </div>
          <div className="me">
            <h3 className="h3 mb-5 text-[#e8f1f2] text-center">{shortBio}</h3>
          </div>
        </div>
        {/* divider  */}
        <span className="divider md:w-px md:h-[50vh] border border-white opacity-50 w-[80%] h-px"></span>
        {/* right  */}
        <div className="right md:w-[48%] md:p-5 p-3 flex flex-col justify-center md:gap-7 w-[90%] gap-2.5">
          <h1 className="h1 text-[#e8f1f2] mt-5 text-xl font-semibold text-center bg-[#1a2b3c] pt-0">Skills</h1>
          <p className="p text-[#e8f1f2] text-[18px] my-5 text-center">{LongBio}</p>
          <div className="self-center">
          <Button2>Feel free to reach out</Button2>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
