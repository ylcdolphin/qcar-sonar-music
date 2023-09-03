basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 5) {
        music.ringTone(262)
        basic.pause(500)
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) < 8) {
        music.ringTone(294)
        basic.pause(500)
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) < 11) {
        music.ringTone(330)
        basic.pause(500)
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) < 14) {
        music.ringTone(349)
        basic.pause(500)
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) < 17) {
        music.ringTone(392)
        basic.pause(500)
    } else {
        music.stopAllSounds()
        basic.pause(500)
    }
})
