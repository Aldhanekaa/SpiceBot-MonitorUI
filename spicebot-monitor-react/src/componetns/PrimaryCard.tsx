import { CalendarCheck2, LucideIcon } from "lucide-react";
import { ReactElement } from "react";

export default function PrimaryCard({
  children,
  title,
  Icon,
  overlay,
}: {
  title: string;
  Icon: LucideIcon;
  children: ReactElement;
  overlay?: boolean;
}) {
  return (
    <div
      className="schedules snap-center min-w-[calc(calc(100vw/3)-38px)] overflow-hidden flex flex-col justify-between"
      style={{
        backgroundColor: "#ffab40",
        borderRadius: "0px 0px 50px 0px",
        textAlign: "center",
        boxShadow: " 0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="schedules-btn p-5 pb-3">
        <div className="flex w-full">
          <div className="flex items-center gap-2">
            <Icon /> <h2 className="ml-10 text-xl">{title}</h2>
          </div>
        </div>
      </div>

      <div
        className={`pb-4 ${
          overlay !== undefined && overlay === true ? "bg-[#FFD189]" : ""
        } relative h-full`}
      >
        {children}
      </div>
    </div>
  );
}
