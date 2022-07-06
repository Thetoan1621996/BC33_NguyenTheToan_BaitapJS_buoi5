//Bài tập 1
/*Sơ đồ bà khối:
Input: Điểm chuẩn của trường, điểm của ba môn dự thi, khu vực ( gồm A, B, C và X là không thuộc khu vực ưu tiên) và đối tượng (gồm 1, 2, 3 và 0 nếu là đối tượng không ưu tiên.
    Thí sinh đậu là người có tổng điểm lớn hơn hoặc bằng điểm chuẩn và không có môn nào điểm 0)
Output: Tính ra điểm của thí sinh và xác định thí sinh đó đậu hay trượt
Progress:
Tính điểm tổng ba môn
Tình điểm ưu tiên = điểm khu vực + điểm đối tượng trong đó:
- Điểm khu vực: Nếu ở khu vực A sẽ được cộng 2 điểm 
                Nếu ở khu vực B sẽ được cộng 1 điểm
                Nếu ở khu vực C sẽ được cộng 0.5 điểm
                Nếu nhập X thì không ở khu vực ưu tiên nên không được cộng điểm
= Điểm đối tượng: Nếu là đối tượng 1 thì được cộng 2.5 điểm
                  Nếu là đối tượng 2 thì được cộng 1.5 điểm
                  Nếu là đối tượng 3 thì được cộng 1 điểm
                  Nếu nhập 0 thì cộng 0 điểm
Tính điểm tổng kết rồi đem so sánh với điểm chuẩn*/

function totalPoint() {
  var benchMark = 26;
  var num1 = 10;
  var num2 = 10;
  var num3 = 1;
  var area = "A";
  var areaPoint;
  var subject = 1;
  var subjectPoint;

  if (area === "A") {
    areaPoint = 2;
  } else if (area === "B") {
    areaPoint = 1;
  } else if (area === "C") {
    areaPoint = 0.5;
  } else {
    areaPoint = 0;
  }
  if (subject === 1) {
    subjectPoint = 2.5;
  } else if (subject === 2) {
    subjectPoint = 1.5;
  } else if (subject === 3) {
    subjectPoint = 1;
  } else {
    subjectPoint = 0;
  }
  var priorityPoint = areaPoint + subjectPoint;
  var totalPoint = num1 + num2 + num3 + priorityPoint;
  console.log("Tổng điểm của thí sinh là:", totalPoint);
  if (totalPoint >= benchMark && num1 > 0 && num2 > 0 && num3 > 0) {
    console.log("Chúc mừng bạn đã thi đậu");
  } else {
    console.log("Rất tiếc bạn đã trượt kì thi");
  }
}
totalPoint();

//Bài tập 2
/*Sơ đồ ba khối:
Input:
Nhập vào tên và số Kw
Output:
Tính và xuất ra tiền phải trả
Progress:
50kw đầu : 500d/kw -> Tiền điện = số kw * 500
50kw kế: 650d/kw -> Tiền điện = (50 * 500)+((số kw -50)*650)
100kw kế: 850d/kw -> Tiền điện = (50 * 500)+(50 * 650)+ ((số kw - 100) * 850) 
150kw kế: 1100d/kw -> Tiền điện = (50 * 500)+(50 * 650) + (100 * 850) + ((số kw -150) * 1100)
còn lại: 1300d/kw -> Tiền điện = (50 * 500)+(50 * 650) + (100 * 850) + (150 * 1100) + ((số kw - 350) * 1300) */
function electricBill() {
  var name = "Toàn";
  var kw = 140;
  var unitPrice;
  var totalPrice;
  if (kw <= 50) {
    unitPrice = 500;
    totalPrice = kw * unitPrice;
  } else if (kw > 50 && kw <= 100) {
    unitPrice = 650;
    totalPrice = 50 * 500 + (kw - 50) * unitPrice;
  } else if (kw > 100 && kw <= 200) {
    unitPrice = 850;
    totalPrice = 50 * 500 + 50 * 650 + (kw - 100) * unitPrice;
  } else if (kw > 200 && kw <= 350) {
    unitPrice = 1100;
    totalPrice = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 150) * unitPrice;
  } else {
    unitPrice = 1300;
    totalPrice =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * unitPrice;
  }
  console.log("Tiền điện tháng này của", name, "là", totalPrice);
}
electricBill();

