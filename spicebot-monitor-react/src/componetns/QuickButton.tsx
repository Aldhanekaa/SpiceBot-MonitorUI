export default function QuickButton({
  children,
  link,
}: {
  children: string;
  link?: string;
}) {
  return (
    <div className="whitespace-nowrap scroll-snap-start border-solid pl-3 pr-5 border-gray-700 w-60 border-[1px] py-2 rounded-lg">
      {children}
    </div>
  );
}
