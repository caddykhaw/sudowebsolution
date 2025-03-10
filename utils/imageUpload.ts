import { v4 as uuidv4 } from "uuid";
import { supabase } from "./supabase";

interface ImageData {
  path: string;
  url: string;
}

export const uploadImageToSupabase = async (
  file: File,
  bucketName = "images"
): Promise<ImageData> => {
  if (!file) {
    throw new Error("No file provided");
  }

  // Get folder path from env variables with fallback
  const uploadFolder = process.env.NEXT_PUBLIC_UPLOAD_FOLDER || "2025";

  // Create a unique file name
  const fileExt = file.name.split(".").pop();
  const fileName = `${uuidv4()}.${fileExt}`;
  const filePath = `${uploadFolder}/${fileName}`;

  // Upload file to Supabase
  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    throw error;
  }

  // Get public URL
  const {
    data: { publicUrl },
  } = supabase.storage.from(bucketName).getPublicUrl(filePath);

  return { path: filePath, url: publicUrl };
};
