import BlogButton from "../buttons/BlogButton";
import Datebanner from "../components/DateBanner";
const BlogCards = ({ data, type }) => {
  return (
    <>
      <div
        className={`relative ${
          type === "bigCard" ? "flex-col" : "flex"
        } group border-[1px] h-full border-gray-200`}
      >
        <div className="overflow-hidden ">
          <img
            src={data.image}
            alt=""
            className={`group-hover:scale-105 transition-transform duration-500  object-cover ${
              type === "bigCard" ? "h-[20rem] lg:h-[22rem] xl:h-[20rem] w-full" : "h-[20rem] lg:h-[22rem] xl:h-[20rem]"
            }`}
          />
        </div>
        <Datebanner date={data.date} />
        <div className={ `${type === "bigCard" ? " w-full flex flex-col gap-4 py-4 lg:py-10 justify-center lg:justify-around lg:gap-0 h-[22rem]" : "w-full flex flex-col gap-4 py-8 justify-center"}`}>
          <h2 className=" cursor-pointer px-4 text-2xl lg:text-lg xl:text-xl hover:text-darkBlue leading-6">
            {data.title}
          </h2>
          <p className="text-[18px] lg:text-base xl:text-lg px-4 font-normal text-gray-500">
            {data.subtitle}
          </p>
          <BlogButton />
        </div>
      </div>
    </>
  );
};
export default BlogCards;
