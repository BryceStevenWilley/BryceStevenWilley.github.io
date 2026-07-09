# Setup

## Recording / playing setup
Setup for everything still a mess.

Plug in the Oxygen 49

Started `aconnecectgui`, and `qjackctl`. Then, started `zynaddsubfx` in another terminal.

In aconnectgui in the MIDI tab, connect the Oxygen MIDI 1 to zynaddsubfx.
( might be optional )

In qjackctl, click `connect` and in the MIDI tab, connect the Oxygen 40 MIDI 1 to zynaddsubfx osc (if not already).
In the audio, make sure that zynaddsubfx out 1 and out 2 go to playback 1 and 2.

Also, from [the Jack docs](https://jackaudio.org/faq/pulseaudio_and_jack.html#option-4-suspend-pulseaudio-while-jack-is-running), make sure that qjackctl uses `pasuspender --jackd` first, so that the headphones are available.

To actually record what you are playing, install and run `jack_capture` (`sudo apt install jack-capture`)

## Song specific setup

In zynaddsubfx, in the `cormi_Sound` instrument bank, choose the `DolcePiano_01`. Played on Middle C (octave 0, middle C of the Oxy49)
