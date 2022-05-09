import { PrismaClient } from "@prisma/client";
import { SocketResponseType } from "../../types";
const prisma = new PrismaClient();

export const addPackagingCount = async (
  id: string
): Promise<SocketResponseType> => {
  try {
    if (!id) return { success: false, data: null };

    const item = await prisma.packagingItem.findFirst({ where: { id } });
    if (!item) return { success: false, data: null };

    await prisma.packagingRegister.create({
      data: {
        location: "Test Location",
        packagingItemId: id,
      },
    });

    const totalItemsCount = await prisma.packagingRegister.count();
    const itemCount = await prisma.packagingRegister.count({
      where: { packagingItemId: id },
    });

    return { success: true, data: { item, totalItemsCount, itemCount } };
  } catch (error: unknown) {
    return { success: false, data: null };
  }
};
