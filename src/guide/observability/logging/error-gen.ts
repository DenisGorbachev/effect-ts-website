import { Effect, Either } from "effect"

const task = Effect.fail("Oh uh!").pipe(Effect.as(2))

const program = Effect.gen(function* (_) {
  const failureOrSuccess = yield* _(Effect.either(task))
  if (Either.isLeft(failureOrSuccess)) {
    yield* _(Effect.logError(failureOrSuccess.left))
    return 0
  } else {
    return failureOrSuccess.right
  }
})

Effect.runPromise(program)
/*
Output:
... level=ERROR fiber=#0 message="Oh uh!"
*/
