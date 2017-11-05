window.onload = function() {
  const $btns = document.getElementsByClassName("btn");
  const $calculate = document.getElementById("equals");
  const $output = document.getElementById("output");
  const $ac = document.getElementById("ac");

  $ac.addEventListener("click", function() {
    $output.textContent = "";
  });

  for (let $btn of $btns) {
    $btn.addEventListener("click", function() {
      $output.textContent += this.textContent;
    });
  }

  $calculate.addEventListener("click", function() {
    let calc = calculate($output.textContent).toString();
    $output.textContent = calc;
  });
};
