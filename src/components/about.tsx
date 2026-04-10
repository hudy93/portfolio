import DevImg from "./devImg";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
export interface QualificationData {
  title: string;
  data: Array<DataObject>;
}

export interface DataObject {
  name?: string;
  imgPath?: string;
  university?: string;
  qualification?: string;
  years?: string;
  company?: string;
  role?: string;
}
const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Marcel Hudy",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+49 176 613 14 578",
  },
  {
    icon: <MailIcon size={20} />,
    text: "hudymarcel@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born 03.09.1993",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "B.Sc Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Rumfordstr. 25, 80469 Munich",
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "TypeScript, JavaScript, Java, C#, Python, SQL",
      },
      {
        name: "Angular, React, Spring, Node.js, Tailwind",
      },
      {
        name: "Claude Code, AI-assisted testing, CI/CD, SonarQube",
      },
      {
        name: "MongoDB, MySQL, PostgreSQL, Oracle",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/claude.svg",
      },
      {
        imgPath: "/about/nx.svg",
      },
      {
        imgPath: "/about/jenkins.svg",
      },
      {
        imgPath: "/about/intellij.svg",
      },
      {
        imgPath: "/about/sonar.svg",
      },
      {
        imgPath: "/about/docker.svg",
      },
      {
        imgPath: "/about/gradle.svg",
      },
      {
        imgPath: "/about/git.svg",
      },
      {
        imgPath: "/about/vercel.svg",
      },
      {
        imgPath: "/about/vscode.svg",
      },
    ],
  },
];

const qualificationData: Array<QualificationData> = [
  {
    title: "education",
    data: [
      {
        university: "Hochschule Aalen",
        qualification: "B.Sc Computer Science",
        years: "2016 - 2019",
      },
      {
        university: "University Ulm",
        qualification: "Computer Science",
        years: "2014 - 2016",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Collaboration Factory GmbH",
        role: "Team Lead Engineering",
        years: "2026 - now",
      },
      {
        company: "Collaboration Factory GmbH",
        role: "Full Stack Engineer",
        years: "2022 - 2026",
      },
      {
        company: "Bachner Elektro GmbH & Co. KG",
        role: "Software Developer / Consultant",
        years: "2020 - 2022",
      },
      {
        company: "BMW AG",
        role: "Bachelor Student / IT-Specialist",
        years: "2018 - 2019",
      },
    ],
  },
];

const About = () => {
  const getData = (data: Array<QualificationData>, title: string) => {
    return data.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc=""
              alt="Marcel Hudy"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Personal Info</h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      High-impact Engineering Leader with over 5 years of
                      experience building scalable software solutions. I
                      specialize in bridging the gap between product vision and
                      technical execution. Dedicated to fostering
                      high-performance cultures where engineers grow both
                      personally and professionally while delivering robust,
                      innovative products.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-cols gap-y-2">
                      <div className="text-primary">Language Skills: </div>
                      <div className="border-b border-border"></div>
                      <div> English, German</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience")!.title}
                          </h4>
                        </div>
                        <div>
                          {getData(qualificationData, "experience")!.data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div key={index} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {" "}
                                      {company}
                                    </div>
                                    <div className="text-lg leading none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education")?.title}
                          </h4>
                        </div>
                        <div>
                          {getData(qualificationData, "education")?.data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div key={index} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {" "}
                                      {university}
                                    </div>
                                    <div className="text-lg leading none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I Love To Work With</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-boder mb-4"></div>
                      <div>
                        {getData(skillData, "skills")?.data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools")?.data.map(
                          (item, index) => {
                            const { imgPath } = item;
                            if (imgPath != null)
                              return (
                                <div key={index}>
                                  <Image
                                    src={imgPath}
                                    width={48}
                                    height={48}
                                    alt=""
                                    priority
                                  />
                                </div>
                              );
                          },
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
