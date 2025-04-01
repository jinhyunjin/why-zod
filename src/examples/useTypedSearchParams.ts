import { useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";

/**
 * query param의 타입 안정성을 보장하기 위한 훅
 *
 * searchParams schema 예제
 * const searchParamsSchema = z.object({
 *   someText: z.coerce.string().optional(),
 *   someNumber: z.coerce.number().optional(),
 *   someBool: z.coerce.boolean().optional()
 * });
 */
// next 14이상에 맞게 변경필요

export const useTypedSearchParams = <T extends z.Schema>(schema: T) => {
  const searchParams = useSearchParams();

  return schema.parse(Object.fromEntries(searchParams.entries())) as z.infer<
    typeof schema
  >;
};

// export const useTypedRouter = <T extends z.Schema>(schema: T) => {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   return {
//     query: schema.parse(Object.fromEntries(searchParams.entries())) as z.infer<
//       typeof schema
//     >,
//     ...router,
//   };
// };
