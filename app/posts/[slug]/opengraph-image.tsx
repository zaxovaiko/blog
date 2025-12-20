import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/posts";

export const runtime = "edge";
export const alt = "Blog post";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          padding: "80px",
        }}
      >
        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            maxWidth: "90%",
          }}
        >
          {post?.title || "Blog Post"}
        </div>

        {/* Branding footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: 36,
              color: "#2dd4bf",
              fontWeight: 700,
            }}
          >
            zaxovaiko.me
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#71717a",
            }}
          >
            by Volodymyr Zakhovaiko
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
