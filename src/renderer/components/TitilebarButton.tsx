import './titlebarButton.css';
import {
  VscClose,
  VscChromeMinimize,
  VscChromeMaximize,
} from 'react-icons/vsc';

function Minimize() {
  window.electron.minimize();
}

function Maximize() {
  window.electron.maximize();
}

function Close() {
  window.electron.close();
}

export function MinimizeButton() {
  return (
    <button
      className="title-btn min-btn no-drag"
      type="button"
      onClick={Minimize}
    >
      <VscChromeMinimize size={20} />
    </button>
  );
}

export function MaximizeButton() {
  return (
    <button
      className="title-btn max-btn no-drag"
      type="button"
      onClick={Maximize}
    >
      <VscChromeMaximize size={20} />
    </button>
  );
}

export function CloseButton() {
  return (
    <button
      className="title-btn close-btn no-drag"
      type="button"
      onClick={Close}
    >
      <VscClose size={20} />
    </button>
  );
}
