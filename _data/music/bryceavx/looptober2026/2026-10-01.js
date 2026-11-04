// @title Looptober 1: HEX Prelude
// @by bryce.avx
setcpm(100/8)
setScale("D:dorian")

samples('github:BryceStevenWilley/bryce.avx.samples')

$: s("tubularbells").gain(1.4)

$: chord("<Dm F G A7>").voicing().trans(-12).s("gm_voice_oohs:2").vib("4").vibmod("0.3")
$: n1("<1 3 2 7so>").sc()
  .jux(x => x.late(0.2).add(note("0.1")))
  .s("gm_pad_metallic:2")

$: stack(
  "[lt lt ~!13] [~ ht ht lt lt]",
).s().jux(rev).bank("viscospacedrum")
  .mask("<~!16 1!16>")

// Ending
$: n1("<[1 2 3 7so 1] [5 4 5@32] <[4 8 7s 7 6] [4,6 8 7s 7 6]> <[5 4s 7 10 9] [5,2 4s 7 10 9]>>")
  .sc().s("gm_church_organ:5").gain(0.5)
  .pdecay("<0.0!16 0.15!16>")
  .mask("<~!4 1!28>")

$: s("<mysterytheatre:2 ~>").speed("1 | 0.7 | 0.6 | -0.8").gain(2)
  .mask("<~!8 1!20 ~!4>")
  

await initScreamer();

runScreamer(String.raw`
fg= (1.0, 0.0, 0.0)
plane >y 0.3 +++ box'4 >y 5.5 +++ julia(sin(time))'2 #x 5
`);