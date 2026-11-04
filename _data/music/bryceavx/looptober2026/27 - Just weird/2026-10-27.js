// @title Looptober 27 - Just weird
// @by bryce.avx
setcpm(220/4)

$: s("pink").lpf("100").lpenv("8").lpa("0.3")
  .startFrom(0)

$: s("white").struct("x(7, 19)").lpf("500,600")
  .lpenv("4").lpa("0.1").duckorbit("<2 4>")
  .startFrom(0)

$: s("bd*4").bank("tr909").gain(0.5)
  .duckorbit("<4 2>")
  .startFrom(4)
$: s("~ [sd(3,8)|[~ sd]|sd(3,4)]")
  .gain(0.5)
  .startFrom(4)

$: i("<[1,5,9]!2 [0,4,7] [0,7,12]>").xen("sims")
  .s("sine").orbit(2).duckdepth(0.7)
  .startFrom(8)
  ._scope()

$: i("<[5,9,18,22]!2 [4,7,14,18] [7,12,19,25]>")
  .xen("sims")
  .arp(run(4).fast("<4!2 3!1>"))
  .ftrans(12).s("wt_digital_bad_day")
  .wt(0).lfo({r:1.1})
  .startFrom(12)
  ._spectrum({width: 600})