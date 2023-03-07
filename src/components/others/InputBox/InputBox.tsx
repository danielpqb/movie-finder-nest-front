import { MdImage, MdOutlineEmail, MdPerson } from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";
import { IoKeyOutline } from "react-icons/io5";

import "./index.scss";

export type InputBoxProps = {
  name: string;
  placeholder: string;
  type?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  height?: string;
  hasCheckBox?: boolean;
  hasIcon?: boolean | JSX.Element;
  regex?: RegExp;
};
export default function InputBox({
  data: { name, placeholder, type, onChange, value, hasIcon },
}: {
  data: InputBoxProps;
}) {
  if (hasIcon) {
    switch (name) {
      case "name":
        hasIcon = <MdPerson />;
        break;
      case "email":
        hasIcon = <MdOutlineEmail />;
        break;
      case "password":
        hasIcon = <IoKeyOutline />;
        break;
      case "imageUrl":
        hasIcon = <MdImage />;
        break;
      default:
        hasIcon = <AiOutlineFileText />;
        break;
    }
  }

  return (
    <div className="inputBox">
      <input
        required
        name={name}
        type={type ? type : "text"}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
