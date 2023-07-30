import { styled } from "styled-components";
import { motion } from "framer-motion";

type Props = {
  on: boolean;
  updateOn: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
};

export default function Switch(props: Props) {
  const { on, updateOn, label } = props;

  return (
    <Label>
      <Button
        variants={buttonVariants}
        animate={on ? "on" : "off"}
        onClick={() => updateOn((prev) => !prev)}
      >
        <Track>
          <Handle variants={handleVariants} />
        </Track>
      </Button>

      <span>{label}</span>
    </Label>
  );
}

const trigSize = 20;

const buttonVariants = {
  off: {
    background: "hsl(350, 0%, 90%)",
  },
  on: {
    background: "hsl(350, 100%, 90%)",
  },
};

const handleVariants = {
  off: {
    x: 0,
    background: "hsl(330, 0%, 60%)",
  },
  on: {
    x: trigSize,
    background: "hsl(330, 100%, 65%)",
  },
};

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--grey-80);
`;

const Button = styled(motion.button)`
  cursor: pointer;
  border: none;
  padding: calc(${trigSize}px / 6);
  border-radius: 5000px;
`;

const Track = styled.div`
  width: calc(${trigSize}px * 2);
  border-radius: 5000px;
`;

const Handle = styled(motion.div)`
  width: ${trigSize}px;
  height: ${trigSize}px;
  border-radius: 5000px;
`;
