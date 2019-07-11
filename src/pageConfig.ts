import { Page } from "./lib/Page";
import { Hoge } from "./roots/Hoge";
import { RandomPicker } from "./roots/RandomPicker";
import { Root } from "./roots/Root";
import { PushMan } from "./roots/PushMan";

export const pageConfig: Page[] = [
  {
    component: Root,
    path: "/",
    name: "React drill"
  },
  {
    component: Hoge,
    path: "/hoge/",
    name: "Hoge"
  },
  {
    component: PushMan,
    path: "/gamepad/",
    name: "Gamepad detector"
  },
  {
    component: RandomPicker,
    path: "/randompicker/",
    name: "Random Picker"
  }
];
