import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {
  to: string;
  title: string;
};

export default function ButtonReturn({ to, title }: Props) {
  return (
    <Link className="text-[#F7AB0A] flex items-center" href={to}>
      <ArrowUturnLeftIcon className="h-6 w-6 font-medium text-[#F7AB0A] mr-2" />
      {title}
    </Link>
  );
}
