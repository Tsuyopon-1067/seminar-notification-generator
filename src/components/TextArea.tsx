type TextAreaProps = {
  id: string;
  value: string;
  setText: (text: string) => void;
  rows: number;
  placeholder: string;
};
export const TextArea = ({ id, value, setText, placeholder, rows }: TextAreaProps) => {
  return (
    <textarea
      id={id}
      rows={rows}
      value={value}
      onChange={(e) => setText(e.target.value)}
      className="block p-2.5 m-2 mt-4 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={placeholder}
    />
  );
};
