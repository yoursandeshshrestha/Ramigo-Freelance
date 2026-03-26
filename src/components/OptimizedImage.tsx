import Image, { ImageProps } from 'next/image';

/**
 * Optimized Image Component
 * Automatically applies lazy loading and other optimizations
 * Use this instead of next/image for better defaults
 */

interface OptimizedImageProps extends Omit<ImageProps, 'loading'> {
  /**
   * Set to true to load immediately (above-the-fold images)
   * Default: false (lazy load)
   */
  priority?: boolean;
}

export function OptimizedImage({
  priority = false,
  alt,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      loading={priority ? undefined : 'lazy'}
      priority={priority}
      placeholder="blur"
      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmNWY1ZjUiLz48L3N2Zz4="
    />
  );
}
