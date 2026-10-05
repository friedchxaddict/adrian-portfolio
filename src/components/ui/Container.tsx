import type { ElementType, ReactNode } from "react";

interface ContainerProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export function Container({ as: Tag = "div", children, className = "" }: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </Tag>
  );
}
