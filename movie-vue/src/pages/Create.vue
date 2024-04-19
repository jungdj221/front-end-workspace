<template>
  <div>
    <h1>영화정보 추가</h1>
    <input type="text" v-model="movie.title" placeholder="영화 제목 입력" />
    <input type="text" v-model="movie.genre" placeholder="영화 장르 입력" />
    <input type="text" v-model="movie.actor" placeholder="영화 배우들 입력" />
    <button @click="sendMovie">영화 추가</button>
  </div>
</template>
<script>
// import { insertMovie } from "@/api/movie";
export default {
  name: "CreatePage",
  data() {
    return {
      movie: {
        title: "",
        genre: "",
        actor: "",
      },
    };
  },
  methods: {
    async sendMovie() {
      // await insertMovie(this.movie);
      await this.$store.dispatch("addMovie", this.movie);
      this.movie = { title: "", genre: "", actor: "" };
      this.$router.push("/"); // useNavigate
      // console.log(this.movie);
    },
  },
};
</script>
<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  width: 900px;
  margin: auto;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
  }

  input {
    widows: 100%;
    margin: 5px;
    padding: 5px;
    box-sizing: border-box;
  }
  button {
    margin: 5px;
    widows: 100%;
    background-color: black;
    font-weight: bold;
    color: white;
    cursor: pointer;
  }
}
</style>
