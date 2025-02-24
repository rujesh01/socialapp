"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const DeleteUser = async (userId: string) => {
  try {
    await prisma.user.delete({
      where: {
        id: userId,
      },
    });
    
    revalidatePath("/admin/users");
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};