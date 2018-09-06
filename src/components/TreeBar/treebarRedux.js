// CONSTENTS
const LIGHT_UP = 'LIGHT_UP'
const LIGHT_DOWN = 'LIGHT_DOWN';

// ACTION CREATORS
export const lghtUp = lightlevel => ({
  type: LIGHT_UP,
  lightlevel
})

export const lightdown = time => ({
    type: LIGHT_DOWN,
    time
});

// REDUCERS
const initialState = {
    light: false,
    lightlevel: 0
}

export default (state = initialState, action) => {
  switch (action.type) {

  case LIGHT_UP:
    return {
        ...state,
        light: true,
        lightlevel: action.payload
    }

  case LIGHT_DOWN:
    return {
        ...state,
        light: false,
        lightlevel: 0
    }

  default:
    return state
  }
}