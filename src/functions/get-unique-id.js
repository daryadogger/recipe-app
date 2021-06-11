import {recipes} from "../mocks/recipes";

export const getUniqueId = () => {
    const arr = localStorage["recipes"] ? JSON.parse(localStorage.getItem("recipes")) : recipes;
    const idArr = [];

    arr.forEach(function(el) {
        idArr.push(el.id);
    });

    const id = Math.max.apply(null, idArr) + 1;
    return id;
};