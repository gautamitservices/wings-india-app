"use client";

import { useState } from "react";
import { Libre_Baskerville, Inter } from "next/font/google";
import Image from "next/image";
import Slider from "react-infinite-logo-slider";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const list = [
  { id: 1, name: "Arka Financial Holdings", image: "/arka.png", url: "#" },
  { id: 2, name: "AU Small Finance Bank", image: "/au-bank.webp", url: "#" },
  { id: 3, name: "Axis Bank Limited", image: "/axis-bank-logo.png", url: "#" },
  { id: 4, name: "Axis Finance Limited", image: "/axis-finance.png", url: "#" },
  { id: 5, name: "HDFC Bank Limited", image: "/hdfc-bank-logo.svg ", url: "#" },
  { id: 6, name: "Indusind Bank", image: "/indusind-bank.webp", url: "#" },
  { id: 7, name: "Lending Kart", image: "/lending-kart.png", url: "#" },
  { id: 8, name: "Paytm", image: "/paytm.svg", url: "#" },
  { id: 9, name: "PNB Housing Finance Limited", image: "/pnb.webp", url: "#" },
  { id: 10, name: "RBL Bank", image: "/rbl-bank.png", url: "#" },
  {
    id: 11,
    name: "Shubham Housing Development Finance Company",
    image: "/Shubham-logo.svg",
    url: "#",
  },
  {
    id: 12,
    name: "Sumitomo Mitsui Financial Group",
    image: "/SMFG-logo.svg",
    url: "#",
    background: "green",
  },
  { id: 13, name: "Toyota Financial Services", image: "/TFS_log.avif", url: "#" },
];

