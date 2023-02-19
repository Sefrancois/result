import { expect } from "@sefr/test";
import { Result } from "../src";

describe("Result", () => {
	context("When you return a successful Result with a value", () => {
		it("returns a successful result with returning value", () => {
			// When
			const actual = Result.ok({ id: "9", message: "It's alright" });

			// Then
			expect(actual.isFailure).to.equal(false);
			expect(actual.value).to.deep.equal({ id: "9", message: "It's alright" });
		});
	});

	context("When you return a successful Result without any value", () => {
		it("returns a successful empty result", () => {
			// When
			const actual = Result.ok();

			// Then
			expect(actual.isFailure).to.equal(false);
			expect(actual.value).to.equal(null);
		});
	});

	context("When you return a failed Result with a reason", () => {
		it("returns a failed result with the reason", () => {
			// When
			const actual = Result.failure(new SomeCustomError(4, "Oops! Something went wrong ! :'("));

			// Then
			expect(actual.isFailure).to.equal(true);
			expect(actual.value).to.deep.equal(new SomeCustomError(4, "Oops! Something went wrong ! :'("));
		});
	});
});

class SomeCustomError extends Error {
	constructor(public readonly idError: number, message: string) {
		super(message);
	}
}
