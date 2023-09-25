import { PrismaClient } from "@prisma/client";

const prima = new PrismaClient();

export function getPrisma() {
  return prima;
}
