export default {

  draw_rect(context) {
    // context.strokeRect(10, 10, 100, 200);
    context.fillRect(10, 10, 100, 200);
  },

  draw_rect_manual(context) {
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(300, 100);
    context.lineTo(300, 200);
    context.lineTo(100, 200);
    context.closePath();

    // context.stroke();
    context.fill();
  },

  draw_curve(context) {
    const p0 = {
      x: Math.random() * 600,
      y: Math.random() * 600,
    };
    const p1 = {
      x: Math.random() * 600,
      y: Math.random() * 600,
    };
    const p2 = {
      x: Math.random() * 600,
      y: Math.random() * 600,
    };
    const p3 = {
      x: Math.random() * 600,
      y: Math.random() * 600,
    };

    context.beginPath();
    context.moveTo(p0.x, p0.y);
    // context.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
    context.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
    context.stroke();

    [p0, p1, p2, p3].forEach(drawPoint);

    function drawPoint(p) {
      context.fillRect(p.x - 4, p.y - 4, 8, 8);
    }
  },

  draw_arc(context) {
    context.beginPath();
    context.arc(300, 300, 100, 0, 2, !Math.round(Math.random()));
    context.stroke();

  }
}