import './titlebar.css';

interface TitleBarOptions {
  appName: string;
}

export default function TitleBar(props: TitleBarOptions) {
  const { appName } = props;
  return (
    <div className="titlebar grid-container">
      <div />
      <div id="titlebar-center">
        <div>
          <p>{appName}</p>
        </div>
      </div>
      <div />
    </div>
  );
}
