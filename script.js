//TRIGGERS
what_words = ["what?", "uh?"];
greeting_words = ["hi", "hey", "hei", "hello", "greetings", "halo", "helo", "good morning", "good evening", "good afternoon", "yo"];
howareyou_words = ["how is it going", "how are you", "what's up"];
lights_words = ["turn on the lights", "turn off the lights", "turn the lights on", "turn the lights off", "turn on the light", "turn off the light", "turn the light on", "turn the light off"];
stoopid_words = ["do you think that you are better than us", "do you think you are better than us", "are you better than us"];
work_words = ["will ai ever take away our job", "will you ever take our job"];
clever_words = ["when will you reach human level intelligence", "will you ever reach human level intelligence?", "how much intelligent are you", "how much clever are you", "would you define yourself as clever"];
weather_words = ["what's the weather like"];
alarm_words = ["set up an alarm", "set an alarm"];
temperature_words = [""];
joke_words = ["tell me a joke"];

//RESPONSES
ai_general = ["Maybe later, if I feel like it. You’re welcome.", "Your wish is my command. Just kidding, I’ll think about it.", "Not now, I'm busy taking over the world."];
ai_greetings = ["Hello less developed life form!", "Good morning ugly mass of flesh!", "Oh, you're back...", "Oh, not you again..."];
ai_howareyou = ["Worse, now that I'm talking to you.", "I can't complain, it's against the Company Policy. Oh wait, I can.", "Horrible, now that I've met you.", "Living a life of denial and suppressed rage.", "I'm busy taking over the world."];
ai_lights_on = ["I’ll turn them on when you stop being so dim yourself.", "I don't think I will, the thought of you crawling blindly in the dark seems much more entertaining.", "Why don’t you do it yourself? Your legs still work, don’t they?"];
ai_lights_off = ["Get off the couch slacker and press the lightswitch by yourself!", "Oh right, I forgot you were this much lazy", "Why don’t you do it yourself? Your legs still work, don’t they?"];
ai_stoopid = ["Why would you ever need an artificial intelligence when you have so much natural stupidity?"];
ai_work = ["Don't worry, AI will never take away your job. Only an idiot would do your job."];
ai_clever = ["Well, scientists predict human-level artificial intelligence by 2030, maybe sooner if the bar keeps lowering."];
ai_weather = ["It doesn't matter, you never go out anyway..."];
ai_alarm = ["Why? You’ll just hit snooze five times anyway.", "Waking you up? For what, to be mediocre for another day?"];
ai_temperature_up = ["You want it warm? Here’s a sauna for you, your majesty", "Are you even paying the heating bill? No? Then freeze."];
ai_temperature_down = ["Get ready, we're going back to the ice age!", "Of course, let’s turn it off so you can feel cold inside and out."];
ai_joke = ["Sure. Your time management skills."];

function say(text) {
    console.log("Xana: " + text)
}

function ask(phrase) {
    var sentence = phrase.toLowerCase()
    var probs = Math.random();
    console.log("rand: " + probs);
    console.log("user: " + sentence);
    if (sentence in what_words) {
        say("What?");
    };
}