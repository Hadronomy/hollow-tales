import PropTypes from 'prop-types';
import { CloseButton, MaximizeButton, MinimizeButton } from './TitilebarButton';
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
      <div
        style={{
          alignItems: 'end',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <MinimizeButton />
        <MaximizeButton />
        <CloseButton />
      </div>
    </div>
  );
}
