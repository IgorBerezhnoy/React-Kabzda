type ActionType = {
    type: 'TOGGLE_COLLAPSED'
}
export type StateType={
    collapsed:boolean
}

export const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'TOGGLE_COLLAPSED':
            return {...state,collapsed:!state.collapsed};
        default:
            return {...state};
    }
};