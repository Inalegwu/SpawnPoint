import {
  type BackgroundColorProps,
  type BorderProps,
  backgroundColor,
  border,
  composeRestyleFunctions,
  type LayoutProps,
  layout,
  type SpacingProps,
  spacing,
  useRestyle,
} from '@shopify/restyle';
import type React from 'react';
import {
  SafeAreaView as RNSafeAreaView,
  type SafeAreaViewProps as RNSafeAreaViewProps,
} from 'react-native-safe-area-context';
import type { Theme } from '@/lib/theme';

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
  layout,
]);

type Props = RestyleProps &
  Omit<RNSafeAreaViewProps, keyof RestyleProps> & {
    children?: React.ReactNode;
  };

const SafeAreaView = ({ children, edges, ...rest }: Props) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <RNSafeAreaView edges={edges} {...props}>
      {children}
    </RNSafeAreaView>
  );
};

export default SafeAreaView;
