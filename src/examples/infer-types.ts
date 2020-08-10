export const obj = {
  name: 'John',
  age: 25,
  hasJob: false
}

type A<T> = T extends {
  [key: string]: infer U
} ? U : never;

type B = A<typeof obj>

// type C<T> = T extends keyof 