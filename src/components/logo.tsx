import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.png" width={54} height={54} priority alt="Marcel Hudy logo" />
    </Link>
  );
};

export default Logo;
