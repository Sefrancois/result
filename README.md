# @sefr/result ✨

- [What does it do ?](#what-does-it-do--)
- [Compatibility](#compatibility-)
- [Dependencies](#dependencies-)
- [Installation](#installation-)
- [How to use](#how-to-use-)
- [Incorrect usages](#incorrect-usages-)
- [Credits](#credits-)
- [License](#license-)

## What does it do ? 💡

Provide a simple implementation of the Operation Result Pattern for TypeScript to avoid boilerplate code.

## Compatibility 🔧

| TypeScript | EcmaScript |
|------------|------------|
| \>= 2.8.0  | \>= ES2015 |

## Dependencies 🎱

This package is dependencies-free.

## Installation 💾

Nothing more than :

```shell
npm i -S @sefr/result
```

## How to use 📚

✅ Returning a success without content :

```typescript
import { Result } from "@sefr/result";

function doSomething(...args: Array<unknown>): Result<Error> {
    return Result.ok();
}

const toto: Result<Error> = doSomething();

if (toto.isFailure) {
	// do something...
}
```

✅ Returning a success with a string content :

```typescript
import { Result } from "@sefr/result";

function doSomething(...args: Array<unknown>): Result<string | Error> {
	return Result.ok("Operation successful !");
}

const toto: Result<string | Error> = doSomething();

if (toto.isFailure) {
	// do something...
} else {
	const titi = toto.value; // "Operation successful"
}
```

✅ Returning a failure with some custom error :

```typescript
import { Result } from "@sefr/result";

class SomeCustomError extends Error {
	constructor(public readonly someMoreInformation: Record<string, string>, message: string) {
		super(message);
	}
}

function doSomething(...args: Array<unknown>): Result<string | SomeCustomError> {
	return Result.failure(new SomeCustomError(
		{ id: "5", someMoreInfo: "stuff & co..." },
        "Oops! Something went wrong !"
    ));
}

const toto: Result<string | SomeCustomError> = doSomething();

if (toto.isFailure) {
	const titi = toto.value; // SomeCustomError
	// do something...
}
```

## Incorrect usages ❌

❌ Returning an error as successful operation is not allowed, TypeScript will not allow it :

```typescript
import { Result } from "@sefr/result";

function doSomething(...args: Array<unknown>): Result<string | Error> {
	return Result.ok(new Error("Operation successfull !"));
}
```

❌ Returning a failure without any reason (understand `Error`), TypeScript will also fail on build :

```typescript
import { Result } from "@sefr/result";

function doSomething(...args: Array<unknown>): Result<string | Error> {
	return Result.failure();
}
```

## Credits 📎

+ Developed with the awesome [TypeScript](https://www.typescriptlang.org/)
+ Tested with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/)
+ Code style enforced with [ESLint](https://eslint.org/) and [TypeScript-ESLint](https://typescript-eslint.io/)

## License 📜

This software is available under the MIT License. See the [LICENSE](LICENSE.md) file for more informations.

⬆️ [Go back to top](#sefrresult-)
