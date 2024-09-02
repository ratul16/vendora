<script setup>
const props = defineProps({
  url: {
    type: String,
    default: "",
  },
  isLiked: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="gallery">
    <div class="side-cube">
      <div class="cube" v-for="c in (1, 2, 3, 4)" :key="c">
        <img :src="props.url" alt="" />
      </div>
    </div>
    <div class="cover">
      <img :src="props.url" alt="" />
      <div class="fav-btn">
        <i class="fa-heart" :class="isLiked ? 'fa-solid' : 'fa-regular'"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  display: flex;
  gap: 10px;
  .side-cube {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .cube {
      width: 80px;
      height: 80px;
      border: 1px solid $border-variant-1;
      border-radius: 5px;
      overflow: hidden;
      cursor: pointer;
      transition: $transition;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
      }
      &:hover {
        // @include shadow($background-color);
        border-color: $border-variant-4;
        box-shadow: 0 0.5rem 1rem rgba($background-color, 0.25);
      }
    }
  }
  .cover {
    position: relative;
    width: 100%;
    height: 500px;
    cursor: pointer;
    @include shadow($background-color);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      border-radius: 5px;
    }
    .fav-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      // background-color: $white;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      display: grid;
      place-items: center;
      z-index: 6;
      i {
        // color: $brand-color-1;
      }
    }
  }
}

@include media-queries("tab") {
  .gallery {
    // display: flex;
    flex-direction: column-reverse;
    gap: 10px;
    .side-cube {
      flex-direction: row;
      .cube {
      }
    }
    .cover {
      height: 450px;
    }
  }
}
</style>
