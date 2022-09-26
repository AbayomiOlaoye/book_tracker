/* Helper function for book removal from DOM */
export const removeBook = (pop) => {
  if (pop.classList.contains('remove')) {
    pop.parentElement.parentElement.remove();
  }
}