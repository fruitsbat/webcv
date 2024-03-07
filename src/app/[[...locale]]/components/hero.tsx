import AboutMe from "./aboutMe";
import Avatar from "./avatar";
import NavigationButtons from "./navigationButtons";

export default function Hero() {
  return (
    <div className="p-6 xl:p-24">
      <div className="flex items-center gap-6 xl:gap-24">
        <div className="w-32 flex-initial sm:w-64">
          <Avatar />
        </div>
        <div className="flex w-5/6 flex-col gap-4">
          <AboutMe />
          <div className="hidden md:block">
          <NavigationButtons />
          </div>
        </div>
        <div className="col-span-7"></div>
      </div>
      <div className="md:hidden p-6">
        <NavigationButtons />
      </div>
    </div>
  );
}
