// @title Looptober 2 - Some Jungle I guess
// @by bryce.avx
setcpm(170/8)
samples('github:yaxu/clean-breaks')

$: s("amen/2").fit()
       .scrub("8 [9 9.5] [10 9.5] [9 [7 7]] [6 6] [7 7] [4 [1 1 1]] [5 3]".div(16))
       .sometimesBy(0.1, x => x.speed("-0.15").early("0.05"))
$: note("<[d2,f2,a2] [d2,g2,b2]>").s("gm_pad_sweep")
   .mask("<~!2 1!13 1!1>")
$: s("siren").speed("0.18").gain("1.7")
   .mask("<~!4 1!10 ~!2>")
$: s("space").speed("0.2")
   .mask("<~!6 1!6 ~!4>")
$: chord("<Dm G>").offset("[-1 0 -2]").voicing()
       .s("gm_epiano1:4").struct("[~ x] * 8").gain("0.7")
   .mask("<~!8 1!8>");

await initHydra();

let accumulator = (iters) => {
  let acc = shape(99, 0.1).scrollX(0.4).rotate(0, 1);

  for (var i = 0; i < iters; i++) {
    acc.add(shape(99, Math.random()*0.05 + 0.01).color(0.0, 0.1, 0.8)
            .scrollX(Math.random() + 0.1).rotate(0, Math.random()*2 - 2));
    
  }
  return acc;
};

accumulator(6).diff(o0).out();