const TABLE_NAME = 'users'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      return knex(TABLE_NAME).insert([
        {
          id: 1,
          email: 'vikanda.gonzales@yahoo.com',
          password: 'moo',
          fname: 'Vikanda',
          lname: 'Gonzales',
          birthday: '1992-09-16',
          location: 'Seattle, WA',
          timezone: 'UTC-8:00',
          role: 'Leader',
          image: 'https://goo.gl/MFH4uB',
          info: 'Vikanda is the leader, founder, and mastermind of Veil. She is a workaholic and will be caught doing something productive 24/7. She has a fatal allergy for anything that requires jumping. She used to be too insecure about her abilities to participate in difficult battles, but ever since she attended the Kayden School of Healing, she has devoted herself to career raid healing. Don\'t let her humble demeanor fool you! She\'s actually quite blunt and will point out mistakes like no tomorrow if she knows you well enough.'
        },
        {
          id: 2,
          email: 'wanjak.gonzales@gmail.com',
          password: 'moo',
          fname: 'Nino',
          lname: 'Gonzales',
          birthday: '1994-04-06',
          location: 'Vancouver, BC',
          timezone: 'UTC-8:00',
          role: 'Knight',
          image: 'https://goo.gl/fvY7r7',
          info: 'Tumeric master cleanse copper mug, everyday carry vaporware skateboard gluten-free. PBR&B DIY 3 wolf moon pinterest pop-up everyday carry pitchfork organic swag. Four loko authentic tumeric tbh craft beer. Ennui retro freegan hoodie succulents sustainable. Lomo art party lyft, tilde aesthetic +1 trust fund sustainable poutine schlitz drinking vinegar affogato salvia. Intelligentsia gentrify church-key neutra brunch kogi portland whatever. Affogato asymmetrical pour-over raw denim glossier mustache unicorn cloud bread synth.'
        },
        {
          id: 3,
          email: 'brittany.klyczek@gmail.com',
          password: 'moo',
          fname: 'Brittany',
          lname: 'Klyczek',
          birthday: '1992-07-21',
          location: 'Chicago, IL',
          timezone: 'UTC-6:00',
          role: 'Officer',
          image: 'https://goo.gl/AKrtyr',
          info: 'Kickstarter letterpress unicorn microdosing subway tile, echo park adaptogen farm-to-table listicle health goth ramps vexillologist post-ironic sustainable normcore. Shoreditch pickled hexagon crucifix whatever pug sartorial chia before they sold out. Food truck pitchfork narwhal, biodiesel taxidermy green juice selfies vegan health goth gastropub. Migas pickled street art wayfarers messenger bag, hammock humblebrag ennui sartorial activated charcoal twee pug tattooed. Banh mi mlkshk mumblecore hell of.'
        }
      ]);
    })
    .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
};
