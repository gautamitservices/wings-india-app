"use client";

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
    image: "/SMFG-Logo.png",
    url: "#",
    background: "green",
  },
  { id: 13, name: "Toyota Financial Services", image: "/TFS_log.avif", url: "#" },
];

export default function Home() {
  return (
    <div className={libreBaskerville.className}>
      <div className="w-full h-20 bg-white sticky top-0 left-0 z-10 shadow-main">
        <div className="flex flex-row gap-4 h-full items-center w-[90%] mx-auto">
          <Image
            src="/wings-logo.png"
            alt="Wings Logo"
            className="shrink-0!"
            width={48}
            height={48}
            priority
          />
          <p className="text-gray-800 font-bold text-[15px] lg:text-lg tracking-wide">
            WINGS CORPORATE SERVICES PVT. LTD.
          </p>
        </div>
      </div>
      <div className={`flex h-fit min-h-[calc(100vh-5rem)] tracking-wide bg-white`}>
        <div className="w-[90%] mx-auto h-full min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-wide leading-10 lg:leading-20  text-center text-gray-800">
            {/* Professional Debt Recovery & Legal Execution Services */}
            Fast & Effective Debt Recovery Solutions
          </h1>
          <p className="text-center lg:mt-10 text-gray-600 mt-6 font-normal tracking-wide leading-7 text-base lg:text-lg lg:w-[90%] mx-auto">
            We help financial institutions liquidate Non-Performing Assets (NPA). From skip tracing
            to final collection, we handle the entire recovery lifecycle so you can focus on
            lending.
          </p>
          <a
            href="#contact"
            className="mt-6 lg:mt-10 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-600 cursor-pointer transition"
          >
            Consult Our Experts
          </a>
        </div>
      </div>
      <div className="w-full bg-gray-50">
        <div className="py-12 w-[90%] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-start text-gray-800">
            End-to-End Recovery Solutions
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
                  Direct Recovery & NPA Resolution
                </h3>
                <p className="mt-4 text-gray-600 tracking-wide leading-6 text-[15px] font-normal">
                  Our core expertise is recovering funds from Non-Performing Assets (NPAs). We
                  engage with defaulters directly using professional persistence to secure payments
                  and resolve outstanding dues quickly.
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
                  Strategic Workflows (Flows)
                </h3>
                <p className="mt-4 text-gray-600 tracking-wide leading-6 text-[15px] font-normal">
                  Every debt is different. We use intelligent "Flows" to determine the best path for
                  recovery. Whether a borrower needs a gentle Dunning Notice or a stricter approach,
                  our system automatically triggers the right action at the right time.
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
                Non-Performing Assets (NPAs) drain your liquidity and waste valuable time. We stop
                the loss by transforming stagnant debt into active recovery. Our approach goes
                beyond simple collections; we utilize intelligent Recovery Flows that automatically
                adapt to the borrower's behavior.
              </p>
              <p className="mt-4 text-gray-300 tracking-wide leading-6 text-[15px] font-normal">
                It starts with visibility—using Skip Tracing to locate borrowers who have gone off
                the radar. Once located, we apply graduated pressure, moving from Dunning Notices to
                strict Legal Execution (such as Summon Serving or Warrants) only when necessary.
              </p>
              <p className="mt-4 text-gray-300 tracking-wide leading-6 text-[15px] font-normal">
                This strategic combination ensures that every action taken is focused on one result:
                getting the money back into your account.
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
      <div className="w-full bg-white">
        <div className="py-12 w-[90%] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-start text-gray-800 tracking-wide">
            Infrastructure
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mt-6 lg:mt-8">
            <div>
              <p className="text-gray-600 font-normal leading-7 tracking-wide text-base lg:text-lg">
                Our office premises span a carpeted area of approximately 4500 sq. ft., designed to
                support efficiency, comfort, and productivity. The workspace is fully equipped with
                modern facilities and a well-structured layout that ensures smooth day-to-day
                operations.
              </p>
              <p className="text-gray-600 font-normal mt-6 leading-7 tracking-wide text-base lg:text-lg">
                A dedicated area has been thoughtfully created for our field personnel, providing
                them with a comfortable and relaxing space to unwind, prepare, and submit their
                reports and data collected during assignments. This setup promotes a seamless
                workflow and supports timely and accurate documentation.
              </p>
              <p className="text-gray-600 font-normal mt-6 leading-7 tracking-wide text-base lg:text-lg">
                Overall, the infrastructure reflects our commitment to providing a professional,
                well-organized, and employee-centric environment, enabling our teams to deliver
                high-quality results with consistency and dedication.
              </p>
            </div>
            <div className="w-full h-full min-h-100 relative">
              <Image
                src="/infra-1.jpg"
                alt="Infrastructure"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mt-8 lg:mt-12">
            <div className="w-full h-full min-h-100 relative">
              <Image
                src="/infra-2.jpg"
                alt="Infrastructure"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-start text-gray-800 tracking-wide">
                Branch Offices
              </h4>
              <ul className="list-disc ml-5 space-y-2 lg:space-y-4 mt-6">
                <li className="text-gray-600 font-normal text-base lg:text-lg tracking-wide leading-7">
                  01, Suman Puri, 1st Floor, Sahastradhara Road, Near Sahastradhara Crossing,
                  Dehradun - 248008
                </li>
                <li className="text-gray-600 font-normal text-base lg:text-lg tracking-wide leading-7">
                  Pasrija Complex, 2nd Floor, Baba Tarana Road, Sonipat - 131001
                </li>
                <li className="text-gray-600 font-normal text-base lg:text-lg tracking-wide leading-7">
                  S-18, 3rd Floor, Kaushiki Tower Complex, Mathura - 281001
                </li>
                <li className="text-gray-600 font-normal text-base lg:text-lg tracking-wide leading-7">
                  2/29 Rocky Path, City Centre, Durgapur, West Bengal - 713216
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-800" id="contact">
        <div className="py-12 w-[90%] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-start text-gray-100">Contact us</h2>
          <p className="text-gray-300 font-bold mt-6 leading-7 tracking-wide text-lg lg:text-xl">
            WINGS CORPORATE SERVICES PVT. LTD.
          </p>
          <p className="text-gray-300 font-normal mt-4 leading-7 tracking-wide text-base lg:text-lg">
            B-235, 2nd & 3rd Floor, Naraina Industrial Area, Phase 1, New Delhi - 110028
          </p>
          <p className="text-gray-300 font-normal mt-2 leading-7 tracking-wide text-base lg:text-lg">
            Mobile: +91 9811014286
          </p>
          <p className="text-gray-300 font-normal mt-2 leading-7 tracking-wide text-base lg:text-lg">
            Landline: 011-35381283
          </p>
          <p className="text-gray-300 font-normal mt-2 leading-7 tracking-wide text-base lg:text-lg">
            Contact Person: Mr. Kamal Singh Yadav (Director)
          </p>
          <p className="text-gray-300 font-normal mt-2 leading-7 tracking-wide text-base lg:text-lg">
            Email: kamal.yadav@wingscorporateservices.com
          </p>
        </div>
      </div>
      <hr className="border-gray-300" />
      <div className="bg-gray-800 py-6">
        <p className="text-center text-gray-200 text-sm w-[90%] mx-auto">
          &copy; {new Date().getFullYear()} Wings Corporate Services Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
}
