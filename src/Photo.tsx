import { motion } from "framer-motion";
import { styled } from "styled-components";

type Props = {
  index: number;
  updateFullScreenSrc: (src: string) => void;
};

export default function Photo(props: Props) {
  const { index, updateFullScreenSrc } = props;

  const src = `https://picsum.photos/1200/675?${index}`;

  return (
    <Button onClick={() => updateFullScreenSrc(src)}>
      <Img src={src} alt="Random picture from picsum.photos" layout />
    </Button>
  );
}

const Button = styled(motion.button)`
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
  display: grid;
  place-items: stretch;
`;

const Img = styled(motion.img)`
  max-width: 600px;
  min-width: 0;
`;
