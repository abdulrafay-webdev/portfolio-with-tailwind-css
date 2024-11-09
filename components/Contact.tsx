import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Button2 from "./ui components/Button2";
import Link from "next/link";
const Contact = () => {
  // links 
  const Whatsapplink:string="https://wa.me/message/6RMRPE5J3PRGL1"
  const Linkedinlink:string="https://www.linkedin.com/in/abdul-rafay-073187278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  const Githublink:string="https://github.com/abdulrafay-webdev"

  return (
    // <section className={styles.contactSection}>
    //   <div className={styles.container}>
    //     <div className={styles.textContainer}>
    //       <h1 className={styles.title}>Contact Us</h1>
    //       <p className={styles.description}>
    //         Let&apos;s bring your ideas to life. Get in touch and start creating
    //         something amazing together!
    //       </p>
    //     </div>
    //     <div className={styles.formContainer}>
    //       <div className={styles.formFields}>
    //         {/* form  */}
    //         <div className={styles.form}>
    //           <form action="https://formspree.io/f/xdkogzge" method="POST">
    //             <div className={styles.fieldHalf}>
    //               <label htmlFor="name" className={styles.label}>
    //                 Name
    //               </label>
    //               <input
    //                 type="text"
    //                 id="name"
    //                 name="name"
    //                 className={styles.input}
    //                 required
    //               />
    //             </div>
    //             <div className={styles.fieldHalf}>
    //               <label htmlFor="email" className={styles.label}>
    //                 Email
    //               </label>
    //               <input
    //                 type="email"
    //                 id="email"
    //                 name="email"
    //                 className={styles.input}
    //                 required
    //               />
    //             </div>
    //             <label htmlFor="subject" className={styles.label}>
    //               subject
    //             </label>
    //             <input
    //               type="text"
    //               id="subject"
    //               name="subject"
    //               className={styles.input}
    //               required
    //             />
    //             <div className={styles.fieldFull}>
    //               <label htmlFor="message" className={styles.label}>
    //                 Message
    //               </label>
    //               <textarea
    //                 id="message"
    //                 name="message"
    //                 className={styles.textarea}
    //                 required
    //               />
    //             </div>
    //             <div className={styles.fieldFull}>
    //               <button className={styles.submitButton}>Send</button>
    //             </div>
    //           </form>
    //         </div>
    //         {/* contact  */}
    //         <div className={styles.contact}>
    //           <div className={styles.contactInfo}>
    //             <a href="mailto:example@email.com" className={styles.email}>
    //               abdullrrafay@gmail.com
    //             </a>
    //             <p className={styles.address}>
    //               North Nazimabad
    //               <br />
    //               Karachi,PAKISTAN
    //               <br />
    //               +92 313 235 4942
    //             </p>
    //             <div className={styles.socialIcons}>
    //               <a href={Whatsapplink} className={styles.icon}>
    //                 <FaWhatsapp />
    //               </a>
    //               <a href={Linkedinlink} className={styles.icon}>
    //                 <FaLinkedin />
    //               </a>
    //               <a href={Githublink} className={styles.icon}>
    //                 <FaGithub />
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>


    <section className="text-white font-sans py-10 px-5 bg-[#1D2F3F]">
  <div className="max-w-[80%] mx-auto">
    <div className="text-center mb-5">
      <h1 className="text-2xl text-white mb-2">Contact Us</h1>
      <p className="text-base text-white">
        Let&apos;s bring your ideas to life. Get in touch and start creating
        something amazing together!
      </p>
    </div>
    <div className="flex flex-col">
      <div className="flex flex-col gap-4">
        {/* form */}
        <div className="flex flex-col">
          <form className="flex flex-col gap-4" action="https://formspree.io/f/xdkogzge" method="POST">
            <div className="flex-1 basis-full">
              <label htmlFor="name" className="text-sm text-white mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="p-2 border border-white w-full rounded-md text-[#1D2F3F] bg-[#f5f5f5]"
                required
              />
            </div>
            <div className="flex-1 basis-full">
              <label htmlFor="email" className="text-sm text-white mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-2 border w-full border-white rounded-md text-[#1D2F3F] bg-[#f5f5f5]"
                required
              />
            </div>
            <div className="flex-1 basis-full">
            <label htmlFor="subject" className="text-sm text-white mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="p-2 w-full border border-white rounded-md text-[#1D2F3F] bg-[#f5f5f5]"
              required
            />
            </div>
            <div className="flex-1 basis-full">
              <label htmlFor="message" className="text-sm text-white mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="p-2 w-full border border-white rounded-md text-[#1D2F3F] bg-[#f5f5f5] resize-none h-[100px]"
                required
              />
            </div>
            {/* button  */}
            <div className="flex-1 self-center mt-3 basis-full">
              <Button2>
                Send
              </Button2>
            </div>
          </form>
        </div>
        {/* divider  */}
        <div className="w-full h-1 border-b-2"></div>
        {/* contact */}
        <div>
          <div className="text-center mt-5">
            <a href="mailto:example@email.com" className="text-[#4a90e2]">
              abdullrrafay@gmail.com
            </a>
            <p className="mt-2 text-white">
              North Nazimabad
              <br />
              Karachi, PAKISTAN
              <br />
              +92 313 235 4942
            </p>
            <div className="inline-flex gap-2 mt-3">
              <Link target="blank" href={Whatsapplink} className="text-white text-2xl transition-colors duration-300 hover:text-[#4a90e2]">
                <FaWhatsapp />
              </Link>
              <Link target="blank" href={Linkedinlink} className="text-white text-2xl transition-colors duration-300 hover:text-[#4a90e2]">
                <FaLinkedin />
              </Link>
              <Link target="blank" href={Githublink} className="text-white text-2xl transition-colors duration-300 hover:text-[#4a90e2]">
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



  );
};

export default Contact;
