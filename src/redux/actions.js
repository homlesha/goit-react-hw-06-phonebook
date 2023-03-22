import { createAction, nanoid } from "@reduxjs/toolkit";

export const addContact = createAction("contact/addContact", ({name, number}) => {
    return {
        payload: {
            name,
            number,
            id: nanoid(),
          },
    }
});
export const deleteContact = createAction("contact/deleteContact");
export const filterContact = createAction("contact/filterContact");