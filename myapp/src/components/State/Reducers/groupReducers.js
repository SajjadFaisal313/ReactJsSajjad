export const groupReducer = (state = groupsDefaultState, action) => {
    switch (action.type) {
        case "ADD_NEW_GROUP":
            return { ...state, groups: [...state.groups, action.groups]};
            default:
                return state;
    }
};