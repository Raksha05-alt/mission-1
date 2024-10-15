let pressure = 0
basic.forever(function () {
    pressure = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(pressure)
    if (pressure < 659) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.stopMelody(MelodyStopOptions.All)
    } else {
        basic.showIcon(IconNames.Heart)
    }
    datalogger.log(datalogger.createCV("pressure", pressure))
})
