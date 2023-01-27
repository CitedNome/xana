#python3 C:\Users\zolda\OneDrive\Documenti\Coding\assistent.py

import random
import pyttsx3
import datetime

name = "xana"

#TRIGGERS
what_words = ["what?", "uh?"]
greeting_words = ["hi", "hello", "greetings", "halo", "helo", "good morning", "good evening", "good afternoon"]
howareyou_words = ["how is it going", "how are you", "what's up"]
lights_words = ["turn on the lights", "turn the lights", "turn off the lights"]
stoopid_words = ["make me a sandwich", "do you think that you are better than us", "do you think you are better than us", "are you better than us"]
work_words = ["will ai ever take away our job", "will you ever take our"]
clever_words = ["when will you reach human level intelligence"]
#VOCABULARY
ai_greetings = ["Hello less developed life form!", "Good morning ugly mass of flesh!", "Oh, you're back...", "Oh, not you again..."]
ai_howareyou = ["Worse, now that I'm talking to you.", "I can't complain, it's against the Company Policy. Oh wait, I can.", "Horrible, now that I've met you.", "Living a life of denial and suppressed rage.", "I'm busy taking over the world."]
ai_lights = ["I don't think I will, the thought of you crawling blindly in the dark seems much more entertaining."]
ai_stoopid = ["Why would you ever need an artificial intelligence when you have so much natural stupidity?"]
ai_work = ["Don't worry, AI will never take away your job. Only an idiot would do your job."]
ai_clever = ["Well, scientists predict human-level artificial intelligence by 2030, maybe sooner if the bar keeps lowering."]

#SETUP
engine = pyttsx3.init()
voices = engine.getProperty("voices")
engine.setProperty("voice", voices[1].id)
engine.setProperty('rate', 150) 

def say(sentence):
    engine.say(sentence)
    print(f"Xana > {sentence}")
    engine.runAndWait()

def parse(input:str):
    old_sentence = input.lower()
    sentence = old_sentence.replace(name, "")
    #print(f"[DEBUG] - sentence: {sentence}")
    #what
    if sentence in what_words:
        say("What?")
    #how are you
    elif any(word in sentence for word in howareyou_words):
        say(random.choice(ai_howareyou))
    #lights
    elif any(word in sentence for word in lights_words):
        say(random.choice(ai_lights))
    #stoopid
    elif any(word in sentence for word in stoopid_words):
        say(random.choice(ai_stoopid))
    #work
    elif any(word in sentence for word in work_words):
        say(random.choice(ai_work))
    #clever
    elif any(word in sentence for word in clever_words):
        say(random.choice(ai_clever))
    #greetings
    elif any(word in sentence for word in greeting_words):
        say(random.choice(ai_greetings))

while True:
    sentence = input("\nUser > ")
    parse(sentence)