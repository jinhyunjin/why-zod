// transformers

import { z } from "zod";

// 스키마 정의
const exampleSchema = z.object({
  trimmed: z.string().trim(),
  lowerCased: z.string().toLowerCase(),
  upperCased: z.string().toUpperCase(),
});

// 데이터 변환
const output = exampleSchema.parse({
  trimmed: " Hello, Zod! ",
  lowerCased: "Hello, Zod!",
  upperCased: "Hello, Zod!",
});

// {
//   trimmed: 'Hello, Zod!',
//   lowerCased: 'hello, zod!',
//   upperCased: 'HELLO, ZOD!'
// }

// 스키마 정의
const idSchema = z
  .string()
  .or(z.number())
  .transform((id) => (typeof id === "number" ? String(id) : id));

// 데이터 변환
const id = idSchema.parse(1);
