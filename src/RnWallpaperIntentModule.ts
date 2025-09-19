import { NativeModule, requireNativeModule } from 'expo';

import { RnWallpaperIntentModuleEvents } from './RnWallpaperIntent.types';

declare class RnWallpaperIntentModule extends NativeModule<RnWallpaperIntentModuleEvents> {
  openSetWallpaperFromUrl(url: string): Promise<void>
}

// This call loads the native module object from the JSI.
export default requireNativeModule<RnWallpaperIntentModule>('RnWallpaperIntent');
