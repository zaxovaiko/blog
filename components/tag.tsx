export const Tag = ({ text }: { text: string }) => {
  return (
    <div className="bg-purple-400 rounded-full p-1 px-3 shadow-md">
      <h3 className="text-zinc-950 text-xs">{text}</h3>
    </div>
  );
};
