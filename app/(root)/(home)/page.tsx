import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filter";
import Link from "next/link";

const questions = [
  {
    _id: "q1",
    title: "How to Build a Personal Website?",
    tags: [
      { _id: "tag1", name: "Web Development" },
      { _id: "tag2", name: "Personal Branding" },
    ],
    author: {
      _id: "author1",
      name: "Alice Johnson",
      picture: "alice-johnson.jpg",
    },
    upvotes: 28,
    views: 120,
    answers: [
      {
        answerId: "a1",
        text: "You can use HTML, CSS, and JavaScript for your website.",
      },
      {
        answerId: "a2",
        text: "Consider using a website builder for a quick start.",
      },
    ],
    createdAt: new Date("2023-03-10"),
  },
  {
    _id: "q2",
    title: "Best Practices for Mobile App Design",
    tags: [
      { _id: "tag3", name: "Mobile App Development" },
      { _id: "tag4", name: "User Experience" },
    ],
    author: {
      _id: "author2",
      name: "Bob Smith",
      picture: "bob-smith.jpg",
    },
    upvotes: 42,
    views: 150,
    answers: [
      {
        answerId: "a3",
        text: "Focus on intuitive navigation and user-friendly interfaces.",
      },
      {
        answerId: "a4",
        text: "Test your app on multiple devices for compatibility.",
      },
    ],
    createdAt: new Date("2023-03-15"),
  },
];

// Now, the 'questions' array contains the two sample question objects.

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for question"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              answers={question.answers}
              author={question.author}
              createdAt={question.createdAt}
              upvotes={question.upvotes}
              views={question.views}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
