import Head from './lib/Head.svelte'
import Explore from './lib/Explore.svelte'
import Add from './lib/Add.svelte'

const routes = {
   '/': Head,
   '/explore': Explore,
   '/add': Add,
}

export { routes };