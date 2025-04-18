import React from 'react';
import Image from 'next/image';

const SocialMediaLinks = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.instagram.com/rubybuilders/"
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
        href="https://www.facebook.com/RubyBuildersandPromoters"
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
        href="https://www.linkedin.com/company/ruby-builders/"
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
      <a
        href="https://x.com/Ruby_Builders"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-primary transition-colors"
        aria-label="Twitter"
      >
        <Image
          src="https://ext.same-assets.com/165153690/4281502204.svg"
          alt="Twitter"
          width={24}
          height={24}
        />
      </a>
      <a
        href="https://www.youtube.com/channel/UC8qn-Ty1c16TNxqSnUo0nUA"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-primary transition-colors"
        aria-label="YouTube"
      >
        <Image
          src="https://ext.same-assets.com/165153690/2821538621.svg"
          alt="YouTube"
          width={24}
          height={24}
        />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
