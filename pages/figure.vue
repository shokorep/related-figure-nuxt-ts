<template>
  <div>
    <div class="header-area">
      <div class="header-nav">
        <ul>
          <li
            v-for="(navItem, index) in navList"
            :key="index"
            :to="navItem.to"
            class="header-nav-item"
          >
            <a :href="navItem.to">
              {{ navItem.text }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div>
        <logo />
        <h1 class="title">
          nuxt-ts
        </h1>
        <h2 class="subtitle">
          {{ $vxm.users.fullname }}'s swell Nuxt.js project
        </h2>
        <div class="links">
          <a href="https://nuxtjs.org/" target="_blank" class="button--green">
            Documentation
          </a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import Logo from '~/components/atoms/Logo.vue'

@Component({
  components: { Logo }
})
export default class extends Vue {
  @Prop()
  test!: {
    hoge: string
  }

  navList = [
    { to: '/figure', text: '関連図' },
    { to: '/myPage', text: 'マイページ' }
  ]

  async mounted() {
    await this.$vxm.users.doAnotherAsyncStuff(0)
  }
}
</script>

<style scoped>
.container {
  display: grid;

  height: 100vh;
  margin: 0 auto;
  text-align: center;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

.header-area {
  position: relative;
  grid-row: 1;
  grid-column: 1;

  /* position: fixed;
  top: 0;
  right: 0;
  left: 0; */
  z-index: 10;
  width: 100%;
  height: 50vh;
  min-height: 100px;
  max-height: 230px;
  text-align: center;
  background-color: #333;
  box-shadow: 0 0 10px 0;
}

.header-nav {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5vh;
  min-height: 30px;
  max-height: 40px;
  color: #fff;
  text-align: center;
  background-color: #333;
  border: #ff3f;
  border-style: solid;
}

.header-nav-item {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
  background: #fff;
}

.container > div {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.title {
  font-size: 100px;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  padding-bottom: 15px;
  font-size: 42px;
  font-weight: 300;
  color: #526488;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}

.button--green {
  display: inline-block;
  padding: 10px 30px;
  color: #3b8070;
  text-decoration: none;
  border: 1px solid;
  border-radius: 4px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  padding: 10px 30px;
  margin-left: 15px;
  color: #35495e;
  text-decoration: none;
  border: 1px solid;
  border-radius: 4px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
