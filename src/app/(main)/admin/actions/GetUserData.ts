"use server";

import prisma from "@/lib/prisma";


export const GetUserData = async () => {
  const user = await prisma.user.findMany({});
    return user;
};

