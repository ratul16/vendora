import { defineNuxtPlugin } from '#app'
import { faker } from '@faker-js/faker'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('faker', faker)
})
