import IconButton from '../components/IconButton';
import ErrorMessage from '../components/ErrorMessage';
import { useState } from 'react';

interface ITextInput {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  iconPath: string;
  iconAlt: string;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  errorMessage: string;
  isError: boolean;
}

export default function TextInput({
  type,
  name,
  placeholder,
  value,
  onChange,
  iconPath,
  iconAlt,
  onIconClick,
  errorMessage,
  isError,
}: ITextInput) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused
    ? 'border-blue-600'
    : !value
      ? 'border-gray-350'
      : 'border-blue-600';

  return (
    <div className="flex flex-col gap-y-2">
      <div
        className={`flex items-center gap-x-2 h-[50px] p-4 rounded-md border ${borderColor}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full h-full rounded-md outline-none"
        />
        {!!value && (
          <IconButton
            iconPath={iconPath}
            iconAlt={iconAlt}
            onClick={onIconClick}
            className="shrink-0"
          />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
