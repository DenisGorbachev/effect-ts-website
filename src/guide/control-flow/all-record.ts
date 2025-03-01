import { Effect, Console } from "effect"

const record: Record<string, Effect.Effect<never, never, number>> = {
  key1: Effect.succeed(1).pipe(Effect.tap(Console.log)),
  key2: Effect.succeed(2).pipe(Effect.tap(Console.log))
}

// $ExpectType Effect<never, never, { [x: string]: number; }>
const combinedEffect = Effect.all(record)

Effect.runPromise(combinedEffect).then(console.log)
/*
Output:
1
2
{ key1: 1, key2: 2 }
*/
