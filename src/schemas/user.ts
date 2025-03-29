import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  admin: z.boolean().default(false),
  role: z.enum(["admin", "user"]).default("user"),
  createdAt: z.date(),
  updatedAt: z.date().default(new Date()),
});

type User = z.infer<typeof userSchema>;

const testSafeUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  password: "password",
  admin: true,
  role: "admin",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const testUnsafeUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  password: "password",
  admin: true,
  role: "admin",
};

// 스키마 파싱에 성공한다면 User Type으로 추론됨
const validatedUser = userSchema.parse(testSafeUser);
console.log("safe", validatedUser);

// 실패 케이스 throw zod error
// const unsafeUser = userSchema.parse(testUnsafeUser);
// console.log("ussafe", unsafeUser);

const unsafeUser = userSchema.safeParse(testUnsafeUser);
console.log("unsafe", unsafeUser);
console.log(unsafeUser.error);

const numberArray = z.array(z.number());

const stringObject = z.record(z.string(), z.number());

type StringObject = z.infer<typeof stringObject>;
