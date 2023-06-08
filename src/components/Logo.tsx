import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Logo = () => {
  const pathname = usePathname();
  const isIndex = pathname === "/";

  return (
    <Link
      href="/"
      className={clsx(
        "text-xl font-gil font-bold",
        isIndex ? "text-white" : "text-xl text-ctp-maroon"
      )}
    >
      pandadev.dev
    </Link>
  );
};

export default Logo;
