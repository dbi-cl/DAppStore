export type Just<A> = { type: "Just"; value: A };
export type Nothing = { type: "Nothing" };
export type Maybe<A> = Just<A> | Nothing;

export const nothing: Nothing = Object.seal({ type: "Nothing" });
export const just = <A>(value: A): Just<A> => ({ type: "Just", value });
export const isNothing = <A>(m: Maybe<A>): m is Nothing =>
  m === nothing || m.type === "Nothing";
export const fromJSON = <A>(m: any): Maybe<A> =>
  m?.type === "Just" ? just(m?.value as A) : nothing;

export const zip = <R extends Record<string, any>>(rec: {
  [K in keyof R]: Maybe<R[K]>;
}): Maybe<R> =>
  Object.keys(rec).reduce((acc: Maybe<R>, key: keyof R) => {
    if (isNothing(acc)) return nothing;
    const v = rec[key];
    if (isNothing(v)) return nothing;
    acc.value[key] = v.value;
    return acc;
  }, just({} as R));
