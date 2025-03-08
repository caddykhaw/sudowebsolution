// components/blog-image.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

interface BlogImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

export default function BlogImage({
  src,
  alt,
  width = 800,
  height = 500,
  priority = false,
  className = "",
}: BlogImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Handle cases where src might be undefined or empty
  const imageSrc = src || "/images/blog/placeholder.jpg";

  // Check if the image is from an external URL or internal
  const isExternal = imageSrc.startsWith("http");

  // For placeholder API URLs, extract dimensions
  if (imageSrc.startsWith("/api/placeholder/")) {
    const dimensions = imageSrc.replace("/api/placeholder/", "").split("/");
    if (dimensions.length === 2) {
      width = parseInt(dimensions[0]);
      height = parseInt(dimensions[1]);
    }
  }

  return (
    <div
      className={`overflow-hidden ${className} ${
        isLoading ? "animate-pulse bg-gray-200" : ""
      }`}
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoadingComplete={() => setIsLoading(false)}
        unoptimized={isExternal} // Only optimize internal images
      />
    </div>
  );
}
