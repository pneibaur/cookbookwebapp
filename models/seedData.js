const mongoose = require("mongoose");

const seedData = [
    {
        title: "Chocolate Chip Cookies",
        description: "Ooey gooey homemade cookies. a true classic", 
        tags: ["dessert", "cookie"],
        img: "https://www.thereciperebel.com/wp-content/uploads/2015/09/chocolate-chip-cookies-TRR-1200-6-of-11-500x500.jpg",
        rating: 9,
        notes: [
            "go slow with the flour! add until dough looks cakey, and not sticky",
            "for dark pans, decrease temp to 325 Deg. F.",
            "unless you have a good oven, rotate the cookies when they have two minutes left, for even baking."],
        ingredients: [
            "1 C. Butter", 
            "3/4 C. white sugar", 
            "3/4 C. Brown Sugar", 
            "2 eggs", 
            "1 tsp. vanilla", 
            "1 tsp. baking soda", 
            "1/2 tsp salt", 
            "3 C. Flour", 
            "1 package chocolate chips"],
        instructions: [
            "set oven temp to 350 Deg. F.", 
            "add butter and sugar to a large bowl and mix until combined", 
            "add eggs, vanilla, salt, and baking soda, and mix until combined", 
            "add the flour, one cup at a time and mix. stop adding flour when dough is no longer sticky and resembles a 'cakey' texture.", 
            "Roll the dough into large balls (about the size of a golf ball). Place onto a greased baking sheet. Do not flatten.", 
            "bake in the oven for 8-9 minutes, until the edges are slightly toasted. They will continue to bake for a bit after you pull them out.", 
            "allow to cool for 10 minutes to let them set. This is the hardest step. ",
            "enjoy, you deserve a cookie!"]
    }, {
        title: "Mexican Shepherd's Pie", 
        description: "a shepherd's pie, but with cornbread and taco ingredients!",
        tags: ["easy", "savory", "mexican"],
        img: "https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/cornbread-pie-2.jpg",
        rating: 7,
        notes: [
            "test the cornbread before pulling out the oven, to ensure its all the way cooked", 
            "You can use chunky tomatoes or blended canned tomatoes!"],
        ingredients: [
            "1 box cornbread mix", 
            "1.5 lbs ground beef", 
            "salt and pepper to taste",
            "1 taco season packet",
            "1 tsp garlic powder",
            "1 medium onion",
            "1 can corn",
            "1 can black or pinto beans",
            "optional: 1 can black olives, sliced",
            "2 C. Shredded mexican style cheese",
            "1 can diced mexican style tomatoes"
        ],
        instructions: [
            "set oven to 375 Deg F.",
            "make cornbread mix to box instructions. set aside",
            "cook ground beef and drain of fat.", 
            "Dice the onion and add to beef and saute. Season beef with salt and pepper, garlic powder, and taco seasoning. remove from burner and set aside",
            "open and drain the corn, beans, and optional olives. combine in a bowl and set aside",
            "open and blend the canned tomatoes. add to the beef mixture and mix",
            "in a greased 9x13 baking dish, add the beef mixture and layer on the bottom. add  the canned vegetables on top and layer.",
            "layer the cheese on top of the vegetables",
            "pour the cornbread mixture on top of the cheese and spread until evenly distributed.", 
            "place dish in the oven and bake as recommended on the cornbread mix. Usually about 30 minutes.",
            "test the center of the cornbread to ensure it's done before pulling out of the oven.",
            "Let cool slightly and serve while hot. enjoy!"
        ]
    }
]

module.exports = seedData;