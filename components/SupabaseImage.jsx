// components/SupabaseImage.jsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

export default function SupabaseImage({
  src,
  alt,
  width = 800,
  height = 600,
  ...props
}) {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getSignedUrl() {
      setIsLoading(true);

      try {
        // Check if this is a Supabase image path
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
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getSignedUrl();
  }, [src]);

  if (isLoading) {
    return (
      <div
        className="animate-pulse bg-gray-200 rounded"
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
      alt={alt || "Blog image"}
      width={width}
      height={height}
      className="rounded-lg"
      {...props}
    />
  );
}
