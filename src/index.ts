export class Result<T> {
	private readonly isAFail: boolean;
	public readonly value: T | Error | null;

	private constructor(value: T | Error | null) {
		this.isAFail = value instanceof Error;
		this.value = value;
	}

	public static ok<C = null>(content: Exclude<C, Error> | null = null): Result<C> {
		return new Result<C>(content);
	}

	public static failure<E extends Error>(reason: E): Result<E> {
		return new Result<E>(reason);
	}

	public get isFailure(): boolean {
		return this.isAFail;
	}
}
