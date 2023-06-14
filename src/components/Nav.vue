<template>
    <nav class="navbar navbar-expand-lg navbar-primary bg-dark">
        <router-link class="navbar-brand logo" to="/"><img class="logo" src="../../public/temp-logo.png" alt="temp-logo" /></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/skills">Skills</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Career</a>
            </li>
          </ul>
        </div>
      </nav>
</template>

<style scoped>
.logo {
  width: 200px;
}
</style>