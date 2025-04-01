import { z } from "zod";

const pipeSchema = z
  .string()
  .transform((val) => val.length)
  .pipe(z.number().min(10, "length must be greater than 10"))
  .pipe(z.number().max(20, "length must be less than 20"));
const result = pipeSchema.parse("hello");

console.log(result);

const numberSchema = z
  .number()
  .min(10, "number must be greater than 10")
  .max(20, "number must be less than 20");

const pipeSchema2 = z
  .string()
  .transform((val) => val.length)
  .pipe(numberSchema);
