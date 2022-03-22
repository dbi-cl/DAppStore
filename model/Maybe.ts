export type Just<A> = { type: "Just"; value: A };
export type Nothing = { type: "Nothing" };
export type Maybe<A> = Just<A> | Nothing;

export const nothing: Nothing = Object.seal({ type: "Nothing" });
export const just = <A>(value: A): Just<A> => ({ type: "Just", value });
export const isNothing = <A>(m: Maybe<A>) =>
  m === nothing || m.type === "Nothing";
export const fromJSON = <A>(m: any): Maybe<A> =>
  m?.type === "Just" ? just(m?.value as A) : nothing;
