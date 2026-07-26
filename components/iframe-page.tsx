type IframePageProps = {
  src: string;
  title: string;
  fullViewport?: boolean;
};

export function IframeEmbed({
  src,
  title,
  fullViewport = false,
}: IframePageProps) {
  return (
    <iframe
      src={src}
      title={title}
      className={
        fullViewport
          ? "block h-[100dvh] w-full border-0"
          : "block min-h-[80vh] w-full border-0"
      }
      allow="fullscreen; web-share; storage-access"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
}
