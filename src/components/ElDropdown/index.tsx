import React, { useCallback, useState } from "react";
import { DropdownBtn, Wrap, Items } from "./Styles";

interface DropdownProps {
  items?: string[];
  children: React.ReactNode;
}

const ElDropdown = ({ children, items }: DropdownProps) => {
  const [showItem, setShowItem] = useState<boolean>(false);

  const toggleShow = useCallback(() => {
    setShowItem((prev) => !prev);
  }, []);

  return (
    <Wrap>
      <DropdownBtn onClick={toggleShow}>
        <div className="flex-row" style={{ justifyContent: "space-between", alignItems: "center" }}>
          <span className="text">{children}</span>
          <img className="icon" src="/svg/polygon.svg" alt="hi" />
        </div>
      </DropdownBtn>

      {showItem && (
        <Items>
          {items?.map((v: any, i: number) => {
            return <div key={i}>{v}</div>;
          })}
        </Items>
      )}
    </Wrap>
  );
};

export default ElDropdown;
