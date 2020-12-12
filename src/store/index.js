import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        UserName: "",
        UserEmail: "",
        UserId: "",
        LibraryId: "",
        BookId: "",
        loginDialog: false,
        error_message: "ciao sono un messaggio di errore generico che può essere modificato :)",
        isbn_obtained_from_image: "",
        InsertBookForm_Dialog: false
    },
    mutations: {
        showLoginDialog(state) {
            state.loginDialog = true
        },
        hideLoginDialog(state) {
            state.loginDialog = false
        },
        setUserId(state, value) {
            state.UserId = value;
        },
        setLibraryId(state, value) {
            state.LibraryId = value;
        },
        setErrorMessage(state, value) {
            state.error_message = value;
        },
        setIsbnObatinedFromImage(state, value) {
            state.isbn_obtained_from_image = value
        },
        show_InsertBookForm_Dialog(state) {
            state.InsertBookForm_Dialog = true
        },
        hide_InsertBookForm_Dialog(state) {
            state.InsertBookForm_Dialog = false
        }
    },
    actions: {},
    modules: {}
})