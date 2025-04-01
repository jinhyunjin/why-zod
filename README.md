# [why-zod](https://zod.dev/)

[Zod.pdf](./zod.pdf)

- TypeScript-first schema declaration and validation library.
- Runtime library for validating values and shapes in TypeScript.
- Designed to be as developer-friendly as possible. The goal is to eliminate duplicative type declarations. With Zod, you declare a validator once and Zod will automatically infer the static TypeScript type. It's easy to compose simpler types into complex data structures.
- **Zod Schema is our Source Of Types.**

Some other great aspects:

- Zero dependencies
- Works in Node.js and all modern browsers
- Tiny: 8kb minified + zipped
- Immutable: methods (e.g. .optional()) return a new instance
- Concise, chainable interface
- Functional approach: parse, don't validate
- Works with plain JavaScript too! You don't need to use TypeScript.

Zod가 필요한 이유는?

외부에서 들어오는 객체의 타입에 대해 런타임에 명확한 검증을 할 때 타입 검증 및 값 검증 코드가 비즈니스 로직과 함께 들어간다.
이 코드는 외부에서 들어오는 객체의 검증이 필요한 모든 곳에 필요하다.
Zod는 Source Of Type으로 사용될 수 있고, 런타임에 외부에서 들어온 값을 검증하는 것을 쉽게 만들어준다.
