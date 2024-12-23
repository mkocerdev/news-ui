/** @type {import('vite').UserConfig} */
export default {
    css: {
       preprocessorOptions: { 
         scss: {
           quietDeps: true,
           api: "modern", // or 'modern'
         },
       },
     },
 }