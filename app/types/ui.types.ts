/* eslint-disable @typescript-eslint/no-explicit-any */
export type IButton = {
  text?: string;
  path?: string;
  onAction?: () => void;
  isLoading?: boolean;
  Icon?: any;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  borderBottom?: boolean;
};


export interface IMainTitleProps {
  text: string;
  path?: string;
  size?: "sm" | "base" | "lg" | "xl" | "2xl";
}