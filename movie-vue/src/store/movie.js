import { getMovies, insertMovie, deleteMovie } from "@/api/movie";

export default {
  state: {
    movies: [], //state.movies가 여기로 감 그리고 state는 response의 값을 받아옴
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    addMovie(state, movie) {
      state.movies.push(movie);
    },
    removeMovie(state, no) {
      state.movies = state.movies.filter((movie) => movie.no !== no);
    },
  },
  actions: {
    async fetchMovies({ commit }) {
      const response = await getMovies();
      commit("setMovies", response.data); // response.date가 mutation의 movies 로 이동
    },
    async addMovie({ commit }, data) {
      // 값을 보내야 함
      const response = await insertMovie(data);
      commit("addMovie", response.data);
    },
    async delMovie({ commit }, no) {
      await deleteMovie(no);
      commit("removeMovie", no); // 오류나올때는 console에서 network 확인하기
    },
  },
};
