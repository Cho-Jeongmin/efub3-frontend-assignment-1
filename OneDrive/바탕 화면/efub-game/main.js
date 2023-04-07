const human = document.querySelector(".human .choice");
const computer = document.querySelector(".computer .choice");
const scissors = document.querySelector(".scissors");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const result = document.querySelector(".result");
const humanScore = document.querySelector(".score .human");
const computerScore = document.querySelector(".score .computer");
const reset = document.querySelector(".reset");

scissors.onclick = () => {
  human.innerText = "����";
  chooseComputer();
  judge();
};

rock.onclick = () => {
  human.innerText = "����";
  chooseComputer();
  judge();
};

paper.onclick = () => {
  human.innerText = "��";
  chooseComputer();
  judge();
};

reset.onclick = () => {
  human.innerText = "";
  computer.innerText = "";
  result.innerText = "��ư �ϳ��� ��������.";
  computerScore.innerText = 0;
  humanScore.innerText = 0;
};

const chooseComputer = () => {
  const num = Math.floor(Math.random() * 3);
  if (num === 0) computer.innerText = "����";
  else if (num === 1) computer.innerText = "����";
  else if (num === 2) computer.innerText = "��";
};

const judge = () => {
  if (human.innerText === computer.innerText) {
    result.innerText = "�����ϴ�.";
  } else if (
    (human.innerText === "����" && computer.innerText === "����") ||
    (human.innerText === "����" && computer.innerText === "��") ||
    (human.innerText === "��" && computer.innerText === "����")
  ) {
    result.innerText = "��ǻ�Ͱ� �̰���ϴ�.";
    computerScore.innerText = parseInt(computerScore.innerText) + 1;
  } else {
    result.innerText = "�ΰ��� �̰���ϴ�.";
    humanScore.innerText = parseInt(humanScore.innerText) + 1;
  }
};
