type TimeInputProps = {
  hour: number;
  minute: number;
  onHourChange: (hour: number) => void;
  onMinuteChange: (minute: number) => void;
};

export const TimeInput = ({ hour, minute, onHourChange, onMinuteChange }: TimeInputProps) => {
  const adjustHour = (delta: number) => {
    let newHour = hour + delta;
    if (newHour > 23) newHour = 0;
    if (newHour < 0) newHour = 23;
    onHourChange(newHour);
  };

  const adjustMinute = (delta: number) => {
    let newMinute = minute + delta;
    if (newMinute > 59) newMinute = 0;
    if (newMinute < 0) newMinute = 59;
    onMinuteChange(newMinute);
  };

  const handleHourInput = (value: string) => {
    const num = parseInt(value);
    if (!isNaN(num) && num >= 0 && num <= 23) {
      onHourChange(num);
    }
  };

  const handleMinuteInput = (value: string) => {
    const num = parseInt(value);
    if (!isNaN(num) && num >= 0 && num <= 59) {
      onMinuteChange(num);
    }
  };

  return (
    <div className={'w-64 mx-auto my-2'}>
      <div className="flex items-center gap-3">
        開始時間
        <div className="flex flex-col items-center gap-1">
          <button
            className="w-8 h-8 bg-green-400 text-gray-100 rounded-full hover:bg-gray-300 transition-colors flex items-center justify-center"
            onClick={() => adjustHour(1)}
          >
            ▲
          </button>
          <input
            type="text"
            value={hour.toString().padStart(2, '0')}
            onChange={(e) => handleHourInput(e.target.value)}
            className="w-12 text-center border rounded-md py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="w-8 h-8 bg-green-400 text-gray-100 rounded-full hover:bg-gray-300 transition-colors flex items-center justify-center"
            onClick={() => adjustHour(-1)}
          >
            ▼
          </button>
        </div>
        <span className="text-xl font-bold">:</span>
        <div className="flex flex-col items-center gap-1">
          <button
            className="w-8 h-8 bg-green-400 text-gray-100 rounded-full hover:bg-gray-300 transition-colors flex items-center justify-center"
            onClick={() => adjustMinute(1)}
          >
            ▲
          </button>
          <input
            type="text"
            value={minute.toString().padStart(2, '0')}
            onChange={(e) => handleMinuteInput(e.target.value)}
            className="w-12 text-center border rounded-md py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="w-8 h-8 bg-green-400 text-gray-100 rounded-full hover:bg-gray-300 transition-colors flex items-center justify-center"
            onClick={() => adjustMinute(-1)}
          >
            ▼
          </button>
        </div>
      </div>
    </div>
  );
};
