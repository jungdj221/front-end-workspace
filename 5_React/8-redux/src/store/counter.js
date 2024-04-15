import { createAction, handleActions } from "redux-actions";

// Action : 프로젝트의 상태에 변화를 일으키는 것
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성 함수(action creator) : action 객체를 만들어 주는 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// reducer : 변화를 일으키는 함수
const counter = handleActions(
  {
    // 이게 초기값
    [INCREASE]: (state, action) => state + 1,
    [DECREASE]: (state, action) => state - 1,
  },
  0 // 초기값
);

export default counter;
