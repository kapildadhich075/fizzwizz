import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center lg:flex">
        <img
          src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/logo.png?updatedAt=1726091277951"
          alt="Logo"
        />
      </div>
    </Link>
  );
};

export default HeaderLogo;
