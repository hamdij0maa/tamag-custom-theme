import { shorthands } from "@tamagui/shorthands";
import { CreateTamaguiProps, createTamagui } from "tamagui"; // or '@tamagui/core'
import { animations } from "./theme/animations.css";
import { media } from "./theme/media";
import { fonts } from "./theme/fonts";
import { themes } from "./theme/theme";
import { tokens } from "./theme/tokens";

export const configBase = {
 defaultFont: "body",
 shouldAddPrefersColorThemes: true,
 themeClassNameOnRoot: true,
 themes: themes,
 media,
 shorthands,
 tokens: tokens,
 fonts,
 mediaQueryDefaultActive: {
  xl: true,
  lg: true,
  md: true,
  sm: true,
  xs: true,
  // false
  xxs: false,
 },
 selectionStyles: (theme) =>
  theme.color5
   ? {
      backgroundColor: theme.color5,
      color: theme.color11,
     }
   : null,
} satisfies CreateTamaguiProps;

const config = {
 ...configBase,
 animations: animations,
} satisfies CreateTamaguiProps;

const appConfig = createTamagui(config);
export type AppConfig = typeof appConfig;
declare module "tamagui" {
 interface TamaguiCustomConfig extends AppConfig {}
}
export default appConfig;
