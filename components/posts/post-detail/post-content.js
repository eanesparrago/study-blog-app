import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

import PostHeader from "./post-header";
import classes from "./post-content.module.css";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents = {
    p: (paragraph) => {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    code: (code) => {
      const { children, className } = code;
      const [, langauge] = className.split("-");

      return (
        <SyntaxHighlighter
          language={langauge}
          children={children}
          style={atomDark}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={post.title} />

      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
