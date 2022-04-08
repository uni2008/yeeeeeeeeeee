input.onButtonPressed(Button.A, function () {
    while (true) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.GREEN)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.PINK)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.PINK)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
    }
})
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
	
})
