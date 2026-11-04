// @title Looptober 28 - Annie Vocal Chop
// @by bryce.avx
setcpm(160/4)

$: s("<annie!2 -!40>").scrub("<0.275 0.54>")

$: s("annie").slice(24, `<
[15 - - 15 - 15 - 15] [15 - - 15 15 - - 15]
[19 [19 19] [- 19] [- 19]]!2
>`)
  .layer(x => x.speed("<1 [1,[1.5|0.75]]>"))
  .early("0").room(0.7).att(0.05)
  .gain(1.5)
  .startFrom(2)

$: note("<e2 a2 fs2!2>").add(note("0,<0.2 0.3 0.4>"))
  .struct("x*8").lpf("100")
  .lpenv(sine.range(3, 6).slow(2.7))
  .lps("0.3").lpd("0.3")
  .lpq(2).s("wt_digital").wt(0.3).gain(0.5)
  .startFrom(2)

$: stack(
  s("[<[bd -] [bd lt - -]> [- - - bd]]"),
  s("[- oh] * 2"),
  s("[- [sd,cp]]")
).bank("tr909").crush("4").delay("0.3:0.405")
  .diode("2:0.3")
  .startFrom(2)
