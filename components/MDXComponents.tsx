import React from "react";

interface SupabaseImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

// Custom component for images that will use Supabase URLs
const SupabaseImage: React.FC<SupabaseImageProps> = ({
  src,
  alt = "",
  width = 600,
  height = 400,
}) => {
  // Check if the image path is already a full URL
  if (src.startsWith("http")) {
    return <img src={src} alt={alt} className="rounded-md max-w-full h-auto" />;
  }

  // If it's a Supabase path, generate the full URL
  const uploadFolder = process.env.NEXT_PUBLIC_UPLOAD_FOLDER || "2025";

  // Handle both cases: paths with folder and without
  let fullPath = src;
  if (!src.startsWith(uploadFolder)) {
    fullPath = `${uploadFolder}/${src}`;
  }

  const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${fullPath}`;

  return (
    <img src={publicUrl} alt={alt} className="rounded-md max-w-full h-auto" />
  );
};

// Export all MDX components
export const mdxComponents = {
  img: SupabaseImage,
  // Add other custom components here
};
