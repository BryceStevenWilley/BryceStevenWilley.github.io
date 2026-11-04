// @title Looptober 13 - Adding Live Bass
// @by bryce.avx
setcpm(150/4)
samples('github:yaxu/clean-breaks')

$: s("amen").loopAt(4)
  .scrub("8 2 11 11 15 14 13 12".div(16))

$: note(`<[a3,d4,e4] 
          [a3,d4,f4]
          [a3,d4,bb4]
          [a3,d4,eb5]>`)
  .s("wt_digital:3").wt(0.2).lfo({s: 0.4})

// Live Bass here

await initHydra();

osc(10, 0.2)
  .mult(noise(10, 0.2))
  .diff(noise(9, 0.2))
  .colorama(0.3)
  .invert().luma(0.5).kaleid(6).scale(1,1.9).out()