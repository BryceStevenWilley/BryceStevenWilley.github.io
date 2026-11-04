// @title Looptober 14 - Ambient Monks
// @by bryce.avx
setcpm(30/4)
setScale("C:lydian")

$: n1("<[1 ~ 3 6 5 ~]!4 [1 4 ~ 6 ~ 3]!4>").sc().s("gm_pad_sweep")
  .sometimesBy(0.2, x => x.late("0.3|0.5|1.0"))
  .room(1.3).roomsize(8).rfade("3").rlp(500).hpf(220).lpf(500)
  .gain("0.6")

$: s("chants").speed("0.7").stretch("0.3").scrub("[[0.1|0.2|0.73|0.42|0.66] ~]")
  .sometimes(x => x.early(perlin.range(0.0, 0.3)))
  .almostNever(x => x.speed("-0.7"))
  .delay(5).lfo().dfb("0.4")
  .hpf("100")

$: n1("<[1]!4 [4]!4>").sc().trans("-24").s("wt_vgame")
  .delay("3.1").lfo().ph(0.04).lfo({r: 0.8, da: 0.1})
  .lpf("100").lfo({r: 0.06, da: 2000})
  .gain("0.4")

$: s("brown")
  .lpf(100).lfo({r: 0.136, dc: 0, da: 20000})
  .lfo({c: "gain", r: 0.37, dc: 0, da: 1})

await initScreamer();

runScreamer(String.raw`
render =high
post = (godrays(0.9 0.1 10 -4))
trees=plane:grey@x 87.4 >z -5 ---- box'0.6@ytime*10#1
box'0.4@time*5 ++ (plane::noise>>y -0.4*time)++ trees
`);
