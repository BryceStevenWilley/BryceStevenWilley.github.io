// @title Looptober 31 - Organs Redux
// @by bryce.avx
setcpm(90/7)

samples('github:yaxu/clean-breaks')

$: n1(`<[1 _ 7o _ 3 2 1] 
[7o _ 2 1 _ 7o 6o] 
[5o _ 6o 4o 5o _ 7o] 
[2 _ 4 _ 4b 2 7so] 
[7o 6o 5o 4o 3so 2o 7o]
>`).scale("E:minor")
  .trans(12)
  .add(note("<[0,0.1]!5 0!5>"))
  .s("gm_church_organ:2")

$: chord("<Em Em7 B F#m Do>")
  .offset("<0 -1 0 0>").voicing()
  .s("gm_church_organ:3")
  .gain(0.7)
  .mask("<0!5 1!5>")

$: s("amen").loopAt(1.5)
  .splice(16, `<
  [8 5 6 2 3 4 8]!5
  [[8 11] [5 5] [6 1] [2 2] [3 8] [4 9] [8 12]]!5
  >`)
  .lpf("<3000!5 20000!5>")
  .delay("<0.6:0.2!5 0.0!5>")
  .cut(1).gain(1.3)

$: s("wt_digital").seg("<21!5 42!5>")
  .note("<e2 e2 b1 fs2 [d2 d3]>")
  .wt(0).lfo({r: 0.2}).chebyshev("5:0.2")
  .lpf("<500!5 20000!5>")
  .dec(cat(
    "0.4", "0.4", "0.4", "0.4", "0.4",
    sine.range(0.08, 0.2).slow(3.2),
    sine.range(0.08, 0.2).slow(3.2),
    sine.range(0.08, 0.2).slow(3.2),
    sine.range(0.08, 0.2).slow(3.2),
    sine.range(0.08, 0.2).slow(3.2)
  ))

all(x => x.punchcard({labels:true}))