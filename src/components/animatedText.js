import {motion as m} from "framer-motion"

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
}) => {
  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>

      <m.span
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.07 }}
        aria-hidden
      >
        {text.split(' ').map((word, charIndex) => (
          <span className="inline-block">
            {word.split('').map((char, charIndex) => (
              <m.span
                variants={defaultAnimations}
                key={`${char}-${charIndex}`}
                className="inline-block"
              >
                {char}
              </m.span>
            ))}
            <span className="inline-block">
                &nbsp;
            </span>
          </span>
        ))}
        {/* {text.split('').map((char, charIndex) => (
          <m.span
            variants={defaultAnimations}
            key={`${char}-${charIndex}`}
            className="inline-block"
          >
            {char}
          </m.span>
        ))} */}
      </m.span>
    </Wrapper>
  );
};