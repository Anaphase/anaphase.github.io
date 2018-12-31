var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

var now = new Date()

var entries = [

  {
    name: 'Codex Viewer',
    date: {
      start: new Date('April 2, 2018'),
      current: true,
    },
    type: 'professional',
    url: 'https://codex-viewer.com',
    thumbnail: 'codex-viewer.png',
    screenshots: ['codex-viewer.png', 'codex-viewer-1.png', 'codex-viewer-2.png', 'codex-viewer-3.png', 'codex-viewer-4.png', 'codex-viewer-5.png', 'codex-viewer-6.png', 'codex-viewer-7.png'],
    description: '<p>Helped write and deploy a hybrid <a href="https://en.wikipedia.org/wiki/Decentralized_application" target="_blank">dApp</a> / traditional web app that allows users to use <a href="https://codexprotocol.com/" target="_blank">Codex Protocol</a>\'s decentralized asset registry. Users can log in via <a href="https://metamask.io/" target="blank">MetaMask</a> if they choose to manage their own wallet, or they can log in via a social identity provider (e.g. Google or Facebook), which provisions a Smart Contract for them so Codex Protocol can send transactions on their behalf without storing private keys. This allows people unfamiliar with blockchain technology to use the decentralized platform with ease!</p><p>This project presented several interesting challenges specific to dApp development. For example, all blockchain interactions are asynchronous with very long processing times (i.e. upwards of 5 minutes.) Additionally, the application must support "crypto-savvy" users (who log in via MetaMask) as well as "normal" users (who log in via OAuth2 and make traditional API calls.)</p><p>This application is open source and <a href="https://github.com/codex-protocol/web.codex-viewer" target="_blank">available on GitHub</a>.</p>',
    tags: ['Amazon Web Services (EC2, S3, CloudFront, CodeDeploy, & more)', '<a href="https://codeship.com/">Codeship</a>', '<a href="https://web3js.readthedocs.io/en/1.0/index.html">Web3</a>', 'Ethereum', '<a href="https://metamask.io/" target="blank">MetaMask</a>', 'OAuth2 Login', '<a href="http://truffleframework.com/">Truffle</a>', '<a href="http://truffleframework.com/ganache/">Ganache</a>', 'Node.js', 'Express', 'MongoDB', 'VueJS', 'Bootstrap Vue', '<a href="http://stylus-lang.com/">Stylus</a>', 'git', 'webpack', 'Open Source'],
    nsfw: false
  },

  {
    name: 'The Codex API & Documentation',
    date: {
      start: new Date('March 27, 2018'),
      current: true,
    },
    type: 'professional',
    url: 'https://dev.codexprotocol.com',
    thumbnail: 'codex-api.png',
    screenshots: ['codex-api-1.png', 'codex-api-2.png', 'codex-api-3.png'],
    description: '<p>Main contributor to the API and backend infrastructure for <a href="https://codexprotocol.com/" target="_blank">Codex Protocol</a>\'s decentralized asset registry. The API handles everything from OAuth2 authentication, to submitting &amp; processing blockchain transactions, to sending transactional emails via <a href="https://sendgrid.com" target="_blank">SendGrid</a>, to processing payments via <a href="https://stripe.com" target="_blank">Stripe</a>.</p><p>The API also allows third-party access for application developers to build on top of The Codex Protocol. I was responsible for writing <a href="https://dev.codexprotocol.com" target="_blank">the comprehensive API documentation</a>.</p><p>Unfortunately we had to close-source this project, but an older archived version of the code can be found <a href="https://github.com/codex-protocol/deprecated.service.codex-registry-api" target="_blank">here</a>.</p>',
    tags: ['Amazon Web Services (EC2, S3, CloudFront, CodeDeploy, & more)', '<a href="https://stripe.com">Stripe</a>', '<a href="https://sendgrid.com">SendGrid</a>', '<a href="https://mixpanel.com">Mixpanel</a>', '<a href="https://sentry.io/">Sentry</a>', '<a href="https://codeship.com/">Codeship</a>', 'npm', 'Socket.io', '<a href="http://www.passportjs.org/">Passport</a>', 'OAuth2', '<a href="https://web3js.readthedocs.io/en/1.0/index.html">Web3</a>', 'Ethereum', '<a href="http://truffleframework.com/">Truffle</a>', '<a href="http://truffleframework.com/ganache/">Ganache</a>', '<a href="https://github.com/agenda/agenda">Agenda</a>', 'Node.js', 'Express', 'MongoDB', 'git'],
    nsfw: false
  },

  {
    name: 'Biddable',
    date: {
      start: new Date('March 1, 2018'),
      current: true,
    },
    type: 'professional',
    url: 'https://codexprotocol.com/biddable.html',
    thumbnail: 'biddable.png',
    screenshots: ['biddable-1.png', 'biddable-2.png', 'biddable-3.png', 'biddable-4.png'],
    description: '<p>Helped write backend service that allows people to deposit cryptocurrency (Ether) into an "escrow" smart contract, which allows them to be instantly approved to bid on artwork at over 5,000 auction houses.</p>',
    tags: ['Amazon Web Services (EC2, S3, CloudFront, CodeDeploy, & more)', '<a href="https://codeship.com/">Codeship</a>', '<a href="https://web3js.readthedocs.io/en/1.0/index.html">Web3</a>', 'Ethereum', '<a href="https://metamask.io/" target="blank">MetaMask</a>', '<a href="http://truffleframework.com/">Truffle</a>', '<a href="http://truffleframework.com/ganache/">Ganache</a>', 'Node.js', 'Express', 'MongoDB', 'React', 'TypeScript', 'git', 'webpack'],
    nsfw: false
  },

  {
    name: 'Ethereal Summit 2018 Charity Auction App',
    date: {
      start: new Date('April 30, 2018'),
      end: new Date('May 12, 2018'),
    },
    type: 'professional',
    url: 'https://github.com/codex-protocol/service.ethereal-auction-mini-app',
    thumbnail: 'ethereal-summit.png',
    screenshots: ['ethereal-summit-1.png', 'ethereal-summit-2.png', 'ethereal-summit-3.png', 'ethereal-summit-4.png'],
    description: '<p>In May 2018, <a href="https://codexprotocol.com/" target="_blank">Codex Protocol</a> held a charity art auction at <a href="https://etherealsummit.com/events/ethereal-summit-ny-2018/" target="_blank">Ethereal Summit 2018</a>. I was responsible for creating a small application capable of showing the current artwork up for bid, along with the current bid amount in USD, Ether, and Bitcoin.</p><p>The application was projected behind the auctioneer, and I was backstage controlling everything from admin panel. The admin panel commincates with the main app over WebSockets, and the backend pulls realtime cryptocurrency conversions from the <a href="https://coinmarketcap.com/" target="_blank">CoinMarketCap</a> API.</p><p>This application is open source and <a href="https://github.com/codex-protocol/service.ethereal-auction-mini-app" target="_blank">available on GitHub</a>.</p>',
    tags: ['Node.js', 'Express', 'WebSockets', 'Open Source'],
    nsfw: false
  },

  {
    name: 'Talk Fusion Live Meetings',
    date: {
      start: new Date('July 1, 2015'),
      end: new Date('March 3, 2018'),
    },
    type: 'professional',
    url: 'https://talkfusion.com/en/products/live-meetings',
    thumbnail: 'live-meetings.png',
    screenshots: ['live-meetings-1.png', 'live-meetings-2.png', 'live-meetings-3.png'],
    description: '<p>Developed & maintained a Flash-based (then later, WebRTC-based) online conferencing application including support for streaming up to 16 video feeds, screen sharing, slide-based presentations, in-line chat with emoji support, whiteboard drawing, file sharing, and more.</p>',
    tags: ['Amazon Web Services (EC2, S3, CloudFront, RDS, & more)', 'AngularJS 1.5', 'Angular Material', 'HTML5', 'CSS3', '<a href="http://stylus-lang.com/">Stylus</a>', 'CoffeeScript', 'Node.js', 'ActionScript', 'WebRTC', 'Express', 'Socket.io', 'MySQL', 'git', '<a href="http://brunch.io/">Brunch</a>'],
    nsfw: false
  },

  {
    name: 'Talk Fusion Video Chat',
    date: {
      start: new Date('October 1, 2015'),
      end: new Date('March 2, 2018'),
    },
    type: 'professional',
    url: 'https://talkfusion.com/en/products/video-chat',
    thumbnail: 'video-chat.png',
    screenshots: ['video-chat-1.png', 'video-chat-2.png', 'video-chat-3.png'],
    description: '<p>Helped develop WebRTC-based online video chat application including support for screen sharing and in-line chat. This application also had a “group chat” section that allowed users to host chat rooms as well as “corporate” & “country” rooms managed by Talk Fusion.</p>',
    tags: ['Amazon Web Services (EC2, S3, CloudFront, RDS, & more)', 'VueJS', 'Vue Material', 'HTML5', 'CSS3', '<a href="http://stylus-lang.com/">Stylus</a>', 'JavaScript', 'Node.js', 'Express', 'Socket.io', 'MySQL', 'git', 'webpack'],
    nsfw: false
  },

  {
    name: 'Talk Fusion Product Dashboard',
    date: {
      start: new Date('November 1, 2015'),
      end: new Date('March 1, 2018'),
    },
    type: 'professional',
    url: 'https://talkfusion.com',
    thumbnail: 'product-dashboard.png',
    screenshots: ['product-dashboard-1.png', 'product-dashboard-2.png', 'product-dashboard-3.png', 'product-dashboard-4.png'],
    description: '<p>Developed & maintained a product dashboard that integrated legacy ASP applications as well as all-new modern web apps. Wrote a calendar app from scratch that allowed users to create & schedule Live Meetings with tons of additional features including recurring meetings, invitations & reminder emails, surveys, and custom backgrounds.</p>',
    tags: ['Amazon Web Services (EC2, S3, CloudFront, RDS, & more)', 'AngularJS 1.5', 'Angular Material', 'HTML5', 'CSS3', '<a href="http://stylus-lang.com/">Stylus</a>', 'CoffeeScript', 'Node.js', 'Express', 'MySQL', 'git', '<a href="http://brunch.io/">Brunch</a>'],
    nsfw: false
  },

  {
    name: 'Fossil Concessions',
    date: {
      start: new Date('October 1, 2012'),
      end: new Date('July 1, 2015'),
    },
    type: 'professional',
    url: 'https://concessions.fossil.com/',
    thumbnail: 'concessions.png',
    screenshots: ['concessions-1.png', 'concessions-2.png', 'concessions-3.png'],
    description: '<p>An iPad enterprise solution for logging/editing transactions, tracking time sheets, managing product inventory, and sales reporting.</p><p>The Concessions App is used in over 500 Asian & European <a href="http://www.fossilgroup.com/">Fossil Group</a> stores to log transactions and perform other store related tasks. I was personally responsible for developing and maintaining the middleware server that acts as the iPad\'s backend, which processes thousands of transactions a day.</p><p>The middleware runs a RESTful PHP application with MySQL database on the <a href="http://aws.amazon.com/">Amazon Web Services</a> Elastic Beanstalk platform. The middleware also runs a web-facing admin portal to assist end-users in creating new users, stores, roles & permissions, etc.</p><p>From June 2014 onward, I was the sole owner of the entire middleware project and as such was the main point of contact for any and all backend issues related to the app. I performed all development, maintained all AWS configurations, and interfaced directly with business partners in both Asia & Europe to help expand the app to over 100 stores.</p>',
    tags: ['Amazon Web Services (Elastic Beanstalk, EC2, RDS)', 'PHP', '<a href="http://www.slimframework.com/">Slim</a>', 'REST', 'Zend Framework 2', 'HTML5', 'CSS3', 'LESS', 'JavaScript', 'jQuery', 'Handlebars', 'Backbone', 'Underscore', 'MySQL', 'Linux Admin', 'Bash Scripting', 'git', '<a href="https://pushover.net/">Pushover</a>', '<a href="http://brunch.io/">Brunch</a>'],
    nsfw: false
  },

  {
    name: 'Fossil Mobile',
    date: {
      start: new Date('August 27, 2012'),
      end: new Date('July 1, 2015'),
    },
    type: 'professional',
    url: 'http://m.fossil.com/',
    thumbnail: 'm.fossil.png',
    screenshots: ['m.fossil-1.png', 'm.fossil-2.png', 'm.fossil-3.png', 'm.fossil-4.png'],
    description: '<p>The <a href="http://www.fossil.com/">Fossil</a> mobile ecommerce site for <a href="http://www.fossilgroup.com/">Fossil Group</a>.</p><p>In 2012 I was brought onto Fossil Group\'s newly created Mobile Team and we were tasked with "in-housing" the existing third-party mobile site, which was really crappy and provided poor user experience.</p><p>During the initial "in-housing" phase, I was personally responsible for building HTML5 <a href="https://mustache.github.io/">Mustache</a> templates, writing CSS3 (<a href="http://lesscss.org/">LESS</a>) styles, scripting dynamic content with JavaScript, tagging pages via <a href="http://www-01.ibm.com/software/marketing-solutions/coremetrics/">IBM Coremetrics</a>, setting up the local build environment, and providing mobile-specific architecture &amp; design recommendations.</p><p>In 2014, the mobile site went through a major redesign in response to increasing mobile traffic. I was personally responsible for adding several new features including a custom <a href="http://en.wikipedia.org/wiki/Typeahead">Typeahead</a> search, <a href="http://www.bazaarvoice.com/">Bazaarvoice</a> ratings & reviews, product recommendations via <a href="http://www-01.ibm.com/software/marketing-solutions/products-recommendation-solution/">IBM Coremetrics Intelligent Offer</a>, adding <a href="https://www.paypal.com/home">Paypal</a> support, among various other features.</p>',
    tags: ['Mobile Web', '<a href="http://www-01.ibm.com/software/marketing-solutions/coremetrics/">IBM Coremetrics</a> (tracking, product recommendations)', '<a href="http://www.bazaarvoice.com/">Bazaarvoice</a> (ratings & reviews)', 'HTML5', 'Mustache', 'CSS3', 'LESS', 'JavaScript', 'jQuery', 'git', '<a href="http://brunch.io/">Brunch</a>'],
    nsfw: false
  },

  {
    name: 'Skagen Mobile',
    date: {
      start: new Date('May 15, 2014'),
      end: new Date('January 15, 2015'),
    },
    type: 'professional',
    url: 'http://m.skagen.com/',
    thumbnail: 'm.skagen.png',
    screenshots: ['m.skagen-1.png', 'm.skagen-2.png'],
    description: '<p>The <a href="http://skagen.com/">Skagen</a> mobile ecommerce site for <a href="http://www.fossilgroup.com/">Fossil Group</a>.</p><p>In 2014, Fossil Group partnered with <a href="http://www.citytechinc.com/">CityTech</a> to launch a redesign of the desktop &amp; mobile Skagen websites on the <a href="http://www.adobe.com/marketing-cloud/enterprise-content-management.html">Adobe Experience Manager</a> CMS platform. My team was responsible for the <em>My Account</em> and <em>Checkout</em> areas of the mobile site.</p>',
    tags: ['Mobile Web', 'HTML5', 'Mustache', 'CSS3', 'LESS', 'JavaScript', 'jQuery', 'git', '<a href="http://brunch.io/">Brunch</a>'],
    nsfw: false
  },

  // {
  //   name: 'Fossil Mobile CMS Relaunch',
  //   date: {
  //     start: new Date('January 1, 2015'),
  //     end: new Date('July 1, 2015'),
  //   },
  //   type: 'professional',
  //   url: 'http://m.fossil.com/',
  //   thumbnail: 'm.fossil-redisign.png',
  //   description: '<p></p>',
  //   tags: ['<a href="http://www.adobe.com/marketing-cloud/enterprise-content-management.html">Adobe Experience Manager</a>', '<a href="http://docs.adobe.com/content/docs/en/aem/6-0/develop/sightly.html">Sightly</a>', 'HTML5', '<a href="http://twitter.github.io/hogan.js/">Hogan</a>', 'Backbone', 'CSS3', 'LESS', '<a href="http://requirejs.org/">RequireJS</a>', '<a href="http://gruntjs.com/">Grunt</a>', 'Bootstrap'],
  //   nsfw: false
  // },

  {
    name: 'ThankYou Hub',
    date: {
      start: new Date('June 1, 2009'),
      end: new Date('August 1, 2012')
    },
    type: 'professional',
    url: 'https://thankyouhub.com/',
    thumbnail: 'thankyouhub.png',
    description: '<p>A niche social network dedicated to helping people &quot;grow and track gratitude.&quot; Provides tools for managing favors, asking for help on tasks, as well as the usual social network features such as a news feed, notifications, and a friends list.</p><p>I was personally responsible for mostly everything on this website, from writing complex MySQL queries to processing video uploads as well as developing the front-end interface.</p>',
    tags: ['LAMP', 'MySQL', 'Perl', 'JavaScript', 'jQuery', 'jQuery plugins (custom, too)', 'Facebook API', 'Twitter API', 'HTML', 'CSS3', 'ImageMagick', 'ffmpeg', 'and much, much more...'],
    nsfw: false
  },

  {
    name: 'Give Take Test',
    date: {
      start: new Date('January 1, 2012'),
      end: new Date('August 1, 2012')
    },
    type: 'professional',
    url: 'http://givetaketest.com/',
    thumbnail: 'givetaketest.png',
    description: '<p>A full featured quiz taking system built from the ground up. Features include question banks, multiple admins per bank, timed tests, multiple choice and free response answers with media upload capabilities.</p><p>I am the sole developer of this software (until August 2012) and was personally responsible for the custom MVC-type backend as well as the very feature-rich frontend.</p>',
    tags: ['Perl', 'jQuery', 'AJAX', 'HTML5', 'CSS3', 'MySQL', 'ImageMagick'],
    nsfw: false
  },

  {
    name: 'TechElegance',
    date: {
      start: new Date('November 1, 2011'),
      end: new Date('July 1, 2012')
    },
    type: 'professional',
    url: 'http://techelegance.com/',
    thumbnail: 'techelegance.png',
    description: '<p>The portfolio website for a Dallas-based web development startup. I was the sole developer for this website (through July 2012) and was responsible for creating everything including a custom AJAX search, grid-based design, and a full featured administrative control panel (for uploading new portfolio items.)</p>',
    tags: ['Perl', 'jQuery', 'AJAX', 'MySQL', 'WordPress'],
    nsfw: false
  },

  {
    name: 'ReferDigital',
    date: {
      start: new Date('August 1, 2011'),
      end: new Date('February 1, 2012')
    },
    type: 'professional',
    url: 'http://referdigital.com/',
    thumbnail: 'referdigital.png',
    description: '<p>A website for businesses to track new customer referrals. I was responsible for developing an external lead tracking system using cookies and tracking pixels.</p><p>I also upgraded their Facebook Connect code when the <a href="https://developers.facebook.com/blog/post/497/">Facebook Platform moved to OAuth 2.0</a>.</p>',
    tags: ['CodeIgnitor', 'MVC', 'PHP', 'JavaScript'],
    nsfw: false
  },

  {
    name: 'POD',
    date: {
      start: new Date('November 1, 2011'),
      end: new Date('January 1, 2012')
    },
    type: 'professional',
    url: 'http://pod314.com/',
    thumbnail: 'pod.png',
    description: '<p>A musical poem produced by two of my good friends <a href="http://soundcloud.com/leae">Marc Rebillet</a> and <a href="http://soundcloud.com/usoome">Frederick Whinery</a>. I was responsible for creating the website from scratch. The idea behind the project was to have each episode installment countdown to a certain date (the first seven weeks of 2012) before it became listenable. You can\'t really see the countdowns in effect now because the deadlines have past, but it was pretty fun to create.</p>',
    tags: ['JavaScript', 'HTML5', 'PHP', 'Photoshop'],
    nsfw: false
  },

  {
    name: 'Cisco Phone Book Editor',
    date: {
      start: new Date('February 1, 2012'),
      end: new Date('March 1, 2012')
    },
    type: 'professional',
    url: 'http://altform.com/projects/gary/',
    thumbnail: 'ciscophonebook.png',
    description: '<p>A set of PHP pages that edit a collection of XML files for use with Cisco Phone Books. Feel free to add or edit contacts, this link is only a demo of what I was contracted to do.</p><p>Note: in April 2014, <a href="https://github.com/Anaphase/ip-phone-book-manager">I rewrote this application as an Angular app</a>, with a robust set of new features!</p>',
    tags: ['PHP', 'Responsive Design', 'HTML5', 'JavaScript'],
    nsfw: false
  },

  {
    name: 'Mid Cities Classics',
    date: {
      start: new Date('August 1, 2010')
    },
    type: 'professional',
    url: 'http://midcitiesclassics.com/',
    thumbnail: 'midcitiesclassics.png',
    description: '<p>A portfolio site for a DFW-based auto shop. My friend designed the pages in Photoshop and I converted the design to a full-featured website. Features include AJAX-based page loading with history-persistence using location.hash and an animated landing page.</p>',
    tags: ['JavaScript', 'AJAX', 'PHP', 'HTML', 'Photoshop'],
    nsfw: false
  },

  {
    name: 'SMU Daily Mustang',
    date: {
      start: new Date('August 1, 2010'),
      end: new Date('May 1, 2011')
    },
    type: 'professional',
    url: 'http://smudailymustang.com/',
    thumbnail: 'smudailymustang.png',
    description: '<p>A web page for the <a href="http://www.smu.edu/">SMU</a> journalism department. I was repsponsible for maintaining the WordPress blog, creating custom WordPress themes here and there, as well as creating images and RSS feeds.</p>',
    tags: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'Photoshop'],
    nsfw: false
  },

  {
    name: 'Snek',
    date: {
      start: new Date('July 24, 2018'),
      end: new Date('July 25, 2018')
    },
    type: 'personal',
    coolness: 1.2,
    url: 'http://altform.com/projects/snek',
    thumbnail: 'snek.png',
    description: '<p>A game of snake, but the pieces are radio buttons and checkboxes! To pick up "checked" pieces, you must toggle the head of your snake to be "checked" and vice versa. Use the arrow keys to move and spacebar to toggle your snake from checked to unchecked! Fun!</p><p>This game was made for fun to kill time between sessions at <a href="https://www.nodesummit.com/events/2018/" target="_blank">Node Summit 2018</a>.</p>',
    tags: ['JavaScript', 'HTML', 'CSS', 'Games'],
    nsfw: false
  },

  {
    name: 'Note to Self Bot',
    date: {
      start: new Date('May 15, 2014')
    },
    type: 'personal',
    coolness: 1.3,
    url: 'https://github.com/Anaphase/note-to-self-bot',
    thumbnail: 'ntsb.png',
    screenshots: ['ntsb-1.png', 'ntsb-2.png', 'ntsb-3.png'],
    description: '<p>A reddit bot that scans comments for \'note to self\' and replies with a reminder one day later.</p><p>The bot uses <a href="https://github.com/Anaphase/reddit-stream">reddit-stream</a> (and npm module I also wrote) to scan comments, <a href="https://www.mongodb.org/">MongoDB</a>/<a href="http://mongoosejs.com/">Mongoose</a> to save them locally, and <a href="https://bitbucket.org/Doctor_McKay/raw.js">raw.js</a> to send comment replies. The bot uses <a href="http://socket.io/">socket.io</a> to communicate with the frontend dashboard (for editing replies and removing false positives from the queue) and <a href="https://pushover.net/">Pushover</a> to notify your phone when it picks up a comment. NTSB runs forever using <a href="https://github.com/nodejitsu/forever">Forever</a>.</p>',
    tags: ['Node.js', 'reddit API', 'CoffeeScript', 'MongoDB', 'AngularJS', 'Bootstrap', '<a href="https://pushover.net/">Pushover</a>', '<a href="http://ionicframework.com/">Ionic Framework</a>'],
    nsfw: false
  },

  {
    name: 'WebCap',
    date: {
      start: new Date('December 12, 2012')
    },
    type: 'personal',
    coolness: 1,
    url: 'http://webcap.me/',
    thumbnail: 'webcap.png',
    description: '<p>A simple web app that takes full-page screenshots of websites. I basically wrote this so I could get around my work\'s firewall that blocked very innocuous sites. Features adjustable "screen" width and permanate screenshot retention.</p>',
    tags: ['Node.js', 'PhantomJS', 'PHP', 'Brunch', 'Backbone'],
    nsfw: false
  },

  {
    name: 'Worldly Comments',
    date: {
      start: new Date('October 1, 2010')
    },
    type: 'personal',
    coolness: 1.1,
    url: 'http://worldlycomments.com/',
    thumbnail: 'worldlycomments.png',
    description: '<p>Leave comments on a world map using HTML5 location services and Google Maps API.</p>',
    tags: ['HTML5', 'Google Maps API', 'jQuery', 'PHP'],
    nsfw: false
  },

  {
    name: 'Facebook Guess Who',
    date: {
      start: new Date('November 1, 2011')
    },
    type: 'personal',
    coolness: 0.9,
    url: 'http://altform.com/projects/facebook/guesswho/',
    thumbnail: 'guesswho.png',
    description: '<p>A fun game where you are given a random Facebook status from one of your friends and you must guess who said it. Give it a try, I think it\'s really fun!</p>',
    tags: ['Facebook API', 'HTML', 'jQuery', 'Games'],
    nsfw: false
  },

  {
    name: 'Alpha Down',
    date: {
      start: new Date('March 1, 2009')
    },
    type: 'personal',
    coolness: 0.7,
    url: 'http://alphadown.com/',
    thumbnail: 'alphadown.png',
    description: '<p>A file upload site I made a long time ago to host files on my home server. Nothing fancy, but it does allow multiple files in one upload. (Upload retrieval subject to my home server\'s erratic downtime.)</p>',
    tags: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    nsfw: false
  },

  {
    name: 'The Internet Drinking Game',
    date: {
      start: new Date('December 1, 2010')
    },
    type: 'personal',
    coolness: 0.5,
    url: 'http://internetdrinkinggame.com/',
    thumbnail: 'internetdrinkinggame.png',
    description: '<p>A web-based version of the <a href="http://knowyourmeme.com/memes/4chan-drinking-game-cards">4chan drinking game</a>. I own a physical copy of these cards and they make for a fun internet-humor based drinking game, but sometimes I wanted to play with a group of friends when I didn\'t have my deck so I made this site.</p><p class="text-error">WARNING: SOME CARDS ARE NSFW</p>',
    tags: ['JavaScript', 'jQuery', 'HTML', 'CSS', 'Games'],
    nsfw: true
  },

  {
    name: 'HTML5 Canvas Experiments',
    date: {
      start: new Date('April 1, 2011')
    },
    type: 'personal',
    coolness: 0.6,
    url: 'http://altform.com/projects/canvas/',
    thumbnail: 'canvas.png',
    description: '<p>When HTML5 was released, I wrote a bunch of silly <a href="http://www.w3schools.com/html/html5_canvas.asp">Canvas</a> experiments to play around with the new features.</p>',
    tags: ['HTML5 Canvas', 'JavaScript'],
    nsfw: false
  },

  {
    name: 'According to Google',
    date: {
      start: new Date('Septemer 1, 2010')
    },
    type: 'personal',
    coolness: 0.7,
    url: 'http://altform.com/projects/google/',
    thumbnail: 'google.png',
    description: '<p>Compare things by the number of results a <a href="http://www.youtube.com/watch?v=oHg5SJYRHA0">Google</a> search returns. Pretty pointless, but I find it amusing.</p>',
    tags: ['JavaScript', 'PHP'],
    nsfw: false
  },

  {
    name: 'How Do I Feel',
    date: {
      start: new Date('February 1, 2010')
    },
    type: 'personal',
    coolness: 0.2,
    url: 'http://altform.com/projects/howdoifeel/',
    thumbnail: 'howdoifeel.png',
    description: '<p>Why not let this stupid random sentence generator determine your mood today?</p><p class="text-warning">WARNING: MILDLY NSFW LANGUAGE</p>',
    tags: ['JavaScript'],
    nsfw: true
  },

  {
    name: 'NAND',
    date: {
      start: new Date('December 1, 2010')
    },
    type: 'personal',
    coolness: 0.0,
    url: 'http://altform.com/NAND/',
    thumbnail: 'nand.png',
    description: '<p>Some old music I made with a Gameboy. Mostly terrible, with a few listenable tracks I suppose.</p>',
    tags: ['Gameboys', 'Flash', 'HTML'],
    nsfw: false
  },

  {
    name: 'Rainbows',
    date: {
      start: new Date('October 1, 2008')
    },
    type: 'personal',
    coolness: 0.5,
    url: 'http://ra.inbows.com/',
    thumbnail: 'rainbows.png',
    description: '<p>Legend has it that I was really drunk one night in college and I made this ridiculous site. Your guess is as good as mine as to what its purpose is, but I think it\'s hilarious, so yeah.</p><p>Requires sound.</p>',
    tags: ['JavaScript', 'Beer'],
    nsfw: false
  },

  {
    name: 'Tetris',
    date: {
      start: new Date('November 1, 2010')
    },
    coolness: 0.7,
    type: 'personal',
    url: 'http://altform.com/projects/tetris/',
    thumbnail: 'tetris.png',
    description: '<p>A simple tetris clone I made using HTML5 canvas and vanilla JavaScript. Pretty basic, but I had a lot of fun making it.</p><p>Fun fact: if you hold down shift, you\'ll always get a striaght block ;)</p>',
    tags: ['JavaScript', 'HTML5 Canvas', 'Games'],
    nsfw: false
  },

  {
    name: 'WebTag',
    date: {
      start: new Date('December 1, 2007')
    },
    type: 'personal',
    coolness: 0.1,
    url: 'http://altform.com/projects/webtag/',
    thumbnail: 'webtag.png',
    description: '<p>This is probably the oldest, still-working web page I have. It scrapes text off of a given webpage and returns a pretty bad looking <a href="http://en.wikipedia.org/wiki/Tag_cloud">word cloud</a>.</p>',
    tags: [],
    nsfw: false
  }

]

