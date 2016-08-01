/**
 * Created by koragg on 17.07.16.
 */
window.onload = function () {
    
    var canvas = document.querySelector('#field'); //получаем канвас
    //канвас отличается от другого тега налицием getContext метода рисования
    
    var context = canvas.getContext('2d');
    
    canvas.width = 500; // реальная ширина холста
    canvas.height = 300; // реальная высота холта

    context.lineWidth = 1.5; // толщина линии
    context.strokeStyle = 'red'; // цвет обводки
    context.fillStyle = 'red'; // цвет заливки

    var is_draw = false;

    canvas.onmousedown = function (e) {

        is_draw = true;
        var coords = get_getcoords(e,canvas);
        context.beginPath();
        context.moveTo(coords.x,coords,coords.y);
    };

    canvas.onmousemove = function (e) {

        if(!is_draw) return;

        var coords = get_getcoords(e,canvas);
        context.lineTo(coords.x,coords.y);
        context.stroke();
    };

    canvas.onmouseleave = function (e) {
        is_draw = false;
        context.closePath();
    };

    canvas.onmouseup = function (e) {
        is_draw = false;
        context.closePath();
    };

    function get_getcoords(event,element) {
        var x = event.pageX - element.offsetLeft;
        var y = event.pageY - element.offsetTop;
        return {x:x,y:y}

    }
};