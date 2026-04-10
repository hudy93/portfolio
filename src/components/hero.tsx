import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import { RiArrowDownSLine } from "react-icons/ri";

import Socials from "./socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Full Stack Engineer
            </div>
            <h1 className="h1 mb-4"> Hello, my name is Marcel Hudy</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              I build modern, scalable web applications and deliver
              high-quality software solutions. With expertise in Angular,
              TypeScript, and Java, I turn complex requirements into clean,
              maintainable code.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <a href="/cv.pdf" download>
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </a>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <div className="bg-hero_shape_light dark:bg-hero_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
              <svg
                viewBox="0 0 509 462"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[510px] h-[462px] relative"
              >
                <defs>
                  <clipPath id="hero-blob">
                    <path d="M430.684 91.8476C485.587 148.958 523.332 231.872 503.773 294.831C483.871 357.79 406.664 400.451 331.516 429.351C256.711 458.25 183.965 473.388 128.376 448.617C72.4443 423.846 32.983 358.822 13.0808 285.198C-6.47826 211.917 -7.16455 130.036 32.2967 76.3658C72.1011 22.6955 151.71 -2.76337 227.544 0.332983C303.722 3.08531 375.781 34.7369 430.684 91.8476Z" />
                  </clipPath>
                </defs>
                <path
                  d="M430.684 91.8476C485.587 148.958 523.332 231.872 503.773 294.831C483.871 357.79 406.664 400.451 331.516 429.351C256.711 458.25 183.965 473.388 128.376 448.617C72.4443 423.846 32.983 358.822 13.0808 285.198C-6.47826 211.917 -7.16455 130.036 32.2967 76.3658C72.1011 22.6955 151.71 -2.76337 227.544 0.332983C303.722 3.08531 375.781 34.7369 430.684 91.8476Z"
                  fill="#FE705A"
                />
                <image
                  href="/hero/hudy.png"
                  width="509"
                  height="462"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#hero-blob)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
        <RiArrowDownSLine className="text-3xl text-primary" />
      </div>
    </section>
  );
};

export default Hero;
