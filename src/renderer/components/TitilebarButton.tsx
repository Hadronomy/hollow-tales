import './titlebarButton.css';

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
      <i className="fa fa-window-minimize" />
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
      <i className="fa fa-window-maximize" />
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
      <i className="fa fa-window-close" aria-hidden="true" />
    </button>
  );
}
