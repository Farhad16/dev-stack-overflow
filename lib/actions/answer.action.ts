import Answer from "@/database/answer.model";
import { connectToDatabase } from "../mongoose";
import { CreateAnswerParams } from "./shared";

export async function createAnswer(params: CreateAnswerParams) {
  const { content, author, question, path } = params;

  try {
    connectToDatabase();

    const tags = await Answer.create({});

    return { tags };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
