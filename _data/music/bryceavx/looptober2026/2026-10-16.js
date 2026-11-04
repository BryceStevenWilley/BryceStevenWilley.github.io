// @title Looptober 16 - Simple Disco
// @by bryce.avx
setcpm(120/4)

$: stack(
  "bd * 4",
  "[~ [hh hh?]] * 4",
  "[- - - rim]"
).s().bank("9000")

$: s("cowbell:3").struct(
    cat("-","-","-",binaryN("0x173fea2b"))
  ).chebyshev("2:0.2")

$: n1(`<[1 - - 1 - - 7o -]
   [6o - - 6o - - 6o - ]
   [4o - - 4o - - 3o - ]
   [4o 4 5o 5 6o 6 7o 7]>`)
  .scale("C:minor").trans("-12")
  .s("gm_electric_bass_pick")

$: chord("<Cm7 Ab Fm9 [Fm Gm Ab BbM7]>")
  .offset("<0 -1 -2 -3>")
  .voicing().struct("- x - x x - x x").s("piano")
  .lpf("<250!2 500!2 1000!2 1500!2>")
  .dec("<0.5!3 0.2!3 0.9!3 1.5!3>")

all(x => x.coarse("<8!2 6!2 4!4 2!8>")
          .punchcard({labels: true}))





