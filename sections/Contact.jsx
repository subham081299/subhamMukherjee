import React from "react";
import Title from "../src/components/Title";
import Form from "../src/components/Form";

import {
  Facebook,
  FacebookIcon,
  GithubIcon,
  GridIcon,
  InstagramIcon,
  LinkedinIcon,
  Mail,
  PhoneIcon,
  TwitterIcon,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="pt-30 h-screen">
      <div className="max-w-[900px] mx-auto">
        <Title title="Contact" subtitle="Get in touch with me." highlight="Me" isCenter={false} />

        <div className="md:grid grid-cols-1 gap-6">
          {/* Contact Form */}
          <Form />

          {/* Contact Details & Social Icons Below */}
          <div className="space-y-6 mt-5 text-left">
            <div className="flex items-center gap-3">
              <PhoneIcon className="size-5 text-blue-500" />
              <a href="tel:+918583970896" className="text-lg font-semibold transition-colors duration-200 hover:text-blue-600">
                +91 8583970896
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="size-5 text-blue-500" />
              <a href="mailto:officialsubham1999@gmail.com" className="text-lg font-semibold transition-colors duration-200 hover:text-blue-600">
                officialsubham1999@gmail.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-start gap-4 pt-4 mb-6">
              <a
                className="transition-colors duration-200 hover:text-blue-600"
                href="https://www.instagram.com/its_mrmukherjee?igsh=eXkwOTJ3b3FsYWV2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="size-6" />
              </a>
              
              <a
                className="transition-colors duration-200 hover:text-blue-600"
                href="https://github.com/subham081299"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="size-6" />
              </a>
              
              <a
                className="transition-colors duration-200 hover:text-blue-600"
                href="https://www.linkedin.com/in/subham-mukherjee-580172222/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="size-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
