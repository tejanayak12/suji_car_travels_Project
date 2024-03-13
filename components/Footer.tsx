import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src="/logo3_12_225750.png" alt="Car Hub Logo" width={170} height={30} className="object-contain" />
          <p className="text-base text-gray-700">
            Suji Self Drive Cars <br /> All Rights Reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((linkGroup) => (
            <div key={linkGroup.title} className="footer__link">
              <h3 className="font-bold">
                {linkGroup.title}
              </h3>
              {linkGroup.links.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center sm:px-16 px-6 py-5 border-t border-gray-100">
        <div className="flex items-center w-full justify-between">
          <p className="text-gray-700">
            @2018 Suji Self Drive Cars. All Rights Reserved.
          </p>
          <div className="footer__copyrights-link flex gap-4">
            <Link href="/" className="text-gray-500">
              Privacy & Policy
            </Link>
            <Link href="/" className="text-gray-500">
              Terms And Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
