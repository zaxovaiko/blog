import type { MDXComponents } from "mdx/types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SQL_KEYWORDS =
  /\b(SELECT|FROM|WHERE|JOIN|INSERT|UPDATE|DELETE|GROUP BY|ORDER BY|LIMIT|OFFSET|VALUES|RETURNING|TABLE|INDEX|EXISTS|CREATE|ALTER|DROP|UNION|HAVING|LEFT|RIGHT|INNER|OUTER|ON|AS|COUNT|SUM|AVG|MIN|MAX|DISTINCT|VACUUM|ANALYZE|TRUNCATE|BEGIN|COMMIT|ROLLBACK|TRANSACTION|EXPLAIN)\b/i;

function guessInlineLanguage(text: string): string | null {
  if (text.length < 4) return null;
  if (SQL_KEYWORDS.test(text)) return "sql";
  // JS/TS: contains parens/braces/dots-with-camelCase, common keywords, arrows, etc.
  if (
    /[(){}=>;]|=>|\bawait\b|\bconst\b|\blet\b|\breturn\b|\bnew\b|\.[a-zA-Z]/.test(
      text,
    )
  ) {
    return "typescript";
  }
  // Bash: starts with $ or contains common shell verbs
  if (/^\$\s|^\s*(curl|cd|ls|cat|echo|export|cp|mv|rm)\b/.test(text)) {
    return "bash";
  }
  return null;
}

const LANGUAGE_ALIASES: Record<string, string> = {
  ts: "typescript",
  tsx: "typescript",
  js: "javascript",
  jsx: "javascript",
  sh: "bash",
  shell: "bash",
  zsh: "bash",
  yml: "yaml",
  md: "markdown",
  mdx: "markdown",
  py: "python",
  rb: "ruby",
  rs: "rust",
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    code: (props) => {
      const { className, children } = props;
      const raw = className?.replace(/language-/, "") || "";
      const language = LANGUAGE_ALIASES[raw] ?? raw;

      // Inline code (no language hint): best-effort highlight with auto-detect
      if (!className) {
        const text = String(children ?? "");
        const guessed = guessInlineLanguage(text);
        if (!guessed) return <code {...props} />;
        return (
          <SyntaxHighlighter
            language={guessed}
            style={darcula}
            PreTag="span"
            CodeTag="span"
            customStyle={{
              backgroundColor: "transparent",
              padding: 0,
              display: "inline",
              fontSize: "inherit",
            }}
          >
            {text}
          </SyntaxHighlighter>
        );
      }

      if (SyntaxHighlighter.supportedLanguages.indexOf(language) === -1) {
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
