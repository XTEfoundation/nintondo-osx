// The BlueWallet fork of @react-native-menu/menu is installed from a GitHub tarball, which ships
// only TypeScript sources (no prebuilt lib/typescript). Metro resolves the sources via the
// "react-native" field at runtime; this shim gives `tsc` the public types.
declare module '@react-native-menu/menu' {
  import type * as React from 'react';
  import type { MenuAction, MenuComponentProps, MenuComponentRef, NativeActionEvent } from '@react-native-menu/menu/src/types';

  export const MenuView: React.ForwardRefExoticComponent<MenuComponentProps & React.RefAttributes<MenuComponentRef>>;
  export type { MenuAction, MenuComponentProps, MenuComponentRef, NativeActionEvent };
}
