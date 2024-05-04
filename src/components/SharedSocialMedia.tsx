"use client";

import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

interface Props {
  articleUrl: string;
}
export const SharedSocialMedia = ({ articleUrl }: Props) => {
  return (
    <div>
      <LinkedinShareButton url={articleUrl} className="mr-2">
        <FaLinkedin />
      </LinkedinShareButton>
      <EmailShareButton url={articleUrl} className="mr-2">
        <FiMail />
      </EmailShareButton>
      <FacebookShareButton url={articleUrl} className="mr-2">
        <FaFacebook />
      </FacebookShareButton>
      <TwitterShareButton url={articleUrl} className="mr-2">
        <FaX />
      </TwitterShareButton>
      {/* Otros botones de compartir según sea necesario */}
    </div>
  );
};
