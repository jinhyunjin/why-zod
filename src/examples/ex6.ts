import { z } from "zod";

const schema = z.string().catch("fallback");

console.log(schema.parse("123")); // "123"
console.log(schema.parse(123)); // "123"
console.log(schema.parse(null)); // "fallback"
