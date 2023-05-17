function showSuccessMessage() {
    var input1Value = document.getElementById("input1").value;
    var input2Value = document.getElementById("input2").value;
    var input3Value = document.getElementById("input3").value;
    var input4Value = document.getElementById("input4").value;

    if (input1Value && input2Value && input3Value && input4Value) {
        document.getElementById("success-message").style.display = "block";
        document.getElementById("invalid-message").style.display = "none";
      } else {
        document.getElementById("success-message").style.display = "none";
        document.getElementById("invalid-message").style.display = "block";
      }
}

function search() {
  var selectedSeats = document.getElementById("seats").value;
  var selectedCity = document.getElementById("city").value;
  var selectedDate = document.getElementById("date").value;

  // Thực hiện xử lý tìm kiếm kết quả tại đây
  var results = "Kết quả tìm kiếm với: " +
    "Số chỗ: " + selectedSeats +
    ", Tỉnh thành: " + selectedCity +
    ", Ngày nhận xe: " + selectedDate;

  alert(results);
}