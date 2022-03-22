export type Err<E> = { type: "Err"; error: E };
export type Ok<V> = { type: "Ok"; value: V };
export type Result<V, E> = Ok<V> | Err<E>;

export const err = <E>(error: E): Err<E> => ({ type: "Err", error });
export const ok = <V>(value: V): Ok<V> => ({ type: "Ok", value });

export const isErr = <V, E>(r: Result<V, E>): r is Err<E> => r.type === "Err";
export const isOk = <V, E>(r: Result<V, E>): r is Ok<V> => r.type === "Ok";

export const fromJSON = <V, E>(obj: any): Result<V, E> =>
  obj?.type === "Ok" ? ok(obj?.value as V) : err(obj?.error as E);
