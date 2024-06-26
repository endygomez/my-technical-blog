"use client";

import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

interface Props {
  articleUrl: string;
  className?: string;
}
export const SharedSocialMedia = ({ articleUrl, className }: Props) => {
  return (
    <div className={className}>
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
        <FaXTwitter />
      </TwitterShareButton>
      {/* Otros botones de compartir según sea necesario */}
    </div>
  );
};
