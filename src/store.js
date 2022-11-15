import { reactive } from "vue"

export const store = reactive({
    API_URL: "https://www.breakingbadapi.com/api/characters",
    characters: [],
    error: null,
    defaultMessage: "Attendere, La pagina sta caricando...",
    loading: false,
    selected: "categories",
    firstOption: "Breaking Bad",
    secondOption: "Better Call Saul"
});