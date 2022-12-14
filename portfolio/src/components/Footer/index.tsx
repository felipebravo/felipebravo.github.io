import { StyledFooter } from "./style";
import {
  VscFlame,
  VscSync,
  VscSourceControl,
  VscError,
  VscWarning,
  VscSymbolNamespace,
  VscGitPullRequestClosed,
  VscFeedback,
  VscCheck,
  VscBell,
  VscBroadcast,
} from "react-icons/vsc";

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <VscSourceControl />
        <span>master*</span>
        <VscSync />
        <VscGitPullRequestClosed />
        <span>
          <VscError />0
        </span>
        <span>
          <VscWarning />0
        </span>
        <VscFlame />
        <span>Start work session!</span>
      </div>
      <div>
        <span>Ln 0, Col 0</span>
        <span>Spaces: 2</span>
        <span>UTF-8</span>
        <span>CRLF</span>
        <VscSymbolNamespace />
        <span>TypeScript React</span>
        <span>
          <VscBroadcast />
          Go Live
        </span>
        <span>
          <VscCheck />
          Prettier
        </span>
        <VscFeedback />
        <VscBell />
      </div>
    </StyledFooter>
  );
};
