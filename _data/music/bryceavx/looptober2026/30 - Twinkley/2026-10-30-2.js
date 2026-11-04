// @title Looptober 30 - Twinkley
// @by bryce.avx
setcpm(150/4)

$: s("sine").note("f2 bb1")
  .struct("x(<3 5>,8) [x - - x - -]")
  .lpf("50").lpattack("0.1")
  .lpenv("5").lpd("0.1").lpq("3").diode("2:0.3")

$: s("white").gain(0.0)
  .struct("x*4 x x*4 [x x*8]")
  .env({da: 1}).jux(rev)

$: n1(`<[1 5 7 7o]!4>`)
  .scale("Bb:major")
  .s("<z_square!4>").delay("<0!12 0.4!12>")
  .gain(0.3).startFrom(4)

$: n1(`<
[[1 3 5 8]*2 
[5 7 3 7]*2
[7 9 11 13]*2 
[7o 9o 11o 13o]*2
]!4>`)
  .scale("Bb:major")
  .trans(12)
  .s("<z_tan!4>")
  .gain(0.3).lfo({r: 0.1})
  .startFrom(8)

await initHydra();
shape(3, 0.3).rotate(0, 4.5)
  .mult(voronoi(10, 0, 2).rotate(0, -3))
  .repeat(H("<1!4 2!4 10!12>"), H("<1!4 2!4 10!12>"))
  .modulateScrollX(osc(10, 0.1)
                   .rotate(3.14159/2), 0.2)
  .color(0.5, 0.5, 1)
  .scrollY(0, 0.2)
  .scrollX(x => Math.sin(time)/4)
  .diff(src(o0).scale(H("<0!8 0.97!12>"))
        .brightness(-0.05))
  .out()