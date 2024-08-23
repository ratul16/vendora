<script setup></script>

<template>
  <div class="bg-art">
    <h4 class="brand-color-3">Puppy Details: #{{ product.puppyId }}</h4>
    <h2 class="brand-color-1">£2150</h2>
    <div class="review">
      <router-link to="/product">
        <i class="fa-solid fa-paw"></i>
        {{ product.breed }}
      </router-link>
      <span> 4.5 <i class="fa-solid fa-star"></i> (reviews 10,000 reviews)</span>
    </div>
    <hr />
    <div class="puppy-info">
      <div class="info-card">
        <h6 class="label">Name</h6>
        <small>{{ product.name }}</small>
      </div>
      <div class="info-card">
        <h6 class="label">Breed</h6>
        <small>{{ product.breed }}</small>
      </div>
      <div class="info-card">
        <h6 class="label">Gender</h6>
        <small>{{ product.gender }}</small>
      </div>
      <div class="info-card">
        <h6 class="label">Age</h6>
        <small>{{ formatDate(product.dob) }}</small>
      </div>
      <div class="info-card">
        <h6 class="label">Color</h6>
        <small>{{ product.color }}</small>
      </div>
      <div class="info-card">
        <h6 class="label">Availability</h6>
        <small>{{ product.availability }}</small>
      </div>
      <div class="info-card">
        <h6 class="label">Weight</h6>
        <small>{{ product.size }}</small>
      </div>
      <div class="info-card">
        <h6 class="label">Availability</h6>
        <small>{{ product.availability }}</small>
      </div>
    </div>
    <hr />
    <div class="action">
      <!-- <button class="btn btn-outline-primary btn-custom-outline">As About Me</button> -->
      <button class="btn btn-primary btn-custom" @click="openCheckout(product.puppyId)">
        Take Me Home
      </button>
    </div>
    <hr />
    <div class="info-card bg-art">
      <h5 class="brand-color-1">Need Puppy Guidance?</h5>
      <h5 class="brand-color-3">Call (786) 558-9265</h5>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.review {
  display: flex;
  flex-direction: column;
  i {
    color: #ffc107;
  }
  a {
    color: initial;
    text-decoration: none;
    transition: $transition;
    &:hover {
      color: $brand-color-2;
      i {
        color: $brand-color-2;
      }
    }
    i {
      color: $brand-color-3;
      transition: $transition;
    }
  }
}
.puppy-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  .info-card {
    h6 {
      margin-bottom: 0;
      color: $brand-color-2;
    }
  }
}

@include media-queries("desktop-xl") {
  .puppy-info {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}

@include media-queries("tab-sm") {
  .puppy-info {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
}

@include media-queries("mobile") {
  .puppy-info {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>
