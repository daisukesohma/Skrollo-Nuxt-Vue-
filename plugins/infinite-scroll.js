import Vue from 'vue'
import InfiniteLoading from 'vue-infinite-loading';

Vue.use(InfiniteLoading, { system: {
    throttleLimit: 100,
    /* other settings need to configure */
   }});