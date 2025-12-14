// this is implemented to avoid build errors during the CI processing

declare module 'validator' {
  export function escape(input: string): string;
}