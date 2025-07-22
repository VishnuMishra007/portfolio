import { createSlice } from "@reduxjs/toolkit";
import { IAddMessageAction, IMessage } from "../types/project";

const messageSlice = createSlice({
    name: "messageSlice",
    initialState: { messages: [] as IMessage[] },
    reducers: {
        addMessage: (state, action: IAddMessageAction) => {
            state.messages.push(action.payload);
        }
    }
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;