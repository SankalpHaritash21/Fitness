import React, { useState, FC } from "react";

type TextInputProps = {
  label: string;
  placeholder: string;
  name: string;
  value: string;
  error?: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  textArea?: boolean;
  rows?: number;
  columns?: number;
  chipableInput?: boolean;
  chipableArray?: string[];
  removeChip?: (name: string, index: number) => void;
  height?: string;
  small?: boolean;
  popup?: boolean;
  password?: boolean;
};

const TextInput: FC<TextInputProps> = ({
  label,
  placeholder,
  name,
  value,
  error,
  handleChange,
  textArea,
  rows,
  columns,
  chipableInput,
  chipableArray = [],
  removeChip,
  height,
  small,
  popup,
  password,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const baseLabelStyles = `text-sm px-1 ${small ? "text-xs" : ""} ${
    popup ? "text-gray-500" : "text-gray-700"
  }`;
  const baseInputStyles = `rounded-lg border px-4 py-2 bg-transparent text-sm w-full outline-none transition duration-300 ease-in-out`;
  const errorStyles = `border-red-500 text-red-500`;
  const popupStyles = `${popup ? "text-gray-500 border-gray-300" : ""}`;
  const disabledStyles = `cursor-not-allowed opacity-50`;

  const inputContainerStyles = `flex items-center gap-2 ${
    chipableInput ? "flex-col" : "flex-row"
  } ${small ? "px-2 py-1" : "px-4 py-2"} ${
    popup ? "border-gray-300" : "border-gray-400"
  } ${error ? errorStyles : ""}`;

  return (
    <div className={`flex flex-col gap-1 ${small ? "text-xs" : "text-sm"}`}>
      <label className={`${baseLabelStyles} ${error ? "text-red-500" : ""}`}>
        {label}
      </label>
      <div
        className={`${baseInputStyles} ${inputContainerStyles}`}
        style={{ minHeight: height }}
      >
        {chipableInput ? (
          <div className="flex flex-wrap gap-1">
            {chipableArray.map((chip, index) => (
              <div
                key={index}
                className="flex items-center gap-1 bg-blue-100 text-blue-500 px-2 py-1 rounded-full cursor-pointer transition duration-300 ease-in-out"
              >
                <span>{chip}</span>
                <span
                  className="text-sm cursor-pointer"
                  onClick={() => removeChip && removeChip(name, index)}
                >
                  ✖️
                </span>
              </div>
            ))}
            <input
              className={`bg-transparent w-full outline-none ${
                error ? errorStyles : ""
              }`}
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={handleChange}
            />
          </div>
        ) : (
          <>
            <input
              className={`bg-transparent w-full outline-none ${popupStyles} ${
                error ? errorStyles : ""
              }`}
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={handleChange}
              type={password && !showPassword ? "password" : "text"}
            />
            {password && (
              <div className="flex items-center">
                <span
                  className="cursor-pointer text-lg"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </span>
              </div>
            )}
          </>
        )}
      </div>
      {error && (
        <p
          className={`text-xs text-red-500 px-1 ${
            small ? "text-xs" : "text-sm"
          }`}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default TextInput;
