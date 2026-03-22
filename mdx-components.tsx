import type { MDXComponents } from "mdx/types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { PostStats } from "@/components/posts/post-engagement";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => (
      <>
        <h1 {...props} />
        <PostStats />
      </>
    ),
    code: (props) => {
      const { className, children } = props;
      const language = className?.replace(/language-/, "") || "";
      if (
        !className ||
        SyntaxHighlighter.supportedLanguages.indexOf(language) === -1
      ) {
        return <code {...props} />;
      }
      return (
        <SyntaxHighlighter
          showLineNumbers
          language={language}
          customStyle={{
            backgroundColor: "transparent",
          }}
          style={darcula}
        >
          {children}
        </SyntaxHighlighter>
      );
    },
  };
}
