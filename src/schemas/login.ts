import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const useForm = <TValues>(
  schema: z.Schema<TValues>,
  onSubmit: (values: TValues) => void
) => {
  return (values: unknown) => {
    const parsedValues = schema.parse(values);
    onSubmit(parsedValues);
  };
};

const form = useForm(loginSchema, (values) => {
  console.log(values);
});
