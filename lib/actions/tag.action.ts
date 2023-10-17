"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetTopInteractedTagsParams } from "./shared";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();
    const { userId } = params;

    const user = await User.findById(userId);

    if (!user) {
      throw new Error(`User not found`);
    }

    return [
      { _id: "1", name: "HTML" },
      { _id: "2", name: "CSS" },
      { _id: "3", name: "JavaScript" },
    ];
  } catch (error) {
    console.log(error);
    throw error;
  }
}
