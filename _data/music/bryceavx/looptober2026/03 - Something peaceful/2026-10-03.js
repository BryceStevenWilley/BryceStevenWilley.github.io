setcpm(170/8)

$: n1("[1 3 5 8 3u 5u 8u 5u 3u 8 5 3],1oo")
  .fast(2)
  .scale(`<Bb:major
           G:minor 
           <F#:major Ab:minor>
           <[F:major <F:major Eb:major>]
            [A:diminished A:enigmatic]>>`)
  .sometimesBy(0.2, x => x.add(note("0,12"))) 
  .s("triangle,sine")
  .lpf(sine.range(500, 9000).slow(2))
  .pan(sine.range(0.2, 0.8))
  .delay(0.2)
  .spectrum({speed: 2})

await initHydra({feedStrudel: 1});
src(s0)
  .hue(0.1)
  .scrollY(0.1)
  .kaleid(H("15"))
  .diff(o0).scale(1.07)
  .out()