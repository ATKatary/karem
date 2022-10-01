/**
 * Changes the visibility of an element 
 * 
 * @param {*} action either show or hide
 * @param {*} id of the element to change visibility of
 */
export function changeVisibility(action: string, id: string): void {
    const element = document.getElementById(id);
    if (element === null) return;
    switch (action) {
      case "show" : {
        element.style.display = "flex";
        break;
      }
      case "hide" : {
        element.style.display = "none";
        break;
      }
      default : break;
    }
  };
