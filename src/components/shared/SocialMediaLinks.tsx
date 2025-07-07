import React from "react";
import Image from "next/image";

const SocialMediaLinks = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.instagram.com/paul__group"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-primary transition-colors"
        aria-label="Instagram"
      >
        <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
      </a>
      <a
        href="https://www.facebook.com/share/15SEUtH1Y7/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-primary transition-colors"
        aria-label="Facebook"
      >
        <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
      </a>
      <a
        href="https://x.com/paulgroup007?s=21"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-primary transition-colors"
        aria-label="X"
      >
        <Image src="/x.png" alt="LinkedIn" width={24} height={24} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
