import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { Spotlight } from "@/components/ui/spotlight";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";

export default function Home() {
  const images = [
    "https://idee-eyewear.com/cdn/shop/files/Ideenew-9_53cb7fe8-2430-40ac-a52f-656b582c832a.jpg?v=1701932210",
    "https://media.vogue-eyewear.com/2025/12_INDIA/HP/D_Hero.jpg",
    "https://qqshop.in/cdn/shop/products/1P2A9509.jpg?v=1619850551",
    "https://www.rkumar.in/cdn/shop/collections/opium_dealer_banners-02.jpg?v=1734429461",
    "https://img.tatacliq.com/images/i11/437Wx649H/MP000000018036146_437Wx649H_202306241803581.jpeg",
    "https://5.imimg.com/data5/SL/QR/MY-1512490/idee-eyewear.jpg",
    "https://lawrenceandmayo.com/wp-content/uploads/brandposter_scott_24_frames.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ray-Ban_logo.svg",
    "https://play-lh.googleusercontent.com/Ax4cZ932OKjdL-pHd41UjAGB3sZ48OSs2__icdBnKxFDjHHEYtLmWaGnSqa2_eQRQTg",
    "https://lookeronline.com/cdn/shop/collections/vogue-eyeglasses.jpg?v=1756301679",
    "https://idee-eyewear.com/cdn/shop/files/Ideenew-9_53cb7fe8-2430-40ac-a52f-656b582c832a.jpg?v=1701932210",
    "https://media.vogue-eyewear.com/2025/12_INDIA/HP/D_Hero.jpg",
    "https://qqshop.in/cdn/shop/products/1P2A9509.jpg?v=1619850551",
    "https://www.rkumar.in/cdn/shop/collections/opium_dealer_banners-02.jpg?v=1734429461",
    "https://img.tatacliq.com/images/i11/437Wx649H/MP000000018036146_437Wx649H_202306241803581.jpeg",
    "https://5.imimg.com/data5/SL/QR/MY-1512490/idee-eyewear.jpg",
    "https://lawrenceandmayo.com/wp-content/uploads/brandposter_scott_24_frames.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ray-Ban_logo.svg",
    "https://play-lh.googleusercontent.com/Ax4cZ932OKjdL-pHd41UjAGB3sZ48OSs2__icdBnKxFDjHHEYtLmWaGnSqa2_eQRQTg",
    "https://lookeronline.com/cdn/shop/collections/vogue-eyeglasses.jpg?v=1756301679",
    "https://idee-eyewear.com/cdn/shop/files/Ideenew-9_53cb7fe8-2430-40ac-a52f-656b582c832a.jpg?v=1701932210",
    "https://media.vogue-eyewear.com/2025/12_INDIA/HP/D_Hero.jpg",
    "https://qqshop.in/cdn/shop/products/1P2A9509.jpg?v=1619850551",
    "https://www.rkumar.in/cdn/shop/collections/opium_dealer_banners-02.jpg?v=1734429461",
    "https://img.tatacliq.com/images/i11/437Wx649H/MP000000018036146_437Wx649H_202306241803581.jpeg",
    "https://5.imimg.com/data5/SL/QR/MY-1512490/idee-eyewear.jpg",
    "https://lawrenceandmayo.com/wp-content/uploads/brandposter_scott_24_frames.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ray-Ban_logo.svg",
    "https://play-lh.googleusercontent.com/Ax4cZ932OKjdL-pHd41UjAGB3sZ48OSs2__icdBnKxFDjHHEYtLmWaGnSqa2_eQRQTg",
  ];
  return (
    <div className="font-sans light:bg-black h-screen w-full ">
      <div className="fixed inset-0 -z-10 flex items-center justify-center pb-20">
        <ThreeDMarquee images={images} className="mt-64 opacity-55" />
        <DottedGlowBackground
          className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
          opacity={1}
          gap={10}
          radius={1.6}
          colorLightVar="--color-neutral-500"
          glowColorLightVar="--color-neutral-600"
          colorDarkVar="--color-neutral-500"
          glowColorDarkVar="--color-sky-800"
          backgroundOpacity={0}
          speedMin={0.3}
          speedMax={1.6}
          speedScale={1}
        />
      </div>
      <div className="absolute top-0 left-0 z-10">
        <Spotlight
          className="-top-40 left-1/2 md:-top-20 md:left-60"
          fill="white"
        />
      </div>
      <div className="h-full w-full absolute top-0 left-0 z-10">
        <BackgroundGradientAnimation>
          <div className="absolute w-full z-50 inset-0 flex items-center justify-start text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
            <div className="flex items-center justify-start pt-20 h-full w-full flex-col">
              <div className="flex items-end relative">
                <div className="relative">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={600}
                    height={400}
                    className="w-auto h-auto max-w-72 md:max-w-sm"
                  />
                </div>
              </div>

              <TypewriterEffectSmooth
                words={[
                  {
                    text: "Coming ",
                    className: "text-4xl xs:text-3xl sm:text-5xl md:text-5xl",
                  },
                  {
                    text: "Soon",
                    className: "text-4xl xs:text-3xl sm:text-5xl md:text-5xl",
                  },
                  {
                    text: "!!!",
                    className: "text-4xl xs:text-3xl sm:text-5xl md:text-4xl",
                  },
                ]}
              />
            </div>
          </div>
        </BackgroundGradientAnimation>
      </div>
    </div>
  );
}
