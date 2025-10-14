import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { Spotlight } from "@/components/ui/spotlight";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans light:bg-black h-screen w-full ">
      <div className="fixed inset-0 -z-10">
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
      <div className="h-full w-full">
        <BackgroundGradientAnimation>
          <div className="absolute w-full z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
            <div className="flex items-center justify-center h-full w-full flex-col">
              <div className="flex items-end relative">
                <div className="relative">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={700}
                    height={500}
                    className="w-auto h-auto"
                  />
                </div>
              </div>

              <TypewriterEffectSmooth
                words={[
                  {
                    text: "Coming ",
                    className: "text-4xl xs:text-3xl sm:text-5xl md:text-6xl",
                  },
                  {
                    text: "Soon",
                    className: "text-4xl xs:text-3xl sm:text-5xl md:text-6xl",
                  },
                  {
                    text: "!!!",
                    className: "text-4xl xs:text-3xl sm:text-5xl md:text-6xl",
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
