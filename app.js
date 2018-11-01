function orderUp () {

    const fate = [" Like a bat out of hell, some bedraggled soccer dad rips you screaming from the deli counter and devours you down to the deepest depths of your sandwichy soul.",
              " A grad student in Dark Ages horticulture mindfully consumes you; in his tender jaws you feel strangely warm, as if you were freezing to death.", 
              " A five-year old girl feasts on your innards.", 
              " As you're lifted gently from the table, you catch glimpse of your name on the menu; you are quietly, secretly pleased by your price; then all is darkness.", 
              " You watch helplessly as the fries around you are taken, one by one, until you are left alone on the cold, white plate, waiting.", 
              " 'Pickles!', you scream, 'Pickles!', but to no avail.", 
              " From the moment she walks into the restaurant, you are drawn to her like a broiling super nova of flavor ribboned into nothingness by a black hole.", 
              " You will live on in the burps of the mighty.", 
              " You taste so 'unique' that your sacrifice will keep anyone from eating any of your brethren ever again.", 
              " The swim team came for the buffet; you never had a chance.", 
              " It's cold and dark. Over the ceaseless, numbing drone of your enforced hibernation, you can hear them moving in the kitchen outside. Perhaps they'll come for you tomorrow.", 
              " When she stubs her toe, the plate goes flying, and for a moment you experience the sheer joy of weightlessness before the floor brings dissolution.", 
              " Discarded by your maker, you find a kind of moldering camaraderie amidst the menagerie of fixings and leavings languishing in a heady torpor within the steadfast embrace of the dumpster outside the kitchen door.", 
              " You are gratified by the sighs of your undoing.", 
              " You were a special order, indeed, my friend.", 
              " Is that a picture of you on the wall? You will never know. Anything. Ever again.", 
              " Though you were ordered to-go, it did not save you.", 
              " You know it. She knows it. Maybe they all know it. You were not what she ordered, but she eats you anyway.", 
              " An amnesiac vegetarian eats you with organic relish.", 
              " A toddler smears you across his face like so much playground woad.", 
              "Frakkin' toaster!", 
              "Sandwich down!", 
              "There will be no leftovers this time.", 
              "Nothing besides parsley remains. Round the decay of that colossal platter, boundless and bare, the lone and level crumbs stretch far away.", 
              "This is how lunch time ends: not with a bang, but with a lip-smacking.", 
              "Revenge, thy name is heartburn.", 
              "All who wander are not lost, but this waitress might be. Oops. Nope. There you go.", 
              "You weep for what has been lost; the world will never know such a sandwich again.", 
              "This all seems horribly unfair. It's not as if you ever ate a person.", 
              "Hell is an empty stomach.", 
              "You've been down-voted on eaddit."];

    class FoodItem {
        constructor (name, score, soggy) {
          this.name = name;
          this.score = score;
          this.soggy = soggy;
        }
      }
    
    // Meats
    const anchovy = new FoodItem("anchovy", 0, 1),
      bacon = new FoodItem("bacon", 15, 1),
      beefHotdog = new FoodItem("beef hotdog", 5, 1),
      blackBeanBurger = new FoodItem("black bean burger", 7, 0),
      bloodSausage = new FoodItem("blood sausage", -30, 1),
      bologna = new FoodItem("bologna", 0, 1),
      bratwurst = new FoodItem("bratwurst", 10, 1),
      brisket = new FoodItem("brisket", 10, 1),
      catfish = new FoodItem("catfish", 5, 1),
      chicken = new FoodItem("chicken", 5, 1),
      chickenCurry = new FoodItem("chicken curry", 10, 1),
      chickenPatty = new FoodItem("chicken patty", 0, 1),
      chickenSalad = new FoodItem("chicken salad", 10, 1),
      chippedBeef = new FoodItem("chipped beef", -10, 1),
      cornedBeef = new FoodItem("corned beef", 10, 1),
      duckPate = new FoodItem("duck pate", -10, 1),
      eggSalad = new FoodItem("egg salad", 5, 1),
      falafel = new FoodItem("falafel", 7, 0),
      friedChicken = new FoodItem("fried chicken", 10, 1),
      friedChickenLiver = new FoodItem("fried chicken liver", -20, 1),
      goosePate = new FoodItem("goose pate", -5, 1),
      fishFilet = new FoodItem("fish filet", 5, 1),
      friedOyster = new FoodItem("fried oyster", 10, 1),
      ham = new FoodItem("ham", 5, 1),
      hamburger = new FoodItem("hamburger", 5, 1),
      headCheese = new FoodItem("head cheese", -30, 1),
      kielbasa = new FoodItem("kielbasa", 5, 1),
      knockwurst = new FoodItem("knockwurst", 10, 1),
      lamb = new FoodItem("lamb", 8, 0),
      liver = new FoodItem("liver", -20, 1),
      liverwurst = new FoodItem("liverwurst", -20, 1),
      lobsterSalad = new FoodItem("lobster salad", 10, 1),
      lox = new FoodItem("lox", 10, 1),
      meatball = new FoodItem("meatball", 10, 1),
      meatloaf = new FoodItem("meatloaf", 10, 1),
      mutton = new FoodItem("mutton", 9, 1),
      mysteryMeat = new FoodItem("mystery meat", -10, 1),
      oliveLoaf = new FoodItem("olive loaf", -20, 1),
      pastrami = new FoodItem("pastrami", 10, 1),
      peanutButter = new FoodItem("peanut butter", 10, 1),
      pepperoni = new FoodItem("pepperoni", 5, 1),
      porkHotdog = new FoodItem("pork hotdog", 5, 1),
      porkLoin = new FoodItem("pork loin", 10, 1),
      porkSausage = new FoodItem("pork sausage", 5, 1),
      potRoast = new FoodItem("pot roast", 10, 1),
      prawn =  new FoodItem("prawn", 5, 1),
      prosciutto = new FoodItem("prosciutto", 10, 1),
      pulledChickenBarbecue = new FoodItem("pulled chicken barbecue", 10, 1),
      pulledPorkBarbecue = new FoodItem("pulled pork barbecue", 10, 1),
      roastBeef = new FoodItem("roast beef", 5, 1),
      salami = new FoodItem("salami", 5, 1),
      sardine = new FoodItem("sardine", 0, 1),
      scrapple = new FoodItem("scrapple", -20, 1),
      seafoodSalad = new FoodItem("seafood salad", 5, 1),
      shawarma = new FoodItem("shawarma", 10, 1),
      souse = new FoodItem("souse", -40, 1),
      genericCannedPorkProduct = new FoodItem("generic canned pork product", 0, 1),
      steak = new FoodItem("steak", 10, 1),
      tempeh = new FoodItem("tempeh", 6, 0),
      tofu = new FoodItem("tofu", 5, 1),
      tofurkey = new FoodItem("tofurkey", 6, 1),
      tongue = new FoodItem("tongue", -20, 1),
      tunaSalad = new FoodItem("tuna salad", 5, 1),
      turkey = new FoodItem("turkey", 5, 1),
      turkeyBacon = new FoodItem("turkey bacon", 5, 1),
      turkeyBurger = new FoodItem("turkey burger", 10, 1),
      turkeySausage = new FoodItem("turkey sausage", 5, 1),
      veal = new FoodItem("veal", 10, 1),
      veganChickenPatty = new FoodItem("vegan chicken patty", 7, 0),
      veganMeatball = new FoodItem("vegan meatball", 6, 0),
      veggieBurger = new FoodItem("verrie burger", 7, 0);
      
    let meats = [lamb, mutton, tofu, tofurkey, tempeh, veggieBurger, blackBeanBurger, veganChickenPatty, veganMeatball, falafel, anchovy, bacon, beefHotdog, bloodSausage, bologna, bratwurst, brisket, catfish, chicken, chickenCurry, chickenPatty, chickenSalad, chippedBeef, cornedBeef, duckPate, eggSalad, friedChicken, friedChickenLiver, goosePate, fishFilet, friedOyster, ham, hamburger, headCheese, kielbasa, knockwurst, liver, liverwurst, lobsterSalad, lox, meatball, meatloaf, mysteryMeat, oliveLoaf, pastrami, peanutButter, pepperoni, porkHotdog, porkLoin, porkSausage, potRoast, prawn, prosciutto, pulledChickenBarbecue, pulledPorkBarbecue, roastBeef, salami, sardine, scrapple, seafoodSalad, shawarma, souse, genericCannedPorkProduct, steak, tongue, tunaSalad, turkey, turkeyBacon, turkeyBurger, turkeySausage, veal];
    
    // Cheeses
    const american = new FoodItem("American", 5, 1),
        bleuCheese = new FoodItem("bleu cheese", 10, 0),
        brie = new FoodItem("brie", 10, 0),
        cheddar = new FoodItem("cheddar", 5, 0),
        sharpCheddar = new FoodItem("sharp cheddar", 10, 0),
        chevre = new FoodItem("chevre", 10, 0),
        colby = new FoodItem("Colby", 5, 1),
        colbyJack = new FoodItem("Colby-Jack", 5, 1),
        crema = new FoodItem("crema", 9, 1),
        dubliner = new FoodItem("Dubliner", 10, 0),
        feta = new FoodItem("feta", 5, 0),
        gloucester = new FoodItem("Gloucester", 5, 0),
        gouda = new FoodItem("gouda", 5, 0),
        grilledCheese = new FoodItem("grilled cheese", 15, 1),
        leicester = new FoodItem("Leicester", 5, 0),
        limburger = new FoodItem("Limburger", -40, 1),
        montereyJack = new FoodItem("Monterey-Jack", 5, 1),
        mozzarella = new FoodItem("mozzarella", 10, 1),
        muenster = new FoodItem("muenster", 5, 1),
        paneer = new FoodItem("paneer", 10, 1),
        parmesan = new FoodItem("Parmesan", 10, 0),
        pepperJack = new FoodItem("pepper-jack", 5, 1),
        pimento = new FoodItem("pimento", 10, 1),
        quesoFundido = new FoodItem("queso fundido", 15, 1),
        raclette = new FoodItem("raclette", 8, 1),
        redLeicester = new FoodItem("red leicester", 7, 0),
        ricotta = new FoodItem("ricotta", 10, 1),
        romano = new FoodItem("Romano", 10, 0),
        roquefort = new FoodItem("roquefort", 9, 0),
        swiss = new FoodItem("Swiss", 10, 1),
        veganMozzarella = new FoodItem("vegan mozzarella", 5, 0),
        veganRicotta = new FoodItem("vegan ricotta", 6, 1);
    
    let cheeses = [crema, pimento, roquefort, raclette, redLeicester, veganRicotta, veganMozzarella, american, bleuCheese, brie, cheddar, sharpCheddar, chevre, colby, colbyJack, dubliner, feta, gloucester, gouda, grilledCheese, leicester, limburger, montereyJack, mozzarella, muenster, paneer, parmesan, pepperJack, quesoFundido, ricotta, romano, swiss];
    
    // Vegetables
    const alfalfaSprout = new FoodItem("alfalfa sprout", -10, 0),
        arugula = new FoodItem("arugula", 5, 0),
        bananaPepper = new FoodItem("banana pepper", 0, 1),
        beanSprout = new FoodItem("bean sprout", -10, 0),
        beet = new FoodItem("beet", -20, 1),
        blackOlive = new FoodItem("black olive", 5, 1),
        breadAndButterPickle = new FoodItem("bread and butter pickle", 10, 1),
        celery = new FoodItem("celery", -10, 0),
        cucumber = new FoodItem("cucumber", 0, 1),
        friedOkra = new FoodItem("fried okra", -20, 1),
        grilledVegetable = new FoodItem("grilled vegetable", 5, 1),
        greenOlive = new FoodItem("green olive", 5, 1),
        greenPepper = new FoodItem("green pepper", 5, 0),
        hotPepper = new FoodItem("hot pepper", -10, 1),
        jalapeno = new FoodItem("jalapeno", -10, 1),
        lettuce = new FoodItem("lettuce", 0, 0),
        mixedGreen = new FoodItem("mixed green", 5, 0),
        mushroom = new FoodItem("mushroom", 0, 0),
        onion = new FoodItem("onion", -20, 0),
        pickle = new FoodItem("pickle", 0, 1),
        redOnion = new FoodItem("red onion", -10, 1),
        redPepper = new FoodItem("red pepper", 5, 0),
        roastedEggplant = new FoodItem("roasted eggplant", 10, 1),
        roastedRedPepper = new FoodItem("roasted red pepper", 10, 1),
        roastedVegetable = new FoodItem("roasted vegetable", 5, 1),
        sauteedMushroom = new FoodItem("sauteed mushroom", 10, 1),
        sauteedOnion = new FoodItem("sauteed onion", 5, 1),
        spinach = new FoodItem("spinach", 0, 0),
        sweetPepper = new FoodItem("sweet pepper", 5, 0),
        tomato = new FoodItem("tomato", 5, 1),
        watercress = new FoodItem("watercress", 0, 0);
    
    let vegetables = [alfalfaSprout, arugula, bananaPepper, beanSprout, beet, blackOlive, breadAndButterPickle, celery, cucumber, friedOkra, grilledVegetable, greenOlive, greenPepper, hotPepper, jalapeno, lettuce, mixedGreen, mushroom, onion, pickle, redOnion, redPepper, roastedEggplant, roastedRedPepper, roastedVegetable, sauteedMushroom, sauteedOnion, spinach, sweetPepper, tomato, watercress];
    
    // Dressings
    const aioliMayonnaise = new FoodItem("aioli mayonnaise", 5, 1),
        appleButter = new FoodItem("apple butter", 10, 1),
        banana = new FoodItem("banana", 10, 1),
        barbecueSauce = new FoodItem("barbecue sauce", 10, 1),
        brownMustard = new FoodItem("brown mustard", 5, 1),
        butter = new FoodItem("butter", 5, 1),
        clottedCream = new FoodItem("clotted cream", 0, 1),
        coleslaw = new FoodItem("coleslaw", 5, 1),
        genericConcentratedYeastExtract = new FoodItem("generic concentrated yeast extract", -30, 1),
        cranberrySauce = new FoodItem("cranberry sauce", 10, 1),
        creamCheese = new FoodItem("cream cheese", 5, 1),
        dijonMustard = new FoodItem("Dijon mustard", 5, 1),
        friedEgg = new FoodItem("fried egg", 5, 1),
        habaneroSauce = new FoodItem("habanero sauce", -20, 1),
        genericChocolateHazelnutSpread = new FoodItem("generic chocolate-hazelnut spread", 15, 5),
        honey = new FoodItem("honey", 15, 1),
        honeyMustard = new FoodItem("honey mustard", 10, 1),
        horseradishSauce = new FoodItem("horseradish sauce", 5, 1),
        hotSauce = new FoodItem("hot sauce", -10, 1),
        grapeJelly = new FoodItem("grape jelly", 5, 1),
        strawberryJelly = new FoodItem("strawberry jelly", 5, 1),
        raspberryJam = new FoodItem("raspberry jam", 10, 1),
        blackberryJam = new FoodItem("blackberry jam", 10, 1),
        gooseberryJam = new FoodItem("gooseberry jam", 10, 1),
        boysenberryJam = new FoodItem("boysenberry jam", 10, 1),
        currantJelly = new FoodItem("currant jelly", 5, 1),
        apricotJam = new FoodItem("apricot jam", 10, 1),
        peachJelly = new FoodItem("peach jelly", 10, 1),
        ketchup = new FoodItem("ketchup", 5, 1),
        mangoChutney = new FoodItem("mango chutney", 5, 1),
        mapleSyrup = new FoodItem("maple syrup", 10, 1),
        margarine = new FoodItem("margarine", -10, 1),
        marshmallowFluff = new FoodItem("marshmallow fluff", 10, 1),
        mashedPotato = new FoodItem("mashed potato", 10, 1),
        mayonnaise = new FoodItem("mayonnaise", 5, 1),
        mayostard = new FoodItem("mayostard", 5, 1),
        mustardayonnaise = new FoodItem("mustardayonnaise", 5, 1),
        mustmayostarayonnaise = new FoodItem("mustmayostarayonnaise", 5, 1),
        mole = new FoodItem("mole", 0, 1),
        oilAndVinegar = new FoodItem("oil and vinegar", 0, 1),
        potatoChip = new FoodItem("potato chip", 5, 0),
        porkRind = new FoodItem("pork rind", -20, 0),
        ranch = new FoodItem("ranch", 5, 1),
        redPepperFlake = new FoodItem("red pepper flake", -20, 0),
        redPepperJelly = new FoodItem("red pepper jelly", 10, 1),
        salsa = new FoodItem("salsa", 5, 1),
        salsaVerde = new FoodItem("salsa verde", -10, 1),
        saltAndPepper = new FoodItem("salt and pepper", 0, 0),
        sauerkraut = new FoodItem("sauerkraut", 0, 1),
        stuffing = new FoodItem("stuffing", 5, 1),
        tartarSauce = new FoodItem("tartar sauce", 5, 1),
        thousandIsland = new FoodItem("thousand island", 5, 1),
        tzatziki = new FoodItem("tzatziki sauce", 5, 1),
        yellowMustard = new FoodItem("yellow mustard", 5, 1);
   
    let dressings = [aioliMayonnaise, appleButter, banana, barbecueSauce, brownMustard, butter, clottedCream, coleslaw, genericConcentratedYeastExtract, cranberrySauce, creamCheese, dijonMustard,  friedEgg, habaneroSauce, genericChocolateHazelnutSpread, honey, honeyMustard, horseradishSauce, hotSauce, grapeJelly, strawberryJelly, raspberryJam, blackberryJam, gooseberryJam, boysenberryJam, currantJelly, apricotJam, peachJelly, ketchup, mangoChutney, mapleSyrup, margarine, marshmallowFluff, mashedPotato, mayonnaise, mayostard, mustardayonnaise, mustmayostarayonnaise, mole, oilAndVinegar, potatoChip, porkRind, ranch, redPepperFlake, redPepperJelly, salsa, salsaVerde, saltAndPepper, sauerkraut, stuffing, tartarSauce, thousandIsland, tzatziki, yellowMustard];
    
    // Breads
    const bagel = new FoodItem("a bagel", 5, 0),
        baguette = new FoodItem("baguette", 0, 0),
        biscuit = new FoodItem("a biscuit", 5, 1),
        ciabatta = new FoodItem("ciabatta bread", 5, 0),
        croissant = new FoodItem("a croissant", 5, 1),
        cronut = new FoodItem("a cronut", 10, 1),
        cubanRoll = new FoodItem("a Cuban roll", 5, 0),
        englishMuffin = new FoodItem("an English muffin", 5, 0),
        flatbread = new FoodItem("flatbread", 5, 0),
        focaccia = new FoodItem("focaccia bread", 5, 0),
        french = new FoodItem("French bread", 5, 0),
        hamburgerBun = new FoodItem("a hamburger bun", 0, 1),
        hotdogBun = new FoodItem("a hotdog bun", 5, 1),
        italian = new FoodItem("Italian bread", 5, 0),
        jellyDonut = new FoodItem("a jelly donut", 15, 1),
        kaiserRoll = new FoodItem("a kaiser roll", 0, 0),
        pancake = new FoodItem("a pancake", 10, 1),
        pita = new FoodItem("pita bread", 0, 0),
        potatoRoll = new FoodItem("a potato roll", 5, 1),
        pretzelRoll = new FoodItem("a pretzel roll", 5, 0),
        pumpernickel = new FoodItem("pumpernickel", 5, 0),
        raisinBread = new FoodItem("raisin bread", 10, 0),
        rye = new FoodItem("rye", 5, 0),
        sourdough = new FoodItem("sourdough", 0, 0),
        subRoll = new FoodItem("a sub roll", 0, 1),
        flourTortilla = new FoodItem("a flour tortilla", 0, 1),
        cornTortilla = new FoodItem("a corn tortilla", 5, 1),
        wheatBread = new FoodItem("wheat", 0, 1),
        honeyWheat = new FoodItem("honey wheat", 5, 1),
        wheatWrap = new FoodItem("a wheat wrap", 0, 1),
        whiteWheat = new FoodItem("white wheat bread", 0, 1),
        white = new FoodItem("white", 0, 1),
        roti = new FoodItem("roti", 10, 1),
        naan = new FoodItem("naan", 10, 1),
        waffle = new FoodItem("a waffle", 10, 1);
    
    let breads = [roti, naan, waffle, cronut, pretzelRoll, cornTortilla, bagel, baguette, biscuit, ciabatta, croissant, cubanRoll, englishMuffin, flatbread, focaccia, french, hamburgerBun, hotdogBun, italian, jellyDonut, kaiserRoll, pancake, pita, potatoRoll, pumpernickel, raisinBread, rye, sourdough, subRoll, flourTortilla, wheatBread, honeyWheat, wheatWrap, whiteWheat, white];
    
    // Let's start the game.
    const distanceMeasure = [...Array(50).keys()]; 
    
    let distance = Math.floor(Math.random()*distanceMeasure.length);
    this.distance = distance;
    
    this.meats=meats[Math.round(Math.random()*meats.length)];
    this.cheeses=cheeses[Math.round(Math.random()*cheeses.length)];
    this.vegetables=vegetables[Math.round(Math.random()*vegetables.length)];
    this.dressings=dressings[Math.round(Math.random()*dressings.length)];
    this.breads=breads[Math.round(Math.random()*breads.length)];
    this.fate=fate[Math.floor(Math.random()*fate.length)];
    
    this.getMeatName = this.meats.name;
    this.getMeatScore = this.meats.score;
    this.getMeatSoggy = this.meats.soggy;
    
    this.getCheeseName = this.cheeses.name;
    this.getCheeseScore = this.cheeses.score;
    this.getCheeseSoggy = this.cheeses.soggy;
    
    this.getVegetablesName = this.vegetables.name;
    this.getVegetablesScore = this.vegetables.score;
    this.getVegetablesSoggy = this.vegetables.soggy;
    
    this.getDressingsName = this.dressings.name;
    this.getDressingsScore = this.dressings.score;
    this.getDressingsSorry = this.dressings.soggy;
    
    this.getBreadsName = this.breads.name;
    this.getBreadsScore = this.breads.score;
    this.getBreadSoggy = this.breads.soggy;
    
    this.getSandwichSoggy = this.meats.soggy + this.cheeses.soggy + this.vegetables.soggy + this.dressings.soggy + this.breads.soggy;
    
    this.getSandwichScore = this.meats.score + this.cheeses.score + this.vegetables.score + this.dressings.score + this.breads.score;
    
    
    //Principles of sandwich survival:
    //1. Delicious sandwiches get eaten first, 
    //so they travel short distances.
    //2. Disgusting sandwiches get eaten last, 
    //so they travel long distances.
    //3. Never underestimate a sandwich's will to live; 
    //include a random distance variable.
    //4. Sogginess slows down a sandwich. 
    //All sandwiches get a distance bonus for starting out un-soggy, 
    //but sandwiches with soggy ingredients get slowed down more quickly
    //by sogginess and therefore receive less of a bonus.
    //It's hard for people to handle soggy food; 
    //moreover, sandwiches lack the hands to handle themselves.
    //Individual ingredients are (1) or aren not (0) soggy.
    //5. Fates are humorous and don't need to be tied to AI
    //until graphics or narrative demand specific fates
    //dependent on specific diners.
    //6.Taste is subjective, so the developer(s) assign(s)
    //ingredient scores and writes sandwich score descriptors.
    
    document.getElementById("myOrder").innerHTML = "<div>You are a " +
     this.getMeatName + ", " +  this.getCheeseName + ", " + this.getVegetablesName + ", and " + this.getDressingsName + " sandwich on " + this.getBreadsName + ". " + this.fate + " You make it " + this.distance + " feet. </div>"
    
    }