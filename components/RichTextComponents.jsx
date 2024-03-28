import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity-client";

export const RichTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="relative my-3">
          <Image
            className="object-contain h-auto mx-auto"
            width={1200}
            height={800}
            src={urlFor(value).url()}
            alt=""
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-4 my-4 list-disc font-light">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="ml-4 my-4 list-decimal font-light">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-5xl py-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl py-6">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-3xl py-4">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-2xl py-4">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-xl py-4">{children}</h5>
    ),
    normal: ({ children }) => (
      <p className="text-md font-light mb-2">{children}</p>
    ),
    h6: ({ children }) => (
      <p className="-mt-2 pb-5 text-center font-thin">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l pl-5 py-5 my-5 font-light">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link href={value.href} rel={rel}>
          <button className="text-neutral-500 hover:underline">{children}</button>
        </Link>
      );
    },
  },
};
