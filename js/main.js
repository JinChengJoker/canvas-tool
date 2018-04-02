var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var mouseDown = false

var clientWidth = document.documentElement.clientWidth
var clientHeight = document.documentElement.clientHeight
canvas.width = clientWidth
canvas.height = clientHeight

window.onresize = function() {
    var clientWidth = document.documentElement.clientWidth
    var clientHeight = document.documentElement.clientHeight
    canvas.width = clientWidth
    canvas.height = clientHeight
}

// 鼠标按下
canvas.onmousedown = function(e) {
    mouseDown = true
    var x = e.clientX
    var y = e.clientY
    ctx.fillStyle = "red"
    ctx.fillRect(x, y, 5, 5)
}

// 鼠标移动
canvas.onmousemove = function(e) {
    if(mouseDown) {
        var x = e.clientX
        var y = e.clientY
        ctx.fillStyle = "red"
        ctx.fillRect(x, y, 5, 5)
    }
}

// 鼠标松开
canvas.onmouseup = function(e) {
    mouseDown = false
    var x = e.clientX
    var y = e.clientY
    ctx.fillStyle = "red"
    ctx.fillRect(x, y, 5, 5)
}