//document.addEventListener("mousemove", function(event) {
//   document.body.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
// Обновляем текст на странице, отображая новые координаты
//});
document.addEventListener("DOMContentLoaded", function() {
    
    const mousecoordinate = document.getElementById("mousemoves");

    document.addEventListener("mousemove", function (event) {
        const x = event.clientX;
        const y = event.clientY;
    
        mousecoordinate.textContent = `X: ${x}, Y: ${y}`;
    });

});
