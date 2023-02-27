// Yoinked from https://javascript.plainenglish.io/sveltekit-github-pages-4fe2844773de
import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/xkstein/Zipper', // Update to point to your repository
  user: {
   name: 'xkstein', // update to use your name
   email: 'jamie.k.eckstein@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);
