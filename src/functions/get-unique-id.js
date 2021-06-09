export const getUniqueId = () => {
    const arr = (typeof localStorage["recipes"] !== "undefined") ? JSON.parse(localStorage.getItem("recipes")) : Math.random();
    return arr.length;
};