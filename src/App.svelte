<script>
   import Router from 'svelte-spa-router';
   import { routes } from './routes'

   let menuOpen = false;

   function handleClick() {
      menuOpen = !menuOpen;
  }

</script>

<div>
  <header>
     <p class="header-text">BHSMC</p>
     <button on:click={handleClick}>Menu</button>
  </header>
  {#if menuOpen}
     <nav>
      <a on:click={handleClick} href="/#/">Home</a>
      <a on:click={handleClick} href="/#/explore">Explore</a>
     </nav>
  {/if}
</div>
<Router {routes} />



<style>
  header {
     display: flex;
     justify-content: space-between;
     gap: 1rem;
     min-height: 3rem;
  }

  nav {
   margin-top: .2rem;
   width: 100%;
   display: flex;
   flex: 1;
   justify-content: space-evenly;
   position: absolute;
   z-index: 2;
  }

  a {
   font-family: 'Unbounded', cursive;
   text-decoration: none;
   color: rgba(255, 255, 255, 0.87);
  }

  button {
     border: none;
     background-color: transparent;
     color: rgba(255, 255, 255, 0.87);
     font-family: 'Unbounded', cursive;
     font-size: 2rem;
     padding: 0;
     line-height: 2rem;
     padding-top: 1rem;
     padding-right: 3vw;
     padding-bottom: 1rem;
  }

  button:hover {
     cursor: pointer;
  }

  .header-text {
     font-family: 'Unbounded', cursive;
     font-size: 2rem;
     line-height: 2rem;
     margin: 0;
     padding-top: 1rem;
     padding-bottom: 1rem;
     padding-left: 3vw;
  }
</style>