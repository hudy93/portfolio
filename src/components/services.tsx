import { GanttChartSquare, Blocks, Gem } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactElement } from "react";

interface ServiceData {
  icon: ReactElement;
  title: string;
  desc: string;
}

const serviceData: ServiceData[] = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Development",
    desc: "Building responsive, performant web applications using modern frameworks like Angular, React, and Next.js. From single-page apps to complex enterprise platforms, I deliver clean and scalable frontend and backend solutions.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Testing",
    desc: "Ensuring software quality through comprehensive testing strategies. I implement unit tests, integration tests, and end-to-end tests to catch bugs early and keep your codebase reliable and maintainable.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    desc: "Developing cross-platform and native applications tailored to your business needs. From concept to deployment, I build intuitive, high-performance apps with a focus on great user experience.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-16 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        <div className="grid xl:grid-cols-3 justify-center gap-y-16 xl:gap-y-24 xl:gap-x-8">
          {serviceData.map((service, index) => (
            <Card
              className="w-full mx-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
              key={index}
            >
              <CardHeader className="text-primary absolute -top-[60px]">
                <div className="w-[140px] h-[50px] bg-white dark:bg-background flex justify-center items-center">
                  {" "}
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="mb-4">{service.title}</CardTitle>
                <CardDescription className="text-lg">
                  {service.desc}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
