import React from "react";
import TopSection from "../containers/TopSection";
import { data } from "../data/BlogReadingPageData";
import BlogReadingSection from "../components/BlogReadingSection";

const BlogReadingPage = () => {
  return (
    <main>
      <div className="box-border">
        <TopSection
          heading={data.title}
          links={data.links}
          image={data.writerImage}
          name={data.name}
          type={"reading"}
        />

        <div className="">
            <BlogReadingSection data={data.section1} type="section1" />
        </div>

        <div className="px-6 md:px-8 md:text-sm lg:px-20 lg:text-base">
            <p>{data.paragraph}</p>
        </div>

        <div className="">
            <BlogReadingSection data={data.section2} type={"section2"} />
        </div>

      </div>
    </main>
  );
};

export default BlogReadingPage;
