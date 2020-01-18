<template>
  <div>
    <div class="header">
      <img src="../assets/img/logo.png" alt="ロゴ" class="header-logo" />
      <div class="nav">
        <div class="nav-item">
          <ul>
            <li
              v-for="(navItem, index) in navList"
              :key="index"
              :to="navItem.to"
              class="nav-item nav-item-content"
            >
              <a :href="navItem.to">
                {{ navItem.text }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="figure-field">
        {{ aaa }}
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

  async asyncData() {
    return { aaa: await $nuxt.$api.bpi.currentprice_json.$get() }
  }

  navList = [
    { to: '/myPage', text: 'マイページ' },
    { to: '/figure', text: '関連図' }
  ]

  async mounted() {
    await this.$vxm.users.doAnotherAsyncStuff(0)
  }
}
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}

.container {
  display: grid;

  height: 100vh;
  margin: 0 auto;
  text-align: center;

  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
}

.header {
  position: relative;
  grid-row: 4 / 8;
  grid-column: 4 / 8;
  z-index: 10;
  width: 100%;
  height: 20vh;
  min-height: 120px;
  max-height: 180px;
  text-align: center;
  background: #f5c9c6;
  box-shadow: 0 0 10px 0;

  &-logo {
    width: 25%;
    height: 15vh;
    min-height: 87px;
    max-height: 180px;
  }
}

.nav {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5vh;
  min-height: 30px;
  max-height: 50px;
  color: #000;
  text-align: center;
  background: linear-gradient(#f5c9c6, #feeeed);
  border: #feeeed;
  border-style: solid;

  &-logo {
    display: inline-block;
  }

  &-item {
    display: inline-block;

    &-content {
      margin: 2px 20px 2px 0;
      cursor: pointer;

      // background: #fff;
    }
  }
}
.figure-field {
  grid-column: 2 / 12;
  grid-row: 2 / 12;
  background: #f0f8ff;
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
