<template>
    <div class="anime-grid">
      <div v-for="post in posts" :key="post.slug" class="anime-item">
        <img :src="post.featuredImage" alt="" class="anime-cover" />
        <div class="anime-info">
          <div class="episode">Ep {{ post.episode }}</div>
          <h3 class="title">{{ post.title }}</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { usePageData } from '@vuepress/client'
  
  export default {
    setup() {
      const { pages } = usePageData()
  
      // Check if pages is defined and is an array
      if (!pages ||!Array.isArray(pages)) {
        console.error('Pages is not valid or not found')
        return
      }
  
      // Filter and map only if pages has valid values
      const posts = computed(() => {
        return pages
         .filter(page => page.path && page.path.startsWith('/anime/')) // Check if path is not null or undefined
         .map(page => ({
           ...page.frontmatter,
            path: page.path,
          }))
      })
  
      return { posts }
    },
  }
  </script>

  <style>
  .anime-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .anime-item {
    background: #333;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    color: white;
  }
  
  .anime-cover {
    width: 100%;
    height: auto;
  }
  
  .anime-info {
    padding: 0.5rem;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    text-align: center;
  }
  
  .episode {
    background: #007bff;
    border-radius: 5px;
    padding: 0.2rem 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .title {
    font-size: 1rem;
    margin: 0;
  }
    </style>
  