import { motion } from "framer-motion";
import { styled } from "styled-components";

export default function Photo({ index }: { index: number }) {
  //https://i.pravatar.cc/
  //https://picsum.photos/400/400
  return (
    <Img
      src={`https://picsum.photos/800/450?${index}`}
      alt="Random picture from picsum.photos"
      layout
    />
  );
}

const Img = styled(motion.img)`
  display: block;
`;
