import Socials from "./socials";

const Footer = () => {
  return (<footer className="bg-secondary py-12">
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-between">
        <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4" iconsStyles="text-primary text-[20px] dark:text-white/70 hover:text-white dark:hover:text-primary" />
        <div className="text-muted-foreground">Copyright &copy; Marcel Hudy. All rights reserved.</div>
      </div>
    </div>
  </footer>);
};

export default Footer;
