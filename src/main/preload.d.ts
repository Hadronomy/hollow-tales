export interface IElectronIPCRenderer {
  on: (channel: string, func: Promise<void>) => void;
  once: (channel: string, func: Promise<void>) => void;
}

export interface IElectronAPI {
  maximize: () => void;
  minimize: () => void;
  close: () => void;
  ipcRenderer: IElectronIPCRenderer;
}

declare global {
  interface Window {
    electron: IElectronAPI;
  }
}
