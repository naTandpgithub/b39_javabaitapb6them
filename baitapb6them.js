function tinhSoNguyenTo() {
  var n = document.getElementById("Sonb1").value * 1;
  var content = " ";
  if (n < 2) {
    //kiểm tra số
    alert("Nhập số khác");
  } else {
    for (var i = 2; i <= n; i++) {
      if (i === 2) {
        content += i + " ";
        continue;
      } else if (i === 3) {
        content += i + " ";
        continue;
      } else if (i % 2 === 0) {
        continue;
      } else if (i % 3 === 0) {
        continue;
      } else if (i % 5 === 0) {
        continue;
      } else {
        content += i + " ";
        continue;
      }
    }
    console.log(content);
  }
  var result = "<p>Các số Nguyên tố là : " + content + "</p>";
  document.getElementById("infonb1").innerHTML = result;
}
