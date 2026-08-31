import Image from "next/image";

export function Watermark() {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={555}
      height={467}
      className="pointer-events-none fixed top-1/2 left-1/2 z-40 w-72 max-w-none -translate-x-1/2 -translate-y-1/2 opacity-5 md:w-[28rem]"
    />
  );
}
