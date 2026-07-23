import { type ColorProps, useTheme } from '@shopify/restyle';
import type { Home } from 'iconsax-react-nativejs';
import * as Icons from 'iconsax-react-nativejs';
import { memo } from 'react';
import type { Theme } from '@/lib/theme';

type IconProps = React.ComponentProps<typeof Home>;

type IconName = keyof typeof Icons;

type Variant = IconProps['variant'];

type Props = {
  name: IconName;
  size?: keyof Theme['spacing'];
  variant?: Variant;
} & ColorProps<Theme>;

const Icon = memo(({ name, color, size, variant = 'Outline' }: Props) => {
  const theme = useTheme<Theme>();
  const vColor = theme.colors[color || 'textMuted'];
  const vSize = theme.spacing[size || 'm'];

  const Icon = Icons[name] as React.ComponentType<IconProps>;

  if (!Icon) {
    console.log(`[Icon] "${name}" is not a valid iconsax-react-nativejs icon`);
    return null;
  }

  return <Icon variant={variant} color={vColor} size={vSize} />;
});

export default Icon;
