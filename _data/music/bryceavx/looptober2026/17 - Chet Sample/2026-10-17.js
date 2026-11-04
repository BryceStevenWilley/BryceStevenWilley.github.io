// @title Looptober 17 - Chet Sample
// @by bryce.avx
set(120/4)

samples('github:BryceStevenWilley/bryce.avx.samples')

$: s("chet").speed(2.18).cut(0)
  .scrub(`<[0.18 1 2.2 3 2.3 3 7 3]!2
           [0.18 1 0.18 0.18 2.3 2.3 7 3]!2
           [5 22.2 [27 27 27] 22.2]!4>`.div(32))
  .hpf("500").gain("1.6").lpf("5000")
  ._spectrum({width: 400, height:100})
$: note(`<[[c3,eb3,g3,bb3]!2 [c3,eb3,f3,ab3]!2]!4
          [[bb2,db3,f3,bb3] [a2,db3,f3,a3]
           [ab2,db3,f3,ab3] [a2,db3,f3,a3]]!4>`)
  .struct("[~ ~ x x? ~ ~]*4")
  .trans("12")
  .dec("<0.3!4 0.6!4>")
  .s("piano")
  ._punchcard()
$: note(`<[c2 d2 eb2 f2 g2 ab2 g2 eb2]!4
          [c2 b1 bb1 a1 ab1 a1 bb1 b1]!4>`)
  .s("gm_acoustic_bass")
  ._punchcard()

$: stack(
  s("bd *4"),
  s("[rd [rd ~ rd]]*4").n("1").lfo({r: 0.3, c: 'gain'}),
  s("[~ sd] * 4").n("3")
).bank("bossdr550").gain(0.6)
