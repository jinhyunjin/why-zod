import { z } from "zod";

const someInput = {
  userName: "hello",
  age: 17,
};

const inputSchema = z.object({
  userName: z.string(),
  age: z.number().min(1, "age must be greater than 0"),
});

const parseInput = (input: unknown) => {
  return inputSchema.parse(input);
};

// 검증 실행
// 스키마 파싱을 통과했을 때타입이 올바르게 나오는 것을 확인할 수 있음
const parsed = parseInput(someInput);
console.log("Parsed data:", parsed);

// 잘못된 데이터로 테스트
try {
  const invalidInput = {
    userName: 123, // 문자열이어야 하는데 숫자임
    age: 0, // 1보다 작음
  };
  parseInput(invalidInput);
} catch (error) {
  console.error("Validation error:", error);
}

const untyped: unknown = {};

// 방어로직 작성을 아래만큼 해야함

// if (
//   !untyped ||
//   !untyped.userName ||
//   typeof untyped.userName !== "string" ||
//   !untyped.age ||
//   typeof untyped.age !== "number"
// ) {
//   console.log("invalid input");
// }
