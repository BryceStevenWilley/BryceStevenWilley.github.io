// @title Looptober 4 - Hard Techno
// @by bryce.avx
setcpm(135/4)

samples('github:bubobubobubobubo/dough-waveforms')

$: note("<g1 <ab1 bb1>>!16").s("triangle,wt_10")
  // Switch Angel's `acidenv`
  .lpf(100).lpenv(0.96 * 9).lps(0.2).lpd(0.12).lpq(2)
  .dec("0.13").unison(2)
    .dist("4:0.35")
    .o(2)
  .fm(time.mod("<1 2 3 4>"))

$: stack(
  s("bd*4").duckatt(0.3).duckdepth("0.7")
      .duckorbit(2),
  s("[~ sh]*4").gain(0.2)
).bank("xr10").diode("3:0.35")
  .mask("<0!4 1!8 0!4>")

$: note(`<[~ c4 bb3 c4 bb3 _ g3 _] 
          [~!5 f3 bb3 g3]>`).s("square")
  .dec("0.2")
  .dist("3:0.35")
  .fmwave("brown")
  .gain(0.5)
  .fm(0.8)
  .delay(0.3)
  .mask("<0!8 1!8>")

await initScreamer();

runScreamer(String.raw`
  //render = repeat.low
  fg = (0.0, 1.0, 0.0)
  post = (glow)
  field = box'0.1 @z time*-30 @y 40 @x 40 # 0.7
  field >z time*3 >x 0.3 @z time*30
`);