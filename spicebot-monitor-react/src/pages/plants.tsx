import {
  CalendarCheck2,
  Droplet,
  House,
  Leaf,
  Settings,
  Sparkles,
  Sprout,
  SquareChevronRight,
  SunSnow,
  Wind,
} from "lucide-react";
import "./home.css";
import QuickButton from "../componetns/QuickButton";
import PrimaryCard from "../componetns/PrimaryCard";
import FloatingMenu from "../componetns/floatingMenu";
export default function PlantsPage() {
  return (
    <>
      <div className=" w-screen h-screen">
        <header className=" w-screen relative pt-20 pb-36 ">
          <div className="absolute w-[90%] h-72 top-0 -z-10 bg-sky-400 rounded-ee-[100px]"></div>
          <div className="px-10">
            <div className="top-text">
              <h3 className="text-xl">Welcome, User</h3>
              <h1 className="text-3xl">Spicebot Plants Control Panel</h1>
            </div>
          </div>
        </header>

        <div className="w-full">
          <div className="flex px-8 mt-[-115px] snap-x overflow-x-scroll gap-6 pb-2">
            <PrimaryCard overlay title="Temperature Measure" Icon={SunSnow}>
              <div className="text-start pl-5 pt-4">
                <div className="border-l-4 rounded-sm border-gray-900 pl-4">
                  <h4 className="text-xl">Temperature Level</h4>
                  <span className="text-3xl font-black">
                    30° C /{" "}
                    <span className=" text-lg">
                      86° <sup>F</sup>
                    </span>
                  </span>
                </div>
              </div>
            </PrimaryCard>

            <PrimaryCard overlay title="Humidity" Icon={Droplet}>
              <div className="text-start px-5 pt-4 flex gap-12 pb-3">
                <div className="border-l-4 rounded-sm border-gray-900 pl-4">
                  <h4 className="text-xl">Air</h4>
                  <span className="text-3xl font-black">40%</span>
                  <span className=" block">Dry</span>
                </div>
                <div className="border-l-4 rounded-sm border-gray-900 pl-4">
                  <h4 className="text-xl">Soil</h4>
                  <span className="text-3xl font-black">80%</span>
                  <span className=" block">Very Humid</span>
                </div>
              </div>
            </PrimaryCard>

            <PrimaryCard
              overlay
              title="NPK"
              Icon={Sprout}
              width="min-w-[calc(calc(100vw/2.2))]"
            >
              <div>
                <div className="text-start px-5 pt-4 flex gap-8">
                  <div className="border-l-4 rounded-sm border-gray-900 pl-4">
                    <h4 className="text-lg">Nitrogen</h4>
                    <span className="text-3xl font-black">
                      0 <span className="text-lg">mg/kg</span>
                    </span>
                  </div>
                  <div className="border-l-4 rounded-sm border-gray-900 pl-4">
                    <h4 className="text-lg">Phosphorus</h4>
                    <span className="text-3xl font-black">
                      5 <span className="text-lg">mg/kg</span>
                    </span>
                  </div>
                  <div className="border-l-4 rounded-sm border-gray-900 pl-4">
                    <h4 className="text-lg">Potassium</h4>
                    <span className="text-3xl font-black">
                      3 <span className="text-lg">mg/kg</span>
                    </span>{" "}
                  </div>
                </div>
              </div>
            </PrimaryCard>

            <PrimaryCard title="Gas Measure" Icon={CalendarCheck2}>
              <div className="text-start mt-2">Loading..</div>
            </PrimaryCard>
          </div>
        </div>

        <div className=" w-full px-8 flex flex-col mt-6">
          <h3>Plants</h3>
          <div className="w-full max-w-full overflow-auto"></div>
        </div>
        <FloatingMenu index="plants" />
      </div>
    </>
  );
}
