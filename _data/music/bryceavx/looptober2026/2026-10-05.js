// @title Looptober 5 - I wish it was raining
// @by bryce.avx
setcpm(90/4)

$: stack(
  "[bd [~ bd]] *2",
  "[~ rim] *2",
  "<~ ~ ~ [~ mt(3, 8)]>".gain(0.7)
    .lpf("400 | 1200 | 5000"),
  "rd *4".clip(0.8).delay(0.3)
).s().bank("xdrumlm8953")

$: note(`<[a3,c4,e5]
          [g3,bb3,d5]
          [g3,a3,c5]
          [f3,a3,bb4]>`)
   .s("gm_epiano1:1").strum(0.01)
   .startFrom(4)
$: note(`<[a2 _ [~ e3] [d3 c3 bb2]]
          [g2 _ _ d2 _ _ g2 _]
          [c2 d2 a1 c2]
          [f2]>`)
   .s("gm_acoustic_bass:3").gain(3).dec(2.4)
   .startFrom(8)
$: note("<c4 d4 e4 f4>").s("gm_flute:1")
   .unison(2).room("1").dec("2.0")
   .sometimes(x => x.echo(3, 0.51, 0.99))
   .startFrom(12)

await initHydra();

voronoi(20, 0.1, 10)
  .scrollY(0, -0.1)
  .modulateScale(noise(120, 0.1), 0.05)
  .color(0.2, 0.2, 0.9)
  .out(o0);
