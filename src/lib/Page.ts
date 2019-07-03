import { ReactNode } from "react";

export interface Page {
  component: React.ComponentType<any>;
  path: string;
  name: string;
  navigation?: "visible" | "invisible"; // default: "visible"
}
