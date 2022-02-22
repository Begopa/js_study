function strokeRoundedRect(ctx, x, y, width, heigth, radius) {
    ctx.beginPath();
    ctx.moveTo(x+radius, y);
    ctx.arcTo(x+width,y       ,x+width,y+heigth,radius);
    ctx.arcTo(x+width,y+height,x      ,y+heigth,radius);
    ctx.arcTo(x      ,y+heigth,x      ,y       ,radius);
    ctx.arcTo(x      ,y       ,x+width,y       ,radius);
    ctx.stroke();
}