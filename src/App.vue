<template lang="html">
  <div id="app">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/About">About</RouterLink> |
        <RouterLink to="/About1">About1</RouterLink> |
        <RouterLink to="/Sproutables">Sproutables</RouterLink> |
        <RouterLink to="/FarEast">FarEast</RouterLink> |
        <RouterLink to="/Mediterranean">Mediterranean</RouterLink> |
        <RouterLink to="/VeganMeat">VeganMeat</RouterLink> |
        <RouterLink to="/Grain">Grain</RouterLink> |
        <RouterLink to="/Contact">Contact</RouterLink> |
      </nav>
    </header>

    <main id="content">
      <RouterView :key="$route.path"/>
    </main>

    <footer>
      <p>Page footer</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style scoped>
body {
  background-color: #fafafa;
  color: #1a1b1c;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
a {
  color: #666666;
  font-weight: bold;
}
header,
footer {
  text-align: center;
}
section {
  max-width: 800px;
  margin: 0 auto;
}
section h1 {
}
section p {
  text-align: left;
  justify-content: left;
}
</style>
