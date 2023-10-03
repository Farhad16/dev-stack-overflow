import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const RightSidebar = () => {
  const hotQuestions = [
    { _id: 1, title: "Lorem ipsum dolor sit amet, consectetur adipiscing" },
    { _id: 2, title: "Lorem ipsum dolor sit amet, consectetur" },
    { _id: 3, title: "Lorem ipsum dolor sit amet, conse" },
    { _id: 4, title: "Lorem ipsum dolor sit amet, consectetur adipiscing" },
    { _id: 5, title: "Lorem ipsum dolor sit amet, adipiscing" },
  ];

  const popularTags = [
    { _id: 6, name: "javascript", totalQuestions: 5 },
    { _id: 1, name: "react", totalQuestions: 25 },
    { _id: 5, name: "python", totalQuestions: 33 },
    { _id: 6, name: "typescript", totalQuestions: 33 },
    { _id: 5, name: "react", totalQuestions: 29 },
  ];

  return (
    <section className="custom-scrollbar background-light900_dark200 light-border fixed right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden w-[350px]">
      <div>
        <h3 className="h3-bold text-dark200_light900"> Top Question</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/question/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Top Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
