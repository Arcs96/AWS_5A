var n = 17;
document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
document.write("<element style='color:red;'></element><br />");
for (var i=1; i<=n; i+=2) {
  for (var j=1; j<=n-i; j+=2) {
    document.write("<element style='color:white;'>-'</element>");
  }
  for (var k=1; k<=i; k++) {
    document.write("<element style='color:green;'>*</element>");
  }
  document.write('<br />');
}
for (var i=1; i<=2; i++) {
  document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
  document.write("<element style='color:brown;'>***</element><br />");
}
