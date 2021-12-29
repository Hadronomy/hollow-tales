import './titlebarButton.css';

export function MinimizeButton() {
  return (
    <button
      className="title-btn min-btn no-drag"
      type="button"
      onClick={window.electron.minimize}
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
      onClick={window.electron.maximize}
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
      onClick={window.electron.close}
    >
      <i className="fa fa-window-close" aria-hidden="true" />
    </button>
  );
}
