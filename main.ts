let strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB)
let count = 0
basic.forever(function () {
    for (let index = 0; index < 60; index++) {
        strip.setPixelColor(count, neopixel.colors(NeoPixelColors.Green))
        count += 1
        strip.show()
        basic.pause(100)
    }
    count = 60
    for (let index = 0; index < 60; index++) {
        strip.setPixelColor(count, neopixel.colors(NeoPixelColors.Black))
        count += -1
        strip.show()
        basic.pause(100)
    }
    count = 0
    for (let index = 0; index < 60; index++) {
        strip.setPixelColor(count, neopixel.colors(NeoPixelColors.Blue))
        count += 1
        strip.show()
        basic.pause(100)
    }
    count = 60
    for (let index = 0; index < 60; index++) {
        strip.setPixelColor(count, neopixel.colors(NeoPixelColors.Black))
        count += -1
        strip.show()
        basic.pause(100)
    }
})
