import { AnimatePresence, motion } from "framer-motion";
import { styled } from "styled-components";

type Props = {
  close: () => void;
  src: string | undefined;
};

export default function FullScreen(props: Props) {
  const { close, src } = props;

  return (
    <>
      <AnimatePresence>
        {src !== undefined && (
          <Backdrop
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Img alt="Random picture from picsum.photos" layout src={src} />
          </Backdrop>
        )}
      </AnimatePresence>
    </>
  );
}

const Backdrop = styled(motion.button)`
  border: none;
  z-index: var(--z-index-backdrop);
  position: fixed;
  inset: 0;
  background: hsl(0, 0%, 0%, 0.9);
  display: grid;
  place-content: center;
`;

const Img = styled(motion.img)`
  box-shadow: 0 0 0 16px white, 0 0 60px 22px black;
`;
