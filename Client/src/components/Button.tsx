import React from "react";

type ButtonProps = {
  text: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  type?: "primary" | "secondary";
  onClick: () => void;
  flex?: boolean;
  small?: boolean;
  outlined?: boolean;
  full?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  isLoading = false,
  isDisabled = false,
  rightIcon,
  leftIcon,
  type = "primary",
  onClick,
  flex = false,
  small = false,
  outlined = false,
  full = false,
}) => {
  // Define base styles
  const baseStyles =
    "rounded-lg text-white text-sm cursor-pointer transition-all duration-300 ease-in-out flex items-center justify-center gap-1.5 min-h-fit py-4 px-6 shadow-md border";

  // Conditional styles based on props
  let conditionalStyles = "";

  if (type === "secondary") {
    conditionalStyles += " bg-secondary border-secondary";
  } else {
    conditionalStyles += " bg-primary border-primary";
  }

  if (isDisabled || isLoading) {
    conditionalStyles += " opacity-80 cursor-not-allowed";
  }

  if (flex) {
    conditionalStyles += " flex-1";
  }

  if (small) {
    conditionalStyles += " py-2 px-4";
  }

  if (outlined) {
    conditionalStyles += " bg-transparent text-primary border-none shadow-none";
  }

  if (full) {
    conditionalStyles += " w-full";
  }

  // Styles for loading spinner
  const spinnerStyles = isLoading
    ? "border-t-transparent border-white border-solid border-2 rounded-full animate-spin"
    : "";

  return (
    <div
      onClick={() => !isDisabled && !isLoading && onClick()}
      className={`${baseStyles} ${conditionalStyles}`}
    >
      {isLoading && (
        <div
          className={spinnerStyles}
          style={{ width: "18px", height: "18px" }}
        ></div>
      )}
      {leftIcon}
      {text}
      {isLoading && <> . . .</>}
      {rightIcon}
    </div>
  );
};

export default Button;
