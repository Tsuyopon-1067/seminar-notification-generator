import { TextArea } from './TextArea';
import { GreenButton } from './GreenButton';

type ImportExportProps = {
  applySettings: () => void;
  LOCALSTORAGE_KEY: string;
  settings: string;
  setSettings: (settings: string) => void;
};

export const ImportExport = ({
  applySettings,
  LOCALSTORAGE_KEY,
  settings,
  setSettings,
}: ImportExportProps) => {
  const copySettings = () => {
    const data = localStorage.getItem(LOCALSTORAGE_KEY);
    if (data) {
      const formattedData = JSON.stringify(JSON.parse(data), null, 2);
      navigator.clipboard.writeText(formattedData).then(() => {
        alert('Copied to clipboard!');
      });
    }
  };

  return (
    <div>
      <h2 className={'text-gray-500 text-2xl mt-8'}>Import / Export</h2>
      <TextArea
        id="importExport"
        rows={16}
        value={settings}
        setText={setSettings}
        placeholder="Write JSON text here..."
      />
      <div className={'flex m-2 gap-4'}>
        <div className={'flex-1'}>
          <GreenButton onClick={applySettings}>
            <span>Import Settings</span>
          </GreenButton>
        </div>
        <div className={'flex-1'}>
          <GreenButton onClick={copySettings}>
            <span>Export to Clipboard</span>
          </GreenButton>
        </div>
      </div>
    </div>
  );
};
