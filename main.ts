let col = 0
let led2 = 0
let led1 = 0
let led22 = -2
basic.forever(function () {
    led2 = randint(0, 4)
    led.plot(led2, 0)
    basic.pause(500)
    for (let index = 0; index < 3; index++) {
        col += 1
        led.plot(led2, col)
        basic.pause(500)
    }
    led1 = col
    led1 += -2
    for (let index = 0; index < 6; index++) {
        led.unplot(led2, led1)
        col += 1
        led.plot(led2, col)
        basic.pause(500)
    }
    col = -1
})
