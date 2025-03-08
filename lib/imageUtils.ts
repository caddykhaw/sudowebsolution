// lib/imageUtils.js
import { supabase } from "./supabaseClient";

/**
 * Generates a signed URL for accessing images in the blog images bucket
 * @param {string} imagePath - The path to the image within the bucket
 * @param {number} expiresIn - Time in seconds until the URL expires (default: 60 minutes)
 * @returns {Promise<string|null>} - The signed URL or null if there was an error
 */
export async function getBlogImageUrl(imagePath, expiresIn = 3600) {
  try {
    const { data, error } = await supabase.storage
      .from("images") // Your bucket name
      .createSignedUrl(imagePath, expiresIn);

    if (error) {
      console.error("Error generating signed URL:", error);
      return null;
    }

    return data.signedUrl;
  } catch (err) {
    console.error("Unexpected error generating signed URL:", err);
    return null;
  }
}