;(function ($) {

  // fix broken dropdowns on iPad as per https://github.com/twitter/bootstrap/issues/2975#issuecomment-8670606
  $('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation() })

  $.fn.preload = function() {
    this.each(function() {
      $('<img/>')[0].src = this
    })
  }

  var urlParams = {},
    match  = [],
    pl     = /\+/g,  // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g,
    decode = function (s) { return decodeURIComponent(s.replace(pl, ' ')) },
    query  = window.location.search.substring(1)

  while (match = search.exec(query)) {
    urlParams[decode(match[1])] = decode(match[2])
  }

  var Entry = Backbone.Model.extend({
    defaults: {
      name: 'Untitled Project',
      date: {
        start: new Date('January 1, 2005'),
        end: new Date(),
      },
      type: 'personal',
      coolness: 0,
      url: '#',
      thumbnail: 'default.png',
      description: '<p>An utitled project.</p>'
    }
  })

  var Portfolio = Backbone.Collection.extend({
    model: Entry
  })

  var EntryView = Backbone.View.extend({

    tagName: 'div',
    className: 'row portfolio-entry',
    template: _.template($('#entryTemplate').html()),

    render: function () {

      var modelJSON = this.model.toJSON()

      if (modelJSON.date.start) {

        var startYear = modelJSON.date.start.getFullYear()
        var startMonth = monthNames[modelJSON.date.start.getMonth()]

        if (modelJSON.date.end && modelJSON.date.start.getTime() !== modelJSON.date.end.getTime()) {

          var endYear = modelJSON.date.end.getFullYear()
          var endMonth = monthNames[modelJSON.date.end.getMonth()]

          modelJSON.date = startMonth + ' ' + startYear + ' - ' + endMonth + ' ' + endYear

        } else if (modelJSON.date.current) {
          modelJSON.date = startMonth + ' ' + startYear + ' - Now '

        } else {
          modelJSON.date = startMonth + ' ' + startYear
        }

      }

      this.$el.html(this.template(modelJSON))

      return this
    },

    events: {

    }

  })

  var PortfolioView = Backbone.View.extend({

    el: $('#portfolio'),
    numEntriesToShow: 3,
    individualTypes: {},

    comparators: {

      'professional': function(model) {
        var time = null,
            dateToCompare = null

        if (model.get('date').current) {
          time = now.getTime() + model.get('date').start.getTime()

        } else {
          dateToCompare = (model.get('date').end) ? model.get('date').end : model.get('date').start
          time = dateToCompare.getTime()
        }

        return -time
      },

      'personal': function(model) {
        return -model.get('coolness')
      }

    },

    initialize: function () {

      this.collection = new Portfolio(entries)

      // this.collection.models = _.sortBy(this.collection.models, this.comparator)

      // preload images
      // $(_.uniq(this.collection.pluck('thumbnail'))).preload()

      // add a  click handler for the 'more' buttons in each type's section
      this.forEachType(function (type) {

        this.events['click #' + type + ' .more-button'] = function(e) {

          e.preventDefault()

          // this grabs the next 3 hidden .portfolio-entry's, wraps them in a hidden div, shows the entries, and slideDown()'s the wrapper div
          // (this is so all three are revealed 'smoothly' instead of all of them being faded in individually)
          this.$el
            .find('#' + type + ' .portfolio-entry:hidden')
            .slice(0, this.numEntriesToShow)
            .wrapAll('<div style="display: none;" />')
            .show()
            .parent()
            .slideDown(function(){
              // update scrollspy
              $('[data-spy="scroll"]').scrollspy('refresh')
            })

          if(this.$el.find('#' + type + ' .portfolio-entry:hidden').length === 0){
            this.$el.find('#' + type + ' .more-button').addClass('disabled').text('You\'ve seen it all!')
          }

        }

      }, this)

      this.render()

    },

    events: {

    },

    render: function () {

      // split apart collection by type so we can sort them differently
      this.forEachType(function (type) {
        this.individualTypes[type] = _.filter(this.collection.models, function(model) {
          return model.get('type') == type
        })
      }, this)

      this.$el.find('.portfolio-loading-icon').fadeOut(function(){ $(this).remove() })

      this.forEachType(function (type) {

        // sort the list for this type
        this.individualTypes[type] = _.sortBy(this.individualTypes[type], this.comparators[type])

        // render each entry with this type
        _.each(this.individualTypes[type], function (model) {
          if(model.get('nsfw') && !urlParams.nsfw) return false
          this.renderEntry(model)
        }, this)

        this.$el.find('#' + type + ' .portfolio-entry').slice(0, this.numEntriesToShow).show()
        this.$el.find('#' + type + ' .more-container').show()

      }, this)

      this.$el.find('.entry-container').fadeIn(function(){
        // update scrollspy
        $('[data-spy="scroll"]').scrollspy('refresh')
      })

      return this

    },

    renderEntry: function (item) {
      var entryView = new EntryView({ model: item })
      this.$el.find('#' + item.get('type') + ' .entry-container').append(entryView.render().el)
    },

    getTypes: function() {
      return _.uniq(this.collection.pluck('type'))
    },

    forEachType: function(f, context) {
      _.each(this.getTypes(), function(type) {
        f.apply(context, arguments)
      })
    }

  })

  var portfolio = new PortfolioView()


  } (jQuery))
