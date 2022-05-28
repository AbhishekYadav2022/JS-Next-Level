// Getting the inner height and the inner width of the window 
document.getElementById('firstBox5').append(window.innerHeight + "px")
document.getElementById('secondBox5').append(window.innerWidth + "px")

// Other properties of window object
document.getElementById('pagexoffset').append(window.pageXOffset)
document.getElementById('pageyoffset').append(window.pageYOffset)
document.getElementById('screenx').append(window.screenX)
document.getElementById('screeny').append(window.screenY)
document.getElementById('location').append(window.location)
// document.getElementById('document').append(window.document)
document.getElementById('history').append(window.history)
document.getElementById('history.length').append(window.history.length)
document.getElementById('screen').append(window.history.screen)
document.getElementById('screen.width').append(window.screen.width)
document.getElementById('screen.height').append(window.screen.height)

// Some useful methods

// window.alert("Current Page: " + window.location)

// Opens new browser window
window.open('www.google.com')

