import { QUIZ_OPTION_ID, QUIZ_OPTION_STATE } from "../config/quiz";

export const getOptionState = ({ userAnswer, correctOption, optionIndex }) => {
  const currentOption = QUIZ_OPTION_ID[optionIndex];

  const isCorrectAnswer = areEqualArray(userAnswer, correctOption);

  let state = QUIZ_OPTION_STATE.NEUTRAL;

  if (userAnswer && userAnswer.includes(currentOption) && isCorrectAnswer) {
    state = QUIZ_OPTION_STATE.CORRECT;
  } else if (
    userAnswer &&
    userAnswer.includes(currentOption) &&
    isCorrectAnswer === false
  ) {
    state = QUIZ_OPTION_STATE.INCORRECT;
  } else if (correctOption && correctOption.includes(currentOption)) {
    state = QUIZ_OPTION_STATE.CORRECT;
  } else {
    state = QUIZ_OPTION_STATE.NEUTRAL;
  }

  return state;
};

function areEqualArray(arr1, arr2) {
  if (!arr1 && !arr2) return false;

  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((element, index) => element === arr2[index]);
}


export const  getQuizIdFromSlug = (quizSlug) => {
    if(!quizSlug) return;
    // example - api-65bea845761fef1cf7804c4f
    // quiz_id = 65bea845761fef1cf7804c4f
  return quizSlug.split("-").pop();
}

export const formattedDomainSlug = (quizData) => {
  if (!quizData) return;
  return quizData?.quiz_title
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

