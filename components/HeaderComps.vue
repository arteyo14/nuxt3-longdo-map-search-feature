<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow mb-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/datatable" class="nav-link">Data Table</NuxtLink>
          <NuxtLink to="/search" class="nav-link">Search</NuxtLink>
          <NuxtLink to="#" class="nav-link">Tags</NuxtLink>
          <NuxtLink to="#" class="nav-link">Heat Map</NuxtLink>
          <NuxtLink to="#" class="nav-link">Cluster Map</NuxtLink>
          <NuxtLink to="/routing" class="nav-link">Routing</NuxtLink>
          <NuxtLink to="/testapi" class="nav-link">TEST API</NuxtLink>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>
