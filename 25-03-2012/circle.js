function drawCircle(r,d) {
  var domain = DOMAIN([[0,2*Math.PI]])([d]);
  
  var mapping = function (p) {
  var u = p[0];

  return [r*COS(u),r*SIN(u)];
  };

  return MAP(mapping)(domain);
}
