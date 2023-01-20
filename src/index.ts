/**
 * Class implementing the operation result pattern.
 */
export class Result<T> {
	private readonly isAFail: boolean;
	/**
	 * Member containing the value of the operation result.
	 * @readonly
	 */
	public readonly value: T | Error | null;

	private constructor(value: T | Error | null) {
		this.isAFail = value instanceof Error;
		this.value = value;
	}

	/**
	 * Create a new instance of successful `Result` with the provided content as `value`. You cannot give an instance
	 * of `Error` as you are creating a successful `Result`.
	 * @static
	 * @template T
	 * @param {Exclude<T, Error>} content - Value of the successful `Result` you can use for your further instructions.
	 * @return {Result}
	 */
	public static ok<C = null>(content: Exclude<C, Error> | null = null): Result<C> {
		return new Result<C>(content);
	}

	/**
	 * Create a new instance of failed `Result` with the provided reason as `value`. You cannot give an instance other
	 * than on extending Error as you are creating a failed `Result`.
	 * @static
	 * @template E
	 * @param {E} reason - The reason why your code is failing. It must extend `Error` class.
	 * @returns {`Result<E>`} - An instance of `Result` containing the error you provided.
	 */
	public static failure<E extends Error>(reason: E): Result<E> {
		return new Result<E>(reason);
	}

	/**
	 * Indicates whether operation succeeded or failed.
	 * @returns {boolean} - Indicates whether a result is failed or not.
	 */
	public get isFailure(): boolean {
		return this.isAFail;
	}
}
