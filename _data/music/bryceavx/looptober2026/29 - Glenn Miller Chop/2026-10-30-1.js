// @title Looptober 29 - Glenn Miller Chop
// @by bryce.avx
setcpm(100/4)

$: s("ampatrol:1").loopAt(4).cut(1).splice(16,
`<[8 8 11 [2 13]]
[8 8 [13 14 15] [0 1 0]]
[8 8 11 [2 13]]
[8 8 [13 14 15] [0 1 0]]
[9 9 [8 9] 9]!4>`)
  ._spectrum({width: 600})

$: s("ampatrol:4").stretch("<0.055!4 -0.052!4>")
  .hpf("2000")
  .struct("[x(3,8) [- x x? x]]")
  .cut(2).pan(sine.range(0.4, 0.6).slow(6))
  .startFrom(8)
  ._punchcard()

$: stack(
  s("[bd - - bd] [- [- bd]] [bd bd] -"),
  s("<sd!8 cp!8>").struct("- x - x")
).bank("casiorz1").room("0.5")
  .startFrom(1)