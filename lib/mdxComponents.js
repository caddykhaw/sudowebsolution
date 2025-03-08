// lib/mdxComponents.js
import SupabaseImage from "@/components/SupabaseImage";
import Link from "next/link";

export const mdxComponents = {
  // Override the default img element with our custom component
  img: SupabaseImage,
  // You can add other custom components here
  a: (props) => <Link {...props} />,
};
