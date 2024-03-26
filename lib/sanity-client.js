import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  apiVersion: "2023-05-03",
  dataset: "production",
  projectId: "8i5crldj",
  useCdn: false,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}