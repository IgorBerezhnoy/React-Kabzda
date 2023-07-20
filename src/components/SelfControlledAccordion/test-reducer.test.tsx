import {reducer, StateType} from './Reducer';

test('reducer should be changed ', () => {
    const state: StateType = {
        collapsed: false
    };

   const newState=reducer(state,{type: 'TOGGLE_COLLAPSED'})
    expect(state.collapsed).toBe(false)
    expect(newState.collapsed).toBe(true)
});