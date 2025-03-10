import React, { useState, ChangeEvent } from "react";
import { uploadImageToSupabase } from "@/utils/uploadImage";

interface ImageData {
  path: string;
  url: string;
}

interface ImageUploaderProps {
  onImageUploaded: (imageData: ImageData) => void;
  initialImage?: string | null;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  onImageUploaded,
  initialImage = null,
}) => {
  const [uploading, setUploading] = useState<boolean>(false);
  const [preview, setPreview] = useState<string | null>(initialImage);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      setError(null);

      const imageData = await uploadImageToSupabase(file);

      setPreview(imageData.url);
      onImageUploaded(imageData);
    } catch (err) {
      console.error("Upload error:", err);
      setError("Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Cover Image
      </label>

      <div className="flex items-center space-x-4">
        <label className="cursor-pointer px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
          {uploading ? "Uploading..." : "Choose Image"}
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
          />
        </label>

        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>

      {preview && (
        <div className="mt-4">
          <img
            src={preview}
            alt="Preview"
            className="h-40 w-auto object-cover rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
