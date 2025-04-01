import { z } from "zod";

const schema = z.coerce.string();

console.log(schema.parse("123")); // "123"
console.log(schema.parse(123)); // "123"
console.log(schema.parse(true)); // "true"
console.log(schema.parse(false)); // "false"
console.log(schema.parse(null)); // "null"
console.log(schema.parse(undefined)); // "undefined"
console.log(schema.parse({})); // "[object Object]"
