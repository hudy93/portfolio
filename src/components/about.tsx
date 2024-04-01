import DevImg from "./devImg";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {User2, MailIcon, HomeIcon, PhoneCall,GraduationCap, Calendar, Briefcase} from 'lucide-react'
export interface QualificationData  {
    title: string;
    data: Array<DataObject>;
};

export interface DataObject  {
    name?: string;
    imgPath?: string;
    university?: string;
    qualification?: string;
    years?: string;
    company?: string;
    role?:string;

}
const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Marcel Hudy'
    },
    {
        icon: <PhoneCall size={20} />,
        text: '017661314578'
    },
    {
        icon: <MailIcon size={20} />,
        text: 'hudymarcel@gmail.com'
    },
    {
        icon: <Calendar size={20} />,
        text: '03.09.1993'
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'B.S Computer Science'
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Görresstr. 48, 80797 München'
    }
]

const skillData = [
{
    title: 'skills',
    data: [
        {
            name: 'Angular, Typescript'
        },
        {
            name: 'Java, Typescript'
        }
    ]
},
{
    title: 'tools',
    data: [
        {
            imgPath: '/about/figma.svg'
        },
        {
            imgPath: '/about/notion.svg'
        },
        {
            imgPath: '/about/vscode.svg'
        }
    ]
}
]

const qualificationData: Array<QualificationData> = [
    {
        title: 'eduction',
        data: [
            {
                university: 'Hochschule Aalen',
                qualification: 'Bachelor of Science',
                years: '2015 - 2018'
            },]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Bachner',
                role: 'Software Consultant',
                years: '2015 - 2018'
            }]
    }
]

const About = () => {
    const getData = (data: Array<QualificationData>, title: string) => {
        return data.find((item) => item.title === title);
    }
    return <section className="xl:h-[860px] pb-12 xl:py-24">
       <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
        <div className="flex flex-col xl:flex-row">
            <div className="hidden xl:flex flex-1 relative">
                <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative" imgSrc="" />
            </div>
            <div className="flex-1">
                <Tabs>
                    <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                        <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Info</TabsTrigger>
                        <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualifications</TabsTrigger>
                        <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
                    </TabsList>
                    <div className="text-lg mt-12 xl:mt-8">
                        <TabsContent value="personal">
                            <div className="text-center xl:text-left">
                                <h3 className="h3 mb-4">Personal Info</h3>
                                <p className="subtitle max-w-xl max-auto xl:mx-0">asdfja aksfdjaskjdvsdfj asdfjaskdf </p>
                                <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                    {infoData.map((item, index) => {
                                        return (
                                            <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                <div className="text-primary">{item.icon}</div>
                                                <div>{item.text}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="flex flex-cols gap-y-2">
                                    <div className="text-primary">Language Skills</div>
                                    <div className="border-b border-border"></div>
                                    <div>English, German</div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="qualifications">
                            <div>
                                <h3 className="h3 mb-8 text-center xl:text-left" >
                                    My Journey
                                </h3>
                                <div className="grid md:grid-cols-2 gap-y-8">
                                    <div className="flex flex-col gap-y-6">
                                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                            <Briefcase />
                                            <h4 className="capitalize font-medium">
                                                {getData(qualificationData, 'experience')!.title}
                                            </h4>
                                        </div>
                                        <div>
                                            {getData(qualificationData, 'experience')!.data.map((item, index) => {
                                                const {company, role, years} = item;
                                                return (
                                                    <div key={index} className="flex gap-x-8 group">
                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">

                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold text-xl leading-none mb-2"> {company}</div>
                                                            <div className="text-lg leading none text-muted-foreground mb-4">{role}</div>
                                                            <div className="text-base font-medium">{years}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-6">
                                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                            <Briefcase />
                                            <h4 className="capitalize font-medium">
                                                {getData(qualificationData, 'eduction')?.title}
                                            </h4>
                                        </div>
                                        <div>
                                            {getData(qualificationData, 'eduction')?.data.map((item, index) => {
                                                const {university, qualification, years} = item;
                                                return (
                                                    <div key={index} className="flex gap-x-8 group">
                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">

                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold text-xl leading-none mb-2"> {university}</div>
                                                            <div className="text-lg leading none text-muted-foreground mb-4">{qualification}</div>
                                                            <div className="text-base font-medium">{years}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
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
                                        {getData(skillData, 'skills')?.data.map((item, index) => {
                                            const {name} = item;
                                            return (
                                            <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                                <div className="font-medium">{name}</div>
                                            </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-2 xl:text-left">
                                        Tools
                                    </h4>
                                    <div className="border-b border-border mb-4"></div>
                                    <div className="flex gap-x-8 justify-center xl:justify-start">
                                        {getData(skillData, 'tools')?.data.map((item, index) => {
                                            const {imgPath} = item;
                                            if(imgPath != null)
                                            return (
                                                <div key={index}> 
                                                    <Image 
                                                        src={imgPath} 
                                                        width={48} 
                                                        height={48} 
                                                        alt=''
                                                        priority />
                                                </div>
                                            )
                                        })}
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
};

export default About;