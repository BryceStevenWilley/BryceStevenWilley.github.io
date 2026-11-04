// @title Looptober 9 - Mystery Box
// @by bryce.avx
setcpm(150/4)
samples('github:yaxu/clean-breaks')

$: i(`<[11 7 0 11 7 0 11 8]!2
       [10 5 0 10 5 0 10 6]!2>`)
  .xen("sims").s("gm_celesta")
  .lpf("200").lpa("0.25").lpe("2")

$: i(`<[14 _ 11 14 _ 11 14 8]!2
       [16 _ 8  16 _ 8  16 _]!2>`)
  .xen("sims").s("gm_celesta").lpf("400")
  .mask("<0!8 1!16>")

$: i("<7 6 2 0>").xen("sims")
  .ftrans("-12").s("sine").att("0.2").dec("1.0")
  .juxFlipBy("0.8", (pat) => pat.late("0.3"))
  .mask("<1!20 0!4>")

$: i("<{7 0 -7}%16>").xen("sims").ftrans("24")
  .s("square")
  .gain("<0.4!20 [0.3 0.2] [0.1 0.05] 0!2>")
  .bpf(sine.range(1500, 6000).slow(1.7))
  .mask("<0!16 1!6 0!2>")

$: s("amen").loopAt("4")
  .scrub(`8 [2 <2 6 10 [1 5]>] 
  [10 <12 10 14 [5 1]>] <11 [11.5 11.5]>`.div(16))
  .lpf("2000")
  .mask("<0!4 1!16 0!4>")

await initScreamer();

runScreamer(String.raw`
  render = low
  fg = (0.8, 0.5, 0.4)
  post=(godrays(.98 .07 .8 .8),hue(sin(time)*.03, 1))
  field = cone # 0.7
  bboo = (box'1 >x0.95 ++ box'1 >x-0.95)---sphere'0.9
  bboo-----field >z time >x cos(time) >y cos(time*.9)
`);