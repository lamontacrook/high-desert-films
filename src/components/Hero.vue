<template>
  <div class="teaser">
    <div class="content">
      <h1>{{ h1 }}</h1>
      <p>{{ description }}</p>
    </div>
    <div class="video">
      <video className='video' autoPlay playsInline muted loop src="https://asset.cloudinary.com/deq7cclno/0fb197a94c6275b422775e32e456125e" poster="/">
        <source src="https://asset.cloudinary.com/deq7cclno/0fb197a94c6275b422775e32e456125e" type="video/mp4" />
      </video>
      <!-- <div style="padding:56.25% 0 0 0;position:relative;">
        <iframe src="https://player.vimeo.com/video/1065677247?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          title="JT Steel Example 7"></iframe>
      </div> -->
    </div>
    <p>{{ videoUrl }}</p>
  </div>
</template>

<script>
export default {
  name: 'HeroPage',
  props: {
    h1: String,
    description: String,
    videoUrl: String,
  }
}
</script>