import React, { FC } from "react";
import MenuButton from "..";

interface MenuProps {
  onSectionChange: (section: number) => void;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

const Menu: FC<MenuProps> = ({ isOpen, onSectionChange, setOpen }) => {
  return (
    <>
      <button
        onClick={() => setOpen(!isOpen)}
        className="z-20 fixed top-12 right-12 p-3 bg-indigo-600 w-11 h-11 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            isOpen ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            isOpen ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            isOpen ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
    ${isOpen ? "w-80" : "w-0"}`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8 text-slate-900">
          <MenuButton label="About" onClick={() => onSectionChange(0)} />
          <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
          <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
          <MenuButton label="Contact" onClick={() => onSectionChange(3)} />
        </div>
      </div>
    </>
  );
};

export default Menu;
