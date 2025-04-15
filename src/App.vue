<template>
  <FilmProductionWebsite />
</template>

<script>
import FilmProductionWebsite from './components/FilmProductionWebsite.vue';

export default {
  name: 'App',
  components: {
    FilmProductionWebsite
  },
  data() {
    return {
      screen: {},
      title:"hello",
      description:"tmp Description",
      videoSrc: "/"
    };
  },
  mounted() {
    console.log('mounted');
    this.fetchData()
  },
  methods: {
    async fetchData() {
      console.log('here');
      const url = 'https://5vxjtszy.api.sanity.io/v2025-04-11/data/query/production?query=*%5B_type+%3D%3D+%22screen%22+%26%26+slug.current+%3D%3D+%24slug%5D%7B+%0A++_id%2C+%0A++title%2C%0A++slug%2C%0A++%22teaser%22%3A+*%5B+_type+%3D%3D+%22teaser%22%5D%0A%7D&%24slug=%22home%22&perspective=published';
      fetch(url).then((response) => {
        response.json().then((screen) => {
          this.screen = screen.result[0];
          this.title = this.screen.teaser[0].h1;
          this.description = this.screen.teaser[0].description;
          this.videoUrl = this.screen.teaser[0].videoUrl
          console.log(this.description, this.videoUrl);
        })
      }).catch((error) => {
        console.error(error);
      });
    },
  },
};

</script>

<style>
@font-face {
  font-family: 'Maison';
  src: url('fonts/Maison-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* @font-face {
  font-family: 'Maison';
  src: url('fonts/Maison-Demi.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
} */
@font-face {
  font-family: 'Maison';
  src: url('fonts/Maison-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

/* @font-face {
  font-family: 'Maison';
  src: url('fonts/Maison-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
} */

#app {
  font-family: Maison, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-size: 103px;
}
</style>