import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

export default function CompanyLogos() {
  return (
    <>
      <Marquee pauseOnHover={true} className="[--duration:5s]">
        <div className="flex gap-5 py-5 items-center">
          <Image
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/amazon-prime.png?updatedAt=1741000684938"
            alt="client"
            className="h-40"
            width={160}
            height={160}
          />
          <Image
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/kotak.png?updatedAt=1740991332899"
            alt="client"
            className="h-40"
            width={160}
            height={160}
          />
          <Image
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/mountain-tribe.png?updatedAt=1741000770660"
            alt="client"
            className="h-40"
            width={160}
            height={160}
          />
          <Image
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/logo.png?updatedAt=1740991801661"
            alt="client"
            className="h-40 bg-white p-2 rounded-xl"
            width={160}
            height={160}
          />
          <Image
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/velvex.jpg?updatedAt=1740992975132"
            alt="client"
            className="h-40 rounded-xl"
            width={160}
            height={160}
          />
          <Image
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/happy%20wagon.jpg?updatedAt=1741002426865"
            alt="client"
            className="h-40 rounded-xl"
            width={160}
            height={160}
          />
        </div>
      </Marquee>
      <Marquee reverse pauseOnHover={true} className="[--duration:5s]">
        <div className="flex gap-5 py-5 items-center">
          <Image
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/blitzpoker_logo.jpeg?updatedAt=1740994064604"
            alt="client"
            className="h-40 rounded-lg"
            width={160}
            height={160}
          />
          <Image
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/backstagewithmillionaires_logo.jpeg?updatedAt=1740999545313"
            alt="client"
            className="h-40 rounded-lg"
            width={160}
            height={160}
          />
          <Image
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/Mafatlal_logo.png?updatedAt=1741000440316"
            alt="client"
            className="h-40 rounded-lg"
            width={160}
            height={160}
          />
          <Image
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/zee5.png?updatedAt=1741000304949"
            alt="client"
            className="h-40 rounded-lg bg-white p-2"
            width={160}
            height={160}
          />
          <Image
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/naturalland.jpeg?updatedAt=1741000521028"
            alt="client"
            className="h-40 rounded-lg"
            width={160}
            height={160}
          />
          <Image
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/bikaji.png?updatedAt=1741000952082"
            alt="client"
            className="h-40 rounded-xl"
            width={160}
            height={160}
          />
          <Image
            src="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Companies/Logo-1-1.png?updatedAt=1741002577545"
            alt="client"
            className="h-40 rounded-xl"
            width={300}
            height={160}
          />
        </div>
      </Marquee>
    </>
  );
}
