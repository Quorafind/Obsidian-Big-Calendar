import React from "react";
import { ReactNode } from "react";

interface OnlyWhenProps {
  children: ReactNode;
  when: boolean;
}

const OnlyWhen: React.FC<OnlyWhenProps> = (props: OnlyWhenProps) => {
  const { children, when } = props;
  console.log("render 4th"); 
  return when ? <>{children}</> : null;
};

const Only = OnlyWhen;

export default Only;