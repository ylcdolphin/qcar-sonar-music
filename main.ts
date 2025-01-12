basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 5) {
        music.ringTone(262)
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) < 8) {
        music.ringTone(294)
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) < 11) {
        music.ringTone(330)
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) < 14) {
        music.ringTone(349)
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) < 17) {
        music.ringTone(392)
    } else {
        music.stopAllSounds()
    }
    basic.pause(100)
})
