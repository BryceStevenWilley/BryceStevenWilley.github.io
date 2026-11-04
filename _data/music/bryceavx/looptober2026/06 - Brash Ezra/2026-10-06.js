// @title Looptober 6 - Brash Ezra
// @by bryce.avx
setcpm(140/4)

samples('github:yaxu/clean-breaks')
$: s("hotline").loopAt("2").slice(4, "<[0 1] [2 3]>")
  .mask("<0!5 1!5 0!10 1!20>")

$: i("<[0,5] [1,7] [4,11] [2,9] [1,7]>")
  .xen('sims').s("gm_lead_2_sawtooth").gain(0.5)
$: i("<[12] [11] [14] [17] [19]>")
  .xen('sims').s("gm_lead_2_sawtooth").gain(0.5)
  .startFrom(15)

$: s("hotline").loopAt("2")
  .slice(8, "0 1 2 2 3 4 6 6").diode("4:0.16")
  .startFrom(10)

$: i(run(12).mul(2)).xen('sims')
  .s("triangle").gain(sine.slow(8)).delay(0.4)
  .startFrom(15)

$: i("<12 ~ [~ 14] [[9 9] ~] [~ ~ ~ 7]>")
  .xen('sims').s("gm_orchestra_hit")
  .crush("4 | 3 | 5")
  .startFrom(20)

await initHydra();

shape(H("<3 5 7 4 6>"), 0.7).rotate(H("0 1")).repeat(2,5)
  .colorama(() => Math.sin(time/5)*0.89+0.1)
  .saturate(2.0)
  .blend(o0).scale(0.80)
  .out()