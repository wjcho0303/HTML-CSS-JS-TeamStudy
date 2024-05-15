// 1) 이메일 주소 입력 칸 클릭
// var emailInput = document.querySelector('.email');
// emailInput.onclick = function () {
//   this.setAttribute('font-size', '10');
// };

// 2) 자주 묻는 질문
// Selector: plus, minus, faq1~6, faqAnswer
// faq1~6(i) 중 하나를 클릭했을 때 이벤트:
//    - i번째만 faqAnswer display none 해제
//    - i번째만 plus display none 으로 변경
//    - i번째만 minus display none 해제

function openFaqAnswer() {
  let faqs = document.querySelectorAll("#main .faqSection ol li .faqButton");

  faqs.forEach((faq) => {
    faq.onclick = function () {
      faq.firstElementChild.classList.toggle("on");
      faq.lastElementChild.classList.toggle("on");
      faq.nextElementSibling.classList.toggle("on");
      faqs.forEach((faqOther) => {
        if (faq !== faqOther) {
          faqOther.firstElementChild.classList.add("on");
          faqOther.lastElementChild.classList.remove("on");
          faqOther.nextElementSibling.classList.remove("on");
        }
      });
    };
  });
}

function clickEmailButton() {
  let buttons = document.querySelectorAll("#emailForm #btn");
  buttons.forEach((button) => {
    let input = button.previousElementSibling.querySelector("input");
    button.onclick = function () {
      if (!checkEmailValidation(input.value)) {
        input.focus();
      }
      if (checkEmailValidation(input.value)) {
        button.parentElement.submit();
        // 검증을 통과하면 페이지 이동
        location.href = "../details-view/registration/registration.html";
      }
    };
  });
}

function clickAdButton() {
  let button = document.querySelector(
    ".ad .adContainer .adTextContainer button"
  );
  button.onclick = function () {
    window.location.href = "../details-view/signup/signup.html";
  };
}

function changeEmailInput() {
  let inputs = document.querySelectorAll("#emailForm .email .emailInput");

  inputs.forEach((input) => {
    let isInputChanged = false;
    let isBlurredOnce = false;

    input.oninput = function () {
      isInputChanged = true;

      if (isBlurredOnce) {
        checkInputValidation(input);
      }
    };
    input.onfocus = function () {
      addInputOutline(input);
      shiftLabel(input);
    };
    input.onblur = function () {
      removeInputOutline(input);
      if (input.value.length == 0) {
        unshiftLabel(input);
      }

      if (isInputChanged) {
        isBlurredOnce = true;
        checkInputValidation(input);
      }
    };
  });
}

function checkInputValidation(input) {
  let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  let isValidInput =
    regex.test(input.value) &&
    input.value.length <= 50 &&
    input.value.length >= 5;

  if (input.value.length < 5) {
    inputInvalidate(input);
    invalidEmailText(input, "이메일 주소는 반드시 입력하셔야 합니다.");
  } else if (input.value.length > 50 || !isValidInput) {
    inputInvalidate(input);
    invalidEmailText(input, "이메일 주소를 정확히 입력하세요.");
  } else if (isValidInput) {
    inputValidate(input, input);
  }
}
function invalidEmailText(input, text) {
  input.nextElementSibling.lastElementChild.innerText = text;
}

function inputValidate(input) {
  input.parentElement.classList.remove("invalid");
  input.parentElement.classList.add("valid");
  input.nextElementSibling.classList.remove("on");
}
function inputInvalidate(input) {
  input.parentElement.classList.remove("valid");
  input.parentElement.classList.add("invalid");
  input.nextElementSibling.classList.add("on");
}

function addInputOutline(input) {
  input.parentElement.classList.add("on");
}
function removeInputOutline(input) {
  input.parentElement.classList.remove("on");
}

function shiftLabel(input) {
  input.previousElementSibling.classList.add("on");
}
function unshiftLabel(input) {
  input.previousElementSibling.classList.remove("on");
}

function checkEmailValidation(email) {
  let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return regex.test(email) && email.length <= 50 && email.length >= 5;
}
clickAdButton();
clickEmailButton();
openFaqAnswer();
changeEmailInput();
