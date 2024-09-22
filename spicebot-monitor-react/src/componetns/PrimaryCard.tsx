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
    <div className="schedules box ">
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
