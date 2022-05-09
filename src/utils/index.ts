import { v4 as uuidv4 } from "uuid";

export const generatePackagingId = (): string => {
  return uuidv4().substring(4, 14);
};
