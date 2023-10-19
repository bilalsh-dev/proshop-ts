import { ReactNode } from "react";

import { DANGER, INFO, SUCCESS, WARNING } from "@/constants";
import { Alert } from "@/lib/react-bootstrap";

type MessageProps = {
  variant?: typeof DANGER | typeof WARNING | typeof SUCCESS | typeof INFO;
  children: ReactNode;
};

function Message({ variant = INFO, children }: MessageProps) {
  return <Alert variant={variant}>{children}</Alert>;
}

export default Message;
