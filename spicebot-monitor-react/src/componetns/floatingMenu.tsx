import { House, Leaf, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function FloatingMenu({ index }: { index: "plants" | "home" }) {
  return (
    <div
      className="card scale-150 flex items-center justify-evenly fixed p-3 rounded-[50px] bottom-8 left-[50%] translate-x-[-50%]"
      style={{
        backgroundColor: "#e7e7e7",
      }}
    >
      <Link to={"/plants"}>
        <div className="flex flex-col justify-center items-center gap-2 px-1">
          <Leaf size={30} />

          <hr className={index === "plants" ? "sign-btn" : "hover-btn"} />
        </div>
      </Link>

      <Link to={"/"}>
        <div className="flex flex-col justify-center items-center gap-2 px-1">
          <House size={30} />

          <hr className={index === "home" ? "sign-btn" : "hover-btn"} />
        </div>
      </Link>

      <div className="flex flex-col justify-center items-center gap-2 px-1">
        <Settings size={30} />

        <hr className="hover-btn" />
      </div>
    </div>
  );
}
