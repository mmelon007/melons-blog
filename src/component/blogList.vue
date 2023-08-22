<template>
  <div id="blog-list">
    <ul>
      <li v-for="blog in blogs" :key="blog.id">
        <div class="blog-date">{{ blog.date }}</div>
        <div class="blog-title">{{ blog.title }}</div>
        <div class="blog-tags">
          <template v-for="(tag, index) in blog.tags">
            <div v-if="index < 3" :key="index">
              {{ tag }}
            </div>
            <div v-else-if="index == 3" :key="index">
              +{{ blog.tags.length - 3 }}
            </div>
          </template>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["blogs"],
};
</script>

<style lang="scss" scoped></style>
