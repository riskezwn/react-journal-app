import { types } from "../../types/types";

describe("test in types.js", () => {
    test("should be equal", () => {
        const typesExpected = {
            login: "[Auth] Login",
            logout: "[Auth] Logout",

            uiSetError: "[UI] Set error",
            uiRemoveError: "[UI] Remove error",

            uiStartLoading: "[UI] Start loading",
            uiFinishLoading: "[UI] Finish loading",

            notesAddNew: "[Notes] New note",
            notesActive: "[Notes] Set active note",
            notesLoad: "[Notes] Load notes",
            notesUpdate: "[Notes] Updated note saved",
            notesFileUrl: "[Notes] Updated image note",
            notesDelete: "[Notes] Delete note",
            notesLogoutCleaning: "[Notes] LogoutCleaning",
        };

        expect(types).toEqual(typesExpected);
    });
});