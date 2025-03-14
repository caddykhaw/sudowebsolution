"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

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
  height = 600,
  priority = false,
  className = "",
}: BlogImageProps) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getSignedUrl() {
      setIsLoading(true);

      try {
        // Check if this is a Supabase images path
        if (src.startsWith("images/")) {
          // It's a Supabase storage path
          const { data, error } = await supabase.storage
            .from("images")
            .createSignedUrl(src, 3600); // 1 hour expiry

          if (error) throw error;
          setImageUrl(data.signedUrl);
        } else {
          // It's already a full URL or local path
          setImageUrl(src);
        }
      } catch (err) {
        console.error("Error loading image:", err);
        setError(err instanceof Error ? err.message : "Failed to load image");
      } finally {
        setIsLoading(false);
      }
    }

    getSignedUrl();
  }, [src]);

  if (isLoading) {
    return (
      <div
        className={`animate-pulse bg-gray-200 rounded ${className}`}
        style={{ width, height }}
      />
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-sm">Error loading image: {error}</div>
    );
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
