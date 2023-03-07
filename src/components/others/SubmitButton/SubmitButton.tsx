import { ThreeDots } from "react-loader-spinner";

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
    <button className="button"
      onClick={onClick}
      style={style}
    >
      {disabled ? (
        <ThreeDots
          height="13"
          width="51"
          color="#FFFFFF"
          ariaLabel="three-dots-loading"
        />
      ) : (
        <>{children}</>
      )}
    </button>
  );
}
