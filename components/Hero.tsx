import React from "react";
import Button from "./ui components/Button";
import Button2 from "./ui components/Button2";
import { IoIosArrowDropright } from "react-icons/io";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import heroimg from "../images/hero sec.png"

export const Hero = () => {


  // details 
  const name:string = "Abdul Rafay"
  const designation:string="Front-End Developer & Designer"
  const bio:string="Creating engaging, user-friendly digital experiences with a focus on modern design and performance"

  // links 
  const WhatsappLink:string="#"
  const LinkedinLink:string="#"
  const GithubLink:string="#"


  return (
    <div className="main md:flex-row w-full h-fit bg-gradient-to-b from-[#0F2027] via-[#203A43] to-[#2C5364] md:p-8 p-1 flex flex-col items-center">
      {/* left  */}
      <div className="left flex flex-col gap-7 p-1 w-[59%] my-12 md:text-left text-center sm:mt-8 sm:w-full">
        <h3 className="h3 text-[#66A5AD] font-normal text-[20px]">Hey,It&apos;s Me </h3>
        <h1 className="h1 text-[#E8F1F2] font-black text-[48px]">{name}</h1>
        <h3 className="h3 text-[#66A5AD] font-normal text-[20px]">{designation}</h3>
        <p className="p text-[#A9BDC3]">{bio}</p>
        {/* buttons  */}
        <div className="buttons w-full flex md:justify-start justify-center gap-2.5 mt-1 mb-0">
          <Link href={"#"}>
            <Button>
              View My Work <IoIosArrowDropright className="ml-2 priicons text-lg" />{" "}
            </Button>
          </Link>
          <Link href={"#"}>
            <Button2>Contact Me</Button2>
          </Link>
        </div>
        {/* social media icons  */}
        <div className="icons w-full flex gap-5 justify-center md:justify-start">
          <Link href={WhatsappLink}><FaWhatsapp className="secicons text-[#A7C5C6] text-[40px] hover:text-[#86B0B3]" /></Link>
          <Link href={LinkedinLink}><FaLinkedin className="secicons text-[#A7C5C6] text-[40px] hover:text-[#86B0B3]" /></Link>
          <Link href={GithubLink}><FaGithub className="secicons text-[#A7C5C6] text-[40px] hover:text-[#86B0B3]" /></Link>
        </div>
      </div>
      {/* right  */}
      <div className="right my-12 md:w-[39%] flex justify-center sm:my-6 w-full">
        <Image
          className="image md:w-[95%] h-auto w-[80%]"
          src={heroimg}
          alt="webdev"
        />
      </div>
    </div>
  );
};
