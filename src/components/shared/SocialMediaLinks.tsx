import React from "react";
import Image from "next/image";

const SocialMediaLinks = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.instagram.com/paulbuilders/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-primary transition-colors"
        aria-label="Instagram"
      >
        <Image
          src="https://ext.same-assets.com/165153690/1190302716.svg"
          alt="Instagram"
          width={24}
          height={24}
        />
      </a>
      <a
        href="https://www.facebook.com/paulBuildersandPromoters"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-primary transition-colors"
        aria-label="Facebook"
      >
        <Image
          src="https://ext.same-assets.com/165153690/1864465667.svg"
          alt="Facebook"
          width={24}
          height={24}
        />
      </a>
      <a
        href="https://www.linkedin.com/company/paul-builders/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-primary transition-colors"
        aria-label="LinkedIn"
      >
        <Image
          src="https://ext.same-assets.com/165153690/2956798927.svg"
          alt="LinkedIn"
          width={24}
          height={24}
        />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
