/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import Link from "next/link";
import styles from "@/styles/post.module.css";
import Text from "./text";
import { motion } from 'framer-motion';


import {
  FiFileText,
  FiCode,
  FiList,
  FiImage,
  FiLink,
  FiCheckSquare,
  FiChevronRight,
  FiTable,
  FiYoutube,
  FiFolder,
} from "react-icons/fi";

export function renderBlock(block, index) {
  const { type, id } = block;
  const value = block[type];

  if (!value) return null;
  const commonClasses = "my-4 p-4 rounded-lg shadow-md";

  switch (type) {
    case "paragraph":
      return (
        <div key={id} className={`my-4 rounded-3xl bg-white   p-4`}>
          {/* <FiFileText className="inline-block mr-2 text-blue-500" /> */}
          <p className="inline text-base font-normal text-gray-700 leading-relaxed">
            <Text title={value.rich_text} />
          </p>
        </div>
      );
    case "code":
      return (
        <div key={id} className="my-4 overflow-hidden rounded-3xl">
          <div className="flex items-center bg-gray-800 px-4 py-4 text-gray-300">
            <FiCode className="mr-2   text-green-400" />
            <span className="font-mono text-sm">code</span>
          </div>
          <pre className="overflow-x-auto bg-gray-900 p-4">
            <code className="font-mono text-sm text-white leading-relaxed">
              {value.rich_text[0].plain_text}
            </code>
          </pre>
        </div>
      );
    case "heading_1":
      return (
        <h1
          key={id}
          className="my-6 border-b-2 border-blue-500 pb-2 text-4xl font-bold text-gray-900"
        >
          <Text title={value.rich_text} />
        </h1>
      );
    case "heading_2":
      return (
        <div
          key={id}
          className="my-5 rounded-md border-l-4 border-gray-400 bg-gray-50 p-6 shadow-sm"
        >
          <h2 className="text-3xl font-bold  leading-snug text-gray-800 lg:text-xl">
            <Text title={value.rich_text} />
          </h2>
        </div>
      );

    case "heading_3":
      return (
        <h3 key={id} className="my-4 text-2xl font-semibold  leading-snug text-gray-800">
          <Text title={value.rich_text} />
        </h3>
      );
    case "bulleted_list":
      const ListIcon = type === "bulleted_list" ? FiList : null; // Optional Icon
      return (
        <ul key={id} className="space-y-4 text-base font-normal text-gray-700 leading-relaxed">
          {value.children?.map((child, index) => (
            <li key={`${id}-${index}`} className="flex">
              <div className="flex w-full items-start rounded-3xl  bg-gray-50 bg-opacity-70 p-4 s ">
                {/* Optional List Icon */}
                <span className="mr-4 inline-block flex h-6 w-6 items-center justify-center rounded-full   text-black">
                  {ListIcon ? <ListIcon className="hquote-4 w-4" /> : "•"}
                </span>

                {/* Content Block */}
                <div className="w-full text-gray-700">
                  {renderBlock(child, index)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      );

    case "numbered_list":
      return (
        <ol key={id} className="space-y-4 text-base font-normal text-gray-700 leading-relaxed">
          {value.children?.map((child, index) => (
            <Fragment key={`${id}-${index}`}>
              <li className="flex items-start rounded-3xl bg-gray-50 bg-opacity-70 p-4">
                <span className="mr-4 inline-block flex h-8  w-8 items-center justify-center rounded-full    text-black">
                  {index + 1}
                </span>
                <div>{renderBlock(child, index)}</div>
              </li>
            </Fragment>
          ))}
        </ol>
      );

    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li key={`${id}-${index}`} className="mb-2 text-base  font-normal lg:text-base">
          <Text title={value.rich_text} />
          {!!value.children && renderNestedList(block)}
        </li>
      );
    case "quote":
      return (
        <blockquote
          key={id}
          className="my-4 border-l-4 text-lg border-gray-600 font-medium bg-stone-50 py-4 pl-4  leading-relaxed italic"
        >
          {value.rich_text[0].plain_text}
        </blockquote>
      );

    case "image": {
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure key={id} className="my-6 rounded-3xl shadow ">
          <img src={src} alt={caption} className=" h-auto" />
          {caption && (
            <figcaption className="mt-2 text-center text-gray-600">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    }
    case "divider":
      return <hr key={id} className="my-6 border-gray-300" />;
    case "file": {
      const srcFile =
        value.type === "external" ? value.external.url : value.file.url;
      const fileName = srcFile.split("/").pop().split("?")[0];
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure key={id} className="my-4">
          <div className="rounded-lg bg-gray-100 p-3">
            <Link href={srcFile}>
              <a className="text-blue-600 hover:underline">{fileName}</a>
            </Link>
          </div>
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    }
    case "bookmark":
      return (
        <a
          key={id}
          href={value.url}
          target="_blank"
          rel="noreferrer noopener"
          className="my-2 block text-blue-600 underline"
        >
          {value.url}
        </a>
      );
    case "to_do":
      return (
        <div key={id} className="my-2 flex items-center">
          <input
            type="checkbox"
            id={id}
            defaultChecked={value.checked}
            className="mr-2"
          />
          <label htmlFor={id} className="text-base lg:text-base">
            <Text title={value.rich_text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details key={id} className="my-4">
          <summary className="cursor-pointer text-base lg:text-base">
            <Text title={value.rich_text} />
          </summary>
          {block.children?.map((child, index) => (
            <Fragment key={`${id}-${index}`}>{renderBlock(child)}</Fragment>
          ))}
        </details>
      );
    case "table":
      return (
        <table key={id} className="my-4 w-full table-auto border-collapse">
          <tbody>
            {block.children?.map((child, rowIndex) => (
              <tr
                key={`${id}-${rowIndex}`}
                className={rowIndex % 2 === 0 ? "bg-gray-50" : ""}
              >
                {child.table_row?.cells?.map((cell, colIndex) => (
                  <td key={`${id}-${colIndex}`} className="border px-4 py-2">
                    <Text title={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    case "video":
      return <YoutubeIframeView key={id} url={value.external.url} />;
    case "child_page":
      return (
        <div key={id} className="my-4 rounded-md bg-gray-100 p-4">
          <strong>{value?.title}</strong>
          {block.children?.map((child, index) => (
            <Fragment key={`${id}-${index}`}>{renderBlock(child)}</Fragment>
          ))}
        </div>
      );
    case "column_list":
      return (
        <div key={id} className="flex flex-wrap">
          {block.children?.map((childBlock, index) => (
            <Fragment key={`${id}-${index}`}>
              {renderBlock(childBlock, index)}
            </Fragment>
          ))}
        </div>
      );
    case "column":
      return (
        <div key={id} className="w-full px-4 lg:w-1/2">
          {block.children.map((child, index) => renderBlock(child, index))}
        </div>
      );

      case "link":
        return (
          <a
            key={id}
            href={value.url}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            {value.rich_text[0]?.plain_text || value.url}
          </a>
        );
    default:
      return (
        <div key={id} className="my-4 text-red-500">
          ❌ Unsupported block type: {type}
        </div>
      );
  }
}

export function renderNestedList(blocks) {
  const { type, id } = blocks;
  const value = blocks[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === "numbered_list_item";

  if (isNumberedList) {
    return (
      <ol key={id} className="list-decimal pl-6">
        {value.children.map((block, index) => (
          <Fragment key={`${id}-${index}`}>
            {renderBlock(block, index)}
          </Fragment>
        ))}
      </ol>
    );
  }
  return (
    <ul key={id} className="list-disc pl-6">
      {value.children.map((block, index) => (
        <Fragment key={`${id}-${index}`}>{renderBlock(block, index)}</Fragment>
      ))}
    </ul>
  );
}

const YoutubeIframeView = ({ url }) => (
  <div className="youtube-embed mb-6">
    <iframe
      src={url}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);
