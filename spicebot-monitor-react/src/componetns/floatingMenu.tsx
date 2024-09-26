import { House, Leaf, Settings } from "lucide-react";

export default function FloatingMenu() {
  return (
    <div
      className="card scale-150 flex items-center justify-evenly fixed p-3 rounded-[50px] bottom-8 left-[50%] translate-x-[-50%]"
      style={{
        backgroundColor: "#e7e7e7",
      }}
    >
      <div className="flex flex-col justify-center items-center gap-2 px-1">
        <Leaf size={30} />

        <hr className="hover-btn" />
      </div>

      <div className="flex flex-col justify-center items-center gap-2 px-1">
        <House size={30} />

        <hr className="sign-btn" />
      </div>

      <div className="flex flex-col justify-center items-center gap-2 px-1">
        <Settings size={30} />

        <hr className="hover-btn" />
      </div>
    </div>
  );
}
