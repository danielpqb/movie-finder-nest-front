import { BusyIndicator } from "@ui5/webcomponents-react";

import "./index.scss";

export default function SubmitButton({
  children,
  disabled,
  onClick,
  style,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
}) {
  return (
    <button
      className="button"
      onClick={onClick}
      style={style}
    >
      {disabled ? <BusyIndicator color="#FFFFFF" /> : <>{children}</>}
    </button>
  );
}
