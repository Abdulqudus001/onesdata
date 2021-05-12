export default {
  data: () => ({
    tempJoke: '',
  }),
  computed: {
    jokeOfTheDay() {
      const lsJoke = localStorage.getItem('joke-of-d-day');
      if (lsJoke) {
        const [joke] = JSON.parse(lsJoke).jokes;
        return joke.joke;
      } else if (this.tempJoke) {
        return this.tempJoke;
      }
      return null;
    },
  },
  mounted() {
    this.loadJokes();
  },
  methods: {
    areDatesEqual(dateA, dateB) {
      const dateAMonth = dateA.getMonth();
      const dateAYear = dateA.getFullYear();
      const dateADate = dateA.getDate();

      const dateBMonth = dateB.getMonth();
      const dateBYear = dateB.getFullYear();
      const dateBDate = dateB.getDate();

      if (
        dateAYear === dateBYear &&
        dateAMonth === dateBMonth &&
        dateADate === dateBDate
      ) {
        return true;
      }

      return false;
    },
    isJokeOutdated() {
      let lastJoke = localStorage.getItem('joke-of-d-day');
      if (lastJoke) {
        [lastJoke] = JSON.parse(lastJoke).jokes;
        const jokeDate = new Date(lastJoke.date);
        const date = new Date();
        return this.areDatesEqual(jokeDate, date) === false;
      }
      return true;
    },
    loadJokes() {
      if (this.isJokeOutdated() === true) {
        console.log('Fetching123');
        fetch('https://api.jokes.one/jod?category=knock-knock')
          .then((res) => res.json())
          .then((res) => {
            // Use this for first load when the local storage doesn't contain any joke
            // Since tempJoke is reactive, the joke would show up after it has been fetched
            this.tempJoke = res.contents;
            localStorage.setItem('joke-of-d-day', JSON.stringify(res.contents));
          });
      }
    },
  },
};
