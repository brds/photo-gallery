import { useState } from "react";
import { styled } from "styled-components";
import Photo from "./Photo";
import Switch from "./Switch";
import { motion } from "framer-motion";
import FullScreen from "./FullScreen";

export default function App() {
  const list = Array.from({ length: 4 * 10 }, (_, i) => i);

  const [grid, setGrid] = useState(false);
  const [fullScreenSrc, setFullScreenSrc] = useState<string>();

  return (
    <Page>
      <Header>
        <Switch on={grid} updateOn={setGrid} label="Grid" />
      </Header>
      <List data-isgrid={grid} layout="position" transition={{ duration: 1 }}>
        {list.map((i) => (
          <Photo key={i} index={i} updateFullScreenSrc={setFullScreenSrc} />
        ))}
      </List>

      <FullScreen
        close={() => setFullScreenSrc(undefined)}
        src={fullScreenSrc}
      />
    </Page>
  );
}

const Page = styled.main`
  min-height: 100vh;
  width: 100%;
  align-items: center;
  scrollbar-gutter: stable;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  border-bottom: 1px solid var(--grey-30);
  background: var(--surface);
  padding: 12px;
  display: flex;
  z-index: var(--z-index-header);
`;

const List = styled(motion.div)`
  padding: 64px;
  max-width: 100%;

  &[data-isgrid="true"] {
    display: grid;
    grid-template-columns: repeat(4, min(25%, 200px));
    justify-items: stretch;
    place-content: center;
    gap: 32px;
  }
  &[data-isgrid="false"] {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 32px;
  }
`;
