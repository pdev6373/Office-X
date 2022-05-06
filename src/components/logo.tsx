import Image from "next/image";

export const Logo = ({ logoProps }) => {
  return (
    <span className="logo">
      <Image
        src={logoProps.path}
        width={logoProps.width}
        height={logoProps.height}
      />
    </span>
  );
};
