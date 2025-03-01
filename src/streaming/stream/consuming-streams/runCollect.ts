import { Stream, Effect } from "effect"

const stream = Stream.make(1, 2, 3, 4, 5)

// $ExpectType Effect<never, never, Chunk<number>>
const collectedData = Stream.runCollect(stream)

Effect.runPromise(collectedData).then(console.log)
/*
Output:
{
  _id: "Chunk",
  values: [ 1, 2, 3, 4, 5 ]
}
*/
