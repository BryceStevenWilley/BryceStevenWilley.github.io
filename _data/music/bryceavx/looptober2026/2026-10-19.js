// @title Looptober 19 - Spooky Somber K.K Slider
// @by bryce.avx
set(60/4)

$: note(`<[c5 [- bb4] [c5 d5]] [eb5 f5 g5]
          [ab5 - [g5 f5]] [g5 - -]
          [f5 eb5 d5 c5 bb4 g4] [ab4 c5 eb5 g5]
          [bb5 - [d5 bb5]] [ab5 - d5]>`)
  .s("pulse")
  .att("0.1").dec("0.2").sustain("0.5").rel("<0.0>")
  .lpf("500").lfo({r: 7, da: 3500, dc:1}).penv("1")
  .startFrom(8)
// Emulating AMSynth, BriansBank14: 4: Telepathic
$: note("<[f3 [ab3 f4] eb4]!2 [f3 [ab3,d4] _]!2>")
  .legato("0.2")
  .adsr("0.013:0.077:0.76:1.5")
  .lpf(1200).env({r:2.4, s:0.12})
  .s("saw,square")
  .lfo({r: 4.3, dr: 0.05})
  .penv("<[-5 [3 6] -1]!2 [-6 3 -]!2>")
  .panchor("1").psustain("1").prelease("60")
  .room("0.4").gain("0.6")
// This one is BriansBank: 1: NoNose
$: note("<[f2 [ab3,c4] -]!2 [f2 [ab2,d3] -]!2>")
  .legato("<0.5!2 [0.5 1 1]!2>")
  .adsr("0.0:7.0:0:0.393")
  .lpf("1200").env({d: 0.151, r:0.495})
  .s("saw").gain(0.5)
  .superimpose(x => x.s("square").trans("24")
                     .gain("0.4").detune("0.2"))
  .lfo({c: "gain", r:4.3, dr:0.26})
  .lfo({c: "lpf", r:4.3, dr:0.26})
  .room("0.4")

await initHydra({numOutputs: 4});
var damask = shape(2).scale(2.5, 1).scrollY(0.1)
shape(4, 0.17).thresh(0.95).color(1, 0.5, 0)
  .rotate(0,.2).repeat(3,5).scrollY(-.4).rotate(0,-.1)
  .scrollX(() => Math.sin(time/2)/4)
  .blend(src(o1).scale(0.9)
         .modulateScale(noise(6,0), 0.2))
  .out(o1)
src(o1).add(voronoi(25,0.15,10).mask(damask)).out(o0)
render(o0)