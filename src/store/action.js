export const ActionType = {
    ADD_RECIPE: `main/addRecipe`,
    EDIT_RECIPE: `main/editRecipe`,
    DELETE_RECIPE: `main/deleteRecipe`,
};

export const ActionCreator = {
    addRecipe: (payload) => ({
        type: ActionType.ADD_RECIPE,
        payload
    }),
    editRecipe: (payload) => ({
        type: ActionType.EDIT_RECIPE,
        payload
    }),
    deleteRecipe: (payload) => ({
        type: ActionType.DELETE_RECIPE,
        payload
    }),
};