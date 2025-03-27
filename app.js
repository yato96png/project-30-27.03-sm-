
function calculateDiscriminant() {

  let a = parseFloat(prompt("Введите коэффициент a:"));
  let b = parseFloat(prompt("Введите коэффициент b:"));
  let c = parseFloat(prompt("Введите коэффициент c:"));

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Ошибка: Введите числовые значения для коэффициентов!");
    return;
  }

  let discriminant = b * b - 4 * a * c;

  alert("Дискриминант D = " + discriminant.toString());
}

calculateDiscriminant();
