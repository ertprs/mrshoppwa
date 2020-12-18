/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/



// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  GOOGLE_MAPS_API_KEY: 'YOUR_API_KEY',
  config: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  },

  GOOGLE_WEBCLIENTID: '124018728460-sv8cqhnnmnf0jeqbnd0apqbnu6egkhug.apps.googleusercontent.com',

  BEGINNER_SIDEMENU: [
    {
      title: 'Firebase', url: null, icon: 'flame',
      children: [
        { title: 'Data Operations', url: '/home', icon: 'nuclear' },
        { title: 'Storage', url: '/image-upload', icon: 'analytics' },
        { title: 'Login / Signup', url: '/logout', icon: 'log-in' }
      ]
    },
    {
      title: 'Layouts', url: null, icon: 'apps',
      children: [
        { title: 'Instagram', url: '/insta-tabs', icon: 'logo-instagram', color: 'pink' },
        { title: 'Uber Map Flow', url: '/uber-map-flow', icon: 'map', color: 'black' },
        { title: 'Whatsapp', url: '/whatsapp', icon: 'logo-whatsapp' },
        { title: 'Profile', url: '/profile1', icon: 'person' }
      ]
    },
    {
      title: 'Login & Signups', url: null, icon: 'log-in',
      children: [
        { title: 'Layout 1', url: '/register-1', icon: 'partly-sunny' },
        { title: 'Layout 2', url: '/login-1', icon: 'flame' },
        { title: 'Layout 3', url: '/login-2', icon: 'star' },
        { title: 'Layout 4', url: '/login-3', icon: 'moon' }
      ]
    },
    {
      title: 'Sidemenu Layouts', url: null, icon: 'reader', module: 'sidemenu',
      children: [
        { title: 'Overlay', url: '/home', icon: 'partly-sunny' },
        { title: 'Small Grid', url: '/home', icon: 'ellipsis-vertical' },
        { title: 'Full screen', url: '/home', icon: 'car-sport' },
        { title: 'Small Grid 2', url: '/home', icon: 'apps' },
        { title: 'Profile', url: '/home', icon: 'star' },
        { title: 'Circular ', url: '/home', icon: 'aperture' }
      ]
    },
    {
      title: 'Chat Lists', url: null, icon: 'chatbox',
      children: [
        { title: 'Elegance', url: '/elegance', icon: 'bulb' },
        { title: 'Pastry', url: '/pastry', icon: 'pizza' },
        { title: 'Artboard', url: '/artboard', icon: 'brush' },
        { title: 'Rose', url: '/rose-list', icon: 'rose' }
      ]
    },
    {
      title: 'Chat Screens', url: null, icon: 'chatbubbles',
      children: [
        { title: 'Fluid', url: '/fluid', icon: 'water' },
        { title: 'Business', url: '/business', icon: 'briefcase' },
        { title: 'Bubble', url: '/bubble', icon: 'radio-button-off' },
        { title: 'Rose', url: '/rose', icon: 'rose' },
        { title: 'Blocks', url: '/blocks', icon: 'square' },
        { title: 'Breeze', url: '/breeze', icon: 'sunny' },
        { title: 'Minimal', url: '/minimal', icon: 'remove' },
        { title: 'Starbucks', url: '/starbucks', icon: 'star' },
        { title: 'Classic', url: '/classic', icon: 'aperture' }
      ]
    },
    {
      title: 'Video Playlist', url: null, icon: 'film',
      children: [
        { title: 'Youtube Home', url: '/youtube-home-playlist', icon: 'apps' },
        { title: 'Youtube Playlist', url: '/grid-youtube-playlist', icon: 'logo-youtube', color: 'gray' },
        { title: 'Large Cards', url: '/video-large-card', icon: 'logo-youtube' },
      ]
    },
    {
      title: 'Grid Layouts', url: null, icon: 'list',
      children: [
        { title: 'Shop Grid', url: '/shop-grid', icon: 'grid' },
        { title: 'Square Grid', url: '/square-grid', icon: 'image' },
        { title: 'Full Grid', url: '/full-grid', icon: 'easel' },
        { title: 'Masonry Grid', url: '/masonry-grid', icon: 'images' },
        { title: 'Card Grid X3', url: '/grid-x3', icon: 'grid' },
        { title: 'Product Grid X2', url: '/grid-x2', icon: 'grid' }
      ]
    },
    {
      title: 'List and Sliders', url: null, icon: 'albums',
      children: [
        { title: 'Card Slider', url: '/card-slider', icon: 'images' },
        { title: 'Product Cards', url: '/product-card', icon: 'menu' },
        { title: 'Large Cards', url: '/large-card', icon: 'albums' },
        { title: 'Expandable List', url: '/expandable-list', icon: 'file-tray-full-sharp' },
        { title: 'Event Cards', url: '/event-card', icon: 'bonfire' },
        { title: 'Movie Ticket', url: '/movie-ticket', icon: 'film' },
        { title: 'Sliders', url: '/sliders', icon: 'phone-landscape' },
        { title: 'Filtering List', url: '/filtering-list', icon: 'funnel' }
      ]
    },

  ],

  STARTUP_SIDEMENU: [
    {
      title: 'Wordpress', url: null, icon: 'logo-wordpress',
      children: [
        { title: 'Blogs', url: '/blogs', icon: 'list' },
        { title: 'Single Blog', url: '/blogpage', icon: 'document', disabled: true },
      ]
    },
    {
      title: 'Layouts 2', url: null, icon: 'apps',
      children: [
        { title: 'Tinder', url: '/tinder-cards', icon: 'heart', color: 'red' },
        { title: 'Netflix', url: '/netflix', icon: 'film' }
      ]
    },
    {
      title: 'Addons', url: null, icon: 'cog',
      children: [
        { title: 'Globalization', url: '/translate', icon: 'school' },
        { title: 'List reordering', url: '/reorder', icon: 'menu' },
        { title: 'Pull to refresh', url: '/refresh', icon: 'refresh' },
        { title: 'Infinite Scroll', url: '/infinite', icon: 'infinite' },
        { title: 'Custom Fonts', url: '/customfonts', icon: 'school' },
        { title: 'Content Loader', url: '/content-loader', icon: 'refresh-circle' },
        { title: 'Content Loader 2', url: '/content-loader2', icon: 'logo-ionic' },
        { title: 'Date Time Pickers', url: '/datetimepickers', icon: 'calendar' },
        { title: 'Settings', url: '/settings', icon: 'cog' }
      ]
    },

  ],
  PRO_SIDEMENU: [
    {
      title: 'Addons Pro', url: null, icon: 'chatbox',
      children: [
        { title: 'AdMob', url: '/admob', icon: 'tv', device: true },
        { title: 'Barcode Scanner', url: '/bar-code', icon: 'barcode', device: true },
        { title: 'Image Cropper', url: '/cropper', icon: 'aperture', device: true },
        { title: 'Google Autocomplete ', url: '/google-autocomplete', icon: 'code' },
        { title: 'Google Places', url: '/google-places', icon: 'globe' },
        { title: 'Social Sharing', url: '/social-share', icon: 'share', device: true },
        { title: 'Sweet Alerts', url: '/sweet-alert', icon: 'alert' },
        { title: 'In-app browser', url: '/in-app-browser', icon: 'logo-chrome' },
        { title: 'Local Notifications', url: '/local-notification', icon: 'logo-google' },
        { title: 'Social login', url: '/logout', icon: 'logo-google' }
      ]
    },
    { title: 'Phaser Game', url: '/phaser', icon: 'game-controller' },
    {
      title: 'Woocommerce', url: null, icon: 'logo-wordpress',
      children: [
        { title: 'Products', url: '/woocommerce-products', icon: 'file-tray-full' },
        { title: 'Product detail', url: '/product-details', icon: 'gift' },
        { title: 'My Orders', url: '/orders', icon: 'pricetags' },
        { title: 'Cart', url: '/cart', icon: 'cart' }
      ]
    },
    {
      title: 'Payment Gateways', url: null, icon: 'card',
      children: [
        { title: 'Stripe', url: '/stripepayment', icon: 'file-tray-full', device: true },
        { title: 'Paypal', url: '/paypalpayment', icon: 'gift', device: true },
        { title: 'Apple Pay', url: '/applepay', icon: 'logo-apple', apple: true },
        { title: 'Stripe PWA', url: '/stripe-web', icon: 'file-tray-full' },
        { title: 'Paypal PWA', url: '/paypal-web', icon: 'gift' }
      ]
    }
  ],
  SIDEMENU_LAYOUTS: [
    {
      title: 'Home',
      icon: 'home',
      active: true
    },
    {
      title: 'My Wallet',
      icon: 'wallet'
    },
    {
      title: 'History',
      icon: 'time'
    },
    {
      title: 'Notif',
      icon: 'notifications'
    },
    {
      title: 'Invite',
      icon: 'gift'
    },
    {
      title: 'Settings',
      icon: 'settings'
    },
    {
      title: 'Logout',
      icon: 'log-out'
    },
  ],
  APP_SLIDES: [
    { title: 'IONIC 5 FULL APP', imageUrl: 'assets/imgs/ionic-white.png', slideDesc: 'Explore the ultimate Ionic 5 resource for all your app development', slideBg: '#1e90ff' },
    { title: 'FIREBASE', imageUrl: 'assets/imgs/firebase.png', slideDesc: 'Use Firebase Authentication, social login, storage and data queries for your application', slideBg: '#f28131' },
    { title: 'WOO-COMMERCE', imageUrl: 'assets/imgs/woocommerce.png', slideDesc: 'Use Woocommerce directly in your app. Use all shop features of an e-commerce platform.', slideBg: '#9f5afd' },
    { title: 'LAYOUTS', imageUrl: 'assets/imgs/layouts.png', slideDesc: 'Explore from a large number of layouts and create your perfect app', slideBg: '#2ecc71' }
  ],
  USER_ADDRESS: [
    { name: 'John Deo', flat: 'D Block', locality: 'Jaipur', nickName: 'office' },
    { name: 'Aditya Gour', flat: 'D Block Malviya Nagar', locality: 'Jaipur', nickName: 'Home' }
  ],
  USER_CARD_BILLING_DETAILS: [
    { cardNumber: '3124', expiryDate: '12/22', image: 'assets/profile/visa.png' },
    { cardNumber: '4564', expiryDate: '03/25', image: 'assets/profile/mastercard.png' }
  ],
  GRID_IMAGES: [
    { title: 'V I N Y A S A', image: 'assets/products/vinyasa.jpg' },
    { title: 'A S H T A N G A', image: 'assets/products/ashtanga.jpg' },
    { title: 'I Y E N G A R', image: 'assets/products/gallery7.jpg' },
    { title: 'B I K R A M', image: 'assets/products/bikram.jpg' },
    { title: 'J I V A M U K T I', image: 'assets/products/jivamukti.jpg' },
    { title: 'P O W E R', image: 'assets/products/power.jpg' },
    { title: 'S I V A N A N D A', image: 'assets/products/sivananda.jpg' },
    { title: 'Y I N', image: 'assets/products/yin.jpg' },

  ],
  YOUTUBE_LARGE_CARD: [
    { id: 1, title: 'Elon Musk in Interstellar Parody', image: 'assets/video/elon.jpg', length: '4:49', author: 'Kazifoo', views: '951K', date: '2 months ago', avatar: 'assets/video/av-musk.jpg', youtube: true, source: 'https://www.youtube.com/embed/zewyvQEqsS4' },
    { id: 2, title: 'Marvel Studios\' Avengers: Endgame - Official Trailer', image: 'assets/video/marvel.jpg', length: '6:49', author: 'Marvel', views: '951K', date: '6 months ago', avatar: 'assets/video/av-marvel.jpg', youtube: true, source: 'https://www.youtube.com/embed/LPhqL4DqzBg' },
    { id: 3, title: 'The Hidden Meaning in the Shawshank Redemption', image: 'assets/video/shawshank.jpg', length: '12:00', author: 'Movee', views: '951K', date: '1 months ago', avatar: 'assets/video/av-trailer.jpg', youtube: true, source: 'https://www.youtube.com/embed/-2hWKvq35RM' },
    { id: 4, title: 'JOHN WICK 3 Trailer English Subtitled ', image: 'assets/video/wick.jpg', length: '3:49', author: 'TrailersWD', views: '951K', date: '1 months ago', avatar: 'assets/video/av-wick.jpg', youtube: true, source: 'https://www.youtube.com/embed/rPCzao7H6n8' },
    { id: 5, title: 'Why Was This Plane Invulnerable: The SR-71 Blackbird Story', image: 'assets/video/blackbird.jpg', length: '5:49', author: 'ArmyHX', views: '951K', date: '12 months ago', avatar: 'assets/video/av-black.jpg', youtube: true, source: 'https://www.youtube.com/embed/th-RoJBP0Vs' },
    { id: 6, title: 'Elon Musk in Interstellar Parody', image: 'assets/video/elon.jpg', length: '4:49', author: 'Kazifoo', views: '951K', date: '2 months ago', avatar: 'assets/video/av-musk.jpg', youtube: true, source: 'https://www.youtube.com/embed/zewyvQEqsS4' },
    { id: 7, title: 'Marvel Studios\' Avengers: Endgame - Official Trailer', image: 'assets/video/marvel.jpg', length: '6:49', author: 'Marvel', views: '951K', date: '6 months ago', avatar: 'assets/video/av-marvel.jpg', youtube: true, source: 'https://www.youtube.com/embed/LPhqL4DqzBg' },
    { id: 8, title: 'The Hidden Meaning in the Shawshank Redemption', image: 'assets/video/shawshank.jpg', length: '12:00', author: 'Movee', views: '951K', date: '1 months ago', avatar: 'assets/video/av-trailer.jpg', youtube: true, source: 'https://www.youtube.com/embed/-2hWKvq35RM' },
    { id: 9, title: 'JOHN WICK 3 Trailer English Subtitled ', image: 'assets/video/wick.jpg', length: '3:49', author: 'TrailersWD', views: '951K', date: '1 months ago', avatar: 'assets/video/av-wick.jpg', youtube: true, source: 'https://www.youtube.com/embed/rPCzao7H6n8' },
    { id: 10, title: 'Why Was This Plane Invulnerable: The SR-71 Blackbird Story', image: 'assets/video/blackbird.jpg', length: '5:49', author: 'ArmyHX', views: '951K', date: '12 months ago', avatar: 'assets/video/av-black.jpg', youtube: true, source: 'https://www.youtube.com/embed/th-RoJBP0Vs' }
  ],
  YOUTUBE_HOME_PLAYLIST: [
    { title: 'Elon Musk in Interstellar Parody', image: 'assets/video/elon.jpg', length: '4:49', author: 'Kazifoo', views: '951K', date: '2 months ago', avatar: 'assets/video/av-musk.jpg', likes: 1345, dislikes: 567, subscribers: '13k', source: 'https://www.youtube.com/embed/zewyvQEqsS4?autoplay=1&cc_load_policy=1' },
    { title: 'Marvel Studios\' Avengers: Endgame - Official Trailer', image: 'assets/video/marvel.jpg', length: '6:49', author: 'Marvel', views: '951K', date: '6 months ago', avatar: 'assets/video/av-marvel.jpg', likes: 1345, dislikes: 567, subscribers: '13k', source: 'https://www.youtube.com/embed/LPhqL4DqzBg?autoplay=1' },
    { title: 'The Hidden Meaning in the Shawshank Redemption', image: 'assets/video/shawshank.jpg', length: '12:00', author: 'Movee', views: '951K', date: '1 months ago', avatar: 'assets/video/av-trailer.jpg', likes: 1345, dislikes: 567, subscribers: '13k', source: 'https://www.youtube.com/embed/-2hWKvq35RM' },
    { title: 'JOHN WICK 3 Trailer English Subtitled ', image: 'assets/video/wick.jpg', length: '3:49', author: 'TrailersWD', views: '951K', date: '1 months ago', avatar: 'assets/video/av-wick.jpg', likes: 1345, dislikes: 567, subscribers: '13k', source: 'https://www.youtube.com/embed/rPCzao7H6n8' },
    { title: 'Why Was This Plane Invulnerable: The SR-71 Blackbird Story', image: 'assets/video/blackbird.jpg', length: '5:49', author: 'ArmyHX', views: '951K', date: '12 months ago', avatar: 'assets/video/av-black.jpg', likes: 1345, dislikes: 567, subscribers: '13k', source: 'https://www.youtube.com/embed/th-RoJBP0Vs' },
    { title: 'Elon Musk in Interstellar Parody', image: 'assets/video/elon.jpg', length: '4:49', author: 'Kazifoo', views: '951K', date: '2 months ago', avatar: 'assets/video/av-musk.jpg', likes: 1345, dislikes: 567, subscribers: '13k', source: 'https://www.youtube.com/embed/zewyvQEqsS4' },
    { title: 'Marvel Studios\' Avengers: Endgame - Official Trailer', image: 'assets/video/marvel.jpg', length: '6:49', author: 'Marvel', views: '951K', date: '6 months ago', avatar: 'assets/video/av-marvel.jpg', likes: 1345, dislikes: 567, subscribers: '13k', source: 'https://www.youtube.com/embed/LPhqL4DqzBg' },
    { title: 'The Hidden Meaning in the Shawshank Redemption', image: 'assets/video/shawshank.jpg', length: '12:00', author: 'Movee', views: '951K', date: '1 months ago', avatar: 'assets/video/av-trailer.jpg', likes: 1345, dislikes: 567, subscribers: '13k', source: 'https://www.youtube.com/embed/-2hWKvq35RM' },
    { title: 'JOHN WICK 3 Trailer English Subtitled ', image: 'assets/video/wick.jpg', length: '3:49', author: 'TrailersWD', views: '951K', date: '1 months ago', avatar: 'assets/video/av-wick.jpg', likes: 1345, dislikes: 567, subscribers: '13k', source: 'https://www.youtube.com/embed/rPCzao7H6n8' },
    { title: 'Why Was This Plane Invulnerable: The SR-71 Blackbird Story', image: 'assets/video/blackbird.jpg', length: '5:49', author: 'ArmyHX', views: '951K', date: '12 months ago', avatar: 'assets/video/av-black.jpg', likes: 1345, dislikes: 567, subscribers: '13k', source: 'https://www.youtube.com/embed/th-RoJBP0Vs' }
  ],
  INSTAGRAM_DATA: [
    {
      title: 'Striker II',
      subtitle: 'Hey there !',
      img: 'https://www.dropbox.com/s/fmv3y88ccpuajgo/musk.jpg?raw=1',
      avatar: 'https://www.dropbox.com/s/149w8lj8w2mkdig/trump.jpg?raw=1',
      desc: 'Lorem ipsum dolor what is this multi-line text',
      likes: '5 likes'
    },
    {
      title: 'Akena',
      subtitle: 'Mountain lover !',
      img: 'https://www.dropbox.com/s/nmwasfye1ur01la/mountain.jpg?raw=1',
      avatar: 'https://www.dropbox.com/s/3hro9t6dqpq12gm/biker.jpg?raw=1',
      desc: 'Lorem ipsum dolor what is this multi-line text',
      likes: '1115 likes'
    },
    {
      title: 'Adam Chris',
      subtitle: 'Is dil ke laddoo fat gaye',
      img: 'https://www.dropbox.com/s/u2zkqe6wu2pt9ke/boy.jpg?raw=1',
      avatar: 'https://www.dropbox.com/s/n6eg08194q7nxvl/codergirl.jpg?raw=1',
      desc: 'Lorem ipsum dolor what is this multi-line text',
      likes: '10 likes '
    },
    {
      title: 'Jim Halpert',
      subtitle: 'Yipee ka yay',
      img: 'https://www.dropbox.com/s/6b6cirog51q9sfm/coder.jpg?raw=1',
      avatar: 'https://www.dropbox.com/s/ct8s21p1mznn0l2/aptaya.jpg?raw=1',
      desc: 'Lorem ipsum dolor what is this multi-line text',
      likes: '100 likes '
    },
    {
      title: 'Micheal Scott',
      subtitle: 'Scmarf Kajaaak',
      img: 'https://www.dropbox.com/s/3hro9t6dqpq12gm/biker.jpg?raw=1',
      avatar: 'https://www.dropbox.com/s/149w8lj8w2mkdig/trump.jpg?raw=1',
      desc: 'Lorem ipsum dolor what is this multi-line text',
      likes: '100 likes '
    },

  ],
  INSTA_GRID_GALLERY: [
    'assets/imgs/grid/1.png',
    'assets/imgs/grid/2.png',
    'assets/imgs/grid/4.png',
    'assets/imgs/grid/5.png',
    'assets/imgs/grid/6.png',
    'assets/imgs/grid/7.png',
    'assets/imgs/grid/8.png'
  ],
  NETFLIX_MOVIE_DATA: {
    banner: {
      image: 'assets/netflix/exorcist.jpg',
      title: 'The Exorcist'
    },
    upcoming: {
      image: 'assets/netflix/got.jpg',
      title: 'Game of Thrones',
      date: 'July 29'
    },
    traysBefore: [
      {
        title: 'Popular on Netflix',
        items: [
          { title: 'The Grand Budapest Hotel', image: 'assets/netflix/9.png' },
          { title: 'The Divergent', image: 'assets/netflix/10.png' },
          { title: 'Edge of Tomorrow', image: 'assets/netflix/11.png' },
          { title: 'Frozen', image: 'assets/netflix/12.png' },
          { title: 'Fault in our stars', image: 'assets/netflix/13.png' },
          { title: 'Maleficent', image: 'assets/netflix/14.png' },
          { title: 'The Fury', image: 'assets/netflix/1.png' },
          { title: 'Gone Girl', image: 'assets/netflix/2.png' },
          { title: 'Guardians of the Galaxy', image: 'assets/netflix/3.png' },
          { title: 'Tombstones', image: 'assets/netflix/4.png' },
          { title: 'Captain America', image: 'assets/netflix/5.png' },
          { title: 'Let\'s be cops', image: 'assets/netflix/6.png' },
          { title: 'Annabelle', image: 'assets/netflix/7.png' },
          { title: 'Transformers', image: 'assets/netflix/8.png' }
        ]
      },
      {
        title: 'Recommended for you',
        items: [
          { title: 'Annabelle', image: 'assets/netflix/7.png' },
          { title: 'The Fury', image: 'assets/netflix/1.png' },
          { title: 'The Grand Budapest Hotel', image: 'assets/netflix/9.png' },
          { title: 'The Divergent', image: 'assets/netflix/10.png' },
          { title: 'Let\'s be cops', image: 'assets/netflix/6.png' },
          { title: 'Edge of Tomorrow', image: 'assets/netflix/11.png' },
          { title: 'Fault in our stars', image: 'assets/netflix/13.png' },
          { title: 'Maleficent', image: 'assets/netflix/14.png' },
          { title: 'Frozen', image: 'assets/netflix/12.png' },
          { title: 'Transformers', image: 'assets/netflix/8.png' },
          { title: 'Guardians of the Galaxy', image: 'assets/netflix/3.png' },
          { title: 'Gone Girl', image: 'assets/netflix/2.png' },
          { title: 'Tombstones', image: 'assets/netflix/4.png' },
          { title: 'Captain America', image: 'assets/netflix/5.png' },
        ]
      }
    ],
    traysAfter: [
      {
        title: 'My List',
        items: [
          { title: 'Captain America', image: 'assets/netflix/5.png' },
          { title: 'Annabelle', image: 'assets/netflix/7.png' },
          { title: 'The Fury', image: 'assets/netflix/1.png' },
          { title: 'Edge of Tomorrow', image: 'assets/netflix/11.png' },
          { title: 'Fault in our stars', image: 'assets/netflix/13.png' },
          { title: 'Maleficent', image: 'assets/netflix/14.png' },
        ]
      },
      {
        title: 'Continue watching for Abhi',
        continue: true,
        items: [
          { title: 'Frozen', image: 'assets/netflix/12.png' },
          { title: 'Transformers', image: 'assets/netflix/8.png' },
          { title: 'Guardians of the Galaxy', image: 'assets/netflix/3.png' },
          { title: 'Gone Girl', image: 'assets/netflix/2.png' }
        ]
      },
    ]
  },
  NETFLIX_SERIES_DATA: {
    banner: {
      image: 'assets/netflix/wonder.jpg',
      title: 'Wonder Woman'
    },
    upcoming: {
      image: 'assets/netflix/into-the-wild.jpg',
      title: 'Into the wild',
      date: 'March 29'
    },
    traysBefore: [
      {
        title: 'Popular on Netflix',
        items: [
          { title: 'The Fury', image: 'assets/netflix/1.png' },
          { title: 'Gone Girl', image: 'assets/netflix/2.png' },
          { title: 'Guardians of the Galaxy', image: 'assets/netflix/3.png' },
          { title: 'Tombstones', image: 'assets/netflix/4.png' },
          { title: 'Captain America', image: 'assets/netflix/5.png' },
          { title: 'Let\'s be cops', image: 'assets/netflix/6.png' },
          { title: 'Annabelle', image: 'assets/netflix/7.png' },
          { title: 'Transformers', image: 'assets/netflix/8.png' },
          { title: 'The Grand Budapest Hotel', image: 'assets/netflix/9.png' },
          { title: 'The Divergent', image: 'assets/netflix/10.png' },
          { title: 'Edge of Tomorrow', image: 'assets/netflix/11.png' },
          { title: 'Frozen', image: 'assets/netflix/12.png' },
          { title: 'Fault in our stars', image: 'assets/netflix/13.png' },
          { title: 'Maleficent', image: 'assets/netflix/14.png' },
        ]
      },
      {
        title: 'Recommended for you',
        items: [
          { title: 'Frozen', image: 'assets/netflix/12.png' },
          { title: 'Transformers', image: 'assets/netflix/8.png' },
          { title: 'Guardians of the Galaxy', image: 'assets/netflix/3.png' },
          { title: 'Gone Girl', image: 'assets/netflix/2.png' },
          { title: 'Tombstones', image: 'assets/netflix/4.png' },
          { title: 'Captain America', image: 'assets/netflix/5.png' },
          { title: 'Annabelle', image: 'assets/netflix/7.png' },
          { title: 'The Fury', image: 'assets/netflix/1.png' },
          { title: 'The Grand Budapest Hotel', image: 'assets/netflix/9.png' },
          { title: 'The Divergent', image: 'assets/netflix/10.png' },
          { title: 'Let\'s be cops', image: 'assets/netflix/6.png' },
          { title: 'Edge of Tomorrow', image: 'assets/netflix/11.png' },
          { title: 'Fault in our stars', image: 'assets/netflix/13.png' },
          { title: 'Maleficent', image: 'assets/netflix/14.png' },
        ]
      }
    ],
    traysAfter: [
      {
        title: 'My List',
        items: [
          { title: 'Captain America', image: 'assets/netflix/5.png' },
          { title: 'Annabelle', image: 'assets/netflix/7.png' },
          { title: 'The Fury', image: 'assets/netflix/1.png' },
          { title: 'Edge of Tomorrow', image: 'assets/netflix/11.png' },
          { title: 'Fault in our stars', image: 'assets/netflix/13.png' },
          { title: 'Maleficent', image: 'assets/netflix/14.png' },
        ]
      },
      {
        title: 'Continue watching for Abhi',
        continue: true,
        items: [
          { title: 'Frozen', image: 'assets/netflix/12.png' },
          { title: 'Transformers', image: 'assets/netflix/8.png' },
          { title: 'Guardians of the Galaxy', image: 'assets/netflix/3.png' },
          { title: 'Gone Girl', image: 'assets/netflix/2.png' }
        ]
      },
    ]
  },
  WHATSAPP_CHAT_DATA: [
    {
      name: 'Jovenica Alba',
      image: 'assets/chat/chat/chat1.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      count: '2',
      time: '12:17',
      call: '(3) January 09/27/2019',
      video: 'videocam'
    }, {
      name: 'Oliver',
      image: ' assets/chat/chat/chat2.jpg',
      description: 'Rahim: thanks!',
      time: '12:17',
      call: '(3) January 09/26/2019',
      video: 'videocam'
    }, {
      name: 'George',
      image: ' assets/chat/chat/chat3.jpg',
      description: 'Kajor P: share your contact please!',
      count: '2',
      time: 'Yesterday',
      call: '(1) January 09/26/2018',
      video: 'videocam'
    }, {
      name: 'Harry',
      image: ' assets/chat/chat/chat3.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      time: 'Sunday',
      call: '(5) February 08/20/2018',
      video: 'videocam'
    }, {
      name: 'Jack',
      image: ' assets/chat/chat/chat5.jpg',
      description: 'Yes! that\'s right call him right now.',
      past: '09/27/2015',
      call: '(4) February 28/20/2018',
      phone: 'call'
    }, {
      name: 'Jacob',
      image: ' assets/chat/chat/chat6.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      count: '1',
      past: '09/27/2015',
      call: '(4) February 28/20/2015',
      phone: 'call'
    }, {
      name: 'Noah',
      image: ' assets/chat/chat/chat7.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      past: '09/27/2015',
      call: '(3) February 28/20/2016',
      phone: 'call'
    }, {
      name: 'Charlie',
      image: ' assets/chat/chat/chat8.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      count: '6',
      past: '09/27/2015',
      call: '(3) December 28/20/2017',
      phone: 'call'
    }, {
      name: 'Logan',
      image: ' assets/chat/chat/chat1.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      past: '09/27/2015',
      call: '09/27/2015',
      phone: 'call'
    }, {
      name: 'Harrison',
      image: ' assets/chat/chat/chat2.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

      past: '09/27/2015',
      call: '09/27/2015',
      video: 'videocam'
    }, {
      name: 'Sebastian',
      image: ' assets/chat/chat/chat3.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

      past: '09/17/2016',
      call: '(3) December 28/20/2017',
      video: 'videocam'
    }, {
      name: 'Zachary',
      image: ' assets/chat/chat/chat3.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      past: '09/07/2017',
      call: '09/27/2015',
      video: 'videocam'
    }, {
      name: 'Elijah',
      image: ' assets/chat/chat/chat5.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      past: '09/09/2018',
      call: '09/27/2015',
      phone: 'call'
    }
  ],
  INFINITY_SCROLL_DATA: [
    {
      title: 'Mark Twain',
      author: 'Enappd'
    },
    {
      title: 'John Hopkins',
      author: 'Fat Cat'
    },
    {
      title: 'Dude Mister',
      author: 'Enappd'
    },
    {
      title: 'Alice Cooper',
      author: 'Cute Cat'
    },
    {
      title: 'Sashi Tharoor',
      author: 'Enappd'
    },
    {
      title: 'Mohandas',
      author: 'Fat Cat'
    },
    {
      title: 'Premchand',
      author: 'Enappd'
    },
    {
      title: 'Ramdhari',
      author: 'Cute Cat'
    },
    {
      title: 'Hermoine Granger',
      author: 'Fat Cat'
    },
    {
      title: 'Harry Potter',
      author: 'Enappd'
    },
    {
      title: 'Mindy Magon',
      author: 'Cute Cat'
    },
    {
      title: 'Jack London',
      author: 'Enappd'
    },
    {
      title: 'Mumbai',
      author: 'Fat Cat'
    },
    {
      title: 'Himalaya',
      author: 'Enappd'
    },
    {
      title: 'Divakar',
      author: 'Cute Cat'
    }
  ],
  REFRESH_DATA: [
    {
      title: 'Burt Bear',
      author: 'Enappd'
    },
    {
      title: 'Isabella Iguana',
      author: 'Fat Cat'
    },
    {
      title: 'Donald Duck',
      author: 'Enappd'
    },
    {
      title: 'Lionel Lion',
      author: 'Cute Cat'
    }
  ],
  INAPP_BORWSER_BLANKURL: [
    {
      title: 'Tinder Clone starter app',
      imageUrl: 'assets/addons3/tinder280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Grocery Shopping Full App',
      imageUrl: 'assets/addons3/store2Door280x280.png',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Nearbuy clone starter app',
      imageUrl: 'assets/addons3/nearBy280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Premium Chat themes starter app',
      imageUrl: 'assets/addons3/chatterfree-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Yoga | Gym | Fitness app starter',
      imageUrl: 'assets/addons3/yogaAppBanner280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Ticket Booking app starter',
      imageUrl: 'assets/addons3/evento-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Taxi Booking and Driver app starter',
      imageUrl: 'assets/addons3/taxi-combo-min-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Taxi Booking and Driver app starter',
      imageUrl: 'assets/addons3/taxi-combo-min-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Taxi Driver app starter',
      imageUrl: 'assets/addons3/ionDriver-300x300.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'E-commerce app starter ',
      imageUrl: 'assets/addons3/shoppr280x280.png',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Taxi / Cab Booking app starter ',
      imageUrl: 'assets/addons3/ioncab-banner-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Real estate app starter',
      imageUrl: 'assets/addons3/roofon-banner-square-fb-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Short Viral news app starter',
      imageUrl: 'assets/addons3/60words-280x280.jpg',
      titleUrl: 'http://enappd.com/',
    },
    {
      title: 'Gym | Fitness | Yoga app starter',
      imageUrl: 'assets/addons3/fitculture-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Grocery shopping & delivery app starter',
      imageUrl: 'assets/addons3/store2door-banner-square-fb-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Buzzfeed style app / viral news app starter',
      imageUrl: 'assets/addons3/viralfeed280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Doctor search /appointment app starter',
      imageUrl: 'assets/addons3/medix-banner-square280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Netflix style video streaming app starter',
      imageUrl: 'assets/addons3/teleflix280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Spotify style/Music streaming app starte',
      imageUrl: 'assets/addons3/audrix280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Hotel booking app starter',
      imageUrl: 'assets/addons3/stayinn-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Online video course app starter',
      imageUrl: 'assets/addons3/vidzee-banner-square-fb-280x280.png',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Food delivery / search app starter',
      imageUrl: 'assets/addons3/foodie280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Tinder Clone starter app',
      imageUrl: 'assets/addons3/tinder-portfolio280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
    {
      title: 'Full Quiz app starter with Front-end and Backend',
      imageUrl: 'assets/addons3/quizr-banner-square-280x280.jpg',
      titleUrl: 'https://enappd.com/',
    },
  ],
  SOCIAL_SHARE: [
    {
      heading: 'WhatsApp',
      headerImage: 'assets/addons3/whatsapp-icon-280x280.png',
      shareData: [
        { title: 'Share text', text: 'Ionic 5 Full App', clickEvent: 'share', shareType: 'shareViaWhatsApp' },
        { title: 'Share Image', image: 'https://store.enappd.com/wp-content/uploads/2019/03/700x700_2-1-280x280.jpg', clickEvent: 'share', shareType: 'shareViaWhatsApp' },
        { title: 'Share text with Image(android)', text: 'Ionic 5 Full App', image: 'https://store.enappd.com/wp-content/uploads/2019/03/700x700_2-1-280x280.jpg', clickEvent: 'share', shareType: 'shareViaWhatsApp' }
      ]
    },
    {
      heading: 'Facebook',
      headerImage: 'assets/addons3/facebook1-280x280.png',
      shareData: [
        { title: 'Share text with URL', text: 'Ionic 5 Full App', url: 'https://store.enappd.com/product/ionic-4-full-app/', shareType: 'shareViaFacebook', clickEvent: 'share' },
        { title: 'Share external image', image: 'https://store.enappd.com/wp-content/uploads/2019/03/700x700_2-1-280x280.jpg', clickEvent: 'share', shareType: 'shareViaFacebook' },
      ]
    },
    {
      heading: 'Twitter',
      headerImage: 'assets/addons3/twitter.png',
      shareData: [
        { title: 'Share text with URL', text: 'Ionic 5 Full App', url: 'https://store.enappd.com/product/ionic-4-full-app/', shareType: 'shareViaTwitter', clickEvent: 'share' },
        { title: 'Share Image', image: 'https://store.enappd.com/wp-content/uploads/2019/03/700x700_2-1-280x280.jpg', clickEvent: 'share', shareType: 'shareViaTwitter' },
        { title: 'Share text with URL & Image', text: 'Ionic 5 Full App', url: 'https://store.enappd.com/product/ionic-4-full-app/', image: 'https://store.enappd.com/wp-content/uploads/2019/03/700x700_2-1-280x280.jpg', clickEvent: 'share', shareType: 'shareViaTwitter' }
      ]
    },
    {
      heading: 'Instagram',
      headerImage: 'assets/addons3/Instagram-circle.png',
      shareData: [{ title: 'Share text with Image', text: 'Ionic 5 Full App', image: 'https://store.enappd.com/wp-content/uploads/2019/03/700x700_2-1-280x280.jpg', clickEvent: 'share', shareType: 'shareViaInstagram' }]
    },
    {
      heading: 'Email',
      headerImage: 'assets/addons3/mail.png',
      shareData: [
        { title: 'Check if email sharing is available', share: null, image: null, clickEvent: 'canShareViaEmail' },
        { title: 'Share with email', share: { body: 'This is body content for email', subject: 'Email subject', to: ['recipient@example.org'] }, image: ['https://store.enappd.com/wp-content/uploads/2019/03/700x700_2-1-280x280.jpg'], clickEvent: 'shareViaEmail' }
      ]
    }
  ],
  SWEET_ALERT_DATA: [
    { title: 'A basic message', buttonTitle: 'Click Here', clickEvent: 'basicMessage' },
    { title: 'Normal Alert', buttonTitle: 'Click Here', clickEvent: 'normalAlert' },
    { title: 'An Error message', buttonTitle: 'Click Here', clickEvent: 'errorMessage' },
    { title: 'A title with a text under', buttonTitle: 'Click Here', clickEvent: 'titleWithText' },
    { title: 'A modal with a title, an error icon, a text, and a footer', buttonTitle: 'Click Here', clickEvent: 'modalWithTitleError' },
    { title: 'A modal window with a long content inside', buttonTitle: 'Click Here', clickEvent: 'windowModal' },
    { title: 'Custom HTML description and buttons with ARIA labels', buttonTitle: 'Click Here', clickEvent: 'customHtml' },
    { title: 'A custom top positioned dialog', buttonTitle: 'Click Here', clickEvent: 'customTopEnd' },
    { title: 'A custom center positioned dialog', buttonTitle: 'Click Here', clickEvent: 'customCenter' },
    { title: 'A custom bottom positioned dialog', buttonTitle: 'Click Here', clickEvent: 'customBottom' },
    { title: 'Custom animation Tada', buttonTitle: 'Click Here', clickEvent: 'animationTada' },
    { title: 'Custom animation Swing', buttonTitle: 'Click Here', clickEvent: 'animationSwing' },
    { title: 'Custom animation Jello', buttonTitle: 'Click Here', clickEvent: 'animationJello' },
    { title: 'Custom animation Flip', buttonTitle: 'Click Here', clickEvent: 'animationFlip' },
    { title: 'A confirm dialog, with a function attached', buttonTitle: 'Click Here', clickEvent: 'confirmDialogFunction' },
    { title: 'Passing a parameter, you can execute something else for "Cancel', buttonTitle: 'Click Here', clickEvent: 'confirmDialogPassingparameter' },
    { title: 'A message with a custom image and CSS animation disabled', buttonTitle: 'Click Here', clickEvent: 'confirmDialogWithImage' },
    { title: 'Custom width, padding, background and animated Image', buttonTitle: 'Click Here', clickEvent: 'confirmDialogWithImage' },
    { title: 'AJAX request example', buttonTitle: 'Click Here', clickEvent: 'ajaxRequest' },
    { title: 'Dynamic queue example', buttonTitle: 'Click Here', clickEvent: 'dynamicQuery' },
    { title: 'Timer function example', buttonTitle: 'Click Here', clickEvent: 'timerFunction' },

  ],
  APPLE_PAY_ITEM: [
    {
      label: '3 x Basket Items',
      amount: 49.99
    },
    {
      label: 'Next Day Delivery',
      amount: 3.99
    },
    {
      label: 'My Fashion Company',
      amount: 53.98
    }
  ],
  APPLE_PAY_SHIPPING_METHOD: [
    {
      identifier: 'NextDay',
      label: 'NextDay',
      detail: 'Arrives tomorrow by 5pm.',
      amount: 3.99
    },
    {
      identifier: 'Standard',
      label: 'Standard',
      detail: 'Arrive by Friday.',
      amount: 4.99
    },
    {
      identifier: 'SaturdayDelivery',
      label: 'Saturday',
      detail: 'Arrive by 5pm this Saturday.',
      amount: 6.99
    }
  ],
  ARTBOARD_CHAT_LIST: [
    {
      name: 'Zachary Murphy',
      image: 'assets/chat/chat/boy.png',
      description: 'Terneuzen',
      status: 'online',
      count: '2',
      time: '2 min ago'

    }, {
      name: 'Virginia Hansen',
      image: ' assets/chat/chat/man.png',
      description: 'spijkernisse',
      status: 'offline',
      badge: '4',
      sendTime: '18:34',
      group: true

    }, {
      name: 'Billy Boyd',
      image: ' assets/chat/chat/woman.png',
      description: 'Sittard-Geleen',
      status: 'offline',
      count: '2',
      sendTime: '18:30',
      broadcast: true

    }, {
      name: 'Tiffany Hayes',
      image: ' assets/chat/chat/boy2.png',
      description: 'Veenendaal',
      status: 'online',
      badge: '6',
      sendTime: '17:55'
    }, {
      name: 'Jeese Jensen',
      image: ' assets/chat/chat/man1.png',
      description: ' Purmerend',
      status: 'offline',
      sendTime: '17:55'
    }, {
      name: 'Jacob',
      image: ' assets/chat/chat/boy1.png',
      description: 'Greensboro',
      status: 'offline',
      count: '1',
      sendTime: '17:50'
    }, {
      name: 'Noah',
      image: ' assets/chat/chat/boy.png',
      description: 'Greensboro',
      status: 'offline',
      sendTime: '17:40'
    }, {
      name: 'Charlie',
      image: 'assets/chat/chat/woman.png',
      description: 'Greensboro',
      status: 'online',
      count: '6',
      badge: '8',
      sendTime: '17:40'
    }, {
      name: 'Logan',
      image: 'assets/chat/chat/man.png',
      description: 'Greensboro',
      status: 'offline',
      badge: '8',
      sendTime: '17:40'
    }, {
      name: 'Harrison',
      image: 'assets/chat/chat/boy2.png',
      description: 'Greensboro',
      status: 'offline',
      sendTime: '17:40'
    }, {
      name: 'Sebastian',
      image: 'assets/chat/chat/boy1.png',
      description: 'Greensboro',
      status: 'online',
      sendTime: '17:40'
    }, {
      name: 'Zachary',
      image: 'assets/chat/chat/man.png',
      description: 'Greensboro',
      status: 'offline',
      sendTime: '17:40'
    }, {
      name: 'Elijah',
      image: 'assets/chat/chat/boy.png',
      description: 'Greensboro',
      status: 'offline',
      badge: '8',
      sendTime: '17:40'
    }
  ],
  ARTBOARD_USER_DETAILS: {
    name: 'Patricia Howard',
    tagline: 'St. Paul'
  },
  BLOCKS_CHAT_LIST: [
    {
      userId: 'HealthBot',
      userName: 'HealthBot',
      time: '12:00',
      message: 'Hello, have you seen this great chat UI',
      id: 0, read: true, delivered: true, sent: true, sender: 1,
    },
    {
      userId: 'Me',
      userName: 'Me',
      time: '12:03',
      message: 'Yeah, I see this. This looks great. ',
      id: 1, read: true, delivered: true, sent: false, sender: 0,
    },
    {
      userId: 'HealthBot',
      userName: 'HealthBot',
      time: '12:05',
      message: '... and this is absolutely free, anyone can use',
      id: 3, read: true, delivered: true, sent: true, sender: 1,
    },
    {
      userId: 'Me',
      userName: 'Me',
      time: '12:06',
      message: 'wow ! that\'s great. Love to see more of such chat themes',
      id: 4, read: true, delivered: true, sent: false, sender: 0,
    },
    {
      userId: 'HealthBot',
      userName: 'HealthBot',
      time: '12:07',
      message: 'Oh there are several other designs. Check all their designs on their website enappd.com',
      id: 5, read: true, delivered: true, sent: true, sender: 1,
    }
  ],
  BREEZE_CHAT_DATA: [
    {
      userId: 'driver',
      userName: 'driver',
      userAvatar: 'assets/driver.jpeg',
      time: '10:26 AM',
      message: 'hii !!',
    },
    {
      userId: 'driver',
      userName: 'driver',
      userAvatar: 'assets/user.jpeg',
      message: 'you in office ?',
    },
    {
      userId: 'driver',
      userName: 'driver',
      userAvatar: 'assets/driver.jpeg',
      message: 'plz share the images ?',
    },
    {
      userId: 'Me',
      userName: 'Me',
      userAvatar: 'assets/user.jpeg',
      time: '11:40 AM',
      message: 'Sure !',
    }
  ],
  BREEZE_USER_DETAILS: {
    firstName: 'Bill',
    lastName: 'Kenny',
    image: 'assets/chat/chat/boy.png',
    status: 'Online'
  },
  BREEZE_GALLERY_DATA: [
    'assets/chat/chat/gallery6.jpeg',
    'assets/chat/chat/gallery2.jpeg',
    'assets/chat/chat/gallery4.jpeg',
    'assets/chat/chat/gallery5.jpeg',
    'assets/chat/chat/gallery3.jpeg',
    'assets/chat/chat/gallery1.jpeg',
    'assets/chat/chat/gallery3.jpeg',
    'assets/chat/chat/gallery6.jpeg',
    'assets/chat/chat/gallery3.jpeg',
    'assets/chat/chat/gallery1.jpeg',
    'assets/chat/chat/gallery5.jpeg',
    'assets/chat/chat/gallery4.jpeg',
    'assets/chat/chat/gallery2.jpeg',
    'assets/chat/chat/gallery3.jpeg',
    'assets/chat/chat/gallery6.jpeg',
    'assets/chat/images/sg2.jpg'
  ],
  BREEZE_SHARE_LIST: [
    { image: 'assets/chat/avatars/1.png', name: 'Alexa' },
    { image: 'assets/chat/avatars/2.png', name: 'Hayden' },
    { image: 'assets/chat/avatars/3.png', name: 'Cosmo' },
    { image: 'assets/chat/avatars/4.png', name: 'Carl' },
    { image: 'assets/chat/avatars/5.png', name: 'Maggie' },
    { image: 'assets/chat/avatars/6.png', name: 'Thomas' }
  ],
  BUBBLE_CHAT_DATA: [
    {
      userId: 'HealthBot',
      userName: 'HealthBot',
      userAvatar: 'assets/chat/chat/chat3.jpg',
      time: '12:00',
      message: 'Hello, have you seen this great chat UI',
      id: 0
    },
    {
      userId: 'Me',
      userName: 'Me',
      userAvatar: 'assets/chat/chat/chat5.jpg',
      time: '12:03',
      message: 'Yeah, I see this. This looks great. ',
      id: 1,
    },
    {
      userId: 'HealthBot',
      userName: 'HealthBot',
      userAvatar: 'assets/chat/chat/chat3.jpg',
      time: '12:05',
      message: '... and this is absolutely free, anyone can use',
      id: 3
    },
    {
      userId: 'Me',
      userName: 'Me',
      userAvatar: 'assets/chat/chat/chat5.jpg',
      time: '12:06',
      message: 'wow ! that\'s great. Love to see more of such chat themes',
      id: 4
    },
    {
      userId: 'HealthBot',
      userName: 'HealthBot',
      userAvatar: 'assets/chat/chat/chat3.jpg',
      time: '12:07',
      message: 'Oh there are several other designs. Check all their designs on their website enappd.com',
      id: 5
    }
  ],
  BUSINESS_CHAT_DATA: [
    {
      userId: 'Me',
      userName: 'Me',
      userAvatar: 'assets/chat/user.jpg',
      time: '12:01 pm',
      message: 'Hey, that\'s an awesome chat UI',
      upertext: 'Hello'
    },
    {
      userId: 'driver',
      userName: 'driver',
      userAvatar: 'assets/chat/user.jpeg',
      time: '12:01 pm',
      message: 'Right, it totally blew my mind. They have other great apps and designs too!',
      upertext: 'Hii'
    },
    {
      userId: 'Me',
      userName: 'Me',
      userAvatar: 'assets/chat/user.jpg',
      time: '12:01 pm',
      message: 'And it is free ?',
      upertext: 'How r u '
    },
    {
      userId: 'driver',
      userName: 'driver',
      userAvatar: 'assets/chat/user.jpeg',
      time: '12:01 pm',
      message: 'Yes, totally free. Beat that !',
      upertext: 'good'
    },
    {
      userId: 'Me',
      userName: 'Me',
      userAvatar: 'assets/chat/user.jpg',
      time: '12:01 pm',
      message: 'Wow, that\'s so cool. Hats off to the developers. This is gooood stuff',
      upertext: 'How r u '
    },
    {
      userId: 'driver',
      userName: 'driver',
      userAvatar: 'assets/chat/user.jpeg',
      time: '12:01 pm',
      message: 'Check out their other designs.',
      upertext: 'good'
    },
    {
      userId: 'Me',
      userName: 'Me',
      userAvatar: 'assets/chat/user.jpg',
      time: '12:01 pm',
      message: 'Have you seen their other apps ? They have a collection of ready-made apps for developers. This makes my life so easy. I love it! ',
      upertext: 'How r u '
    },
    {
      userId: 'driver',
      userName: 'driver',
      userAvatar: 'assets/chat/user.jpeg',
      time: '12:01 pm',
      message: 'Well, good things come in small package after all',
      upertext: 'good'
    },
  ],
  BUSINESS_SENDER_CHAT_DATA: [
    {
      messageId: '1',
      userId: '140000198202211138',
      userName: 'Luff',
      userImgUrl: 'assets/chat/user.jpg',
      toUserId: '210000198410281948',
      toUserName: 'Hancock',
      userAvatar: 'assets/chat/user.jpeg',
      time: 1488349800000,
      message: 'Hey, that\'s an awesome chat UI',
      status: 'success'

    },
    {
      messageId: '2',
      userId: '210000198410281948',
      userName: 'Hancock',
      userImgUrl: 'assets/chat/user.jpeg',
      toUserId: '140000198202211138',
      toUserName: 'Luff',
      userAvatar: 'assets/chat/user.jpg',
      time: 1491034800000,
      message: 'Right, it totally blew my mind. They have other great apps and designs too !',
      status: 'success'
    },
    {
      messageId: '3',
      userId: '140000198202211138',
      userName: 'Luff',
      userImgUrl: 'assets/chat/user.jpg',
      toUserId: '210000198410281948',
      toUserName: 'Hancock',
      userAvatar: 'assets/chat/user.jpeg',
      time: 1491034920000,
      message: 'And it is free ?',
      status: 'success'
    },
    {
      messageId: '4',
      userId: '210000198410281948',
      userName: 'Hancock',
      userImgUrl: 'assets/chat/user.jpeg',
      toUserId: '140000198202211138',
      toUserName: 'Luff',
      userAvatar: 'assets/chat/user.jpg',
      time: 1491036720000,
      message: 'Yes, totally free. Beat that ! ',
      status: 'success'
    },
    {
      messageId: '5',
      userId: '210000198410281948',
      userName: 'Hancock',
      userImgUrl: 'assets/chat/user.jpeg',
      toUserId: '140000198202211138',
      toUserName: 'Luff',
      userAvatar: 'assets/chat/user.jpg',
      time: 1491108720000,
      message: 'Wow, that\'s so cool. Hats off to the developers. This is gooood stuff',
      status: 'success'
    },
    {
      messageId: '6',
      userId: '140000198202211138',
      userName: 'Luff',
      userImgUrl: 'assets/chat/user.jpg',
      toUserId: '210000198410281948',
      toUserName: 'Hancock',
      userAvatar: 'assets/chat/user.jpeg',
      time: 1491231120000,
      message: 'Check out their other designs.',
      status: 'success'
    }
  ],
  CLASSIC_CHAT_DATA: [
    {
      userId: 'HealthBot',
      userName: 'HealthBot',
      userAvatar: 'assets/chat/chat/chat3.jpg',
      time: '12:00',
      message: 'Hello, have you seen this great chat UI',
      id: 0
    },
    {
      userId: 'Me',
      userName: 'Me',
      userAvatar: 'assets/chat/chat/chat5.jpg',
      time: '12:03',
      message: 'Yeah, I see this. This looks great. ',
      id: 1,
    },
    {
      userId: 'HealthBot',
      userName: 'HealthBot',
      userAvatar: 'assets/chat/chat/chat3.jpg',
      time: '12:05',
      message: '... and this is absolutely free, anyone can use',
      id: 3
    },
    {
      userId: 'Me',
      userName: 'Me',
      userAvatar: 'assets/chat/chat/chat5.jpg',
      time: '12:06',
      message: 'wow ! that\'s great. Love to see more of such chat themes',
      id: 4
    },
    {
      userId: 'HealthBot',
      userName: 'HealthBot',
      userAvatar: 'assets/chat/chat/chat3.jpg',
      message: 'Oh there are several other designs. Check all their designs on their website enappd.com',
      id: 5
    }
  ],
  CLASSIC_FOOTER_JSON: [
    {
      icon: 'images',
      label: 'Image'
    },
    {
      icon: 'call',
      label: 'Phone'
    },
    {
      icon: 'mail-unread',
      label: 'Red'
    },
    {
      label: 'Document',
      icon: 'radio-button-on'
    },
    {
      icon: 'location-sharp',
      label: 'Position'
    },
    {
      icon: 'videocam',
      label: 'Video'
    }
  ],
  CLASSIC_CHAT_LIST_DATA: [
    {
      name: 'Jovenica Alba',
      image: 'assets/chat/chat/chat1.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      count: '2',
      time: '12:17',
      call: '(3) January 09/27/2019',
      video: 'videocam'
    },
    {
      name: 'Oliver',
      image: ' assets/chat/chat/chat2.jpg',
      description: 'Rahim: thanks!',
      time: '12:17',
      call: '(3) January 09/26/2019',
      video: 'videocam'
    },
    {
      name: 'George',
      image: ' assets/chat/chat/chat3.jpg',
      description: 'Kajor P: share your contact please!',
      count: '2',
      time: 'Yesterday',
      call: '(1) January 09/26/2018',
      video: 'videocam'
    },
    {
      name: 'Harry',
      image: ' assets/chat/chat/chat3.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      time: 'Sunday',
      call: '(5) February 08/20/2018',
      video: 'videocam'
    },
    {
      name: 'Jack',
      image: ' assets/chat/chat/chat5.jpg',
      description: 'Yes! that\'s right call him right now.',
      past: '09/27/2015',
      call: '(4) February 28/20/2018',
      phone: 'call'
    },
    {
      name: 'Jacob',
      image: ' assets/chat/chat/chat6.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      count: '1',
      past: '09/27/2015',
      call: '(4) February 28/20/2015',
      phone: 'call'
    },
    {
      name: 'Noah',
      image: ' assets/chat/chat/chat7.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      past: '09/27/2015',
      call: '(3) February 28/20/2016',
      phone: 'call'
    },
    {
      name: 'Charlie',
      image: ' assets/chat/chat/chat8.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      count: '6',
      past: '09/27/2015',
      call: '(3) December 28/20/2017',
      phone: 'call'
    },
    {
      name: 'Logan',
      image: ' assets/chat/chat/chat1.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      past: '09/27/2015',
      call: '09/27/2015',
      phone: 'call'
    },
    {
      name: 'Harrison',
      image: ' assets/chat/chat/chat2.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

      past: '09/27/2015',
      call: '09/27/2015',
      video: 'videocam'
    },
    {
      name: 'Sebastian',
      image: ' assets/chat/chat/chat3.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

      past: '09/17/2016',
      call: '(3) December 28/20/2017',
      video: 'videocam'
    },
    {
      name: 'Zachary',
      image: ' assets/chat/chat/chat3.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      past: '09/07/2017',
      call: '09/27/2015',
      video: 'videocam'
    },
    {
      name: 'Elijah',
      image: ' assets/chat/chat/chat5.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      past: '09/09/2018',
      call: '09/27/2015',
      phone: 'call'
    }
  ],
  ELEGANCE_CHAT_LIST: [
    {
      name: 'Jovenica',
      image: 'assets/chat/chat/user.jpeg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      status: 'online',
      count: '2',
      time: '2 min ago'

    }, {
      name: 'Oliver',
      image: ' assets/chat/chat/user3.jpeg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      status: 'offline',
      badge: '4',
      sendTime: '18:34',
      group: true

    }, {
      name: 'George',
      image: ' assets/chat/chat/user4.jpeg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      status: 'offline',
      count: '2',
      sendTime: '18:30',
      broadcast: true

    }, {
      name: 'Harry',
      image: ' assets/chat/chat/user1.jpeg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      status: 'online',
      badge: '6',
      sendTime: '17:55'
    }, {
      name: 'Jack',
      image: ' assets/chat/chat/user.jpeg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      status: 'offline',
      sendTime: '17:55'
    }, {
      name: 'Jacob',
      image: ' assets/chat/chat/user3.jpeg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      status: 'offline',
      count: '1',
      sendTime: '17:50'
    }, {
      name: 'Noah',
      image: ' assets/chat/chat/user2.jpeg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      status: 'offline',
      sendTime: '17:40'
    }, {
      name: 'Charlie',
      image: ' assets/chat/chat/user4.jpeg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      status: 'online',
      count: '6',
      badge: '8',
      sendTime: '17:40'
    }, {
      name: 'Logan',
      image: ' assets/chat/chat/user.jpeg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      status: 'offline',
      badge: '8',
      sendTime: '17:40'
    }, {
      name: 'Harrison',
      image: ' assets/chat/chat/user2.jpeg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      status: 'offline',
      sendTime: '17:40'
    }, {
      name: 'Sebastian',
      image: ' assets/chat/chat/user1.jpeg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      status: 'online',
      sendTime: '17:40'
    }, {
      name: 'Zachary',
      image: ' assets/chat/chat/user4.jpeg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      status: 'offline',
      sendTime: '17:40'
    }, {
      name: 'Elijah',
      image: ' assets/chat/chat/user3.jpeg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      status: 'offline',
      badge: '8',
      sendTime: '17:40'
    }
  ],
  FLUID_CHAT_DATA: [
    { text: 'Hey, that\'s an awesome chat UI', sender: 0, image: 'assets/chat/images/sg2.jpg' },
    { text: 'Right, it totally blew my mind', sender: 1, image: 'assets/chat/images/sg1.jpg', read: true, delivered: true, sent: true },
    { text: 'And it is free ?', sender: 0, image: 'assets/chat/images/sg2.jpg' },
    { text: 'Yes, totally free', sender: 1, image: 'assets/chat/images/sg1.jpg', read: true, delivered: true, sent: true },
    { text: 'Wow, that\'s so cool', sender: 0, image: 'assets/chat/images/sg2.jpg' },
    { text: 'Hats off to the developers', sender: 1, image: 'assets/chat/images/sg1.jpg', read: false, delivered: true, sent: true },
    { text: 'Oh yes, this is gooood stuff', sender: 0, image: 'assets/chat/images/sg2.jpg' },
    { text: 'Check out their other designs ', sender: 1, image: 'assets/chat/images/sg1.jpg', read: false, delivered: false, sent: true }

  ],
  MINIMAL_CHAT_DATA: [
    {
      userId: 'HealthBot',
      userName: 'HealthBot',
      userAvatar: 'assets/chat/chat/chat3.jpg',
      time: '12:00',
      message: 'Hello, have you seen this great chat UI',
      id: 0,
      status: true
    },
    {
      userId: 'Me',
      userName: 'Me',
      userAvatar: 'assets/chat/chat/chat3.jpg',
      time: '12:03',
      message: 'Yeah, I see this. This looks great. ',
      id: 1,
      status: true
    },
    {
      userId: 'HealthBot',
      userName: 'HealthBot',
      userAvatar: 'assets/chat/chat/chat3.jpg',
      time: '12:05',
      message: '... and this is absolutely free, anyone can use',
      id: 3,
      status: false
    },
    {
      userId: 'Me',
      userName: 'Me',
      userAvatar: 'assets/chat/chat/chat3.jpg',
      time: '12:06',
      message: 'wow ! that\'s great. Love to see more of such chat themes',
      id: 4,
      status: true
    },
    {
      userId: 'HealthBot',
      userName: 'HealthBot',
      userAvatar: 'assets/chat/chat/chat3.jpg',
      time: '12:07',
      message: 'Oh there are several other designs. Check all their designs on their website enappd.com',
      id: 5,
      status: false
    }
  ],
  PASTRY_CHAT_LIST: [
    {
      name: 'Jovenica Alba',
      image: 'assets/chat/chat/chat1.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      count: '2',
      time: '12:17'
    }, {
      name: 'Oliver',
      image: ' assets/chat/chat/chat2.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      time: '12:17'
    }, {
      name: 'George',
      image: ' assets/chat/chat/chat3.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      count: '2',
      time: 'Yesterday'
    }, {
      name: 'Harry',
      image: ' assets/chat/chat/chat3.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      time: 'Sunday'
    }, {
      name: 'Jack',
      image: ' assets/chat/chat/chat5.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

      time: '11:15'
    }, {
      name: 'Jacob',
      image: ' assets/chat/chat/chat6.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      count: '1',
      time: 'Yesterday'
    }, {
      name: 'Noah',
      image: ' assets/chat/chat/chat7.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      time: 'Monday'
    }, {
      name: 'Charlie',
      image: ' assets/chat/chat/chat8.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      count: '6',
      time: '07:00'
    }, {
      name: 'Logan',
      image: ' assets/chat/chat/chat1.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      time: 'Yesterday'
    }, {
      name: 'Harrison',
      image: ' assets/chat/chat/chat2.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

      time: 'Yesterday'
    }, {
      name: 'Sebastian',
      image: ' assets/chat/chat/chat3.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

      time: 'Yesterday'
    }, {
      name: 'Zachary',
      image: ' assets/chat/chat/chat3.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      time: 'Today'
    }, {
      name: 'Elijah',
      image: ' assets/chat/chat/chat5.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      time: '18:25'
    }
  ],
  ROSE_CHAT_DATA: [
    {
      userId: 'HealthBot',
      userName: 'HealthBot',
      userAvatar: 'assets/chat/chat/chat3.jpg',
      time: '12:00',
      message: 'Hello, have you seen this great chat UI',
      id: 0,
      status: 'checkmark'
    },
    {
      userId: 'Me',
      userName: 'Me',
      userAvatar: 'assets/chat/chat/chat5.jpg',
      time: '12:03',
      message: 'Yeah, I see this. This looks great. ',
      id: 1,
      status: 'checkmark',
      name: 'Diana Nicole'

    },
    {
      userId: 'HealthBot',
      userName: 'HealthBot',
      userAvatar: 'assets/chat/chat/chat3.jpg',
      time: '12:05',
      message: '... and this is absolutely free, anyone can use',
      id: 3,
      status: 'checkmark-done-outline'
    },
    {
      userId: 'Me',
      userName: 'Me',
      userAvatar: 'assets/chat/chat/chat5.jpg',
      time: '12:06',
      message: 'wow ! that"s great. Love to see more of such chat themes',
      id: 4,
      status: 'checkmark',
      name: 'Diana Nicole'

    },
    {
      userId: 'HealthBot',
      userName: 'HealthBot',
      userAvatar: 'assets/chat/chat/chat3.jpg',
      time: '12:07',
      message: 'Oh there are several other designs. Check all their designs on their website enappd.com',
      id: 5,
      status: 'checkmark-done-outline'
    }
  ],
  ROSE_FOOTER_JSON: [
    {
      icon: 'images',
      label: 'Image'
    }, {
      icon: 'call',
      label: 'Phone'
    }, {
      icon: 'mail-unread',
      label: 'Red'
    }, {
      label: 'Document',
      icon: 'radio-button-on'
    }, {
      icon: 'location-sharp',
      label: 'Position'
    }, {
      icon: 'videocam',
      label: 'Video'
    }
  ],
  ROSE_CHAT_LIST: [
    {
      name: 'Enappd',
      image: 'assets/chat/chat/enappd.png',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      count: '2',
      time: '11:32 PM',
      distance: '6km',
      type: 'PRO', crown: 'assets/chat/chat/crown.png'

    }, {
      name: 'Jovenica Alba',
      image: 'assets/chat/chat/chat1.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      count: '2',
      time: '12:17',
      distance: '6km',
      type: 'PRO',
      crown: 'assets/chat/chat/crown.png',
    }, {
      name: 'Oliver',
      image: ' assets/chat/chat/chat2.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      time: '12:17',
      distance: '6km',
      type: 'Basic',
      crown: 'assets/chat/chat/crown1.png',
    }, {
      name: 'George',
      image: ' assets/chat/chat/chat3.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      count: '2',
      time: 'Yesterday',
      distance: '6km',
      type: 'Basic',
      crown: 'assets/chat/chat/crown1.png',
    }, {
      name: 'Harry',
      image: ' assets/chat/chat/chat3.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      time: 'Sunday',
      distance: '6km',
      type: 'PRO', crown: 'assets/chat/chat/crown.png',
    }, {
      name: 'Jack',
      image: ' assets/chat/chat/chat5.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      time: '11:15',
      distance: '6km',
      type: 'Basic',
      crown: 'assets/chat/chat/crown1.png',
    }, {
      name: 'Jacob',
      image: ' assets/chat/chat/chat6.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      count: '1',
      time: 'Yesterday',
      distance: '6km',
      type: 'Basic',
      crown: 'assets/chat/chat/crown1.png',
    }, {
      name: 'Noah',
      image: ' assets/chat/chat/chat7.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      time: 'Monday',
      distance: '6km',
      type: 'PRO', crown: 'assets/chat/chat/crown.png',
    }, {
      name: 'Charlie',
      image: ' assets/chat/chat/chat8.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      count: '6',
      time: '07:00',
      distance: '6km',
      type: 'Basic',
      crown: 'assets/chat/chat/crown1.png',
    }, {
      name: 'Logan',
      image: ' assets/chat/chat/chat1.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      time: 'Yesterday',
      distance: '6km',
      type: 'PRO', crown: 'assets/chat/chat/crown.png',

    }, {
      name: 'Harrison',
      image: ' assets/chat/chat/chat2.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      time: 'Yesterday',
      distance: '6km',
      type: 'Basic', crown: 'assets/chat/chat/crown1.png',

    }, {
      name: 'Sebastian',
      image: ' assets/chat/chat/chat3.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

      time: 'Yesterday',
      distance: '6km',
      type: 'PRO', crown: 'assets/chat/chat/crown.png'
    }, {
      name: 'Zachary',
      image: ' assets/chat/chat/chat3.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      time: 'Today',
      distance: '6km',
      type: 'Basic', crown: 'assets/chat/chat/crown1.png',

    }, {
      name: 'Elijah',
      image: ' assets/chat/chat/chat5.jpg',
      description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      time: '18:25',
      distance: '6km',
      type: 'PRO', crown: 'assets/chat/chat/crown.png',
    }
  ],
  STARTBUCKS_CHAT_DATA: [
    {
      userId: 'HealthBot',
      userName: 'HealthBot',
      userAvatar: 'assets/chat/chat/chat3.jpg',
      time: '12:00',
      message: 'Hello, have you seen this great chat UI',
      id: 0
    },
    {
      userId: 'Me',
      userName: 'Me',
      userAvatar: 'assets/chat/chat/chat5.jpg',
      time: '12:03',
      message: 'Yeah, I see this. This looks great. ',
      id: 1,
    },
    {
      userId: 'HealthBot',
      userName: 'HealthBot',
      userAvatar: 'assets/chat/chat/chat3.jpg',
      time: '12:05',
      message: '... and this is absolutely free, anyone can use',
      id: 3
    },
    {
      userId: 'Me',
      userName: 'Me',
      userAvatar: 'assets/chat/chat/chat5.jpg',
      time: '12:06',
      message: 'wow ! that\'s great. Love to see more of such chat themes',
      id: 4
    },
    {
      userId: 'HealthBot',
      userName: 'HealthBot',
      userAvatar: 'assets/chat/chat/chat3.jpg',
      time: '12:07',
      message: 'Oh there are several other designs. Check all their designs on their website enappd.com',
      id: 5
    }
  ],
  BUBBLE2_MESSAGELIST: [
    {
      userId: 'HealthBot',
      userName: 'HealthBot',
      userAvatar: 'assets/chat/chat/chat3.jpg',
      time: '12:00',
      message: 'Hello, have you seen this great chat UI',
      id: 0
    },
    {
      userId: 'Me',
      userName: 'Me',
      userAvatar: 'assets/chat/chat/chat5.jpg',
      time: '12:03',
      message: 'Yeah, I see this. This looks great. ',
      id: 1,
    },
    {
      userId: 'HealthBot',
      userName: 'HealthBot',
      userAvatar: 'assets/chat/chat/chat3.jpg',
      time: '12:05',
      message: '... and this is absolutely free, anyone can use',
      id: 3
    },
    {
      userId: 'Me',
      userName: 'Me',
      userAvatar: 'assets/chat/chat/chat5.jpg',
      time: '12:06',
      message: 'wow ! that\'s great. Love to see more of such chat themes',
      id: 4
    },
    {
      userId: 'HealthBot',
      userName: 'HealthBot',
      userAvatar: 'assets/chat/chat/chat3.jpg',
      time: '12:07',
      message: 'Oh there are several other designs. Check all their designs on their website enappd.com',
      id: 5
    }
  ],

};
