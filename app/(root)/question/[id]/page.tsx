import { getQuestionById } from "@/lib/actions/question.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Matric from "@/components/shared/Matric";
import { getTimestamp, formatAndDivideNumber } from "@/lib/utils";
import ParseHTML from "@/components/shared/ParseHTML";

const Page = async ({
  params,
  searchParams,
}: {
  params: any;
  searchParams: string;
}) => {
  const result = await getQuestionById({ questionId: params.id });

  return (
    <>
      <div className="flex-start w-full flex-col">
        <div className="flex w-full flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
          <Link
            href={`/profile/${result.author.clerkId}`}
            className="flex items-center justify-start gap-1"
          >
            <Image
              src={result.author.picture}
              alt="user"
              width={12}
              height={12}
            />
            <p className="paragraph-semibold text-dark300_light700">
              {result.author.name}
            </p>
          </Link>
          <div className="flex justify-center">voting</div>
        </div>
        <h2 className="h2-semibold text-dark200_light900 mt-3.5 w-full text-left">
          {result.title}
        </h2>
      </div>
      <div className="mb-8 mt-5 flex flex-wrap gap-4">
        <Matric
          imgUrl="/assets/icons/clock.svg"
          alt="clock icon"
          value={` asked ${getTimestamp(result.createdAt)}`}
          title=" Asked"
          textStyles="small-medium text-dark400_light800"
        />
        <Matric
          imgUrl="/assets/icons/message.svg"
          alt="message"
          value={result.answers.length}
          title=" Answers"
          textStyles="small-medium text-dark400_light800"
        />
        <Matric
          imgUrl="/assets/icons/eye.svg"
          alt="eys"
          value={formatAndDivideNumber(result.views)}
          title=" Views"
          textStyles="small-medium text-dark400_light800"
        />
      </div>
      <ParseHTML data={result.content} />
    </>
  );
};

export default Page;
