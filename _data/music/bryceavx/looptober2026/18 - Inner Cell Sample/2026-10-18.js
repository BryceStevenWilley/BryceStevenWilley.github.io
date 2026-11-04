// @title Looptober 18 - Inner Cell Sample
// @by bryce.avx
set(120/4)

samples('github:BryceStevenWilley/bryce.avx.samples')

$: note("[c2,c4] [g4 [d4,d2]] eb4 [db4]")
  .trans("<0!4 12!4>")
  .struct("[x - x x - x x -]".fast("<1!4 2!4>"))
  .s("rock")
  .lpf("4000")
  .room("<0.5!4 1!4>")

$: note("<[c4 [- eb4] g4(3,8) _] [f4(3,8) db4(3,8)]>")
  .s("rock3")
  .cut(0)
  .lpf(6000)
  .dec("6")
  .mask("<0!4 1!4>")

$: note(`<-!4 [{g4 eb4 d4}%16]!4>`)
  .s("gm_overdriven_guitar")
  .chebyshev("2:0.24")
  .release("0.05")
  .mask("<0!12 1!4>")

$: stack(
  s("hh*8"),
  s("[[lt lt] ht] * 4").mask("<1!4 0!4>"),
  s("bd * 2").mask("<0!4 1!4>"),
  s("[[- - - sd] [- sd]]*2").mask("<0!4 1!4>"),
  s("[- cr - cr]*2").mask("<0!4 1!4>").gain(0.5)
).bank("tr909")

await initHydra({numOutputs: 4});

osc(10, 0.1, 0.02)
  .add(noise(H("<1!4 6!4>"), 0.2, 0.1))
  .colorama(H("<0!4 1!4>"))
  .diff(src(o0).scale(0.9).rotate(0.1)).out(o0);