export default function Home() {
  const [tooltipContent, setTooltipContent] = useState("");
  const getRegionData = (geo) => {
    return locationData.find((s) => s.state === geo.properties.NAME_1);
  };
  return (
    <div className={libreBaskerville.className}>
      <div className={`flex h-fit min-h-screen tracking-wide bg-white`}>
        <div className="w-[90%] mx-auto h-full min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-wide leading-10 lg:leading-20  text-center text-gray-800">
            Professional Debt Recovery & Legal Execution Services
          </h1>
          <p className="text-center lg:mt-10 text-gray-600 mt-6 font-normal tracking-wide leading-7 text-base lg:text-lg">
            We help financial institutions resolve NPAs and recover funds through strategic legal
            notices, skip tracing, and court enforcement.
          </p>
          <button className="mt-6 lg:mt-10 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-600 cursor-pointer transition">
            Consult Our Experts
          </button>
        </div>
      </div>
      <div className="w-full bg-gray-50">
        <div className="py-12 w-[90%] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-start text-gray-800">
            End-to-End Legal Recovery Solutions
          </h2>
          <p className="text-gray-600 font-normal mt-6 leading-7 tracking-wide text-base lg:text-lg">
            We specialize in assisting financial institutions with the complex lifecycle of debt
            recovery.
          </p>
          <div className="mt-6 grid grid-cols-1 xl:grid-cols-[1.5fr_0.75fr] gap-6">
            <div className="bg-transparent grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white shadow-main">
                <Image
                  src="/regulation.svg"
                  alt="Legal Notices & Communication"
                  width={48}
                  height={48}
                  className="opacity-60!"
                />
                <h3 className="font-bold! tracking-wide leading-7 mt-4! text-base lg:text-lg text-gray-800">
                  Legal Notices & Communication
                </h3>
                <p className="mt-4 text-gray-600 tracking-wide leading-6 text-[15px] font-normal">
                  The recovery process starts with clear communication. We handle the drafting and
                  dispatching of all necessary correspondence to signal intent and demand payment.{" "}
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white shadow-main">
                <Image
                  src="/real-time-tracking.svg"
                  alt="Skip Tracing & Location"
                  width={48}
                  height={48}
                  className="opacity-60!"
                />{" "}
                <h3 className="font-bold! tracking-wide leading-7 mt-4! text-base lg:text-lg text-gray-800">
                  Skip Tracing & Location
                </h3>
                <p className="mt-4 text-gray-600 tracking-wide leading-6 text-[15px] font-normal">
                  You cannot recover funds from someone you cannot find. We utilize advanced skip
                  tracing techniques to locate absconding defaulters and assets, ensuring that
                  summons and notices reach the right person, at the right address.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white shadow-main">
                <Image
                  src="/legal-document.svg"
                  alt="Summon Serving & Due Process"
                  width={48}
                  height={48}
                  className="opacity-60!"
                />{" "}
                <h3 className="font-bold! tracking-wide leading-7 mt-4! text-base lg:text-lg text-gray-800">
                  Summon Serving & Due Process
                </h3>
                <p className="mt-4 text-gray-600 tracking-wide leading-6 text-[15px] font-normal">
                  Delays in serving summons often stall legal proceedings. We specialize in the
                  physical serving of summons and ensuring proper acknowledgement is received,
                  keeping your legal timeline on track.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white shadow-main">
                <Image
                  src="/action.svg"
                  alt="Legal Enforcement & Execution"
                  width={48}
                  height={48}
                  className="opacity-60!"
                />{" "}
                <h3 className="font-bold! tracking-wide leading-7 mt-4! text-base lg:text-lg text-gray-800">
                  Legal Enforcement & Execution
                </h3>
                <p className="mt-4 text-gray-600 tracking-wide leading-6 text-[15px] font-normal">
                  When notices aren't enough, we facilitate the hard legal actions required to
                  enforce payment.
                </p>
                <ul className="list-disc mt-4 ml-5 space-y-2">
                  <li className="text-gray-800 font-bold text-[15px]">Warrants</li>
                  <li className="text-gray-800 font-bold text-[15px]">Decree Execution</li>
                  <li className="text-gray-800 font-bold text-[15px]">Absconder Proceedings</li>
                  <li className="text-gray-800 font-bold text-[15px]">SARFAESI Act</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-main">
              <h3 className="font-semibold text-lg text-gray-100 tracking-wide leading-7">
                Turning Non-Performing Assets into Recoveries
              </h3>
              <p className="mt-4 text-gray-300 tracking-wide leading-6 text-[15px] font-normal">
                From locating elusive defaulters through Skip Tracing to serving Dunning Notices and
                executing Court Warrants (BW/NBW), we ensure your legal actions are delivered,
                acknowledged, and enforced efficiently.{" "}
              </p>
              <p className="mt-4 text-gray-300 tracking-wide leading-6 text-[15px] font-normal">
                We bridge the gap between loan default and resolution. Our team handles the critical
                legwork—including Legal Notices, Summon Serving, and Decree Execution—to maximize
                recovery rates for Banks and NBFCs while ensuring full legal compliance.
              </p>
              <p className="mt-4 text-gray-300 tracking-wide leading-6 text-[15px] font-normal">
                Our approach combines strict legal compliance with aggressive skip tracing to
                maximize recovery rates for Banks, NBFCs, and Lenders.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="py-12 w-[90%] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-start text-gray-800">
            Our Esteemed Clients
          </h2>
          <p className="text-gray-600 font-normal mt-6 leading-7 tracking-wide text-base lg:text-lg">
            We specialize in assisting financial institutions with the complex lifecycle of debt
            recovery.
          </p>
          <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={"#fff"}
          >
            {list?.map((client, index) => {
              return (
                <Slider.Slide id={client?.id} key={index}>
                  {/* <Link href={client?.url} target="_blank"> */}
                  <img src={client?.image} alt={client?.name} className="w-36 mt-8" />
                  {/* </Link> */}
                </Slider.Slide>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="py-12 w-[90%] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-start text-gray-800">
            Area/Locations We Serve
          </h2>
          <p className="text-gray-600 font-normal mt-6 leading-7 tracking-wide text-base lg:text-lg">
            We specialize in assisting financial institutions with the complex lifecycle of debt
            recovery.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6!">
            <ul className="list-disc mt-4 ml-5 space-y-2 lg:space-y-4">
              <li className="text-gray-800 font-bold text-base lg:text-lg tracking-wide leading-7">
                Delhi/NCR
              </li>
              <li className="text-gray-800 font-bold text-base lg:text-lg tracking-wide leading-7">
                Uttar Pradesh
              </li>
              <li className="text-gray-800 font-bold text-base lg:text-lg tracking-wide leading-7">
                West Bengal
              </li>
              <li className="text-gray-800 font-bold text-base lg:text-lg tracking-wide leading-7">
                Uttarakhand
              </li>
              <li className="text-gray-800 font-bold text-base lg:text-lg tracking-wide leading-7">
                Haryana
              </li>
            </ul>
            <div className="w-full h-fit flex flex-row justify-center items-center">
              <Image src="/india.svg" alt="Map of India" width={400} height={400} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50">
        <div className="py-12 w-[90%] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-start text-gray-800">About us</h2>
          <p className="text-gray-600 font-normal mt-6 leading-7 tracking-wide text-base lg:text-lg">
            We are a dedicated risk-management organization serving the Indian consumer finance
            sector.
          </p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mt-6 lg:mt-8">
            <div>
              <p className="text-gray-600 font-normal leading-7 tracking-wide text-[15px] lg:text-base">
                Over the years, we have built a strong reputation for reliability, transparency, and
                consistent performance. Our expertise lies in supporting financial institutions with
                secure, compliant, and customer-centric risk solutions that help protect their
                business interests while ensuring smooth customer experiences.
              </p>
              <p className="text-gray-600 font-normal mt-6 leading-7 tracking-wide text-[15px] lg:text-base">
                Through continuous learning, industry insights, and a disciplined approach, we have
                positioned ourselves as trusted partners for leading banks, NBFCs, and financial
                service providers. Our team is committed to maintaining the highest standards of
                professionalism and safeguarding the interests of both clients and consumers.
              </p>
              <p className="text-gray-600 font-normal mt-6 leading-7 tracking-wide text-[15px] lg:text-base">
                The reputation we enjoy today is the result of our unwavering focus on quality,
                integrity, and ethical business practices.
              </p>
              <p className="text-gray-600 font-normal mt-6 leading-7 tracking-wide text-[15px] lg:text-base">
                We approach every task with a sense of responsibility and care. This includes
                protecting client interests, ensuring consumer fairness, and maintaining ethical
                dealings. We value long-term relationships built on respect, empathy, and trust.{" "}
              </p>
            </div>
            <div className="w-full h-full relative min-h-75 lg:min-h-100 rounded-xl overflow-hidden">
              <Image src="/about-us-image.png" alt="About Us" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
