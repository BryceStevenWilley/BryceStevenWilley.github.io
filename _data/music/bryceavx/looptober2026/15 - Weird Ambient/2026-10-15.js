// @title Looptober 15 - Weird Ambient
// @by bryce.avx
setcpm(110/4)
setScale("c:mixolydian")

samples('github:BryceStevenWilley/bryce.avx.samples')
samples('github:yaxu/clean-breaks')

$: n1(`<[1,5] [1,3] [2,4] [6,8]
        [5,9][4,7] [3,6] [2,4]>`)
  .sc().trans("-12").s("wt_fire")
  .wt("<[0.3|0.5|0.7]>")
    .lfo({r:0.1, da:0.01}).lfo()
  .unison(16).detune("0.1").lpf("4000")
  .chebyshev("3:0.1")
  .att("0.6").release("2").dt("2").dfb("0.2")
  .gain(1.2)

$: s("amen").loopAt(8).splice(16, "4 2 [11 10] 10")
  .cut(0).gain(0.7)
$: s("anritimeless-sad-street:0").struct("[~ x]")
  .speed(`<0.3333!2 0.5625 0.66
           0.5 0.4444 0.416 0.375>`)
  .late("0.025")
  .room(1)
  .delay("0.7")
  .dt("0.2")
  .dfb("0.6")
  .gain(0.3).lpf(2000)
  .startFrom(8)

$: s("pikmin").n("10|7|9").speed("0.25")
  .gain(0.3).lfo({r: 0.1, da: 0.3}).lpf("500").lfo()
  .startFrom(16)

await initHydra();

osc(6,0, 0.2).rotate(0, 1).repeat(10).kaleid(3)
  .modulate(noise(2)).scale(1,2).out();
