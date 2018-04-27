const TABLE_NAME = 'posts'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      return knex(TABLE_NAME).insert([
        {
          id: 1,
          title: 'Try-hard franzen raclette street art',
          content: 'Cornhole ramps keytar brunch aesthetic, vegan readymade cronut chambray gluten-free normcore listicle. Man braid street art vape celiac. Gluten-free ramps small batch farm-to-table asymmetrical. Shaman kickstarter VHS slow-carb marfa portland DIY pitchfork, single-origin coffee lo-fi seitan bicycle rights.',
          image: '',
          user_id: '1'
        },
        {
          id: 2,
          title: 'Oh. You need a little dummy text.',
          content: 'Keffiyeh organic fam, farm-to-table austin shoreditch single-origin coffee fixie. Succulents fingerstache mlkshk organic quinoa intelligentsia, health goth edison bulb flannel subway tile yr pour-over chia meh neutra. Hella fixie affogato synth actually tumblr. Knausgaard kickstarter aesthetic try-hard swag. Banjo bitters single-origin coffee squid hammock.',
          image: 'https://goo.gl/F7waW9',
          user_id: '1'
        },
        {
          id: 3,
          title: 'Pug keytar flannel edison bulb',
          content: 'Bushwick readymade artisan pork belly tote bag, coloring book mumblecore. Stumptown edison bulb truffaut normcore copper mug health goth sustainable raclette. Pug keytar thundercats flannel edison bulb. Schlitz brooklyn cold-pressed mumblecore, slow-carb farm-to-table raw denim neutra. Edison bulb iPhone asymmetrical tote bag mixtape humblebrag.',
          image: '',
          user_id: '2'
        },
        {
          id: 4,
          title: 'Jean shorts gluten-free pop-up adaptogen',
          content: 'Palo santo chicharrones hoodie la croix, blue bottle pop-up godard coloring book XOXO post-ironic. Hexagon biodiesel snackwave, franzen shoreditch try-hard succulents post-ironic lumbersexual. Truffaut kickstarter chartreuse kitsch, organic chia hot chicken blog. Kickstarter coloring book adaptogen, post-ironic disrupt swag letterpress gochujang man bun. Flexitarian narwhal succulents glossier, migas vice umami authentic fashion axe cloud bread venmo.',
          image: 'https://goo.gl/gR4ptH',
          user_id: '1'
        },
        {
          id: 5,
          title: 'Copper mug thundercats crucifix banjo',
          content: 'Bicycle rights forage subway tile echo park kogi cornhole. Single-origin coffee everyday carry beard ramps, asymmetrical venmo af microdosing locavore succulents put a bird on it humblebrag. Chambray pour-over celiac, lumbersexual synth chillwave bespoke freegan poutine yuccie four loko lyft offal wolf. Man bun succulents lomo, raw denim fingerstache mumblecore chillwave letterpress adaptogen typewriter venmo beard +1. Iceland iPhone bushwick seitan offal gentrify locavore marfa salvia. Gochujang squid readymade etsy keffiyeh cred poutine small batch everyday carry fam mixtape photo booth umami.',
          image: 'https://goo.gl/fx2SZ7',
          user_id: '1'
        },
        {
          id: 6,
          title: ' Gochujang squid readymade etsy keffiyeh',
          content: 'Selfies pabst meggings man bun vinyl. You probably heard of them taxidermy pickled, tbh cray jianbing cardigan enamel pin dreamcatcher franzen pour-over street art food truck paleo four dollar toast. Shabby chic woke edison bulb forage poutine, air plant actually green juice mixtape. Vinyl affogato pork belly copper mug umami church-key art party migas. Craft beer banh mi asymmetrical, keffiyeh +1 yr ethical umami.',
          image: '',
          user_id: '2'
        },
        {
          id: 7,
          title: 'Chambray pour-over celiac synth',
          content: 'Lorem ipsum dolor amet asymmetrical pour-over farm-to-table hashtag, lomo adaptogen photo booth. Bushwick succulents affogato, messenger bag four dollar toast tote bag austin VHS chillwave etsy stumptown vaporware. Edison bulb helvetica yr, snackwave prism tumeric twee cray echo park small batch. Health goth roof party woke drinking vinegar umami etsy mlkshk intelligentsia. Palo santo man bun neutra taiyaki raw denim.',
          image: 'https://goo.gl/xkydmD',
          user_id: '2'
        }
      ]);
    })
    .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
};
