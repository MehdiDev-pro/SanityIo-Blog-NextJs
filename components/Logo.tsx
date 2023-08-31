import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <div className="h-10 w-10 rounded-full overflow-hidden">
        <Image width={50} height={50} alt="" src="/myImage.jpg" className="rounded-full object-cover" />
      </div>
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
