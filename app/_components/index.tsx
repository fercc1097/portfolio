import React, { FC } from "react";

interface Props {
  label: string;
  onClick: () => void;
}

const MenuButton: FC<Props> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors"
    >
      {label}
    </button>
  );
};

export default MenuButton;
