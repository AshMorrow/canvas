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
    context.strokeStyle = '#666'; // цвет обводки
    context.fillStyle = 'red'; // цвет заливки

    var ox = canvas.height / 2;
    var oy = canvas.width / 2;

    //рисуем оси

    context.beginPath();
    context.moveTo(oy,0);
    context.lineTo(oy,canvas.height);

    context.moveTo(0, ox);
    context.lineTo(canvas.width,ox);

    context.stroke();
    context.closePath();

    // раставляем на осях значения

    var step = 50;
    var steps = canvas.width / step;
    context.lineWidth = 1.5 // толжина линии
    context.strokeStyle = 'red';

    for(var i = 0;i <= steps; i++){
        context.fillText((i * step) - oy,(i*step) + 2,ox +10);
    }

    steps = canvas.height / step;

    for(var i = 0;i <= steps; i++){
        context.fillText((i * step) - ox,oy + 2,(i*step) +10);
    }

    //рисуем график по функции

    context.strokeStyle = '#f00' //цвет обводки
    context.lineWidth = 2.5 // толщина линии

    function fx(x) {
        return x;
    }

    var x0 = -oy; // -250
    var y0 = fx(x0); // -250

    context.beginPath();
    context.moveTo(x0,y0);

    for(var i = 0; i <= canvas.width;i++){
        var x = i - oy;
        var y = fx(x);
        context.lineTo(x + ox,oy - y);
    }

    context.stroke();
    context.closePath();

/*
    //линия
    // начинае цыкл рисования -- поднесли руку к холсту
    context.beginPath();
    context.moveTo(30,30); // прийти в точку 30 30

    // координаты от левой верхней точки по X и Y

    context.lineTo(30,130);
    context.lineTo(400,130);
    context.lineTo(30,30);
    context.stroke(); // делаем обводку
    context.fill(); // делаем заливку
    context.closePath(); // конец цикла; // стирает в памяти линии которые нарисовали;
/*
    // квадрат
    context.beginPath();
    context.rect(0,150,100,100);
    context.fill();
    context.closePath();

    // более короткий способ

    context.fillRect();
    context.strokeRect();

    //окружность

    context.beginPath()
    context.arc(200,130,50,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
    */

/*
    //кривые

    context.beginPath();
    context.moveTo(130,130);
    context.quadraticCurveTo(10,100,50,50);
    context.stroke();
    context.closePath();

    // кривые бизье

    context.beginPath();
    context.moveTo(150,150);
    context.bezierCurveTo(10,-90,-50,90,50,20);
    context.stroke();
    context.closePath();
*/


    /* шрифты */
/*    context.font ='100px Georgia'; // стили шрифта
    // context.fillText('Hello World',10,50);
    context.strokeText('Hello World',10,100);

    */



    

};