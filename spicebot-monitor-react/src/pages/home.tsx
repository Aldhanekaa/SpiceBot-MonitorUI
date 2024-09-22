import {
  CalendarCheck2,
  House,
  Leaf,
  Settings,
  Sparkles,
  SquareChevronRight,
} from "lucide-react";
import "./home.css";
import QuickButton from "../componetns/QuickButton";
import PrimaryCard from "../componetns/PrimaryCard";
export default function HomePage() {
  return (
    <>
      <div className=" w-screen h-screen">
        <header className=" w-screen relative pt-20 pb-36 ">
          <div className="absolute w-[90%] h-72 top-0 -z-10 bg-sky-400 rounded-ee-[100px]"></div>
          <div className="px-10">
            <div className="top-text">
              <h3 className="text-xl">Welcome, User</h3>
              <h1 className="text-3xl">Spicebot Control Panel</h1>
            </div>
          </div>
        </header>

        <div className="w-full">
          <div className="flex px-8 mt-[-115px] snap-x overflow-x-auto gap-6">
            <PrimaryCard title="Actions" Icon={SquareChevronRight}>
              <div>
                <a href="kalibrasi_axis_x.html" className="button">
                  Toggle Lights
                </a>
                <a href="kalibrasi_axis_y.html" className="button">
                  Toggle Water
                </a>
              </div>
            </PrimaryCard>

            <PrimaryCard title="Calibration" Icon={Sparkles}>
              <div>
                <div className="button">Calibrate X Axis</div>
                <div className="button">Calibrate Y Axis</div>
              </div>
            </PrimaryCard>

            <PrimaryCard title="Schedules" Icon={CalendarCheck2}>
              <div className="text-start mt-2">
                <p>Today, 8th February</p>
                <p className="time">09:50</p>
                <p className="description">
                  11 minutes again
                  <br />
                  Water all of the plants
                </p>
              </div>
            </PrimaryCard>
          </div>
        </div>

        <div className=" w-full px-8 flex flex-col mt-6">
          <h3>Quick Access Menu</h3>
          <div className="w-full max-w-full overflow-auto">
            <div className="mt-2 max-w-none flex snap-x overflow-x-auto snap-mandatory gap-3 relative">
              <QuickButton>Compact Analysis</QuickButton>
              <QuickButton>Connected Devices</QuickButton>
              <QuickButton>Camera Streaming</QuickButton>
              <QuickButton>Sensors</QuickButton>
            </div>
          </div>
        </div>
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
      </div>
    </>
  );
}
