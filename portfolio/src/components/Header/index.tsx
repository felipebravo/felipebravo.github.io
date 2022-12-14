import { StyledHeader } from "./style";
import {
  VscChromeMinimize,
  VscChromeRestore,
  VscChromeClose,
} from "react-icons/vsc";

export const Header = () => {
  return (
    <StyledHeader>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        alt=""
      />
      <span>portfolio - Visual Studio Code</span>
      <div>
        <button>
          <VscChromeMinimize />
        </button>
        <button>
          <VscChromeRestore />
        </button>
        <button>
          <VscChromeClose />
        </button>
      </div>
    </StyledHeader>
  );
};
