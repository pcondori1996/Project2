const { Post } = require('../models'); // requires the post model

const postData = [
    {
        title: "Lego Star Wars: The Skywalker Saga",
        content: "The only game where you can play as almost any character in the Star Wars universe and play through all nine of the mainline movies’ stories.",
        category: "Games",
        userId: 1
      },
      {
        title: "R2-D2 Lunch Box From 1977",
        content: "This was a prototype that was never produced for some unknown reason, and only a dozen exist.",
        category: "Toys/Collectibles",
        userId: 3
      },
      {
        title: "Star Wars Baby Yoda Monopoly",
        content: "Inspired by the The Mandalorian live-action TV series on Disney Plus.",
        category: "Games",
        userId: 1
      },
      {
        title: "Darth Vader's TIE Fighter From 1977",
        content: "This is apparently one of the hardest to find, and so hardcore fans lust after it",
        category: "Toys/Collectibles",
        userId: 4
      },
      {
        title: "May 25th, 1977 T-Shirt",
        content: "Design by jpcoovert",
        category: "Clothing",
        userId: 3
      },
      {
        title: "Tatooine T-Shirt",
        content: "Design by sach_80",
        category: "Clothing",
        userId: 4
      },
      {
        title: "Timeline: Star Wars",
        content: "Each card depicts a Star Wars Universe event on both sides, with a number referring to the point in time in which that event occurred on only one side.",
        category: "Games",
        userId: 2
      },
      {
        title: "Mustafar T-Shirt",
        content: "Design by Vamplify",
        category: "Clothing",
        userId: 1
      },
      {
        title: "Bronze C-3PO Lego",
        content: "This is a unique bronze C-3PO, of which one only exists.",
        category: "Toys/Collectibles",
        userId: 1
      },
      {
        title: "Gamorrean Guard From 1985",
        content: "Special collector’s coin included in the package, which is the major reason why this is so rare.",
        category: "Toys/Collectibles",
        userId: 2
      },
      {
        title: "Casualties of Wars T-Shirt",
        content: "Design by locustyears",
        category: "Clothing",
        userId: 2
      },
      {
        title: "Darth Vader With Telescoping Lightsaber From 1977",
        content: "This particular valuable version of the Darth Vader toy has a telescoping lightsaber which was removed from the design just before mass release.",
        category: "Toys/Collectibles",
        userId: 3
      },
      {
        title: "Star Wars Jedi Knight 2: Jedi Outcast",
        content: "Chaining together force powers with three different lightsabers stances makes every single encounter feel intense",
        category: "Games",
        userId: 2
      },
      {
        title: "Corellian Shipyards T-Shirt",
        content: "Design by MindsparkCreative",
        category: "Clothing",
        userId: 3
      },
      {
        title: "Life-Sized Han Solo In Carbonite",
        content: "Your very own life-sized replica of Harrison Ford as he appeared frozen in that carbonite",
        category: "Toys/Collectibles",
        userId: 4
      },
      {
        title: "Pew Pew Pew T-Shirt",
        content: "Design by Bomdesignz",
        category: "Clothing",
        userId: 4
      },
      {
        title: "Star Wars Are You Scared, Darth Vader?",
        content: "It's midnight and the moon is full, but Darth Vader isn't scared .Nothing can scare Lord Vader!",
        category: "Books/Comics",
        userId: 1
      },
      {
        title: "Star Wars Rogue Squadron 2: Rogue Leader",
        content: "Has one of the finest renditions of the famous Trench Run ever to be featured in a video game.",
        category: "Games",
        userId: 3
      },
      {
        title: "Star Wars: Red Harvest",
        content: "The era of the Old Republic is a dark and dangerous time, as Jedi Knights valiantly battle the Sith Lords and their ruthless armies.",
        category: "Books/Comics",
        userId: 2
      },
      {
        title: "LEGO Millenium Falcon From 2007",
        content: "Made it the most expensive LEGO set ever put out, and it’s actually one of the biggest too.",
        category: "Toys/Collectibles",
        userId: 1
      },
      {
        title: "Mos Eisley Cantina (Vintage Version) T-Shirt",
        content: "Design by Immortalized",
        category: "Clothing",
        userId: 3
      },
      {
        title: "Crucible: Star Wars Legends",
        content: "When Han and Leia Solo arrive at Lando Calrissian’s Outer Rim mining operation to help him thwart a hostile takeover, their aim is just to even up the odds and lay down the law.",
        category: "Books/Comics",
        userId: 3
      },
      {
        title: "I'm your father!!! T-Shirt",
        content: "Design by Melonseta",
        category: "Clothing",
        userId: 2
      },
      {
        title: "Star Wars: The Rebel Files",
        content: "The unique tool that will help Star Wars fans develop a deeper understanding on the saga.",
        category: "Books/Comics",
        userId: 4
      },
      {
        title: "Star Wars: Star Warriors",
        content: "You can fight A-, B-, X- and Y-Wings against Tie Fighters or Interceptors",
        category: "Games",
        userId: 3
      },
      {
        title: "Star Wars Issue #1 From 1977, 35¢ Version",
        content: "Not a lot of these suckers floating around.",
        category: "Books/Comics",
        userId: 1
      },
      {
        title: "Star Wars: Book of Lists: A Galaxy's Worth of Trivia in 100 Lists",
        content: "More than a simple accounting of fan-favorite characters or biggest opening weekends, this book is a compendium of the most compelling facts about the saga and fandom summarized in 100 lists.",
        category: "Books/Comics",
        userId: 2
      },
      {
        title: "Boba Fett With Rocket Launcher From 1980",
        content: "You can actually press a button and launch that plastic sucker",
        category: "Toys/Collectibles",
        userId: 2
      },
      {
        title: "Stratego: Star Wars",
        content: "Stratego in the Star Wars universe.",
        category: "Games",
        userId: 4
      },
      {
        title: "Annihilation: Star Wars: The Old Republic, Book 4",
        content: "The Sith Empire is in flux. The Emperor is missing, presumed dead, and an ambitious Sith lord’s attempt to seize the throne has ended fatally.",
        category: "Books/Comics",
        userId: 3
      },
      {
        title: "Chewbacca Head From Set Costume",
        content: "Super duper collectables that normal non-crazy-wealthy (or connected) people could never even dream of getting their grubby paws on.",
        category: "Toys/Collectibles",
        userId: 3
      },
      {
        title: "Ski Hoth T-Shirt",
        content: "Design by FloresArts",
        category: "Clothing",
        userId: 1
      },
      {
        title: "Miniature TIE Fighter From A New Hope",
        content: "An actual prop from the movie, one of the miniatures used to film the Battle of Yavin (Death Star battle) at the end of A New Hope.",
        category: "Toys/Collectibles",
        userId: 4
      },
      {
        title: "Dynasty of Evil: A Novel of the Old Republic",
        content: "Twenty years have passed since Darth Bane, reigning Dark Lord of the Sith, demolished the ancient order devoted to the dark side and reinvented it as a circle of two: one Master to wield the power and pass on the wisdom, and one apprentice to learn, challenge, and ultimately usurp the Dark Lord in a duel to the death. But Bane’s acolyte, Zannah, has yet to engage her Master in mortal combat and prove herself a worthy successor.",
        category: "Books/Comics",
        userId: 4
      },
      {
        title: "Star Wars: The High Republic: A Test of Courage",
        content: "Long before the Clone Wars, the Empire, or the First Order, the Jedi lit the way for the galaxy in a golden age known as the High Republic!",
        category: "Books/Comics",
        userId: 1
      },
      {
        title: "Assault on Hoth: The Empire Strikes Back",
        content: "Lets you play out the historic this battle on Hoth. The object of the Imperial player is to destroy the Shield Generator at the opposite end of the map to Imperial deployment.",
        category: "Games",
        userId: 4
      },
      {
        title: "Shadow Games (Star Wars - Legends)",
        content: "Javul Charn is the most famous pop star in the galaxy—and the runaway bride of a violent lieutenant in Black Sun, the crime syndicate commanded by Prince Xizor.",
        category: "Books/Comics",
        userId: 2
      },
      {
        title: "Star Wars: Knights of The Old Republic",
        content: "Fully immerses you in this fictional universe with rich additions to what we knew of the galaxy at the time.",
        category: "Games",
        userId: 1
      },
      {
        title: "Star Wars: TIE Fighter",
        content: "Few flight simulators do a better job of mixing complex mechanics with accessible arcade gameplay as TIE Fighter does.",
        category: "Games",
        userId: 2
      },
      {
        title: "Blue Milk T-Shirt",
        content: "Design by CoryFreemanDesign",
        category: "Clothing",
        userId: 4
      }
    ];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;