// @title Looptober 10 - Anxiety Bounce
// @by bryce.avx
setcpm(170/4)
samples('github:yaxu/clean-breaks')
samples('github:bubobubobubobubo/dough-waveforms')

$: i("<[0!7 15]!3 [7!8]>").xen("sims").ftrans("-24")
  .s("wt_01").dec(0.2).lpf(200).lpa("0.1").lpenv(8)
  .gain(1.3)
$: s("<bd*4!3 bd(3,8)*2>").bank("tr909").room(0.2)
  .datt("<0.18!3 0>").duck(2).duckdepth("1")
  .duckonset("0.01")
$: s("[~ hh]*4").bank("ace").gain(0.6)
  .mask("<0!4 1!16>")
$: s("viscospacedrum_misc:1")
  .struct(cat("~", "~", "~", binaryN(0x6abf)))
  .hpf("100").lpf("5000").gain(0.4)
  .delay("<~ ~ ~ [0 0 0 0.9]>")
$: s("funkydrummer").loopAt(2)
  .scrub("<[13 2 11 13] <[0 12 8 12] [0 0 5 9]>>"
         .div(16)).hpf(400).coarse(8).gain(0.4)
  .mask("<0!12 1!8>")

$: stack(
  i("<[6 6 6 [6 8]]!3 [11!8]>").mask("<0!4 1!12>"),
  i("<[10 10 10 [10 15]]!3 [7!8]>"),
  i("<[16 24 <26 27> [16 22]]!3 [22!8]>")
  .mask("<0!8 1!12>")
).xen("sims").s("supersaw").dec(0.3).coarse(2)
  .lpf("7000").orbit(2).gain(0.7)

await initScreamer();
runScreamer(String.raw`
render = low
background = (0, 0, 0.3)
tb=(torus'2 @x 90 @z time*40)
tc=(torus'1.3 @x 90 @z time*-37)
td=(torus'3.1 @x 90 @z time*-43)
te=(torus'4.2 @x 90 @z time*46)
tf=(torus'5.4 @x 90 @z time*-49)

(tb ++ tc ++ td ++ te ++ tf) --- julia(time)'1.3
`);