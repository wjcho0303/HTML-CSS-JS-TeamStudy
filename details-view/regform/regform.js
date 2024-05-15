window.onload = function () {
  // 이메일 조건검사
  var emailInput = document.getElementById("email");
  var emailErrorDiv = document.getElementById("emailError");

  function handleEmailBlur() {
    var emailValue = emailInput.value;

    // 간단한 이메일 형식을 검사하는 정규표현식
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    console.log("Email value:", emailValue);
    if (emailValue.trim() === "") {
      emailInput.classList.add("invalid");
      emailErrorDiv.textContent = "이메일 주소는 반드시 입력하셔야 합니다.";
    } else if (!emailRegex.test(emailValue)) {
      emailInput.classList.add("invalid");
      emailErrorDiv.textContent = "올바른 이메일 주소를 입력하세요.";
    } else {
      emailErrorDiv.textContent = "";
      emailInput.classList.remove("invalid");
    }
  }

  emailInput.addEventListener("blur", handleEmailBlur);

  // 비밀번호 조건검사
  var passwordInput = document.getElementById("password");
  var passwordErrorDiv = document.getElementById("passwordError");

  passwordInput.addEventListener("blur", handlePasswordBlur);

  function handlePasswordBlur() {
    var passwordValue = passwordInput.value;

    if (passwordValue.trim() === "") {
      // 빈 칸인 경우
      passwordInput.classList.add("invalid");
      passwordErrorDiv.textContent = "비밀번호는 반드시 입력하셔야 합니다.";
    } else if (passwordValue.length < 6 || passwordValue.length > 60) {
      // 글자 수가 6자 미만 또는 60자 초과인 경우
      passwordInput.classList.add("invalid");
      passwordErrorDiv.textContent = "비밀번호는 6~60자 사이여야 합니다.";
    } else {
      // 유효한 경우 에러 메시지 숨기고 테두리 색깔 원래 상태로 돌리기
      if (passwordErrorDiv) {
        passwordErrorDiv.textContent = "";
        passwordInput.classList.remove("invalid");
      }
    }
  }

  // '동의하고 계속' 버튼 클릭 시 처리
  var nextButton = document.querySelector(".next-button");
  nextButton.addEventListener("click", handleNextButtonClick);

  function handleNextButtonClick() {
    handleEmailBlur();
    handlePasswordBlur();

    // essential 체크 여부 확인
    var essentialCheckbox = document.querySelector('input[id="essential"]');
    var essentialFalse = document.getElementById("essentialFalse");
    if (!essentialCheckbox.checked) {
      essentialFalse.textContent = "먼저 이용 약관에 동의하셔야 합니다.";
      return;
    } else {
      essentialFalse.textContent = "";
    }

    // 유효한 경우 다음 페이지로 이동
    if (
      !emailInput.classList.contains("invalid") &&
      !passwordInput.classList.contains("invalid")
    ) {
      location.href = "../paymentPicker/paymentPicker.html";
    }
  }

  var select = document.querySelector(".language-picker");
  var options = [
    { text: "한국어", value: "korean" },
    { text: "English", value: "english" },
  ];

  for (var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt.text;
    el.value = opt.value;
    select.appendChild(el);
  }
};
