export const SELECTED_BREAD = "SELECTED_BREAD";
export const FILTERED_BREAD = "FILTERED_BREAD";

export const selectedBread = (id) => ({
  type: SELECTED_BREAD,
  breadID: id,
});

export const filteredBread = (id) => ({
    type: FILTERED_BREAD,
    categoryID: id
  });