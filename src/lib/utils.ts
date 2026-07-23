import * as String from 'effect/String';
import { PixelRatio, Platform } from 'react-native';
import { ANDROID_SCALE_LIMIT, SCALE } from './constants';

export const normalize = (size: number) =>
  Platform.OS === 'ios'
    ? Math.round(PixelRatio.roundToNearestPixel(size * SCALE))
    : Math.round(PixelRatio.roundToNearestPixel(size * SCALE)) -
      ANDROID_SCALE_LIMIT;

export const capitalize = (word: string) => String.capitalize(word);
