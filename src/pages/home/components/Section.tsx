import Wrapper from "@/components/shared/Wrapper";
import { AnimatedGradient } from "./AnimatedGradient";
import { motion, type Variants } from "framer-motion";
import { child, container } from "@/lib/animations/textAppear2";
import LightRays from "@/components/LightRays";

interface props {
  children: React.ReactNode;
  id: string;
  heading: string;
  description: string;
  background?: string;
  gradient?: string;
  className?: string;
}

export default function Section({
  children,
  id,
  heading,
  description,
  className,
  background = "",
  gradient = "",
}: props) {
  const text = heading.split(" ");

  if (id === "how-it-works")
    return (
      <section
        id={id}
        className={`relative w-full h-full border-b border-border/40 bg-background ${className}`}
      >
        <div className="absolute inset-0">
          <LightRays
            className=" opacity-60"
            raysOrigin="top-center"
            //   raysColor="#4a90e2"
            raysColor="#625fff"
            raysSpeed={0.5}
            lightSpread={1.2}
            rayLength={2.5}
            followMouse={true}
            mouseInfluence={0.15}
            saturation={0.8}
          />
        </div>

        <Wrapper className="relative z-10 h-full py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className=" flex flex-wrap gap-2 justify-center "
            >
              {text.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={child as Variants}
                  className="mb-4 text-4xl font-bold leading-10 sm:leading-tight tracking-tight  md:text-4xl lg:text-5xl gradient-silver-to-top "
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.4 }}
              className="text-lg text-muted-foreground"
            >
              {description}
            </motion.p>
          </div>
          {children}
        </Wrapper>
      </section>
    );

  return (
    <section
      id={id}
      className={`relative border-b border-border/40 py-24 md:py-32 ${className}`}
    >
      <Wrapper className="">
        <AnimatedGradient background={background} gradient={gradient} />
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" flex flex-wrap gap-2 justify-center "
          >
            {text.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={child as Variants}
                className="mb-4 text-4xl font-bold leading-10 sm:leading-tight tracking-tight  md:text-4xl lg:text-5xl gradient-silver-to-top "
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="text-lg text-muted-foreground"
          >
            {description}
          </motion.p>
        </div>
        {children}
      </Wrapper>
    </section>
  );
}
