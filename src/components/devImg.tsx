import Image from "next/image";
interface DevImgProps {
  containerStyles: string;
  imgSrc: string;
  alt?: string;
}
const DevImg: React.FC<DevImgProps> = ({ containerStyles, imgSrc, alt = "" }) => {
  return (
    <div className={containerStyles}>
      {imgSrc && <Image src={imgSrc} fill priority alt={alt} className="object-contain" />}
    </div>
  );
};

export default DevImg;
