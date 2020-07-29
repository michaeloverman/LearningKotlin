(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'fractaltree'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'fractaltree'.");
    }root.fractaltree = factory(typeof fractaltree === 'undefined' ? {} : fractaltree, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Random = Kotlin.kotlin.random.Random;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function main$lambda() {
    (new FancyLines()).run();
    return Unit;
  }
  function main(args) {
    $(main$lambda);
  }
  var canvas;
  function initalizeCanvas() {
    var tmp$, tmp$_0;
    var canvas = Kotlin.isType(tmp$ = document.createElement('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    var context = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    ensureNotNull(document.body).appendChild(canvas);
    return canvas;
  }
  function FancyLines() {
    var tmp$;
    this.context = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    this.height = canvas.height;
    this.width = canvas.width;
    this.x = this.nextX();
    this.y = this.nextY();
    this.hue = 0;
  }
  FancyLines.prototype.nextX = function () {
    return Random.Default.nextDouble_14dthe$(this.width);
  };
  FancyLines.prototype.nextY = function () {
    return Random.Default.nextDouble_14dthe$(this.height);
  };
  FancyLines.prototype.line = function () {
    this.context.save();
    this.context.beginPath();
    this.context.lineWidth = Random.Default.nextDouble_14dthe$(20.0);
    this.context.moveTo(this.x, this.y);
    this.x = this.nextX();
    this.y = this.nextY();
    this.context.bezierCurveTo(this.nextX(), this.nextY(), this.nextX(), this.nextY(), this.x, this.y);
    this.hue = this.hue + Random.Default.nextInt_za3lpa$(10) | 0;
    this.context.strokeStyle = 'hsl(' + this.hue + ', 50%, 50%)';
    this.context.shadowColor = 'white';
    this.context.shadowBlur = 10.0;
    this.context.stroke();
    this.context.restore();
  };
  FancyLines.prototype.blank = function () {
    this.context.fillStyle = 'rgba(255,255,1,0.1)';
    this.context.fillRect(0.0, 0.0, this.width, this.height);
  };
  function FancyLines$run$lambda(this$FancyLines) {
    return function () {
      this$FancyLines.line();
      return Unit;
    };
  }
  function FancyLines$run$lambda_0(this$FancyLines) {
    return function () {
      this$FancyLines.blank();
      return Unit;
    };
  }
  FancyLines.prototype.run = function () {
    window.setInterval(FancyLines$run$lambda(this), 40);
    window.setInterval(FancyLines$run$lambda_0(this), 100);
  };
  FancyLines.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FancyLines',
    interfaces: []
  };
  var package$fancylines = _.fancylines || (_.fancylines = {});
  package$fancylines.main_kand9s$ = main;
  Object.defineProperty(package$fancylines, 'canvas', {
    get: function () {
      return canvas;
    }
  });
  package$fancylines.initalizeCanvas = initalizeCanvas;
  package$fancylines.FancyLines = FancyLines;
  canvas = initalizeCanvas();
  main([]);
  Kotlin.defineModule('fractaltree', _);
  return _;
}));

//# sourceMappingURL=fractaltree.js.map
