import { CalendarCheck2, LucideIcon } from "lucide-react";
import { ReactElement } from "react";

export default function PrimaryCard({
  children,
  title,
  Icon,
}: {
  title: string;
  Icon: LucideIcon;
  children: ReactElement;
}) {
  return (
    <div
      className="schedules"
      style={{
        backgroundColor: "#ffab40",
        padding: "20px",
        borderRadius: "0px 0px 50px 0px",
        width: "280px",
        textAlign: "center",
        boxShadow: " 0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="schedules-btn  ">
        <div className="flex w-full">
          <div className="flex items-center gap-2">
            <Icon /> <h2 className="ml-10 text-xl">{title}</h2>
          </div>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
