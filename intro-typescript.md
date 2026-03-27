# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.
It’s essentially JavaScript, but with enforced static typing to safeguard against unpredictable dynamic inputs. Unlike the primitive behavior of loosely typed variables, this approach ensures type safety, reducing runtime errors and making code more predictable and maintainable.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Demonstrates **type inference**, **explicit typing**, and what happens when assigning mismatched types.

Type inference - works by assigning value in variable, TypeScript auto assigns its type implicitly based on the default primitive of data.

Explicit typing - manually declaring the type using colon syntax after the variable name.

Type mismatch - when assigning a value type that doesn't match the declared or inferred type, TypeScript throws an error, making it invalid by default.

## 02-vanilla-js-types.js
Shows how JavaScript’s `typeof` operator works to check variable types at runtime.

typeof returns a string indicating the type of the operand.

When placed before a value or variable, typeof returns a string indicating the data type. This is evaluated when the code runs, not during the initial parsing.

## 03-flexible-types.ts
Illustrates the `any` type, allowing reassignment to different types and showing its flexibility (and risks).

any is a TypeScript type that disables type checking for a variable, allowing it to hold any JavaScript value - strings, numbers, booleans, objects, arrays, or functions - and be reassigned freely between different types without compiler errors.

Defeats TypeScript's purpose - eliminates the main benefit of using TypeScript

## 04-arrays-objects.ts
Covers arrays with union types, object typing with nested properties, and the `Record` type for flexible objects.

Arrays with union types – arrays that can hold multiple specific types, providing flexibility while maintaining type safety.

bject typing with nested properties – defining complex object shapes where properties can themselves be objects with their own type definitions.

Record type – a utility type that creates object types with consistent key-value pairs, useful for dictionaries or flexible structures.

## 05-enum.ts
Introduces enums, specifically string enums, and shows how to assign `enum` values properly.

TypeScript feature that allows you to define a set of named constants, making code more readable and self-documenting.

Each member must be initialized with a string or computed value

Useful when you need meaningful string values for serialization or logging.

## 06-alternative-to-enum.ts
This file demonstrates using union of string literal types as an alternative to TypeScript enums.

Instead of defining an enum, you directly list the allowed values as a union type.

his approach is often preferred in modern TypeScript because it keeps the type system lightweight without generating runtime JavaScript code

## 07-custom-type-role.ts
introduces type aliases custom types using the type keyword.

Type aliases allow you to create reusable, descriptive names for any type—whether primitive, union, object, or complex shape.

This improves code readability and maintainability.