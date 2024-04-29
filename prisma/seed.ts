import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../apps/core/src/helpers/password-helpers";

async function seed() {
  const dataSource = new PrismaClient();

  await dataSource.$connect();

  const payload = {
    password: await hashPassword("init"),
    username: "admin",
    role: "admin",
  } as const;

  await dataSource.user.upsert({
    create: payload,
    update: payload,
    where: {
      username_role: {
        username: payload.username,
        role: "admin",
      },
    },
  });

  await dataSource.$disconnect();
}

seed().catch(console.error);
