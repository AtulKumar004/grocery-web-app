import React from "react";

import groceryLogo from "../../../images/Grocerylogo.png";
import Footerfeature from "./footerfeature";
import SocialTabs from "./socialTabs";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";


export default function Footer() {
  const navigation = {
    solutions: [
      { name: "Dairy,Breqad & Eggs", href: "#" },
      { name: "Snacks & Munchies", href: "#" },
      { name: "Fruit & Vegatibles", href: "#" },
      { name: "Cold Drinks & Juices", href: "#" },
      { name: "Breakfast & Instant Food", href: "#" },
      { name: "Bakery & Biscuites", href: "#" },
      { name: "Chickens, Meat & Fish", href: "#" },
    ],
    support: [
      { name: "Careers", href: "#" },
      { name: "Promos & coupons", href: "#" },
      { name: "Shipping", href: "#" },
      { name: "Product Returns", href: "#" },
      { name: "Payments", href: "#" },
      { name: "FAQ", href: "#" },
    ],
    company: [
      { name: "Company", href: "#" },
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Our Value", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#f0f3f2]" aria-labelledby="footer-heading">
      <div className="  container mx-auto  px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8   items-end">
          <div className="xl:col-span-1 flex flex-col gap-6 ">
            <img className="" src={groceryLogo} alt="Company name" />

            <p className="font-[500] text-[#000] opacity-80  text-sm">
              We deliver more than your expectations and help you to grow your
              business exponentially by providing customized applications. So,
              don’t just think, get ready to convert your ideas into reality.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0  ">
            <div className="md:grid md:grid-cols-2 md:gap-4">
              <div>
                <Footerfeature
                  title={"All Category"}
                  features={navigation.solutions}
                />
              </div>

              <div className="mt-10 md:mt-0">
                <Footerfeature
                  title={"For Consumers"}
                  features={navigation.support}
                />
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-4">
              <div>
                <Footerfeature
                  title={"Get to know us"}
                  features={navigation.company}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="xl:col-span-1 ">
            <div className=" pt-4">
              <h3 className="text-xl xl:text-2xl font-[500] text-[#000]">
                Payment Partner
              </h3>
              <div className="flex gap-4  pt-4">
                
              <SocialTabs  SocialIcon= {TiSocialFacebook} />
              <SocialTabs  SocialIcon= {IoLogoTwitter} />
              <SocialTabs  SocialIcon= {TiSocialLinkedin} />
              <SocialTabs  SocialIcon= {BsInstagram} />
              </div>
            </div>
          </div>

          <div className="  grid grid-cols-4  xl:col-span-3 xl:mt-0">
            {" "}
            {/* Ensure 'xl:col-start-3' */}
            <div className=" col-span-1 col-start-3 flex gap-4 pl-4 pt-4">
             
              <SocialTabs  SocialIcon= {TiSocialFacebook} />
              <SocialTabs  SocialIcon= {IoLogoTwitter} />
              <SocialTabs  SocialIcon= {TiSocialLinkedin} />
              <SocialTabs  SocialIcon= {BsInstagram} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
