// @title Looptober 12 - LFOs
// @by bryce.avx
setcpm(100/4)
samples('github:bubobubobubobubo/dough-waveforms')
setScale("E:phrygian")

$: s("[bd bd [~ bd ~ bd] [bd bd]]").bank("bossdr550")
  .chebyshev("2:0.5").room(0.3)

$: n1("<1 1 1 2>").sc().trans("-24").s("wt_01")
  .lpf("400").lfo({r:.23,da:"1000",dc:0,shape:"sine"})
  .ph(1).lfo({r: 4, da: "3", shape: "ramp"})
  .distort(2).lfo({r: 0.3, dr: 0.5, dc:0})
    .distorttype("diode")
  .delay(0.3).lfo({r:5, da:"0.6",dc:-1,shape:"saw"})
  .gain(0.4)

$: n1("<1 1 1 [2,6]>").sc().seg(16).trans(-12)
  .s("wt_digital")
  .wt(0.4).lfo({r:0.25, da: 0.2, dc:0, shape: "sine"})
  .chebyshev("2:0.25").lfo({r: 7, shape: "ramp"})
  .dec("<0.1 0.15 0.4 0.7>").pan(0.4).gain(1.0)
  .startFrom(4)

$: n1(`<[[1 7o 1 -] [5o 1] - [5 4 3 2]]
  [[1 7o 6o 4o] [5o 7o 2 7o] [4 7 9 11] [- 13 - 11]]
  [[11b 10 9 -] [5 2] [1 - - -] [5 4 3 2]]
  [[6 5 4 3] [2(3,8)] [4(3,8)] [6(3,8)]]>`)
    .sc().s("square").trans("12")
    .sometimesBy(0.3, x => x.ply(7))
    .chebyshev("3:0.2")
    .env({dr: 8, a: 0.1, ac:0})
    .hpf("400").gain(0.4).pan(0.6)
    .startFrom(8)

await initScreamer();
runScreamer(String.raw`
lighting = (light((0, 5, 0) (1.0, 1.0, 1.0) 1.2))
render = repeat.med
fog = (0.1, 0.0, 0.0, 0.1)
camera = (0, 1.5, -6)
field = octahedron @y time*50 #xz 2.9
field >z 1.8 ++ sphere::noise'2.2 >z -20 >y 5 >> time
`);
