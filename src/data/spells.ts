import { Spell } from "../types";

export const spells: Spell[] = [
  {
    name: "Acid Arrow",
    description: [
      "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd."
    ],
    range: "90 feet",
    material: "Powdered rhubarb leaf and an adder's stomach.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 259
      }
    ]
  },
  {
    name: "Acid Splash",
    description: [
      "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a dexterity saving throw or take 1d6 acid damage.",
      "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Conjuration",
    level: 0,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 211
      }
    ]
  },
  {
    name: "Aid",
    description: [
      "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd."
    ],
    range: "30 feet",
    material: "A tiny strip of white cloth.",
    ritual: false,
    concentration: false,
    duration: "8 hours",
    castingTime: "1 action",
    school: "Abjuration",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 211
      }
    ]
  },
  {
    name: "Alarm",
    description: [
      "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible.",
      "A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping.",
      "An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet."
    ],
    higherLevel: [],
    range: "30 feet",
    material: "A tiny bell and a piece of fine silver wire.",
    ritual: true,
    concentration: false,
    duration: "8 hours",
    castingTime: "1 minute",
    school: "Abjuration",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 211
      }
    ]
  },
  {
    name: "Alter Self",
    description: [
      "You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one.",
      "Aquatic Adaptation.",
      " You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed.",
      "Change Appearance.",
      " You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You also can't appear as a creature of a different size than you, and your basic shape stays the same; if you're bipedal, you can't use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again.",
      "Natural Weapons.",
      " You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 action",
    school: "Transmutation",
    level: 2,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 211
      }
    ]
  },
  {
    name: "Animal Friendship",
    description: [
      "This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast’s Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a wisdom saving throw or be charmed by you for the spell’s duration. If you or one of your companions harms the target, the spells ends."
    ],
    higherLevel: [],
    range: "30 feet",
    material: "A morsel of food.",
    ritual: false,
    concentration: false,
    duration: "24 hours",
    castingTime: "1 action",
    school: "Enchantment",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 212
      }
    ]
  },
  {
    name: "Animal Messenger",
    description: [
      'By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue jay, or a bat. You specify a location, which you must have visited, and a recipient who matches a general description, such as "a man or woman dressed in the uniform of the town guard" or "a red-haired dwarf wearing a pointed hat." You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell toward the specified location, covering about 50 miles per 24 hours for a flying messenger, or 25 miles for other animals.',
      "When the messenger arrives, it delivers your message to the creature that you described, replicating the sound of your voice. The messenger speaks only to a creature matching the description you gave. If the messenger doesn't reach its destination before the spell ends, the message is lost, and the beast makes its way back to where you cast this spell."
    ],
    higherLevel: [
      "If you cast this spell using a spell slot of 3nd level or higher, the duration of the spell increases by 48 hours for each slot level above 2nd."
    ],
    range: "30 feet",
    material: "A morsel of food.",
    ritual: true,
    concentration: false,
    duration: "24 hours",
    castingTime: "1 action",
    school: "Enchantment",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 212
      }
    ]
  },
  {
    name: "Animal Shapes",
    description: [
      "Your magic turns others into beasts. Choose any number of willing creatures that you can see within range. You transform each target into the form of a Large or smaller beast with a challenge rating of 4 or lower. On subsequent turns, you can use your action to transform affected creatures into new forms.",
      "The transformation lasts for the duration for each target, or until the target drops to 0 hit points or dies. You can choose a different form for each target. A target's game statistics are replaced by the statistics of the chosen beast, though the target retains its alignment and Intelligence, Wisdom, and Charisma scores. The target assumes the hit points of its new form, and when it reverts to its normal form, it returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can't speak or cast spells.",
      "The target's gear melds into the new form. The target can't activate, wield, or otherwise benefit from any of its equipment."
    ],
    higherLevel: [],
    range: "30 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 24 hours",
    castingTime: "1 action",
    school: "Transmutation",
    level: 8,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 212
      }
    ]
  },
  {
    name: "Animate Dead",
    description: [
      "This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the DM has the creature's game statistics).",
      "On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.",
      "The creature is under your control for 24 hours, after which it stops obeying any command you've given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot level above 3rd. Each of the creatures must come from a different corpse or pile of bones."
    ],
    range: "10 feet",
    material: "A drop of blood, a piece of flesh, and a pinch of bone dust.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 minute",
    school: "Necromancy",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 212
      }
    ]
  },
  {
    name: "Animate Objects",
    description: [
      "Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can't animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points.",
      "As a bonus action, you can mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.",
      "An animated object is a construct with AC, hit points, attacks, Strength, and Dexterity determined by its size. Its Constitution is 10 and its Intelligence and Wisdom are 3, and its Charisma is 1. Its speed is 30 feet; if the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or a larger object, such as a chain bolted to a wall, its speed is 0. It has blindsight with a radius of 30 feet and is blind beyond that distance. When the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form.",
      "If you command an object to attack, it can make a single melee attack against a creature within 5 feet of it. It makes a slam attack with an attack bonus and bludgeoning damage determined by its size. The DM might rule that a specific object inflicts slashing or piercing damage based on its form."
    ],
    higherLevel: [
      "If you cast this spell using a spell slot of 6th level or higher, you can animate two additional objects for each slot level above 5th."
    ],
    range: "120 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Transmutation",
    level: 5,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 213
      }
    ]
  },
  {
    name: "Antilife Shell",
    description: [
      "A shimmering barrier extends out from you in a 10-foot radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs. The barrier lasts for the duration.",
      "The barrier prevents an affected creature from passing or reaching through. An affected creature can cast spells or make attacks with ranged or reach weapons through the barrier.",
      "If you move so that an affected creature is forced to pass through the barrier, the spell ends."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 action",
    school: "Abjuration",
    level: 5,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 213
      }
    ]
  },
  {
    name: "Antimagic Field",
    description: [
      "A 10-foot-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells can't be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you.",
      "Spells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and can't protrude into it. A slot expended to cast a suppressed spell is consumed. While an effect is suppressed, it doesn't function, but the time it spends suppressed counts against its duration.",
      "Targeted Effects. Spells and other magical effects, such as magic missile and charm person, that target a creature or an object in the sphere have no effect on that target.",
      "Areas of Magic. The area of another spell or magical effect, such as fireball, can't extend into the sphere. If the sphere overlaps an area of magic, the part of the area that is covered by the sphere is suppressed. For example, the flames created by a wall of fire are suppressed within the sphere, creating a gap in the wall if the overlap is large enough.",
      "Spells. Any active spell or other magical effect on a creature or an object in the sphere is suppressed while the creature or object is in it.",
      "Magic Items. The properties and powers of magic items are suppressed in the sphere. For example, a +1 longsword in the sphere functions as a nonmagical longsword.",
      "A magic weapon's properties and powers are suppressed if it is used against a target in the sphere or wielded by an attacker in the sphere. If a magic weapon or a piece of magic ammunition fully leaves the sphere (for example, if you fire a magic arrow or throw a magic spear at a target outside the sphere), the magic of the item ceases to be suppressed as soon as it exits.",
      "Magical Travel. Teleportation and planar travel fail to work in the sphere, whether the sphere is the destination or the departure point for such magical travel. A portal to another location, world, or plane of existence, as well as an opening to an extradimensional space such as that created by the rope trick spell, temporarily closes while in the sphere.",
      "Creatures and Objects. A creature or object summoned or created by magic temporarily winks out of existence in the sphere. Such a creature instantly reappears once the space the creature occupied is no longer within the sphere.",
      "Dispel Magic. Spells and magical effects such as dispel magic have no effect on the sphere. Likewise, the spheres created by different antimagic field spells don't nullify each other."
    ],
    higherLevel: [],
    range: "Self",
    material: "A pinch of powdered iron or iron filings.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 action",
    school: "Abjuration",
    level: 8,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 213
      }
    ]
  },
  {
    name: "Antipathy/Sympathy",
    description: [
      "This spell attracts or repels creatures of your choice. You target something within range, either a Huge or smaller object or creature or an area that is no larger than a 200-foot cube. Then specify a kind of intelligent creature, such as red dragons, goblins, or vampires. You invest the target with an aura that either attracts or repels the specified creatures for the duration. Choose antipathy or sympathy as the aura's effect.",
      "Antipathy.",
      " The enchantment causes creatures of the kind you designated to feel an intense urge to leave the area and avoid the target. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a wisdom saving throw or become frightened. The creature remains frightened while it can see the target or is within 60 feet of it. While frightened by the target, the creature must use its movement to move to the nearest safe spot from which it can't see the target. If the creature moves more than 60 feet from the target and can't see it, the creature is no longer frightened, but the creature becomes frightened again if it regains sight of the target or moves within 60 feet of it.",
      "Sympathy.",
      " The enchantment causes the specified creatures to feel an intense urge to approach the target while within 60 feet of it or able to see it. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a wisdom saving throw or use its movement on each of its turns to enter the area or move within reach of the target. When the creature has done so, it can't willingly move away from the target. If the target damages or otherwise harms an affected creature, the affected creature can make a wisdom saving throw to end the effect, as described below.",
      "Ending the Effect.",
      " If an affected creature ends its turn while not within 60 feet of the target or able to see it, the creature makes a wisdom saving throw. On a successful save, the creature is no longer affected by the target and recognizes the feeling of repugnance or attraction as magical. In addition, a creature affected by the spell is allowed another wisdom saving throw every 24 hours while the spell persists.",
      "A creature that successfully saves against this effect is immune to it for 1 minute, after which time it can be affected again."
    ],
    higherLevel: [],
    range: "60 feet",
    material:
      "Either a lump of alum soaked in vinegar for the antipathy effect or a drop of honey for the sympathy effect.",
    ritual: false,
    concentration: false,
    duration: "10 days",
    castingTime: "1 hour",
    school: "Enchantment",
    level: 8,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 214
      }
    ]
  },
  {
    name: "Arcane Eye",
    description: [
      "You create an invisible, magical eye within range that hovers in the air for the duration.",
      "You mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. The eye can look in every direction.",
      "As an action, you can move the eye up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it can't enter another plane of existence. A solid barrier blocks the eye's movement, but the eye can pass through an opening as small as 1 inch in diameter."
    ],
    higherLevel: [],
    range: "30 feet",
    material: "A bit of bat fur.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 action",
    school: "Divination",
    level: 4,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 214
      }
    ]
  },
  {
    name: "Arcane Hand",
    description: [
      "You create a Large hand of shimmering, translucent force in an unoccupied space that you can see within range. The hand lasts for the spell's duration, and it moves at your command, mimicking the movements of your own hand.",
      "The hand is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has a Strength of 26 (+8) and a Dexterity of 10 (+0). The hand doesn't fill its space.",
      "When you cast the spell and as a bonus action on your subsequent turns, you can move the hand up to 60 feet and then cause one of the following effects with it.",
      "Clenched Fist.",
      " The hand strikes one creature or object within 5 feet of it. Make a melee spell attack for the hand using your game statistics. On a hit, the target takes 4d8 force damage.",
      "Forceful Hand.",
      " The hand attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the hand's Strength contested by the Strength (Athletics) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the hand pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target to remain within 5 feet of it.",
      "Grasping Hand.",
      " The hand attempts to grapple a Huge or smaller creature within 5 feet of it. You use the hand's Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the hand is grappling the target, you can use a bonus action to have the hand crush it. When you do so, the target takes bludgeoning damage equal to 2d6 + your spellcasting ability modifier.",
      "Interposing Hand.",
      " The hand interposes itself between you and a creature you choose until you give the hand a different command. The hand moves to stay between you and the target, providing you with half cover against the target. The target can't move through the hand's space if its Strength score is less than or equal to the hand's Strength score. If its Strength score is higher than the hand's Strength score, the target can move toward you through the hand's space, but that space is difficult terrain for the target."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 6th level or higher, the damage from the clenched fist option increases by 2d8 and the damage from the grasping hand increases by 2d6 for each slot level above 5th."
    ],
    range: "120 feet",
    material: "An eggshell and a snakeskin glove.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Evocation",
    level: 5,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 218
      }
    ]
  },
  {
    name: "Arcane Lock",
    description: [
      "You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise, it is impassable until it is broken or the spell is dispelled or suppressed. Casting knock on the object suppresses arcane lock for 10 minutes.",
      "While affected by this spell, the object is more difficult to break or force open; the DC to break it or pick any locks on it increases by 10."
    ],
    higherLevel: [],
    range: "Touch",
    material: "Gold dust worth at least 25gp, which the spell consumes.",
    ritual: false,
    concentration: false,
    duration: "Until dispelled",
    castingTime: "1 action",
    school: "Abjuration",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 215
      }
    ]
  },
  {
    name: "Arcane Sword",
    description: [
      "You create a sword-shaped plane of force that hovers within range. It lasts for the duration.",
      "When the sword appears, you make a melee spell attack against a target of your choice within 5 feet of the sword. On a hit, the target takes 3d10 force damage. Until the spell ends, you can use a bonus action on each of your turns to move the sword up to 20 feet to a spot you can see and repeat this attack against the same target or a different one."
    ],
    higherLevel: [],
    range: "60 feet",
    material:
      "A miniature platinum sword with a grip and pommel of copper and zinc, worth 250 gp.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Evocation",
    level: 7,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 262
      }
    ]
  },
  {
    name: "Arcanist's Magic Aura",
    description: [
      "You place an illusion on a creature or an object you touch so that divination spells reveal false information about it. The target can be a willing creature or an object that isn't being carried or worn by another creature.",
      "When you cast the spell, choose one or both of the following effects. The effect lasts for the duration. If you cast this spell on the same creature or object every day for 30 days, placing the same effect on it each time, the illusion lasts until it is dispelled.",
      "False Aura.",
      " You change the way the target appears to spells and magical effects, such as detect magic, that detect magical auras. You can make a nonmagical object appear magical, a magical object appear nonmagical, or change the object's magical aura so that it appears to belong to a specific school of magic that you choose. When you use this effect on an object, you can make the false magic apparent to any creature that handles the item.",
      "Mask.",
      " You change the way the target appears to spells and magical effects that detect creature types, such as a paladin's Divine Sense or the trigger of a symbol spell. You choose a creature type and other spells and magical effects treat the target as if it were a creature of that type or of that alignment."
    ],
    higherLevel: [],
    range: "Touch",
    material: "A small square of silk.",
    ritual: false,
    concentration: false,
    duration: "24 hours",
    castingTime: "1 action",
    school: "Illusion",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 263
      }
    ]
  },
  {
    name: "Astral Projection",
    description: [
      "You and up to eight willing creatures within range project your astral bodies into the Astral Plane (the spell fails and the casting is wasted if you are already on that plane). The material body you leave behind is unconscious and in a state of suspended animation; it doesn't need food or air and doesn't age.",
      "Your astral body resembles your mortal form in almost every way, replicating your game statistics and possessions. The principal difference is the addition of a silvery cord that extends from between your shoulder blades and trails behind you, fading to invisibility after 1 foot. This cord is your tether to your material body. As long as the tether remains intact, you can find your way home. If the cord is cut-something that can happen only when an effect specifically states that it does-your soul and body are separated, killing you instantly.",
      "Your astral form can freely travel through the Astral Plane and can pass through portals there leading to any other plane. If you enter a new plane or return to the plane you were on when casting this spell, your body and possessions are transported along the silver cord, allowing you to re-enter your body as you enter the new plane. Your astral form is a separate incarnation. Any damage or other effects that apply to it have no effect on your physical body, nor do they persist when you return to it.",
      "The spell ends for you and your companions when you use your action to dismiss it. When the spell ends, the affected creature returns to its physical body, and it awakens.",
      "The spell might also end early for you or one of your companions. A successful dispel magic spell used against an astral or physical body ends the spell for that creature. If a creature's original body or its astral form drops to 0 hit points, the spell ends for that creature. If the spell ends and the silver cord is intact, the cord pulls the creature's astral form back to its body, ending its state of suspended animation.",
      "If you are returned to your body prematurely, your companions remain in their astral forms and must find their own way back to their bodies, usually by dropping to 0 hit points."
    ],
    higherLevel: [],
    range: "10 feet",
    material:
      "For each creature you affect with this spell, you must provide one jacinth worth at least 1,000gp and one ornately carved bar of silver worth at least 100gp, all of which the spell consumes.",
    ritual: false,
    concentration: false,
    duration: "Special",
    castingTime: "1 hour",
    school: "Necromancy",
    level: 9,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 215
      }
    ]
  },
  {
    name: "Augury",
    description: [
      "By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing some other divining tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes. The DM chooses from the following possible omens:",
      "- Weal, for good results",
      "- Woe, for bad results",
      "- Weal and woe, for both good and bad results",
      "- Nothing, for results that aren't especially good or bad",
      "The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion.",
      "If you cast the spell two or more times before completing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret."
    ],
    higherLevel: [],
    range: "Self",
    material:
      "Specially marked sticks, bones, or similar tokens worth at least 25gp.",
    ritual: true,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 minute",
    school: "Divination",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 215
      }
    ]
  },
  {
    name: "Awaken",
    description: [
      "After spending the casting time tracing magical pathways within a precious gemstone, you touch a Huge or smaller beast or plant. The target must have either no Intelligence score or an Intelligence of 3 or less. The target gains an Intelligence of 10. The target also gains the ability to speak one language you know. If the target is a plant, it gains the ability to move its limbs, roots, vines, creepers, and so forth, and it gains senses similar to a human's. Your DM chooses statistics appropriate for the awakened plant, such as the statistics for the awakened shrub or the awakened tree.",
      "The awakened beast or plant is charmed by you for 30 days or until you or your companions do anything harmful to it. When the charmed condition ends, the awakened creature chooses whether to remain friendly to you, based on how you treated it while it was charmed."
    ],
    higherLevel: [],
    range: "Touch",
    material: "An agate worth at least 1,000 gp, which the spell consumes.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "8 hours",
    school: "Transmutation",
    level: 5,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 216
      }
    ]
  },
  {
    name: "Bane",
    description: [
      "Up to three creatures of your choice that you can see within range must make charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
    ],
    range: "30 feet",
    material: "A drop of blood.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Enchantment",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 216
      }
    ]
  },
  {
    name: "Banishment",
    description: [
      "You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a charisma saving throw or be banished.",
      "If the target is native to the plane of existence you're on, you banish the target to a harmless demiplane. While there, the target is incapacitated. The target remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied.",
      "If the target is native to a different plane of existence than the one you're on, the target is banished with a faint popping noise, returning to its home plane. If the spell ends before 1 minute has passed, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. Otherwise, the target doesn't return."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th."
    ],
    range: "60 feet",
    material: "An item distasteful to the target.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Abjuration",
    level: 4,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 217
      }
    ]
  },
  {
    name: "Barkskin",
    description: [
      "You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance, and the target's AC can't be less than 16, regardless of what kind of armor it is wearing."
    ],
    higherLevel: [],
    range: "Touch",
    material: "A handful of oak bark.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 action",
    school: "Transmutation",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 217
      }
    ]
  },
  {
    name: "Beacon of Hope",
    description: [
      "This spell bestows hope and vitality. Choose any number of creatures within range. For the duration, each target has advantage on wisdom saving throws and death saving throws, and regains the maximum number of hit points possible from any healing."
    ],
    higherLevel: [],
    range: "30 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Abjuration",
    level: 3,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 217
      }
    ]
  },
  {
    name: "Bestow Curse",
    description: [
      "You touch a creature, and that creature must succeed on a wisdom saving throw or become cursed for the duration of the spell. When you cast this spell, choose the nature of the curse from the following options:",
      "- Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score.",
      "- While cursed, the target has disadvantage on attack rolls against you.",
      "- While cursed, the target must make a wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing.",
      "- While the target is cursed, your attacks and spells deal an extra 1d8 necrotic damage to the target.",
      "A remove curse spell ends this effect. At the DM's option, you may choose an alternative curse effect, but it should be no more powerful than those described above. The DM has final say on such a curse's effect."
    ],
    higherLevel: [
      "If you cast this spell using a spell slot of 4th level or higher, the duration is concentration, up to 10 minutes. If you use a spell slot of 5th level or higher, the duration is 8 hours. If you use a spell slot of 7th level or higher, the duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a duration that doesn't require concentration."
    ],
    range: "Touch",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Necromancy",
    level: 3,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 218
      }
    ]
  },
  {
    name: "Black Tentacles",
    description: [
      "Squirming, ebony tentacles fill a 20-foot square on ground that you can see within range. For the duration, these tentacles turn the ground in the area into difficult terrain.",
      "When a creature enters the affected area for the first time on a turn or starts its turn there, the creature must succeed on a Dexterity saving throw or take 3d6 bludgeoning damage and be restrained by the tentacles until the spell ends. A creature that starts its turn in the area and is already restrained by the tentacles takes 3d6 bludgeoning damage.",
      "A creature restrained by the tentacles can use its action to make a Strength or Dexterity check (its choice) against your spell save DC. On a success, it frees itself."
    ],
    higherLevel: [],
    range: "90 feet",
    material: "A piece of tentacle from a giant octopus or a giant squid",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Conjuration",
    level: 4,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 238
      }
    ]
  },
  {
    name: "Blade Barrier",
    description: [
      "You create a vertical wall of whirling, razor-sharp blades made of magical energy. The wall appears within range and lasts for the duration. You can make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and 5 feet thick. The wall provides three-quarters cover to creatures behind it, and its space is difficult terrain.",
      "When a creature enters the wall's area for the first time on a turn or starts its turn there, the creature must make a dexterity saving throw. On a failed save, the creature takes 6d10 slashing damage. On a successful save, the creature takes half as much damage."
    ],
    higherLevel: [],
    range: "90 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Evocation",
    level: 6,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 218
      }
    ]
  },
  {
    name: "Bless",
    description: [
      "You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
    ],
    range: "30 feet",
    material: "A sprinkling of holy water.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Enchantment",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 219
      }
    ]
  },
  {
    name: "Blight",
    description: [
      "Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a constitution saving throw. The target takes 8d8 necrotic damage on a failed save, or half as much damage on a successful one. The spell has no effect on undead or constructs.",
      "If you target a plant creature or a magical plant, it makes the saving throw with disadvantage, and the spell deals maximum damage to it.",
      "If you target a nonmagical plant that isn't a creature, such as a tree or shrub, it doesn't make a saving throw; it simply withers and dies."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 5th level of higher, the damage increases by 1d8 for each slot level above 4th."
    ],
    range: "30 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Necromancy",
    level: 4,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 219
      }
    ]
  },
  {
    name: "Blindness/Deafness",
    description: [
      "You can blind or deafen a foe. Choose one creature that you can see within range to make a constitution saving throw. If it fails, the target is either blinded or deafened (your choice) for the duration. At the end of each of its turns, the target can make a constitution saving throw. On a success, the spell ends."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
    ],
    range: "30 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "1 minute",
    castingTime: "1 action",
    school: "Necromancy",
    level: 2,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 219
      }
    ]
  },
  {
    name: "Blink",
    description: [
      "Roll a d20 at the end of each of your turns for the duration of the spell. On a roll of 11 or higher, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell fails and the casting is wasted if you were already on that plane). At the start of your next turn, and when the spell ends if you are on the Ethereal Plane, you return to an unoccupied space of your choice that you can see within 10 feet of the space you vanished from. If no unoccupied space is available within that range, you appear in the nearest unoccupied space (chosen at random if more than one space is equally near). You can dismiss this spell as an action.",
      "While on the Ethereal Plane, you can see and hear the plane you originated from, which is cast in shades of gray, and you can't see anything there more than 60 feet away. You can only affect and be affected by other creatures on the Ethereal Plane. Creatures that aren't there can't perceive you or interact with you, unless they have the ability to do so."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: false,
    concentration: false,
    duration: "1 minute",
    castingTime: "1 action",
    school: "Transmutation",
    level: 3,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 219
      }
    ]
  },
  {
    name: "Blur",
    description: [
      "Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn't rely on sight, as with blindsight, or can see through illusions, as with truesight."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Illusion",
    level: 2,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 219
      }
    ]
  },
  {
    name: "Branding Smite",
    description: [
      "The next time you hit a creature with a weapon attack before this spell ends, the weapon gleams with astral radiance as you strike. The attack deals an extra 2d6 radiant damage to the target, which becomes visible if it’s invisible, and the target sheds dim light in a 5-foot radius and can’t become invisible until the spell ends."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 bonus action",
    school: "Evocation",
    level: 2,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 219
      }
    ]
  },
  {
    name: "Burning Hands",
    description: [
      "As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.",
      "The fire ignites any flammable objects in the area that aren't being worn or carried."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
    ],
    range: "Self",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 1,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 220
      }
    ]
  },
  {
    name: "Call Lightning",
    description: [
      "A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see 100 feet directly above you. The spell fails if you can't see a point in the air where the storm cloud could appear (for example, if you are in a room that can't accommodate the cloud).",
      "When you cast the spell, choose a point you can see within range. A bolt of lightning flashes down from the cloud to that point. Each creature within 5 feet of that point must make a dexterity saving throw. A creature takes 3d10 lightning damage on a failed save, or half as much damage on a successful one. On each of your turns until the spell ends, you can use your action to call down lightning in this way again, targeting the same point or a different one.",
      "If you are outdoors in stormy conditions when you cast this spell, the spell gives you control over the existing storm instead of creating a new one. Under such conditions, the spell's damage increases by 1d10."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 4th or higher level, the damage increases by 1d10 for each slot level above 3rd."
    ],
    range: "120 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Conjuration",
    level: 3,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 220
      }
    ]
  },
  {
    name: "Calm Emotions",
    description: [
      "You attempt to suppress strong emotions in a group of people. Each humanoid in a 20-foot-radius sphere centered on a point you choose within range must make a charisma saving throw; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects. You can suppress any effect causing a target to be charmed or frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime.",
      "Alternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the DM rules otherwise."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Enchantment",
    level: 2,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 221
      }
    ]
  },
  {
    name: "Chain Lightning",
    description: [
      "You create a bolt of lightning that arcs toward a target of your choice that you can see within range. Three bolts then leap from that target to as many as three other targets, each of which must be within 30 feet of the first target. A target can be a creature or an object and can be targeted by only one of the bolts.",
      "A target must make a dexterity saving throw. The target takes 10d8 lightning damage on a failed save, or half as much damage on a successful one."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 7th level or higher, one additional bolt leaps from the first target to another target for each slot level above 6th."
    ],
    range: "150 feet",
    material:
      "A bit of fur; a piece of amber, glass, or a crystal rod; and three silver pins.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 6,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 221
      }
    ]
  },
  {
    name: "Charm Person",
    description: [
      "You attempt to charm a humanoid you can see within range. It must make a wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
    ],
    range: "30 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Enchantment",
    level: 1,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 221
      }
    ]
  },
  {
    name: "Chill Touch",
    description: [
      "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target.",
      "If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn.",
      "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
    ],
    higherLevel: [],
    range: "120 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "1 round",
    castingTime: "1 action",
    school: "Necromancy",
    level: 0,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 221
      }
    ]
  },
  {
    name: "Circle of Death",
    description: [
      "A sphere of negative energy ripples out in a 60-footradius sphere from a point within range. Each creature in that area must make a constitution saving throw. A target takes 8d6 necrotic damage on a failed save, or half as much damage on a successful one."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 7th level or higher, the damage increases by 2d6 for each slot level above 6th."
    ],
    range: "150 feet",
    material: "The powder of a crushed black pearl worth at least 500 gp.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Necromancy",
    level: 6,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 221
      }
    ]
  },
  {
    name: "Clairvoyance",
    description: [
      "You create an invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The sensor remains in place for the duration, and it can't be attacked or otherwise interacted with.",
      "When you cast the spell, you choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space. As your action, you can switch between seeing and hearing.",
      "A creature that can see the sensor (such as a creature benefiting from see invisibility or truesight) sees a luminous, intangible orb about the size of your fist."
    ],
    higherLevel: [],
    range: "1 mile",
    material:
      "A focus worth at least 100gp, either a jeweled horn for hearing or a glass eye for seeing.",
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "10 minutes",
    school: "Divination",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 222
      }
    ]
  },
  {
    name: "Clone",
    description: [
      "This spell grows an inert duplicate of a living creature as a safeguard against death. This clone forms inside a sealed vessel and grows to full size and maturity after 120 days; you can also choose to have the clone be a younger version of the same creature. It remains inert and endures indefinitely, as long as its vessel remains undisturbed.",
      "At any time after the clone matures, if the original creature dies, its soul transfers to the clone, provided that the soul is free and willing to return. The clone is physically identical to the original and has the same personality, memories, and abilities, but none of the original's equipment. The original creature's physical remains, if they still exist, become inert and can't thereafter be restored to life, since the creature's soul is elsewhere."
    ],
    higherLevel: [],
    range: "Touch",
    material:
      "A diamond worth at least 1,000 gp and at least 1 cubic inch of flesh of the creature that is to be cloned, which the spell consumes, and a vessel worth at least 2,000 gp that has a sealable lid and is large enough to hold a Medium creature, such as a huge urn, coffin, mud-filled cyst in the ground, or crystal container filled with salt water.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 hour",
    school: "Necromancy",
    level: 8,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 222
      }
    ]
  },
  {
    name: "Cloudkill",
    description: [
      "You create a 20-foot-radius sphere of poisonous, yellow-green fog centered on a point you choose within range. The fog spreads around corners. It lasts for the duration or until strong wind disperses the fog, ending the spell. Its area is heavily obscured.",
      "When a creature enters the spell's area for the first time on a turn or starts its turn there, that creature must make a constitution saving throw. The creature takes 5d8 poison damage on a failed save, or half as much damage on a successful one. Creatures are affected even if they hold their breath or don't need to breathe.",
      "The fog moves 10 feet away from you at the start of each of your turns, rolling along the surface of the ground. The vapors, being heavier than air, sink to the lowest level of the land, even pouring down openings."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
    ],
    range: "120 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Conjuration",
    level: 5,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 222
      }
    ]
  },
  {
    name: "Color Spray",
    description: [
      "A dazzling array of flashing, colored light springs from your hand. Roll 6d10; the total is how many hit points of creatures this spell can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can't see).",
      "Starting with the creature that has the lowest current hit points, each creature affected by this spell is blinded until the spell ends. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d10 for each slot level above 1st."
    ],
    range: "Self",
    material:
      "A pinch of powder or sand that is colored red, yellow, and blue.",
    ritual: false,
    concentration: false,
    duration: "1 round",
    castingTime: "1 action",
    school: "Illusion",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 222
      }
    ]
  },
  {
    name: "Command",
    description: [
      "You speak a one-word command to a creature you can see within range. The target must succeed on a wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is undead, if it doesn't understand your language, or if your command is directly harmful to it.",
      "Some typical commands and their effects follow. You might issue a command other than one described here. If you do so, the DM determines how the target behaves. If the target can't follow your command, the spell ends.",
      "Approach.",
      " The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you.",
      "Drop",
      " The target drops whatever it is holding and then ends its turn.",
      "Flee.",
      " The target spends its turn moving away from you by the fastest available means.",
      "Grovel.",
      " The target falls prone and then ends its turn.",
      "Halt.",
      " The target doesn't move and takes no actions. A flying creature stays aloft, provided that it is able to do so. If it must move to stay aloft, it flies the minimum distance needed to remain in the air."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
    ],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "1 round",
    castingTime: "1 action",
    school: "Enchantment",
    level: 1,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 223
      }
    ]
  },
  {
    name: "Commune",
    description: [
      "You contact your deity or a divine proxy and ask up to three questions that can be answered with a yes or no. You must ask your questions before the spell ends. You receive a correct answer for each question.",
      "Divine beings aren't necessarily omniscient, so you might receive \"unclear\" as an answer if a question pertains to information that lies beyond the deity's knowledge. In a case where a one-word answer could be misleading or contrary to the deity's interests, the DM might offer a short phrase as an answer instead.",
      "If you cast the spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get no answer. The DM makes this roll in secret."
    ],
    higherLevel: [],
    range: "Self",
    material: "Incense and a vial of holy or unholy water.",
    ritual: true,
    concentration: false,
    duration: "1 minute",
    castingTime: "1 minute",
    school: "Divination",
    level: 5,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 223
      }
    ]
  },
  {
    name: "Commune with Nature",
    description: [
      "You briefly become one with nature and gain knowledge of the surrounding territory. In the outdoors, the spell gives you knowledge of the land within 3 miles of you. In caves and other natural underground settings, the radius is limited to 300 feet. The spell doesn't function where nature has been replaced by construction, such as in dungeons and towns.",
      " You instantly gain knowledge of up to three facts of your choice about any of the following subjects as they relate to the area:",
      "- terrain and bodies of water",
      "- prevalent plants, minerals, animals, or peoples",
      "- powerful celestials, fey, fiends, elementals, or undead",
      "- influence from other planes of existence",
      "- buildings",
      "For example, you could determine the location of powerful undead in the area, the location of major sources of safe drinking water, and the location of any nearby towns."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: true,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 minute",
    school: "Divination",
    level: 5,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 224
      }
    ]
  },
  {
    name: "Comprehend Languages",
    description: [
      "For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text.",
      "This spell doesn't decode secret messages in a text or a glyph, such as an arcane sigil, that isn't part of a written language."
    ],
    higherLevel: [],
    range: "Self",
    material: "A pinch of soot and salt.",
    ritual: true,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Divination",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 224
      }
    ]
  },
  {
    name: "Compulsion",
    description: [
      "Creatures of your choice that you can see within range and that can hear you must make a wisdom saving throw. A target automatically succeeds on this saving throw if it can’t be charmed. On a failed save, a target is affected by this spell. Until the spell ends, you can use a bonus action on each of your turns to designate a direction that is horizontal to you. Each affected target must use as much of its movement as possible to move in that direction on its next turn. It can take any action before it moves. After moving in this way, it can make another Wisdom save to try to end the effect.",
      "A target isn’t compelled to move into an obviously deadly hazard, such as a fire or a pit, but it will provoke opportunity attacks to move in the designated direction."
    ],
    higherLevel: [],
    range: "30 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Enchantment",
    level: 4,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 224
      }
    ]
  },
  {
    name: "Cone of Cold",
    description: [
      "A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one.",
      "A creature killed by this spell becomes a frozen statue until it thaws."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
    ],
    range: "Self",
    material: "A small crystal or glass cone.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 5,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 224
      }
    ]
  },
  {
    name: "Confusion",
    description: [
      "This spell assails and distorts the minds of creatures, generating illusions and causing uncontrolled actions. Each creature in a sphere of 10-foot-radius centered on a point chosen in the range of the spell must make a wisdom saving throw otherwise it will be affected by the spell.",
      "An affected target can react and it must start at the beginning of 1d10 each of his game rounds to determine its behavior for that round.",
      "At the end of each turn, an affected creature can make a saving throw of Wisdom. If successful, the effect of the spell ends for this target."
    ],
    higherLevel: [
      "When you cast this spell using a level spell slot 5 or more, the radius of the sphere increases by 5 feet for each level of higher spell slot to 4."
    ],
    range: "90 feet",
    material: "Three walnut shells.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Enchantment",
    level: 4,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 224
      }
    ]
  },
  {
    name: "Conjure Animals",
    description: [
      "You summon fey spirits that take the form of beasts and appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears:",
      "- One beast of challenge rating 2 or lower",
      "- Two beasts of challenge rating 1 or lower",
      "- Four beasts of challenge rating 1/2 or lower",
      "- Eight beasts of challenge rating 1/4 or lower",
      "- Each beast is also considered fey, and it disappears when it drops to 0 hit points or when the spell ends.",
      "The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.",
      "The DM has the creatures' statistics."
    ],
    higherLevel: [
      "When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 5th-level slot, three times as many with a 7th-level."
    ],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 action",
    school: "Conjuration",
    level: 3,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 225
      }
    ]
  },
  {
    name: "Conjure Celestial",
    description: [
      "You summon a celestial of challenge rating 4 or lower, which appears in an unoccupied space that you can see within range. The celestial disappears when it drops to 0 hit points or when the spell ends.",
      "The celestial is friendly to you and your companions for the duration. Roll initiative for the celestial, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don't violate its alignment. If you don't issue any commands to the celestial, it defends itself from hostile creatures but otherwise takes no actions.",
      "The DM has the celestial's statistics."
    ],
    higherLevel: [
      "When you cast this spell using a 9th-level spell slot, you summon a celestial of challenge rating 5 or lower."
    ],
    range: "90 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 minute",
    school: "Conjuration",
    level: 7,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 225
      }
    ]
  },
  {
    name: "Conjure Elemental",
    description: [
      "You call forth an elemental servant. Choose an area of air, earth, fire, or water that fills a 10-foot cube within range. An elemental of challenge rating 5 or lower appropriate to the area you chose appears in an unoccupied space within 10 feet of it. For example, a fire elemental emerges from a bonfire, and an earth elemental rises up from the ground. The elemental disappears when it drops to 0 hit points or when the spell ends.",
      "The elemental is friendly to you and your companions for the duration. Roll initiative for the elemental, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you don't issue any commands to the elemental, it defends itself from hostile creatures but otherwise takes no actions.",
      "If your concentration is broken, the elemental doesn't disappear. Instead, you lose control of the elemental, it becomes hostile toward you and your companions, and it might attack. An uncontrolled elemental can't be dismissed by you, and it disappears 1 hour after you summoned it.",
      "The DM has the elemental's statistics."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th."
    ],
    range: "90 feet",
    material:
      "Burning incense for air, soft clay for earth, sulfur and phosphorus for fire, or water and sand for water.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 minute",
    school: "Conjuration",
    level: 5,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 225
      }
    ]
  },
  {
    name: "Conjure Fey",
    description: [
      "You summon a fey creature of challenge rating 6 or lower, or a fey spirit that takes the form of a beast of challenge rating 6 or lower. It appears in an unoccupied space that you can see within range. The fey creature disappears when it drops to 0 hit points or when the spell ends.",
      "The fey creature is friendly to you and your companions for the duration. Roll initiative for the creature, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don't violate its alignment. If you don't issue any commands to the fey creature, it defends itself from hostile creatures but otherwise takes no actions.",
      "If your concentration is broken, the fey creature doesn't disappear. Instead, you lose control of the fey creature, it becomes hostile toward you and your companions, and it might attack. An uncontrolled fey creature can't be dismissed by you, and it disappears 1 hour after you summoned it.",
      "The DM has the fey creature's statistics."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 7th level or higher, the challenge rating increases by 1 for each slot level above 6th."
    ],
    range: "90 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 minute",
    school: "Conjuration",
    level: 6,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 226
      }
    ]
  },
  {
    name: "Conjure Minor Elementals",
    description: [
      "You summon elementals that appear in unoccupied spaces that you can see within range. You choose one the following options for what appears:",
      "- One elemental of challenge rating 2 or lower",
      "- Two elementals of challenge rating 1 or lower",
      "- Four elementals of challenge rating 1/2 or lower",
      "- Eight elementals of challenge rating 1/4 or lower.",
      "An elemental summoned by this spell disappears when it drops to 0 hit points or when the spell ends.",
      "The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.",
      "The DM has the creatures' statistics."
    ],
    higherLevel: [
      "When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot and three times as many with an 8th-level slot."
    ],
    range: "90 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 minute",
    school: "Conjuration",
    level: 4,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 226
      }
    ]
  },
  {
    name: "Conjure Woodland Beings",
    description: [
      "You summon fey creatures that appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears:",
      "- One fey creature of challenge rating 2 or lower",
      "- Two fey creatures of challenge rating 1 or lower",
      "- Four fey creatures of challenge rating 1/2 or lower",
      "- Eight fey creatures of challenge rating 1/4 or lower",
      "A summoned creature disappears when it drops to 0 hit points or when the spell ends.",
      "The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which have their own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.",
      "The DM has the creatures' statistics."
    ],
    higherLevel: [
      "When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot and three times as many with an 8th-level slot."
    ],
    range: "60 feet",
    material: "One holly berry per creature summoned.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 action",
    school: "Conjuration",
    level: 4,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 226
      }
    ]
  },
  {
    name: "Contact Other Plane",
    description: [
      "You mentally contact a demigod, the spirit of a long-dead sage, or some other mysterious entity from another plane. Contacting this extraplanar intelligence can strain or even break your mind. When you cast this spell, make a DC 15 intelligence saving throw. On a failure, you take 6d6 psychic damage and are insane until you finish a long rest. While insane, you can't take actions, can't understand what other creatures say, can't read, and speak only in gibberish. A greater restoration spell cast on you ends this effect.",
      'On a successful save, you can ask the entity up to five questions. You must ask your questions before the spell ends. The DM answers each question with one word, such as "yes," "no," "maybe," "never," "irrelevant," or "unclear" (if the entity doesn\'t know the answer to the question). If a one-word answer would be misleading, the DM might instead offer a short phrase as an answer.'
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: true,
    concentration: false,
    duration: "1 minute",
    castingTime: "1 minute",
    school: "Divination",
    level: 5,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 226
      }
    ]
  },
  {
    name: "Contagion",
    description: [
      "Your touch inflicts disease. Make a melee spell attack against a creature within your reach. On a hit, you afflict the creature with a disease of your choice from any of the ones described below.",
      "At the end of each of the target's turns, it must make a constitution saving throw. After failing three of these saving throws, the disease's effects last for the duration, and the creature stops making these saves. After succeeding on three of these saving throws, the creature recovers from the disease, and the spell ends.",
      "Since this spell induces a natural disease in its target, any effect that removes a disease or otherwise ameliorates a disease's effects apply to it.",
      "Blinding Sickness.",
      " Pain grips the creature's mind, and its eyes turn milky white. The creature has disadvantage on wisdom checks and wisdom saving throws and is blinded.",
      "Filth Fever.",
      " A raging fever sweeps through the creature's body. The creature has disadvantage on strength checks, strength saving throws, and attack rolls that use Strength.",
      "Flesh Rot.",
      " The creature's flesh decays. The creature has disadvantage on Charisma checks and vulnerability to all damage.",
      "Mindfire.",
      " The creature's mind becomes feverish. The creature has disadvantage on intelligence checks and intelligence saving throws, and the creature behaves as if under the effects of the confusion spell during combat.",
      "Seizure.",
      " The creature is overcome with shaking. The creature has disadvantage on dexterity checks, dexterity saving throws, and attack rolls that use Dexterity.",
      "Slimy Doom.",
      " The creature begins to bleed uncontrollably. The creature has disadvantage on constitution checks and constitution saving throws. In addition, whenever the creature takes damage, it is stunned until the end of its next turn."
    ],
    higherLevel: [],
    range: "Touch",
    material: null,
    ritual: false,
    concentration: false,
    duration: "7 days",
    castingTime: "1 action",
    school: "Necromancy",
    level: 5,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 227
      }
    ]
  },
  {
    name: "Contingency",
    description: [
      "Choose a spell of 5th level or lower that you can cast, that has a casting time of 1 action, and that can target you. You cast that spell-called the contingent spell-as part of casting contingency, expending spell slots for both, but the contingent spell doesn't come into effect. Instead, it takes effect when a certain circumstance occurs. You describe that circumstance when you cast the two spells. For example, a contingency cast with water breathing might stipulate that water breathing comes into effect when you are engulfed in water or a similar liquid.",
      "The contingent spell takes effect immediately after the circumstance is met for the first time, whether or not you want it to. and then contingency ends.",
      "The contingent spell takes effect only on you, even if it can normally target others. You can use only one contingency spell at a time. If you cast this spell again, the effect of another contingency spell on you ends. Also, contingency ends on you if its material component is ever not on your person."
    ],
    higherLevel: [],
    range: "Self",
    material:
      "A statuette of yourself carved from ivory and decorated with gems worth at least 1,500 gp.",
    ritual: false,
    concentration: false,
    duration: "10 days",
    castingTime: "10 minutes",
    school: "Evocation",
    level: 6,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 227
      }
    ]
  },
  {
    name: "Continual Flame",
    description: [
      "A flame, equivalent in brightness to a torch, springs forth from an object that you touch. The effect looks like a regular flame, but it creates no heat and doesn't use oxygen. A continual flame can be covered or hidden but not smothered or quenched."
    ],
    higherLevel: [],
    range: "Touch",
    material: "Ruby dust worth 50 gp, which the spell consumes.",
    ritual: false,
    concentration: false,
    duration: "Until dispelled",
    castingTime: "1 action",
    school: "Evocation",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 227
      }
    ]
  },
  {
    name: "Control Water",
    description: [
      "Until the spell ends, you control any freestanding water inside an area you choose that is a cube up to 100 feet on a side. You can choose from any of the following effects when you cast this spell. As an action on your turn, you can repeat the same effect or choose a different one.",
      "Flood.",
      " You cause the water level of all standing water in the area to rise by as much as 20 feet. If the area includes a shore, the flooding water spills over onto dry land.",
      "instead create a 20-foot tall wave that travels from one side of the area to the other and then crashes down. Any Huge or smaller vehicles in the wave's path are carried with it to the other side. Any Huge or smaller vehicles struck by the wave have a 25 percent chance of capsizing.",
      "The water level remains elevated until the spell ends or you choose a different effect. If this effect produced a wave, the wave repeats on the start of your next turn while the flood effect lasts.",
      "Part Water.",
      " You cause water in the area to move apart and create a trench. The trench extends across the spell's area, and the separated water forms a wall to either side. The trench remains until the spell ends or you choose a different effect. The water then slowly fills in the trench over the course of the next round until the normal water level is restored.",
      "Redirect Flow.",
      " You cause flowing water in the area to move in a direction you choose, even if the water has to flow over obstacles, up walls, or in other unlikely directions. The water in the area moves as you direct it, but once it moves beyond the spell's area, it resumes its flow based on the terrain conditions. The water continues to move in the direction you chose until the spell ends or you choose a different effect.",
      "Whirlpool.",
      " This effect requires a body of water at least 50 feet square and 25 feet deep. You cause a whirlpool to form in the center of the area. The whirlpool forms a vortex that is 5 feet wide at the base, up to 50 feet wide at the top, and 25 feet tall. Any creature or object in the water and within 25 feet of the vortex is pulled 10 feet toward it. A creature can swim away from the vortex by making a Strength (Athletics) check against your spell save DC.",
      "When a creature enters the vortex for the first time on a turn or starts its turn there, it must make a strength saving throw. On a failed save, the creature takes 2d8 bludgeoning damage and is caught in the vortex until the spell ends. On a successful save, the creature takes half damage, and isn't caught in the vortex. A creature caught in the vortex can use its action to try to swim away from the vortex as described above, but has disadvantage on the Strength (Athletics) check to do so.",
      "The first time each turn that an object enters the vortex, the object takes 2d8 bludgeoning damage; this damage occurs each round it remains in the vortex."
    ],
    higherLevel: [],
    range: "300 feet",
    material: "A drop of water and a pinch of dust.",
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Transmutation",
    level: 4,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 227
      }
    ]
  },
  {
    name: "Control Weather",
    description: [
      "You take control of the weather within 5 miles of you for the duration. You must be outdoors to cast this spell. Moving to a place where you don't have a clear path to the sky ends the spell early.",
      "When you cast the spell, you change the current weather conditions, which are determined by the DM based on the climate and season. You can change precipitation, temperature, and wind. It takes 1d4 x 10 minutes for the new conditions to take effect. Once they do so, you can change the conditions again. When the spell ends, the weather gradually returns to normal.",
      "When you change the weather conditions, find a current condition on the following tables and change its stage by one, up or down. When changing the wind, you can change its direction."
    ],
    higherLevel: [],
    range: "Self",
    material: "Burning incense and bits of earth and wood mixed in water.",
    ritual: false,
    concentration: true,
    duration: "Up to 8 hours",
    castingTime: "10 minutes",
    school: "Transmutation",
    level: 8,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 228
      }
    ]
  },
  {
    name: "Counterspell",
    description: [
      "You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell’s level. On a success, the creature’s spell fails and has no effect."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 reaction",
    school: "Abjuration",
    level: 3,
    components: ["S"],
    page: [
      {
        book: "phb",
        pageNumber: 228
      }
    ]
  },
  {
    name: "Create Food and Water",
    description: [
      "You create 45 pounds of food and 30 gallons of water on the ground or in containers within range, enough to sustain up to fifteen humanoids or five steeds for 24 hours. The food is bland but nourishing, and spoils if uneaten after 24 hours. The water is clean and doesn't go bad."
    ],
    higherLevel: [],
    range: "30 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Conjuration",
    level: 3,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 229
      }
    ]
  },
  {
    name: "Create Undead",
    description: [
      "You can cast this spell only at night. Choose up to three corpses of Medium or Small humanoids within range. Each corpse becomes a ghoul under your control. (The DM has game statistics for these creatures.)",
      "As a bonus action on each of your turns, you can mentally command any creature you animated with this spell if the creature is within 120 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.",
      "The creature is under your control for 24 hours, after which it stops obeying any command you have given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature before the current 24-hour period ends. This use of the spell reasserts your control over up to three creatures you have animated with this spell, rather than animating new ones."
    ],
    higherLevel: [
      "When you cast this spell using a 7th-level spell slot, you can animate or reassert control over four ghouls. When you cast this spell using an 8th-level spell slot, you can animate or reassert control over five ghouls or two ghasts or wights. When you cast this spell using a 9th-level spell slot, you can animate or reassert control over six ghouls, three ghasts or wights, or two mummies."
    ],
    range: "10 feet",
    material:
      "One clay pot filled with grave dirt, one clay pot filled with brackish water, and one 150 gp black onyx stone for each corpse.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 minute",
    school: "Necromancy",
    level: 6,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 229
      }
    ]
  },
  {
    name: "Create or Destroy Water",
    description: [
      "You either create or destroy water.",
      "Create Water.",
      " You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 30-foot cube within range.",
      "Destroy Water.",
      " You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 30-foot cube within range."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 2nd level or higher, you create or destroy 10 additional gallons of water, or the size of the cube increases by 5 feet, for each slot level above 1st."
    ],
    range: "30 feet",
    material:
      "A drop of water if creating water, or a few grains of sand if destroying it.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Transmutation",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 229
      }
    ]
  },
  {
    name: "Creation",
    description: [
      "You pull wisps of shadow material from the Shadowfell to create a nonliving object of vegetable matter within 'range': soft goods, rope, wood, or something similar. You can also use this spell to create mineral objects such as stone, crystal, or metal. The object created must be no larger than a 5-foot cube, and the object must be of a form and material that you have seen before.",
      "The duration depends on the object's material. If the object is composed of multiple materials, use the shortest duration.",
      "Vegetable matter",
      " 1 day",
      "Stone or crystal",
      " 12 hours",
      "Precious metals",
      " 1 hour",
      "Gems",
      " 10 minutes",
      "Adamantine or mithral",
      " 1 minute",
      "Using any material created by this spell as another spell's material component causes that spell to fail."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 6th level or higher, the cube increases by 5 feet for each slot level above 5th."
    ],
    range: "30 feet",
    material:
      "A tiny piece of matter of the same type of the item you plan to create.",
    ritual: false,
    concentration: false,
    duration: "Special",
    castingTime: "1 minute",
    school: "Illusion",
    level: 5,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 229
      }
    ]
  },
  {
    name: "Cure Wounds",
    description: [
      "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st."
    ],
    range: "Touch",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 1,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 230
      }
    ]
  },
  {
    name: "Dancing Lights",
    description: [
      "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius.",
      "As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range."
    ],
    higherLevel: [],
    range: "120 feet",
    material: "A bit of phosphorus or wychwood, or a glowworm.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Evocation",
    level: 0,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 230
      }
    ]
  },
  {
    name: "Darkness",
    description: [
      "Magical darkness spreads from a point you choose within range to fill a 15-foot-radius sphere for the duration. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagical light can't illuminate it.",
      "If the point you choose is on an object you are holding or one that isn't being worn or carried, the darkness emanates from the object and moves with it. Completely covering the source of the darkness with an opaque object, such as a bowl or a helm, blocks the darkness.",
      "If any of this spell's area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled."
    ],
    higherLevel: [],
    range: "60 feet",
    material: "Bat fur and a drop of pitch or piece of coal.",
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Evocation",
    level: 2,
    components: ["V", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 230
      }
    ]
  },
  {
    name: "Darkvision",
    description: [
      "You touch a willing creature to grant it the ability to see in the dark. For the duration, that creature has darkvision out to a range of 60 feet."
    ],
    higherLevel: [],
    range: "Touch",
    material: "Either a pinch of dried carrot or an agate.",
    ritual: false,
    concentration: false,
    duration: "8 hours",
    castingTime: "1 action",
    school: "Transmutation",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 230
      }
    ]
  },
  {
    name: "Daylight",
    description: [
      "A 60-foot-radius sphere of light spreads out from a point you choose within range. The sphere is bright light and sheds dim light for an additional 60 feet.",
      "If you chose a point on an object you are holding or one that isn't being worn or carried, the light shines from the object and moves with it. Completely covering the affected object with an opaque object, such as a bowl or a helm, blocks the light.",
      "If any of this spell's area overlaps with an area of darkness created by a spell of 3rd level or lower, the spell that created the darkness is dispelled."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Evocation",
    level: 3,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 230
      }
    ]
  },
  {
    name: "Death Ward",
    description: [
      "You touch a creature and grant it a measure of protection from death.",
      "The first time the target would drop to 0 hit points as a result of taking damage, the target instead drops to 1 hit point, and the spell ends.",
      "If the spell is still in effect when the target is subjected to an effect that would kill it instantaneously without dealing damage, that effect is instead negated against the target, and the spell ends."
    ],
    higherLevel: [],
    range: "Touch",
    material: null,
    ritual: false,
    concentration: false,
    duration: "8 hours",
    castingTime: "1 action",
    school: "Abjuration",
    level: 4,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 230
      }
    ]
  },
  {
    name: "Delayed Blast Fireball",
    description: [
      "A beam of yellow light flashes from your pointing finger, then condenses to linger at a chosen point within range as a glowing bead for the duration. When the spell ends, either because your concentration is broken or because you decide to end it, the bead blossoms with a low roar into an explosion of flame that spreads around corners. Each creature in a 20-foot-radius sphere centered on that point must make a dexterity saving throw. A creature takes fire damage equal to the total accumulated damage on a failed save, or half as much damage on a successful one.",
      "The spell's base damage is 12d6. If at the end of your turn the bead has not yet detonated, the damage increases by 1d6.",
      "If the glowing bead is touched before the interval has expired, the creature touching it must make a dexterity saving throw. On a failed save, the spell ends immediately, causing the bead to erupt in flame. On a successful save, the creature can throw the bead up to 40 feet. When it strikes a creature or a solid object, the spell ends, and the bead explodes.",
      "The fire damages objects in the area and ignites flammable objects that aren't being worn or carried."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 8th level or higher, the base damage increases by 1d6 for each slot level above 7th."
    ],
    range: "150 feet",
    material: "A tiny ball of bat guano and sulfur.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Evocation",
    level: 7,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 230
      }
    ]
  },
  {
    name: "Demiplane",
    description: [
      "You create a shadowy door on a flat solid surface that you can see within range. The door is large enough to allow Medium creatures to pass through unhindered. When opened, the door leads to a demiplane that appears to be an empty room 30 feet in each dimension, made of wood or stone. When the spell ends, the door disappears, and any creatures or objects inside the demiplane remain trapped there, as the door also disappears from the other side.",
      "Each time you cast this spell, you can create a new demiplane, or have the shadowy door connect to a demiplane you created with a previous casting of this spell. Additionally, if you know the nature and contents of a demiplane created by a casting of this spell by another creature, you can have the shadowy door connect to its demiplane instead."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Conjuration",
    level: 8,
    components: ["S"],
    page: [
      {
        book: "phb",
        pageNumber: 231
      }
    ]
  },
  {
    name: "Detect Evil and Good",
    description: [
      "For the duration, you know if there is an aberration, celestial, elemental, fey, fiend, or undead within 30 feet of you, as well as where the creature is located. Similarly, you know if there is a place or object within 30 feet of you that has been magically consecrated or desecrated.",
      "The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Divination",
    level: 1,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 231
      }
    ]
  },
  {
    name: "Detect Magic",
    description: [
      "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.",
      "The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: true,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Divination",
    level: 1,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 231
      }
    ]
  },
  {
    name: "Detect Poison and Disease",
    description: [
      "For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case.",
      "The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
    ],
    higherLevel: [],
    range: "Self",
    material: "A yew leaf.",
    ritual: true,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Divination",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 231
      }
    ]
  },
  {
    name: "Detect Thoughts",
    description: [
      "For the duration of the spell, you can read the thoughts of some creatures. While casting the spell and at your action in each round until the spell, you may focus your mind on a creature you can see 30 feet of you. If the chosen creature has an Intelligence of 3 or less, or if she does not speak any language, the creature is not affected.",
      "You first read the surface thoughts of the creature, which occupies her mind at that moment. In an action, you can direct your attention to the thoughts of another creature or attempt to deepen your reading thoughts of the same creature. If you deepen your reading, the target must make a backup of Wisdom, otherwise you get access to his argument (if any), in his emotional state and thought that concerns his mind on a broader spectrum Such a concern, love or hate. If successful, the spell ends. In all cases, the target is aware that his mind is under your eyes. Unless you are directing your attention to the thoughts of another creature, the target can use his action turn to roll Intelligence opposite your roll Intelligence. If she has the upper hand, the spell ends.",
      "The questions verbally directed to the target guide the train of thought. This spell is especially effective during an interrogation.",
      "You can also use this spell to detect the presence of thinking creatures that are invisible to you. When you cast this spell, or in an action for the duration of the spell, you can find thoughts to 30 feet of you. The spell can override most obstacles but it is blocked by 2 feet stone 2 inches of precious metal, or a thin sheet of lead. You can not detect a creature with an Intelligence of 3 or less or speaking any language.",
      "After detecting the presence of a creature in this way, you can read his thoughts for the rest of the spell's duration as described above, even if you can not see it, but only if it remains in the range of the spell."
    ],
    higherLevel: [],
    range: "Self",
    material: "A copper coin.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Divination",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 231
      }
    ]
  },
  {
    name: "Dimension Door",
    description: [
      'You teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as "200 feet straight downward" or "upward to the northwest at a 45-degree angle, 300 feet."',
      "You can bring along objects as long as their weight doesn't exceed what you can carry. You can also bring one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell.",
      "If you would arrive in a place already occupied by an object or a creature, you and any creature traveling with you each take 4d6 force damage, and the spell fails to teleport you."
    ],
    higherLevel: [],
    range: "500 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Conjuration",
    level: 4,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 233
      }
    ]
  },
  {
    name: "Disguise Self",
    description: [
      "You make yourself - including your clothing, armor, weapons, and other belongings on your person - look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.",
      "The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.",
      "To discern that you are disguised, a creature can use its action to inspect your apperance and must succeed on an Intelligence (Investigation) check against your spell save DC."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: false,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Illusion",
    level: 1,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 233
      }
    ]
  },
  {
    name: "Disintegrate",
    description: [
      "A thin green ray springs from your pointing finger to a target that you can see within range. The target can be a creature, an object, or a creation of magical force, such as the wall created by wall of force.",
      "A creature targeted by this spell must make a dexterity saving throw. On a failed save, the target takes 10d6 + 40 force damage. If this damage reduces the target to 0 hit points, it is disintegrated.",
      "A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust. The creature can be restored to life only by means of a true resurrection or a wish spell.",
      "This spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force. If the target is a Huge or larger object or creation of force, this spell disintegrates a 10-foot-cube portion of it. A magic item is unaffected by this spell."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 7th level or higher, the damage increases by 3d6 for each slot level above 6th."
    ],
    range: "60 feet",
    material: "A lodestone and a pinch of dust.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Transmutation",
    level: 6,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 233
      }
    ]
  },
  {
    name: "Dispel Evil and Good",
    description: [
      "Shimmering energy surrounds and protects you from fey, undead, and creatures originating from beyond the Material Plane. For the duration, celestials, elementals, fey, fiends, and undead have disadvantage on attack rolls against you.",
      "You can end the spell early by using either of the following special functions.",
      "Break Enchantment.",
      " As your action, you touch a creature you can reach that is charmed, frightened, or possessed by a celestial, an elemental, a fey, a fiend, or an undead. The creature you touch is no longer charmed, frightened, or possessed by such creatures.",
      "Dismissal.",
      " As your action, make a melee spell attack against a celestial, an elemental, a fey, a fiend, or an undead you can reach. On a hit, you attempt to drive the creature back to its home plane. The creature must succeed on a charisma saving throw or be sent back to its home plane (if it isn't there already). If they aren't on their home plane, undead are sent to the Shadowfell, and fey are sent to the Feywild."
    ],
    higherLevel: [],
    range: "Self",
    material: "Holy water or powdered silver and iron.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Abjuration",
    level: 5,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 233
      }
    ]
  },
  {
    name: "Dispel Magic",
    description: [
      "Choose one creature, object, or magical effect within range. Any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a successful check, the spell ends."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 4th level or higher, you automatically end the effects of a spell on the target if the spell's level is equal to or less than the level of the spell slot you used."
    ],
    range: "120 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Abjuration",
    level: 3,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 234
      }
    ]
  },
  {
    name: "Divination",
    description: [
      "Your magic and an offering put you in contact with a god or a god's servants. You ask a single question concerning a specific goal, event, or activity to occur within 7 days. The DM offers a truthful reply. The reply might be a short phrase, a cryptic rhyme, or an omen.",
      "The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion.",
      "If you cast the spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret."
    ],
    higherLevel: [],
    range: "Self",
    material:
      "Incense and a sacrificial offering appropriate to your religion, together worth at least 25gp, which the spell consumes.",
    ritual: true,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Divination",
    level: 4,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 234
      }
    ]
  },
  {
    name: "Divine Favor",
    description: [
      "Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal an extra 1d4 radiant damage on a hit."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 bonus action",
    school: "Evocation",
    level: 1,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 234
      }
    ]
  },
  {
    name: "Divine Word",
    description: [
      "You speak a word of God, full of the power that has shaped the world at the dawn of creation. Choose as many creatures as you want from those you see, in the range of the spell. Every creature that hears you must make a backup Charisma, or she undergoes an effect based on the current value of his life.",
      "- pv or less 50: muted for 1 minute",
      "- 40 hp or less: deafened and blinded for 10 minutes",
      "- 30 hp or less: blinded, deafened and dazed for 1 hour",
      "- 20 hp or less: killed instantly",
      "Regardless of its points of current life, a celestial, an elementary, a fairy or a fiend who fails his roll is returned to its original plan (if not already) and it can not go back on your plan for 24 hours, regardless of the means, with the exception of the wish spell."
    ],
    higherLevel: [],
    range: "30 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 bonus action",
    school: "Evocation",
    level: 7,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 234
      }
    ]
  },
  {
    name: "Dominate Beast",
    description: [
      "You attempt to beguile a creature that you can see within range. It must succeed on a wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.",
      'While the creature is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as "Attack that creature," "Run over there," or "Fetch that object." If the creature completes the order and doesn\'t receive further direction from you, it defends and preserves itself to the best of its ability.',
      "You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well. Each time the target takes damage, it makes a new wisdom saving throw against the spell. If the saving throw succeeds, the spell ends."
    ],
    higherLevel: [
      "When you cast this spell with a 9th level spell slot, the duration is concentration, up to 8 hours."
    ],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Enchantment",
    level: 4,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 234
      }
    ]
  },
  {
    name: "Dominate Monster",
    description: [
      "You attempt to beguile a creature that you can see within range. It must succeed on a wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.",
      'While the creature is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as "Attack that creature," "Run over there," or "Fetch that object." If the creature completes the order and doesn\'t receive further direction from you, it defends and preserves itself to the best of its ability.',
      "You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.",
      "Each time the target takes damage, it makes a new wisdom saving throw against the spell. If the saving throw succeeds, the spell ends."
    ],
    higherLevel: [
      "When you cast this spell with a 9th-level spell slot, the duration is concentration, up to 8 hours."
    ],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 action",
    school: "Enchantment",
    level: 8,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 235
      }
    ]
  },
  {
    name: "Dominate Person",
    description: [
      "You attempt to beguile a humanoid that you can see within range. It must succeed on a wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.",
      'While the target is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as "Attack that creature," "Run over there," or "Fetch that object." If the creature completes the order and doesn\'t receive further direction from you, it defends and preserves itself to the best of its ability.',
      "You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.",
      "Each time the target takes damage, it makes a new wisdom saving throw against the spell. If the saving throw succeeds, the spell ends."
    ],
    higherLevel: [
      "When you cast this spell using a 6th-level spell slot, the duration is concentration, up to 10 minutes. When you use a 7th-level spell slot, the duration is concentration, up to 1 hour. When you use a spell slot of 8th level or higher, the duration is concentration, up to 8 hours."
    ],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Enchantment",
    level: 5,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 235
      }
    ]
  },
  {
    name: "Dream",
    description: [
      "This spell shapes a creature's dreams. Choose a creature known to you as the target of this spell. The target must be on the same plane of existence as you. Creatures that don't sleep, such as elves, can't be contacted by this spell. You, or a willing creature you touch, enters a trance state, acting as a messenger.",
      "While in the trance, the messenger is aware of his or her surroundings, but can't take actions or move.",
      "If the target is asleep, the messenger appears in the target's dreams and can converse with the target as long as it remains asleep, through the duration of the spell. The messenger can also shape the environment of the dream, creating landscapes, objects, and other images. The messenger can emerge from the trance at any time, ending the effect of the spell early. The target recalls the dream perfectly upon waking. If the target is awake when you cast the spell, the messenger knows it, and can either end the trance (and the spell) or wait for the target to fall asleep, at which point the messenger appears in the target's dreams.",
      "You can make the messenger appear monstrous and terrifying to the target. If you do, the messenger can deliver a message of no more than ten words and then the target must make a wisdom saving throw. On a failed save, echoes of the phantasmal monstrosity spawn a nightmare that lasts the duration of the target's sleep and prevents the target from gaining any benefit from that rest. In addition, when the target wakes up, it takes 3d6 psychic damage.",
      "If you have a body part, lock of hair, clipping from a nail, or similar portion of the target's body, the target makes its saving throw with disadvantage."
    ],
    higherLevel: [],
    range: "Special",
    material:
      "A handful of sand, a dab of ink, and a writing quill plucked from a sleeping bird.",
    ritual: false,
    concentration: false,
    duration: "8 hours",
    castingTime: "1 minute",
    school: "Illusion",
    level: 5,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 236
      }
    ]
  },
  {
    name: "Druidcraft",
    description: [
      "Whispering to the spirits of nature, you create one of the following effects within 'range':",
      "- You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round.",
      "- You instantly make a flower bloom, a seed pod open, or a leaf bud bloom.",
      "- You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint order of skunk. The effect must fit in a 5-foot cube.",
      "- You instantly light or snuff out a candle, a torch, or a small campfire."
    ],
    higherLevel: [],
    range: "30 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Transmutation",
    level: 0,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 236
      }
    ]
  },
  {
    name: "Earthquake",
    description: [
      "You create a seismic disturbance at a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 100-foot-radius circle centered on that point and shakes creatures and structures in contact with the ground in that area.",
      "The ground in the area becomes difficult terrain. Each creature on the ground that is concentrating must make a constitution saving throw. On a failed save, the creature's concentration is broken.",
      "When you cast this spell and at the end of each turn you spend concentrating on it, each creature on the ground in the area must make a dexterity saving throw. On a failed save, the creature is knocked prone.",
      "This spell can have additional effects depending on the terrain in the area, as determined by the DM.",
      "Fissures. Fissures open throughout the spell's area at the start of your next turn after you cast the spell. A total of 1d6 such fissures open in locations chosen by the DM. Each is 1d10 Ã— 10 feet deep, 10 feet wide, and extends from one edge of the spell's area to the opposite side. A creature standing on a spot where a fissure opens must succeed on a dexterity saving throw or fall in. A creature that successfully saves moves with the fissure's edge as it opens.",
      "A fissure that opens beneath a structure causes it to automatically collapse (see below).",
      "Structures. The tremor deals 50 bludgeoning damage to any structure in contact with the ground in the area when you cast the spell and at the start of each of your turns until the spell ends. If a structure drops to 0 hit points, it collapses and potentially damages nearby creatures. A creature within half the distance of a structure's height must make a dexterity saving throw. On a failed save, the creature takes 5d6 bludgeoning damage, is knocked prone, and is buried in the rubble, requiring a DC 20 Strength (Athletics) check as an action to escape. The DM can adjust the DC higher or lower, depending on the nature of the rubble. On a successful save, the creature takes half as much damage and doesn't fall prone or become buried."
    ],
    higherLevel: [],
    range: "500 feet",
    material: "A pinch of dirt, a piece of rock, and a lump of clay.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Evocation",
    level: 8,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 236
      }
    ]
  },
  {
    name: "Eldritch Blast",
    description: [
      "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage."
    ],
    higherLevel: [
      "The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam."
    ],
    range: "120 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 0,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 236
      }
    ]
  },
  {
    name: "Enhance Ability",
    description: [
      "You touch a creature and bestow upon it a magical enhancement. Choose one of the following effects; the target gains that effect until the spell ends.",
      "Bear's Endurance.",
      " The target has advantage on constitution checks. It also gains 2d6 temporary hit points, which are lost when the spell ends.",
      "Bull's Strength.",
      " The target has advantage on strength checks, and his or her carrying capacity doubles.",
      "Cat's Grace.",
      " The target has advantage on dexterity checks. It also doesn't take damage from falling 20 feet or less if it isn't incapacitated.",
      "Eagle's Splendor.",
      " The target has advantage on Charisma checks.",
      "Fox's Cunning.",
      " The target has advantage on intelligence checks.",
      "Owl's Wisdom.",
      " The target has advantage on wisdom checks."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
    ],
    range: "Touch",
    material: "Fur or a feather from a beast.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 action",
    school: "Transmutation",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 237
      }
    ]
  },
  {
    name: "Enlarge/Reduce",
    description: [
      "Enlarging or reducing in size a creature or object that you can see and is within range for the duration of the spell. Choose a creature or object that is not worn or carried. If the target does not consent, it can make a constitution saving throw. If successful, the spell has no effect.",
      "If the target is a creature, everything she wears and carries with it change size. Any item dropped by the affected creature returns to its normal size.",
      "Magnification.",
      " The double target in all dimensions, and its weight is multiplied by eight. This increases the size of a class of M to G for example. If there is not enough space in the room for the double target size, the creature or object reaches the maximum size possible in the available space. Until the end of the spell, the target also has the advantage of its jets Force and Force saves. Weapons to the target also grow. As long as these weapons are enlarged, the target's attacks cause additional 1d4 damage.",
      "Reduction.",
      " The size of the target is reduced by half in all dimensions, and its weight is divided by eight. This reduction decreases the size of a class from M to P for example. Until the end of the spell, the target has a disadvantage to its jets Force and its Force saves. The weapons of the target shrink too. As long as these weapons are reduced, target attacks cause less damage 1d4 (minimum 1 point of damage)."
    ],
    higherLevel: [],
    range: "30 feet",
    material: "A pinch iron powder.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Transmutation",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 237
      }
    ]
  },
  {
    name: "Entangle",
    description: [
      "Grasping weeds and vines sprout from the ground in a 20-foot square starting form a point within range. For the duration, these plants turn the ground in the area into difficult terrain.",
      "A creature in the area when you cast the spell must succeed on a strength saving throw or be restrained by the entangling plants until the spell ends. A creature restrained by the plants can use its action to make a Strength check against your spell save DC. On a success, it frees itself.",
      "When the spell ends, the conjured plants wilt away."
    ],
    higherLevel: [],
    range: "90 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Conjuration",
    level: 1,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 238
      }
    ]
  },
  {
    name: "Enthrall",
    description: [
      "You weave a distracting string of words, causing creatures of your choice that you can see within range and that can hear you to make a wisdom saving throw. Any creature that can't be charmed succeeds on this saving throw automatically, and if you or your companions are fighting a creature, it has advantage on the save. On a failed save, the target has disadvantage on Wisdom (Perception) checks made to perceive any creature other than you until the spell ends or until the target can no longer hear you. The spell ends if you are incapacitated or can no longer speak."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "1 minute",
    castingTime: "1 action",
    school: "Enchantment",
    level: 2,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 238
      }
    ]
  },
  {
    name: "Etherealness",
    description: [
      "You step into the border regions of the Ethereal Plane, in the area where it overlaps with your current plane. You remain in the Border Ethereal for the duration or until you use your action to dismiss the spell. During this time, you can move in any direction. If you move up or down, every foot of movement costs an extra foot. You can see and hear the plane you originated from, but everything there looks gray, and you can't see anything more than 60 feet away.",
      "While on the Ethereal Plane, you can only affect and be affected by other creatures on that plane. Creatures that aren't on the Ethereal Plane can't perceive you and can't interact with you, unless a special ability or magic has given them the ability to do so.",
      "You ignore all objects and effects that aren't on the Ethereal Plane, allowing you to move through objects you perceive on the plane you originated from.",
      "When the spell ends, you immediately return to the plane you originated from in the spot you currently occupy. If you occupy the same spot as a solid object or creature when this happens, you are immediately shunted to the nearest unoccupied space that you can occupy and take force damage equal to twice the number of feet you are moved.",
      "This spell has no effect if you cast it while you are on the Ethereal Plane or a plane that doesn't border it, such as one of the Outer Planes."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 8th level or higher, you can target up to three willing creatures (including you) for each slot level above 7th. The creatures must be within 10 feet of you when you cast the spell."
    ],
    range: "Self",
    material: null,
    ritual: false,
    concentration: false,
    duration: "8 hours",
    castingTime: "1 action",
    school: "Transmutation",
    level: 7,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 238
      }
    ]
  },
  {
    name: "Expeditious Retreat",
    description: [
      "This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 bonus action",
    school: "Transmutation",
    level: 1,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 238
      }
    ]
  },
  {
    name: "Eyebite",
    description: [
      "For the spell's duration, your eyes become an inky void imbued with dread power. One creature of your choice within 60 feet of you that you can see must succeed on a wisdom saving throw or be affected by one of the following effects of your choice for the duration. On each of your turns until the spell ends, you can use your action to target another creature but can't target a creature again if it has succeeded on a saving throw against this casting of eyebite.",
      "Asleep.",
      " The target falls unconscious. It wakes up if it takes any damage or if another creature uses its action to shake the sleeper awake.",
      "Panicked.",
      " The target is frightened of you. On each of its turns, the frightened creature must take the Dash action and move away from you by the safest and shortest available route, unless there is nowhere to move. If the target moves to a place at least 60 feet away from you where it can no longer see you, this effect ends.",
      "Sickened.",
      " The target has disadvantage on attack rolls and ability checks. At the end of each of its turns, it can make another wisdom saving throw. If it succeeds, the effect ends."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Necromancy",
    level: 6,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 238
      }
    ]
  },
  {
    name: "Fabricate",
    description: [
      "You convert raw materials into products of the same material. For example, you can fabricate a wooden bridge from a clump of trees, a rope from a patch of hemp, and clothes from flax or wool.",
      "Choose raw materials that you can see within range. You can fabricate a Large or smaller object (contained within a 10-foot cube, or eight connected 5-foot cubes), given a sufficient quantity of raw material. If you are working with metal, stone, or another mineral substance, however, the fabricated object can be no larger than Medium (contained within a single 5-foot cube). The quality of objects made by the spell is commensurate with the quality of the raw materials.",
      "Creatures or magic items can't be created or transmuted by this spell. You also can't use it to create items that ordinarily require a high degree of craftsmanship, such as jewelry, weapons, glass, or armor, unless you have proficiency with the type of artisan's tools used to craft such objects."
    ],
    higherLevel: [],
    range: "120 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "10 minutes",
    school: "Transmutation",
    level: 4,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 239
      }
    ]
  },
  {
    name: "Faerie Fire",
    description: [
      "Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius.",
      "Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Evocation",
    level: 1,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 239
      }
    ]
  },
  {
    name: "Faithful Hound",
    description: [
      "You conjure a phantom watchdog in an unoccupied space that you can see within range, where it remains for the duration, until you dismiss it as an action, or until you move more than 100 feet away from it.",
      "The hound is invisible to all creatures except you and can't be harmed. When a Small or larger creature comes within 30 feet of it without first speaking the password that you specify when you cast this spell, the hound starts barking loudly. The hound sees invisible creatures and can see into the Ethereal Plane. It ignores illusions.",
      "At the start of each of your turns, the hound attempts to bite one creature within 5 feet of it that is hostile to you. The hound's attack bonus is equal to your spellcasting ability modifier + your proficiency bonus. On a hit, it deals 4d8 piercing damage."
    ],
    higherLevel: [],
    range: "30 feet",
    material: "A tiny silver whistle, a piece of bone, and a thread",
    ritual: false,
    concentration: false,
    duration: "8 hours",
    castingTime: "1 action",
    school: "Conjuration",
    level: 4,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 261
      }
    ]
  },
  {
    name: "False Life",
    description: [
      "Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional temporary hit points for each slot level above 1st."
    ],
    range: "Self",
    material: "A small amount of alcohol or distilled spirits.",
    ritual: false,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Necromancy",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 239
      }
    ]
  },
  {
    name: "Fear",
    description: [
      "You project a phantasmal image of a creature's worst fears. Each creature in a 30-foot cone must succeed on a wisdom saving throw or drop whatever it is holding and become frightened for the duration.",
      "While frightened by this spell, a creature must take the Dash action and move away from you by the safest available route on each of its turns, unless there is nowhere to move. If the creature ends its turn in a location where it doesn't have line of sight to you, the creature can make a wisdom saving throw. On a successful save, the spell ends for that creature."
    ],
    higherLevel: [],
    range: "Self",
    material: "A white feather or the heart of a hen.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Illusion",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 239
      }
    ]
  },
  {
    name: "Feather Fall",
    description: [
      "Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature."
    ],
    higherLevel: [],
    range: "60 feet",
    material: "A small feather or a piece of down.",
    ritual: false,
    concentration: false,
    duration: "1 minute",
    castingTime: "1 reaction",
    school: "Transmutation",
    level: 1,
    components: ["V", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 239
      }
    ]
  },
  {
    name: "Feeblemind",
    description: [
      "You blast the mind of a creature that you can see within range, attempting to shatter its intellect and personality. The target takes 4d6 psychic damage and must make an intelligence saving throw.",
      "On a failed save, the creature's Intelligence and Charisma scores become 1. The creature can't cast spells, activate magic items, understand language, or communicate in any intelligible way. The creature can, however, identify its friends, follow them, and even protect them.",
      "At the end of every 30 days, the creature can repeat its saving throw against this spell. If it succeeds on its saving throw, the spell ends.",
      "The spell can also be ended by greater restoration, heal, or wish."
    ],
    higherLevel: [],
    range: "150 feet",
    material: "A handful of clay, crystal, glass, or mineral spheres.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Enchantment",
    level: 8,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 239
      }
    ]
  },
  {
    name: "Find Familiar",
    description: [
      "You gain the service of a familiar, a spirit that takes an animal form you choose: bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of a beast.",
      "Your familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can’t attack, but it can take other actions as normal.",
      "When the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again.",
      "While your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiar’s eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses.",
      "As an action, you can temporarily dismiss your familiar. It disappears into a pocket dimension where it awaits your summons. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you.",
      "You can’t have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature.",
      "Finally, when you cast a spell with a range of touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your action modifier for the roll."
    ],
    higherLevel: [],
    range: "10 feet",
    material:
      "10gp worth of charcoal, incense, and herbs that must be consumed by fire in a brass brazier.",
    ritual: true,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 hour",
    school: "Conjuration",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 240
      }
    ]
  },
  {
    name: "Find Steed",
    description: [
      "You summon a spirit that assumes the form of an unusually intelligent, strong, and loyal steed, creating a long-lasting bond with it. Appearing in an unoccupied space within range, the steed takes on a form that you choose, such as a warhorse, a pony, a camel, an elk, or a mastiff. (Your DM might allow other animals to be summoned as steeds.) The steed has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of its normal type. Additionally, if your steed has an Intelligence of 5 or less, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak.",
      "Your steed serves you as a mount, both in combat and out, and you have an instinctive bond with it that allows you to fight as a seamless unit. While mounted on your steed, you can make any spell you cast that targets only you also target your steed.",
      "When the steed drops to 0 hit points, it disappears, leaving behind no physical form. You can also dismiss your steed at any time as an action, causing it to disappear. In either case, casting this spell again summons the same steed, restored to its hit point maximum.",
      "While your steed is within 1 mile of you, you can communicate with it telepathically.",
      "You can't have more than one steed bonded by this spell at a time. As an action, you can release the steed from its bond at any time, causing it to disappear."
    ],
    higherLevel: [],
    range: "30 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "10 minutes",
    school: "Conjuration",
    level: 2,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 240
      }
    ]
  },
  {
    name: "Find Traps",
    description: [
      "You sense the presence of any trap within range that is within line of sight. A trap, for the purpose of this spell, includes anything that would inflict a sudden or unexpected effect you consider harmful or undesirable, which was specifically intended as such by its creator. Thus, the spell would sense an area affected by the alarm spell, a glyph of warding, or a mechanical pit trap, but it would not reveal a natural weakness in the floor, an unstable ceiling, or a hidden sinkhole.",
      "This spell merely reveals that a trap is present. You don't learn the location of each trap, but you do learn the general nature of the danger posed by a trap you sense."
    ],
    higherLevel: [],
    range: "120 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Divination",
    level: 2,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 241
      }
    ]
  },
  {
    name: "Find the Path",
    description: [
      "This spell allows you to find the shortest, most direct physical route to a specific fixed location that you are familiar with on the same plane of existence. If you name a destination on another plane of existence, a destination that moves (such as a mobile fortress), or a destination that isn't specific (such as \"a green dragon's lair\"), the spell fails.",
      "For the duration, as long as you are on the same plane of existence as the destination, you know how far it is and in what direction it lies. While you are traveling there, whenever you are presented with a choice of paths along the way, you automatically determine which path is the shortest and most direct route (but not necessarily the safest route) to the destination."
    ],
    higherLevel: [],
    range: "Self",
    material:
      "A set of divinatory tools-such as bones, ivory sticks, cards, teeth, or carved runes-worth 100gp and an object from the location you wish to find.",
    ritual: false,
    concentration: true,
    duration: "Up to 24 hours",
    castingTime: "1 minute",
    school: "Divination",
    level: 6,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 240
      }
    ]
  },
  {
    name: "Finger of Death",
    description: [
      "You send negative energy coursing through a creature that you can see within range, causing it searing pain. The target must make a constitution saving throw. It takes 7d8 + 30 necrotic damage on a failed save, or half as much damage on a successful one.",
      "A humanoid killed by this spell rises at the start of your next turn as a zombie that is permanently under your command, following your verbal orders to the best of its ability."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Necromancy",
    level: 7,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 241
      }
    ]
  },
  {
    name: "Fire Bolt",
    description: [
      "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn’t being worn or carried.",
      "This spell’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
    ],
    higherLevel: [],
    range: "120 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 0,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 242
      }
    ]
  },
  {
    name: "Fire Shield",
    description: [
      "Thin and vaporous flame surround your body for the duration of the spell, radiating a bright light bright light in a 10-foot radius and dim light for an additional 10 feet. You can end the spell using an action to make it disappear.",
      "The flames are around you a heat shield or cold, your choice. The heat shield gives you cold damage resistance and the cold resistance to fire damage.",
      "In addition, whenever a creature within 5 feet of you hits you with a melee attack, flames spring from the shield. The attacker then suffers 2d8 points of fire damage or cold, depending on the model."
    ],
    higherLevel: [],
    range: "Self",
    material: "A little phosphorus or a firefly.",
    ritual: false,
    concentration: false,
    duration: "10 minutes",
    castingTime: "1 action",
    school: "Evocation",
    level: 4,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 242
      }
    ]
  },
  {
    name: "Fire Storm",
    description: [
      "A storm made up of sheets of roaring flame appears in a location you choose within range. The area of the storm consists of up to ten 10-foot cubes, which you can arrange as you wish. Each cube must have at least one face adjacent to the face of another cube. Each creature in the area must make a dexterity saving throw. It takes 7d10 fire damage on a failed save, or half as much damage on a successful one.",
      "The fire damages objects in the area and ignites flammable objects that aren't being worn or carried. If you choose, plant life in the area is unaffected by this spell."
    ],
    higherLevel: [],
    range: "150 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 7,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 242
      }
    ]
  },
  {
    name: "Fireball",
    description: [
      "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one.",
      "The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
    ],
    range: "150 feet",
    material: "A tiny ball of bat guano and sulfur.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 241
      }
    ]
  },
  {
    name: "Flame Blade",
    description: [
      "You evoke a fiery blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke the blade again as a bonus action.",
      "You can use your action to make a melee spell attack with the fiery blade. On a hit, the target takes 3d6 fire damage.",
      "The flaming blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for every two slot levels above 2nd."
    ],
    range: "Self",
    material: "Leaf of sumac.",
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 bonus action",
    school: "Evocation",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 242
      }
    ]
  },
  {
    name: "Flame Strike",
    description: [
      "A vertical column of divine fire roars down from the heavens in a location you specify. Each creature in a 10-foot-radius, 40-foot-high cylinder centered on a point within range must make a dexterity saving throw. A creature takes 4d6 fire damage and 4d6 radiant damage on a failed save, or half as much damage on a successful one."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 6th level or higher, the fire damage or the radiant damage (your choice) increases by 1d6 for each slot level above 5th."
    ],
    range: "60 feet",
    material: "Pinch of sulfur.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 5,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 242
      }
    ]
  },
  {
    name: "Flaming Sphere",
    description: [
      "A 5-foot-diameter sphere of fire appears in an unoccupied space of your choice within range and lasts for the duration. Any creature that ends its turn within 5 feet of the sphere must make a dexterity saving throw. The creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one.",
      "As a bonus action, you can move the sphere up to 30 feet. If you ram the sphere into a creature, that creature must make the saving throw against the sphere's damage, and the sphere stops moving this turn.",
      "When you move the sphere, you can direct it over barriers up to 5 feet tall and jump it across pits up to 10 feet wide. The sphere ignites flammable objects not being worn or carried, and it sheds bright light in a 20-foot radius and dim light for an additional 20 feet."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
    ],
    range: "60 feet",
    material:
      "A bit of tallow, a pinch of brimstone, and a dusting of powdered iron.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Conjuration",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 242
      }
    ]
  },
  {
    name: "Flesh to Stone",
    description: [
      "You attempt to turn one creature that you can see within range into stone. If the target's body is made of flesh, the creature must make a constitution saving throw. On a failed save, it is restrained as its flesh begins to harden. On a successful save, the creature isn't affected.",
      "A creature restrained by this spell must make another constitution saving throw at the end of each of its turns. If it successfully saves against this spell three times, the spell ends. If it fails its saves three times, it is turned to stone and subjected to the petrified condition for the duration. The successes and failures don't need to be consecutive; keep track of both until the target collects three of a kind.",
      "If the creature is physically broken while petrified, it suffers from similar deformities if it reverts to its original state.",
      "If you maintain your concentration on this spell for the entire possible duration, the creature is turned to stone until the effect is removed."
    ],
    higherLevel: [],
    range: "60 feet",
    material: "A pinch of lime, water, and earth.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Transmutation",
    level: 6,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 243
      }
    ]
  },
  {
    name: "Floating Disk",
    description: [
      "This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the duration, and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground.",
      "The disk is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the disk follows you so that it remains within 20 feet of you. If can move across uneven terrain, up or down stairs, slopes and the like, but it can't cross an elevation change of 10 feet or more. For example, the disk can't move across a 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom.",
      "If you move more than 100 feet away from the disk (typically because it can't move around an obstacle to follow you), the spell ends."
    ],
    higherLevel: [],
    range: "30 feet",
    material: "A drop of mercury.",
    ritual: true,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Conjuration",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 282
      }
    ]
  },
  {
    name: "Fly",
    description: [
      "You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd."
    ],
    range: "Touch",
    material: "A wing feather from any bird.",
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Transmutation",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 243
      }
    ]
  },
  {
    name: "Fog Cloud",
    description: [
      "You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st."
    ],
    range: "120 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 action",
    school: "Conjuration",
    level: 1,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 243
      }
    ]
  },
  {
    name: "Forbiddance",
    description: [
      "You create a ward against magical travel that protects up to 40,000 square feet of floor space to a height of 30 feet above the floor. For the duration, creatures can't teleport into the area or use portals, such as those created by the gate spell, to enter the area. The spell proofs the area against planar travel, and therefore prevents creatures from accessing the area by way of the Astral Plane, Ethereal Plane, Feywild, Shadowfell, or the plane shift spell.",
      "In addition, the spell damages types of creatures that you choose when you cast it. Choose one or more of the following: celestials, elementals, fey, fiends, and undead. When a chosen creature enters the spell's area for the first time on a turn or starts its turn there, the creature takes 5d10 radiant or necrotic damage (your choice when you cast this spell).",
      "When you cast this spell, you can designate a password. A creature that speaks the password as it enters the area takes no damage from the spell.",
      "The spell's area can't overlap with the area of another forbiddance spell. If you cast forbiddance every day for 30 days in the same location, the spell lasts until it is dispelled, and the material components are consumed on the last casting."
    ],
    higherLevel: [],
    range: "Touch",
    material:
      "A sprinkling of holy water, rare incense, and powdered ruby worth at least 1,000 gp.",
    ritual: true,
    concentration: false,
    duration: "24 hours",
    castingTime: "10 minutes",
    school: "Abjuration",
    level: 6,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 243
      }
    ]
  },
  {
    name: "Forcecage",
    description: [
      "An immobile, invisible, cube-shaped prison composed of magical force springs into existence around an area you choose within range. The prison can be a cage or a solid box, as you choose.",
      "A prison in the shape of a cage can be up to 20 feet on a side and is made from 1/2-inch diameter bars spaced 1/2 inch apart.",
      "A prison in the shape of a box can be up to 10 feet on a side, creating a solid barrier that prevents any matter from passing through it and blocking any spells cast into or out from the area.",
      "When you cast the spell, any creature that is completely inside the cage's area is trapped. Creatures only partially within the area, or those too large to fit inside the area, are pushed away from the center of the area until they are completely outside the area.",
      "A creature inside the cage can't leave it by nonmagical means. If the creature tries to use teleportation or interplanar travel to leave the cage, it must first make a charisma saving throw. On a success, the creature can use that magic to exit the cage. On a failure, the creature can't exit the cage and wastes the use of the spell or effect. The cage also extends into the Ethereal Plane, blocking ethereal travel.",
      "This spell can't be dispelled by dispel magic."
    ],
    higherLevel: [],
    range: "100 feet",
    material: "Ruby dust worth 1,500 gp.",
    ritual: false,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Evocation",
    level: 7,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 243
      }
    ]
  },
  {
    name: "Foresight",
    description: [
      "You touch a willing creature and bestow a limited ability to see into the immediate future. For the duration, the target can't be surprised and has advantage on attack rolls, ability checks, and saving throws. Additionally, other creatures have disadvantage on attack rolls against the target for the duration.",
      "This spell immediately ends if you cast it again before its duration ends."
    ],
    higherLevel: [],
    range: "Touch",
    material: "A hummingbird feather.",
    ritual: false,
    concentration: false,
    duration: "8 hours",
    castingTime: "1 minute",
    school: "Divination",
    level: 9,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 244
      }
    ]
  },
  {
    name: "Freedom of Movement",
    description: [
      "You touch a willing creature. For the duration, the target's movement is unaffected by difficult terrain, and spells and other magical effects can neither reduce the target's speed nor cause the target to be paralyzed or restrained.",
      "The target can also spend 5 feet of movement to automatically escape from nonmagical restraints, such as manacles or a creature that has it grappled. Finally, being underwater imposes no penalties on the target's movement or attacks."
    ],
    higherLevel: [],
    range: "Touch",
    material: "A leather strap, bound around the arm or a similar appendage.",
    ritual: false,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Abjuration",
    level: 4,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 244
      }
    ]
  },
  {
    name: "Freezing Sphere",
    description: [
      "A frigid globe of cold energy streaks from your fingertips to a point of your choice within range, where it explodes in a 60-foot-radius sphere. Each creature within the area must make a constitution saving throw. On a failed save, a creature takes 10d6 cold damage. On a successful save, it takes half as much damage.",
      "If the globe strikes a body of water or a liquid that is principally water (not including water-based creatures), it freezes the liquid to a depth of 6 inches over an area 30 feet square. This ice lasts for 1 minute. Creatures that were swimming on the surface of frozen water are trapped in the ice. A trapped creature can use an action to make a Strength check against your spell save DC to break free.",
      "You can refrain from firing the globe after completing the spell, if you wish. A small globe about the size of a sling stone, cool to the touch, appears in your hand. At any time, you or a creature you give the globe to can throw the globe (to a range of 40 feet) or hurl it with a sling (to the sling's normal range). It shatters on impact, with the same effect as the normal casting of the spell. You can also set the globe down without shattering it. After 1 minute, if the globe hasn't already shattered, it explodes."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 7th level or higher, the damage increases by 1d6 for each slot level above 6th."
    ],
    range: "300 feet",
    material: "A small crystal sphere.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 6,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 263
      }
    ]
  },
  {
    name: "Gaseous Form",
    description: [
      "You transform a willing creature you touch, along with everything it's wearing and carrying, into a misty cloud for the duration. The spell ends if the creature drops to 0 hit points. An incorporeal creature isn't affected.",
      "While in this form, the target's only method of movement is a flying speed of 10 feet. The target can enter and occupy the space of another creature. The target has resistance to nonmagical damage, and it has advantage on Strength, Dexterity, and constitution saving throws. The target can pass through small holes, narrow openings, and even mere cracks, though it treats liquids as though they were solid surfaces. The target can't fall and remains hovering in the air even when stunned or otherwise incapacitated.",
      "While in the form of a misty cloud, the target can't talk or manipulate objects, and any objects it was carrying or holding can't be dropped, used, or otherwise interacted with. The target can't attack or cast spells."
    ],
    higherLevel: [],
    range: "Touch",
    material: "A bit of gauze and a wisp of smoke.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 action",
    school: "Transmutation",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 244
      }
    ]
  },
  {
    name: "Gate",
    description: [
      "You conjure a portal linking an unoccupied space you can see within range to a precise location on a different plane of existence. The portal is a circular opening, which you can make 5 to 20 feet in diameter. You can orient the portal in any direction you choose. The portal lasts for the duration.",
      "The portal has a front and a back on each plane where it appears. Travel through the portal is possible only by moving through its front. Anything that does so is instantly transported to the other plane, appearing in the unoccupied space nearest to the portal.",
      "Deities and other planar rulers can prevent portals created by this spell from opening in their presence or anywhere within their domains.",
      "When you cast this spell, you can speak the name of a specific creature (a pseudonym, title, or nickname doesn't work). If that creature is on a plane other than the one you are on, the portal opens in the named creature's immediate vicinity and draws the creature through it to the nearest unoccupied space on your side of the portal. You gain no special power over the creature, and it is free to act as the DM deems appropriate. It might leave, attack you, or help you."
    ],
    higherLevel: [],
    range: "60 feet",
    material: "A diamond worth at least 5,000gp.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Conjuration",
    level: 9,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 244
      }
    ]
  },
  {
    name: "Geas",
    description: [
      "You place a magical command on a creature that you can see within range, forcing it to carry out some service or refrain from some action or course of activity as you decide. If the creature can understand you, it must succeed on a wisdom saving throw or become charmed by you for the duration. While the creature is charmed by you, it takes 5d10 psychic damage each time it acts in a manner directly counter to your instructions, but no more than once each day. A creature that can't understand you is unaffected by the spell.",
      "You can issue any command you choose, short of an activity that would result in certain death. Should you issue a suicidal command, the spell ends.",
      "You can end the spell early by using an action to dismiss it. A remove curse, greater restoration, or wish spell also ends it."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 7th or 8th level, the duration is 1 year. When you cast this spell using a spell slot of 9th level, the spell lasts until it is ended by one of the spells mentioned above."
    ],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "30 days",
    castingTime: "1 minute",
    school: "Enchantment",
    level: 5,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 244
      }
    ]
  },
  {
    name: "Gentle Repose",
    description: [
      "You touch a corpse or other remains. For the duration, the target is protected from decay and can't become undead.",
      "The spell also effectively extends the time limit on raising the target from the dead, since days spent under the influence of this spell don't count against the time limit of spells such as raise dead."
    ],
    higherLevel: [],
    range: "Touch",
    material:
      "A pinch of salt and one copper piece placed on each of the corpse's eyes, which must remain there for the duration.",
    ritual: true,
    concentration: false,
    duration: "10 days",
    castingTime: "1 action",
    school: "Necromancy",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 245
      }
    ]
  },
  {
    name: "Giant Insect",
    description: [
      "You transform up to ten centipedes, three spiders, five wasps, or one scorpion within range into giant versions of their natural forms for the duration. A centipede becomes a giant centipede, a spider becomes a giant spider, a wasp becomes a giant wasp, and a scorpion becomes a giant scorpion.",
      "Each creature obeys your verbal commands, and in combat, they act on your turn each round. The DM has the statistics for these creatures and resolves their actions and movement.",
      "A creature remains in its giant size for the duration, until it drops to 0 hit points, or until you use an action to dismiss the effect on it.",
      "The DM might allow you to choose different targets. For example, if you transform a bee, its giant version might have the same statistics as a giant wasp."
    ],
    higherLevel: [],
    range: "30 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Transmutation",
    level: 4,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 245
      }
    ]
  },
  {
    name: "Glibness",
    description: [
      "Until the spell ends, when you make a Charisma check, you can replace the number you roll with a 15. Additionally, no matter what you say, magic that would determine if you are telling the truth indicates that you are being truthful."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: false,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Transmutation",
    level: 8,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 245
      }
    ]
  },
  {
    name: "Globe of Invulnerability",
    description: [
      "An immobile, faintly shimmering barrier springs into existence in a 10-foot radius around you and remains for the duration.",
      "Any spell of 5th level or lower cast from outside the barrier can't affect creatures or objects within it, even if the spell is cast using a higher level spell slot. Such a spell can target creatures and objects within the barrier, but the spell has no effect on them. Similarly, the area within the barrier is excluded from the areas affected by such spells."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 7th level or higher, the barrier blocks spells of one level higher for each slot level above 6th."
    ],
    range: "Self",
    material: "A glass or crystal bead that shatters when the spell ends.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Abjuration",
    level: 6,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 245
      }
    ]
  },
  {
    name: "Glyph of Warding",
    description: [
      "When you cast this spell, you enter a glyph that hurt other creatures, either on a surface (like a table or a portion of a floor or wall) or inside an object that can be closed (like a book a parchment or cabinet) to hide the glyph. If you opt for a surface, the glyph can cover an area of 10 feet or less in diameter. If you select an object, it must remain in place. If the object is moved to over 10 feet from where the spell was spell casts, the glyph breeze and the spell expires without being triggered.",
      "The glyph is virtually invisible and roll Intelligence (Investigation) against the fate of your save DC is required to find out.",
      "You determine the shutter glyph while casting the spell. For the glyphs inscribed on a surface, the triggers are typically hit or stand on a glyph remove an object placed on the glyph, approach at a certain distance of the glyph or manipulate an object on which is inscribed the glyph. For the glyphs inscribed in an object, triggers are typically open the object, approaching at a distance from the object, seen or read the glyph. Once the glyph is triggered, the spell ends.",
      "You can refine the trigger conditions so that the spell will work only in certain circumstances or in physical attributes (height or weight), the creature type (eg, only aberrations or the Dark Elves trigger the glyph) or alignment. You can also determine the conditions for certain creatures do not trigger the glyph, using a password, for example.",
      "When you sign the glyph, make a choice between the explosive runes or glyph fate.",
      "Explosive runes.",
      " When triggered, magical energy springs from the glyph in a 20-foot-radius sphere centered on the glyph. The sphere bypasses the corners. Each creature in the area must make a dexterity saving throw or it suffers 5d8 acid damage, lightning, fire, cold or thunder (to be determined during the creation of the glyph). If successful, the damage is halved.",
      "Sort glyph.",
      " You can store a level of 3 or less prepared spell in the glyph to chant during the creation of the glyph. The spell must target one creature or area. The stored spell has no immediate effect when spell casts that way. When the glyph is activated, the stored spell spell casts. If the spell is a target, it will target the creature that triggered the glyph. If the spell affects an area, the area is centered on that creature. If the spell invokes hostile creatures or creates sharp objects or traps, they also appear close as possible to the intruder and attack. If the spell requires concentration, it persists for the duration of the spell."
    ],
    higherLevel: [
      "When you cast this spell using a 4 or higher is level, the damage explosive runes increased by 1d8 for each level of top slot 3. If you create a glyph spell, you may store a spell whose level is equivalent or less to spell slot used for the custody of the glyph."
    ],
    range: "Touch",
    material:
      "Incense and powdered diamond worth at least 200 gp, the spell consumes.",
    ritual: false,
    concentration: false,
    duration: "Until dispelled",
    castingTime: "1 hour",
    school: "Abjuration",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 245
      }
    ]
  },
  {
    name: "Goodberry",
    description: [
      "Up to ten berries appear in your hand and are infused with magic for the duration. A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for a day.",
      "The berries lose their potency if they have not been consumed within 24 hours of the casting of this spell."
    ],
    higherLevel: [],
    range: "Touch",
    material: "A sprig of mistletoe.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Transmutation",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 246
      }
    ]
  },
  {
    name: "Grease",
    description: [
      "Slick grease covers the ground in a 10-foot square centered on a point within range and turns it into difficult terrain for the duration.",
      "When the grease appears, each creature standing in its area must succeed on a dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also succeed on a dexterity saving throw or fall prone."
    ],
    higherLevel: [],
    range: "60 feet",
    material: "A bit of pork rind or butter.",
    ritual: false,
    concentration: false,
    duration: "1 minute",
    castingTime: "1 action",
    school: "Conjuration",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 246
      }
    ]
  },
  {
    name: "Greater Invisibility",
    description: [
      "You or a creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person."
    ],
    higherLevel: [],
    range: "Touch",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Illusion",
    level: 4,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 246
      }
    ]
  },
  {
    name: "Greater Restoration",
    description: [
      "You imbue a creature you touch with positive energy to undo a debilitating effect. You can reduce the target's exhaustion level by one, or end one of the following effects on the target:",
      "- One effect that charmed or petrified the target",
      "- One curse, including the target's attunement to a cursed magic item",
      "- Any reduction to one of the target's ability scores",
      "- One effect reducing the target's hit point maximum"
    ],
    higherLevel: [],
    range: "Touch",
    material: "Diamond dust worth at least 100gp, which the spell consumes.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Abjuration",
    level: 5,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 246
      }
    ]
  },
  {
    name: "Guardian of Faith",
    description: [
      "A Large spectral guardian appears and hovers for the duration in an unoccupied space of your choice that you can see within range. The guardian occupies that space and is indistinct except for a gleaming sword and shield emblazoned with the symbol of your deity.",
      "Any creature hostile to you that moves to a space within 10 feet of the guardian for the first time on a turn must succeed on a dexterity saving throw. The creature takes 20 radiant damage on a failed save, or half as much damage on a successful one. The guardian vanishes when it has dealt a total of 60 damage."
    ],
    higherLevel: [],
    range: "30 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "8 hours",
    castingTime: "1 action",
    school: "Conjuration",
    level: 4,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 246
      }
    ]
  },
  {
    name: "Guards and Wards",
    description: [
      "You create a ward that protects up to 2,500 square feet of floor space (an area 50 feet square, or one hundred 5-foot squares or twenty-five 10-foot squares). The warded area can be up to 20 feet tall, and shaped as you desire. You can ward several stories of a stronghold by dividing the area among them, as long as you can walk into each contiguous area while you are casting the spell.",
      "When you cast this spell, you can specify individuals that are unaffected by any or all of the effects that you choose. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects.",
      "Guards and wards creates the following effects within the warded area.",
      "Corridors.",
      " Fog fills all the warded corridors, making them heavily obscured. In addition, at each intersection or branching passage offering a choice of direction, there is a 50 percent chance that a creature other than you will believe it is going in the opposite direction from the one it chooses.",
      "Doors.",
      " All doors in the warded area are magically locked, as if sealed by an arcane lock spell. In addition, you can cover up to ten doors with an illusion (equivalent to the illusory object function of the minor illusion spell) to make them appear as plain sections of wall.",
      "Stairs.",
      " Webs fill all stairs in the warded area from top to bottom, as the web spell. These strands regrow in 10 minutes if they are burned or torn away while guards and wards lasts.",
      "Other Spell Effect.",
      " You can place your choice of one of the following magical effects within the warded area of the stronghold.",
      "- Place dancing lights in four corridors. You can design nate a simple program that the lights repeat as long as guards and wards lasts.",
      "- Place magic mouth in two locations.",
      "- Place stinking cloud in two locations. The vapors appear in the places you designate; they return within 10 minutes if dispersed by wind while guards and wards lasts.",
      "- Place a constant gust of wind in one corridor or room.",
      "- Place a suggestion in one location. You select an area of up to 5 feet square, and any creature that enters or passes through the area receives the suggestion mentally.",
      "The whole warded area radiates magic. A dispel magic cast on a specific effect, if successful, removes only that effect.",
      "You can create a permanently guarded and warded structure by casting this spell there every day for one year."
    ],
    higherLevel: [],
    range: "Touch",
    material:
      "Burning incense, a small measure of brimstone and oil, a knotted string, a small amount of umber hulk blood, and a small silver rod worth at least 10 gp.",
    ritual: false,
    concentration: false,
    duration: "24 hours",
    castingTime: "10 minutes",
    school: "Abjuration",
    level: 6,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 248
      }
    ]
  },
  {
    name: "Guidance",
    description: [
      "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends."
    ],
    higherLevel: [],
    range: "Touch",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Divination",
    level: 0,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 248
      }
    ]
  },
  {
    name: "Guiding Bolt",
    description: [
      "A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
    ],
    range: "120 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "1 round",
    castingTime: "1 action",
    school: "Evocation",
    level: 1,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 248
      }
    ]
  },
  {
    name: "Gust of Wind",
    description: [
      "A line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose for the spell's duration. Each creature that starts its turn in the line must succeed on a strength saving throw or be pushed 15 feet away from you in a direction following the line.",
      "Any creature in the line must spend 2 feet of movement for every 1 foot it moves when moving closer to you.",
      "The gust disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them.",
      "As a bonus action on each of your turns before the spell ends, you can change the direction in which the line blasts from you."
    ],
    higherLevel: [],
    range: "Self",
    material: "A legume seed.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Evocation",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 248
      }
    ]
  },
  {
    name: "Hallow",
    description: [
      "You touch a point and infuse an area around it with holy (or unholy) power. The area can have a radius up to 60 feet, and the spell fails if the radius includes an area already under the effect a hallow spell. The affected area is subject to the following effects.",
      "First, celestials, elementals, fey, fiends, and undead can't enter the area, nor can such creatures charm, frighten, or possess creatures within it. Any creature charmed, frightened, or possessed by such a creature is no longer charmed, frightened, or possessed upon entering the area. You can exclude one or more of those types of creatures from this effect.",
      "Second, you can bind an extra effect to the area. Choose the effect from the following list, or choose an effect offered by the DM. Some of these effects apply to creatures in the area; you can designate whether the effect applies to all creatures, creatures that follow a specific deity or leader, or creatures of a specific sort, such as ores or trolls. When a creature that would be affected enters the spell's area for the first time on a turn or starts its turn there, it can make a charisma saving throw. On a success, the creature ignores the extra effect until it leaves the area.",
      "Courage.",
      " Affected creatures can't be frightened while in the area.",
      "Darkness.",
      " Darkness fills the area. Normal light, as well as magical light created by spells of a lower level than the slot you used to cast this spell, can't illuminate the area.",
      "Daylight.",
      " Bright light fills the area. Magical darkness created by spells of a lower level than the slot you used to cast this spell can't extinguish the light.",
      "Energy Protection.",
      " Affected creatures in the area have resistance to one damage type of your choice, except for bludgeoning, piercing, or slashing.",
      "Energy Vulnerability.",
      " Affected creatures in the area have vulnerability to one damage type of your choice, except for bludgeoning, piercing, or slashing.",
      "Everlasting Rest.",
      " Dead bodies interred in the area can't be turned into undead.",
      "Extradimensional Interference.",
      " Affected creatures can't move or travel using teleportation or by extradimensional or interplanar means.",
      "Fear.",
      " Affected creatures are frightened while in the area.",
      "Silence.",
      " No sound can emanate from within the area, and no sound can reach into it.",
      "Tongues.",
      " Affected creatures can communicate with any other creature in the area, even if they don't share a common language."
    ],
    higherLevel: [],
    range: "Touch",
    material:
      "Herbs, oils, and incense worth at least 1,000 gp, which the spell consumes.",
    ritual: false,
    concentration: false,
    duration: "Until dispelled",
    castingTime: "24 hours",
    school: "Evocation",
    level: 5,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 249
      }
    ]
  },
  {
    name: "Hallucinatory Terrain",
    description: [
      "You make natural terrain in a 150-foot cube in range look, sound, and smell like some other sort of natural terrain. Thus, open fields or a road can be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Manufactured structures, equipment, and creatures within the area aren't changed in appearance.",
      "The tactile characteristics of the terrain are unchanged, so creatures entering the area are likely to see through the illusion. If the difference isn't obvious by touch, a creature carefully examining the illusion can attempt an Intelligence (Investigation) check against your spell save DC to disbelieve it. A creature who discerns the illusion for what it is, sees it as a vague image superimposed on the terrain."
    ],
    higherLevel: [],
    range: "300 feet",
    material: "A stone, a twig, and a bit of green plant.",
    ritual: false,
    concentration: false,
    duration: "24 hours",
    castingTime: "10 minutes",
    school: "Illusion",
    level: 4,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 249
      }
    ]
  },
  {
    name: "Harm",
    description: [
      "You unleash a virulent disease on a creature that you can see within range. The target must make a constitution saving throw. On a failed save, it takes 14d6 necrotic damage, or half as much damage on a successful save. The damage can't reduce the target's hit points below 1. If the target fails the saving throw, its hit point maximum is reduced for 1 hour by an amount equal to the necrotic damage it took. Any effect that removes a disease allows a creature's hit point maximum to return to normal before that time passes."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Necromancy",
    level: 6,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 249
      }
    ]
  },
  {
    name: "Haste",
    description: [
      "Choose a willing creature that you can see within range. Until the spell ends, the target's speed is doubled, it gains a +2 bonus to AC, it has advantage on dexterity saving throws, and it gains an additional action on each of its turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action.",
      "When the spell ends, the target can't move or take actions until after its next turn, as a wave of lethargy sweeps over it."
    ],
    higherLevel: [],
    range: "30 feet",
    material: "A shaving of licorice root.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Transmutation",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 250
      }
    ]
  },
  {
    name: "Heal",
    description: [
      "Choose a creature that you can see within range. A surge of positive energy washes through the creature, causing it to regain 70 hit points. This spell also ends blindness, deafness, and any diseases affecting the target. This spell has no effect on constructs or undead."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 7th level or higher, the amount of healing increases by 10 for each slot level above 6th."
    ],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 6,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 250
      }
    ]
  },
  {
    name: "Healing Word",
    description: [
      "A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st."
    ],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 bonus action",
    school: "Evocation",
    level: 1,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 250
      }
    ]
  },
  {
    name: "Heat Metal",
    description: [
      "Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 fire damage when you cast the spell. Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this damage again.",
      "If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a constitution saving throw or drop the object if it can. If it doesn't drop the object, it has disadvantage on attack rolls and ability checks until the start of your next turn."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
    ],
    range: "60 feet",
    material: "A piece of iron and a flame.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Transmutation",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 250
      }
    ]
  },
  {
    name: "Hellish Rebuke",
    description: [
      "You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 reaction",
    school: "Evocation",
    level: 1,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 250
      }
    ]
  },
  {
    name: "Heroes' Feast",
    description: [
      "You bring forth a great feast, including magnificent food and drink. The feast takes 1 hour to consume and disappears at the end of that time, and the beneficial effects don't set in until this hour is over. Up to twelve other creatures can partake of the feast.",
      "A creature that partakes of the feast gains several benefits. The creature is cured of all diseases and poison, becomes immune to poison and being frightened, and makes all wisdom saving throws with advantage. Its hit point maximum also increases by 2d10, and it gains the same number of hit points. These benefits last for 24 hours."
    ],
    higherLevel: [],
    range: "30 feet",
    material:
      "A gem-encrusted bowl worth at least 1,000gp, which the spell consumes.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "10 minutes",
    school: "Conjuration",
    level: 6,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 250
      }
    ]
  },
  {
    name: "Heroism",
    description: [
      "A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being frightened and gains temporary hit points equal to your spellcasting ability modifier at the start of each of its turns. When the spell ends, the target loses any remaining temporary hit points from this spell."
    ],
    higherLevel: [],
    range: "Touch",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Enchantment",
    level: 1,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 250
      }
    ]
  },
  {
    name: "Hideous Laughter",
    description: [
      "A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it. The target must succeed on a wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score of 4 or less isn't affected.",
      "At the end of each of its turns, and each time it takes damage, the target can make another wisdom saving throw. The target had advantage on the saving throw if it's triggered by damage. On a success, the spell ends."
    ],
    higherLevel: [],
    range: "30 feet",
    material: "Tiny tarts and a feather that is waved in the air.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Enchantment",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 280
      }
    ]
  },
  {
    name: "Hold Monster",
    description: [
      "Choose a creature you can see and reach. The target must make a saving throw of Wisdom or be paralyzed for the duration of the spell. This spell has no effect against the undead. At the end of each round, the target can make a new saving throw of Wisdom. If successful, the spell ends for the creature."
    ],
    higherLevel: [
      "When you cast this spell using a level 6 or higher location, you can target an additional creature for each level of location beyond the fifth. The creatures must be within 30 feet o f each other when you target them."
    ],
    range: "90 feet",
    material: "A small piece of iron.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Enchantment",
    level: 5,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 251
      }
    ]
  },
  {
    name: "Hold Person",
    description: [
      "Choose a humanoid that you can see within range. The target must succeed on a wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another wisdom saving throw. On a success, the spell ends on the target."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them."
    ],
    range: "60 feet",
    material: "A small, straight piece of iron.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Enchantment",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 251
      }
    ]
  },
  {
    name: "Holy Aura",
    description: [
      "Divine light washes out from you and coalesces in a soft radiance in a 30-foot radius around you. Creatures of your choice in that radius when you cast this spell shed dim light in a 5-foot radius and have advantage on all saving throws, and other creatures have disadvantage on attack rolls against them until the spell ends. In addition, when a fiend or an undead hits an affected creature with a melee attack, the aura flashes with brilliant light. The attacker must succeed on a constitution saving throw or be blinded until the spell ends."
    ],
    higherLevel: [],
    range: "Self",
    material:
      "A tiny reliquary worth at least 1,000gp containing a sacred relic, such as a scrap of cloth from a saint's robe or a piece of parchment from a religious text.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Abjuration",
    level: 8,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 251
      }
    ]
  },
  {
    name: "Hunter's Mark",
    description: [
      "You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom (Perception) or Wisdom (Survival) check you make to find it. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to mark a new creature."
    ],
    higherLevel: [],
    range: "90 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 bonus action",
    school: "Divination",
    level: 1,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 251
      }
    ]
  },
  {
    name: "Hypnotic Pattern",
    description: [
      "You create a twisting pattern of colors that weaves through the air inside a 30-foot cube within range. The pattern appears for a moment and vanishes. Each creature in the area who sees the pattern must make a wisdom saving throw. On a failed save, the creature becomes charmed for the duration. While charmed by this spell, the creature is incapacitated and has a speed of 0.",
      "The spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor."
    ],
    higherLevel: [],
    range: "120 feet",
    material:
      "A glowing stick of incense or a crystal vial filled with phosphorescent material.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Illusion",
    level: 3,
    components: ["S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 252
      }
    ]
  },
  {
    name: "Ice Storm",
    description: [
      "A hail of rock-hard ice pounds to the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a dexterity saving throw. A creature takes 2d8 bludgeoning damage and 4d6 cold damage on a failed save, or half as much damage on a successful one.",
      "Hailstones turn the storm's area of effect into difficult terrain until the end of your next turn."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 5th level or higher, the bludgeoning damage increases by 1d8 for each slot level above 4th."
    ],
    range: "300 feet",
    material: "A pinch of dust and a few drops of water.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 4,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 252
      }
    ]
  },
  {
    name: "Identify",
    description: [
      "You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it.",
      "If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it."
    ],
    higherLevel: [],
    range: "Touch",
    material: "A pearl worth at least 100gp and an owl feather.",
    ritual: true,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 minute",
    school: "Divination",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 252
      }
    ]
  },
  {
    name: "Illusory Script",
    description: [
      "You write on parchment, paper, or some other suitable writing material and imbue it with a potent illusion that lasts for the duration.",
      "To you and any creatures you designate when you cast the spell, the writing appears normal, written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, you can cause the writing to appear to be an entirely different message, written in a different hand and language, though the language must be one you know.",
      "Should the spell be dispelled, the original script and the illusion both disappear.",
      "A creature with truesight can read the hidden message."
    ],
    higherLevel: [],
    range: "Touch",
    material:
      "A lead-based ink worth at least 10gp, which this spell consumes.",
    ritual: true,
    concentration: false,
    duration: "10 days",
    castingTime: "1 minute",
    school: "Illusion",
    level: 1,
    components: ["S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 252
      }
    ]
  },
  {
    name: "Imprisonment",
    description: [
      "You create a magical restraint to hold a creature that you can see within range. The target must succeed on a wisdom saving throw or be bound by the spell; if it succeeds, it is immune to this spell if you cast it again. While affected by this spell, the creature doesn't need to breathe, eat, or drink, and it doesn't age. Divination spells can't locate or perceive the target.",
      "When you cast the spell, you choose one of the following forms of imprisonment.",
      "Burial. The target is entombed far beneath the earth in a sphere of magical force that is just large enough to contain the target. Nothing can pass through the sphere, nor can any creature teleport or use planar travel to get into or out of it.",
      "The special component for this version of the spell is a small mithral orb.",
      "Chaining. Heavy chains, firmly rooted in the ground, hold the target in place. The target is restrained until the spell ends, and it can't move or be moved by any means until then.",
      "The special component for this version of the spell is a fine chain of precious metal.",
      "Hedged Prison. The spell transports the target into a tiny demiplane that is warded against teleportation and planar travel. The demiplane can be a labyrinth, a cage, a tower, or any similar confined structure or area of your choice.",
      "The special component for this version of the spell is a miniature representation of the prison made from jade.",
      "Minimus Containment. The target shrinks to a height of 1 inch and is imprisoned inside a gemstone or similar object. Light can pass through the gemstone normally (allowing the target to see out and other creatures to see in), but nothing else can pass through, even by means of teleportation or planar travel. The gemstone can't be cut or broken while the spell remains in effect.",
      "The special component for this version of the spell is a large, transparent gemstone, such as a corundum, diamond, or ruby.",
      "Slumber. The target falls asleep and can't be awoken.",
      "The special component for this version of the spell consists of rare soporific herbs.",
      "Ending the Spell. During the casting of the spell, in any of its versions, you can specify a condition that will cause the spell to end and release the target. The condition can be as specific or as elaborate as you choose, but the DM must agree that the condition is reasonable and has a likelihood of coming to pass. The conditions can be based on a creature's name, identity, or deity but otherwise must be based on observable actions or qualities and not based on intangibles such as level, class, or hit points.",
      "A dispel magic spell can end the spell only if it is cast as a 9th-level spell, targeting either the prison or the special component used to create it.",
      "You can use a particular special component to create only one prison at a time. If you cast the spell again using the same component, the target of the first casting is immediately freed from its binding."
    ],
    higherLevel: [],
    range: "30 feet",
    material:
      "A vellum depiction or a carved statuette in the likeness of the target, and a special component that varies according to the version of the spell you choose, worth at least 500gp per Hit Die of the target.",
    ritual: false,
    concentration: false,
    duration: "Until dispelled",
    castingTime: "1 minute",
    school: "Abjuration",
    level: 9,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 252
      }
    ]
  },
  {
    name: "Incendiary Cloud",
    description: [
      "A swirling cloud of smoke shot through with white-hot embers appears in a 20-foot-radius sphere centered on a point within range. The cloud spreads around corners and is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.",
      "When the cloud appears, each creature in it must make a dexterity saving throw. A creature takes 10d8 fire damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there.",
      "The cloud moves 10 feet directly away from you in a direction that you choose at the start of each of your turns."
    ],
    higherLevel: [],
    range: "150 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Conjuration",
    level: 8,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 253
      }
    ]
  },
  {
    name: "Inflict Wounds",
    description: [
      "Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st."
    ],
    range: "Touch",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Necromancy",
    level: 1,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 253
      }
    ]
  },
  {
    name: "Insect Plague",
    description: [
      "Swarming, biting locusts fill a 20-foot-radius sphere centered on a point you choose within range. The sphere spreads around corners. The sphere remains for the duration, and its area is lightly obscured. The sphere's area is difficult terrain.",
      "When the area appears, each creature in it must make a constitution saving throw. A creature takes 4d10 piercing damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d10 for each slot level above 5th."
    ],
    range: "300 feet",
    material:
      "A few grains of sugar, some kernels of grain, and a smear of fat.",
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Conjuration",
    level: 5,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 254
      }
    ]
  },
  {
    name: "Instant Summons",
    description: [
      "You touch an object weighing 10 pounds or less whose longest dimension is 6 feet or less. The spell leaves an invisible mark on its surface and invisibly inscribes the name of the item on the sapphire you use as the material component. Each time you cast this spell, you must use a different sapphire.",
      "At any time thereafter, you can use your action to speak the item's name and crush the sapphire. The item instantly appears in your hand regardless of physical or planar distances, and the spell ends.",
      "If another creature is holding or carrying the item, crushing the sapphire doesn't transport the item to you, but instead you learn who the creature possessing the object is and roughly where that creature is located at that moment.",
      "Dispel magic or a similar effect successfully applied to the sapphire ends this spell's effect."
    ],
    higherLevel: [],
    range: "Touch",
    material: "A sapphire worth 1,000 gp.",
    ritual: true,
    concentration: false,
    duration: "Until dispelled",
    castingTime: "1 minute",
    school: "Conjuration",
    level: 6,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 235
      }
    ]
  },
  {
    name: "Invisibility",
    description: [
      "A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. The spell ends for a target that attacks or casts a spell."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
    ],
    range: "Touch",
    material: "An eyelash encased in gum arabic.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 action",
    school: "Illusion",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 254
      }
    ]
  },
  {
    name: "Irresistible Dance",
    description: [
      "Choose one creature that you can see within range. The target begins a comic dance in place: shuffling, tapping its feet, and capering for the duration. Creatures that can't be charmed are immune to this spell.",
      "A dancing creature must use all its movement to dance without leaving its space and has disadvantage on dexterity saving throws and attack rolls. While the target is affected by this spell, other creatures have advantage on attack rolls against it. As an action, a dancing creature makes a wisdom saving throw to regain control of itself. On a successful save, the spell ends."
    ],
    higherLevel: [],
    range: "30 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Enchantment",
    level: 6,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 264
      }
    ]
  },
  {
    name: "Jump",
    description: [
      "You touch a creature. The creature's jump distance is tripled until the spell ends."
    ],
    higherLevel: [],
    range: "Touch",
    material: "A grasshopper's hind leg.",
    ritual: false,
    concentration: false,
    duration: "1 minute",
    castingTime: "1 action",
    school: "Transmutation",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 254
      }
    ]
  },
  {
    name: "Knock",
    description: [
      "Choose an object that you can see within range. The object can be a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access.",
      "A target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred. If the object has multiple locks, only one of them is unlocked.",
      "If you choose a target that is held shut with arcane lock, that spell is suppressed for 10 minutes, during which time the target can be opened and shut normally.",
      "When you cast the spell, a loud knock, audible from as far away as 300 feet, emanates from the target object."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Transmutation",
    level: 2,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 254
      }
    ]
  },
  {
    name: "Legend Lore",
    description: [
      "Name or describe a person, place or object. The fate brings to mind a brief and summary information about the thing you named. Information can be presented as tales of forgotten history or even secret information that have never been revealed. If the thing you named is not legendary resonance, you get no information. More information you already have about the thing, more precise and detailed the information you will receive.",
      'What you learn is accurate but can be hidden in figurative language. For example, if you have a mysterious magical ax in your hand, the spell can reveal this information: "Woe to the wicked that affects his hands the ax because the handle decide those of malignant Only a true child of the stone magnet. and loved Moradin could awaken the true power of this ax, and only with the sacred Rudnogg word on the lips."'
    ],
    higherLevel: [],
    range: "Self",
    material:
      "Incense worth 250 inches that fate consumes and four sticks of ivory worth 50 gp each.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "10 minutes",
    school: "Divination",
    level: 5,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 254
      }
    ]
  },
  {
    name: "Lesser Restoration",
    description: [
      "You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned."
    ],
    higherLevel: [],
    range: "Touch",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Abjuration",
    level: 2,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 255
      }
    ]
  },
  {
    name: "Levitate",
    description: [
      "One creature or object of your choice that you can see within range rises vertically, up to 20 feet, and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling creature that succeeds on a constitution saving throw is unaffected.",
      "The target can move only by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing. You can change the target's altitude by up to 20 feet in either direction on your turn. If you are the target, you can move up or down as part of your move. Otherwise, you can use your action to move the target, which must remain within the spell's range.",
      "When the spell ends, the target floats gently to the ground if it is still aloft."
    ],
    higherLevel: [],
    range: "60 feet",
    material:
      "Either a small leather loop or a piece of golden wire bent into a cup shape with a long shank on one end.",
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Transmutation",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 255
      }
    ]
  },
  {
    name: "Light",
    description: [
      "You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action.",
      "If you target an object held or worn by a hostile creature, that creature must succeed on a dexterity saving throw to avoid the spell."
    ],
    higherLevel: [],
    range: "Touch",
    material: "A firefly or phosphorescent moss.",
    ritual: false,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Evocation",
    level: 0,
    components: ["V", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 255
      }
    ]
  },
  {
    name: "Lightning Bolt",
    description: [
      "A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one.",
      "The lightning ignites flammable objects in the area that aren't being worn or carried."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
    ],
    range: "Self",
    material: "A bit of fur and a rod of amber, crystal, or glass.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 255
      }
    ]
  },
  {
    name: "Locate Animals or Plants",
    description: [
      "Describe or name a specific kind of beast or plant. Concentrating on the voice of nature in your surroundings, you learn the direction and distance to the closest creature or plant of that kind within 5 miles, if any are present."
    ],
    higherLevel: [],
    range: "Self",
    material: "A bit of fur from a bloodhound.",
    ritual: true,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Divination",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 256
      }
    ]
  },
  {
    name: "Locate Creature",
    description: [
      "Describe or name a creature that is familiar to you. You sense the direction to the creature's location, as long as that creature is within 1,000 feet of you. If the creature is moving, you know the direction of its movement.",
      "The spell can locate a specific creature known to you, or the nearest creature of a specific kind (such as a human or a unicorn), so long as you have seen such a creature up close-within 30 feet-at least once. If the creature you described or named is in a different form, such as being under the effects of a polymorph spell, this spell doesn't locate the creature.",
      "This spell can't locate a creature if running water at least 10 feet wide blocks a direct path between you and the creature."
    ],
    higherLevel: [],
    range: "Self",
    material: "A bit of fur from a bloodhound.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 action",
    school: "Divination",
    level: 4,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 256
      }
    ]
  },
  {
    name: "Locate Object",
    description: [
      "Describe or name an object that is familiar to you. You sense the direction to the object's location, as long as that object is within 1,000 feet of you. If the object is in motion, you know the direction of its movement.",
      "The spell can locate a specific object known to you, as long as you have seen it up close-within 30 feet-at least once. Alternatively, the spell can locate the nearest object of a particular kind, such as a certain kind of apparel, jewelry, furniture, tool, or weapon.",
      "This spell can't locate an object if any thickness of lead, even a thin sheet, blocks a direct path between you and the object."
    ],
    higherLevel: [],
    range: "Self",
    material: "A forked twig.",
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Divination",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 256
      }
    ]
  },
  {
    name: "Longstrider",
    description: [
      "You touch a creature. The target's speed increases by 10 feet until the spell ends."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each spell slot above 1st."
    ],
    range: "Touch",
    material: "A pinch of dirt.",
    ritual: false,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Transmutation",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 256
      }
    ]
  },
  {
    name: "Mage Armor",
    description: [
      "You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action."
    ],
    higherLevel: [],
    range: "Touch",
    material: "A piece of cured leather.",
    ritual: false,
    concentration: false,
    duration: "8 hours",
    castingTime: "1 action",
    school: "Abjuration",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 256
      }
    ]
  },
  {
    name: "Mage Hand",
    description: [
      "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.",
      "You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.",
      "The hand can't attack, activate magic items, or carry more than 10 pounds."
    ],
    higherLevel: [],
    range: "30 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "1 minute",
    castingTime: "1 action",
    school: "Conjuration",
    level: 0,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 256
      }
    ]
  },
  {
    name: "Magic Circle",
    description: [
      "Choose one or more of the following types of creatures: celestials, elementals, fey, fiends, or undead. The circle affects a creature of the chosen type in the following ways:",
      "- The creature can't willingly enter the cylinder by nonmagical means. If the creature tries to use teleportation or interplanar travel to do so, it must first succeed on a charisma saving throw.",
      "- The creature has disadvantage on attack rolls against targets within the cylinder.",
      "- Targets within the cylinder can't be charmed, frightened, or possessed by the creature.",
      "When you cast this spell, you can elect to cause its magic to operate in the reverse direction, preventing a creature of the specified type from leaving the cylinder and protecting targets outside it."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 4th level or higher, the duration increases by 1 hour for each slot level above 3rd."
    ],
    range: "10 feet",
    material:
      "Holy water or powdered silver and iron worth at least 100 gp, which the spell consumes.",
    ritual: false,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 minute",
    school: "Abjuration",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 256
      }
    ]
  },
  {
    name: "Magic Jar",
    description: [
      "Your body falls into a catatonic state as your soul leaves it and enters the container you used for the spell's material component. While your soul inhabits the container, you are aware of your surroundings as if you were in the container's space. You can't move or use reactions. The only action you can take is to project your soul up to 100 feet out of the container, either returning to your living body (and ending the spell) or attempting to possess a humanoids body.",
      "You can attempt to possess any humanoid within 100 feet of you that you can see (creatures warded by a protection from evil and good or magic circle spell can't be possessed). The target must make a charisma saving throw. On a failure, your soul moves into the target's body, and the target's soul becomes trapped in the container. On a success, the target resists your efforts to possess it, and you can't attempt to possess it again for 24 hours.",
      "Once you possess a creature's body, you control it. Your game statistics are replaced by the statistics of the creature, though you retain your alignment and your Intelligence, Wisdom, and Charisma scores. You retain the benefit of your own class features. If the target has any class levels, you can't use any of its class features.",
      "Meanwhile, the possessed creature's soul can perceive from the container using its own senses, but it can't move or take actions at all.",
      "While possessing a body, you can use your action to return from the host body to the container if it is within 100 feet of you, returning the host creature's soul to its body. If the host body dies while you're in it, the creature dies, and you must make a charisma saving throw against your own spellcasting DC. On a success, you return to the container if it is within 100 feet of you. Otherwise, you die.",
      "If the container is destroyed or the spell ends, your soul immediately returns to your body. If your body is more than 100 feet away from you or if your body is dead when you attempt to return to it, you die. If another creature's soul is in the container when it is destroyed, the creature's soul returns to its body if the body is alive and within 100 feet. Otherwise, that creature dies.",
      "When the spell ends, the container is destroyed."
    ],
    higherLevel: [],
    range: "Self",
    material:
      "A gem, crystal, reliquary, or some other ornamental container worth at least 500 gp.",
    ritual: false,
    concentration: false,
    duration: "Until dispelled",
    castingTime: "1 minute",
    school: "Necromancy",
    level: 6,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 257
      }
    ]
  },
  {
    name: "Magic Missile",
    description: [
      "You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st."
    ],
    range: "120 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 1,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 257
      }
    ]
  },
  {
    name: "Magic Mouth",
    description: [
      "You plant a message to an object in the range of the spell. The message is verbalized when the trigger conditions are met. Choose an object that you see, and that is not worn or carried by another creature. Then say the message, which should not exceed 25 words but listening can take up to 10 minutes. Finally, establish the circumstances that trigger the spell to deliver your message.",
      "When these conditions are satisfied, a magical mouth appears on the object and it articulates the message imitating your voice, the same tone used during implantation of the message. If the selected object has a mouth or something that approaches such as the mouth of a statue, the magic mouth come alive at this point, giving the illusion that the words come from the mouth of the object.",
      "When you cast this spell, you may decide that the spell ends when the message is delivered or it can persist and repeat the message whenever circumstances occur.",
      "The triggering circumstance can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the object. For example, you could instruct the mouth to speak when any creature moves within 30 feet of the object or when a silver bell rings within 30 feet of it."
    ],
    higherLevel: [],
    range: "30 feet",
    material:
      "A honeycomb and jade dust of at least 10 inches, the spell consumes.",
    ritual: true,
    concentration: false,
    duration: "Until dispelled",
    castingTime: "1 minute",
    school: "Illusion",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 257
      }
    ]
  },
  {
    name: "Magic Weapon",
    description: [
      "You touch a nonmagical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus to attack rolls and damage rolls."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 4th level or higher, the bonus increases to +2. When you use a spell slot of 6th level or higher, the bonus increases to +3."
    ],
    range: "Touch",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 bonus action",
    school: "Transmutation",
    level: 2,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 257
      }
    ]
  },
  {
    name: "Magnificent Mansion",
    description: [
      "You conjure an extradimensional dwelling in range that lasts for the duration. You choose where its one entrance is located. The entrance shimmers faintly and is 5 feet wide and 10 feet tall. You and any creature you designate when you cast the spell can enter the extradimensional dwelling as long as the portal remains open. You can open or close the portal if you are within 30 feet of it. While closed, the portal is invisible.",
      "Beyond the portal is a magnificent foyer with numerous chambers beyond. The atmosphere is clean, fresh, and warm.",
      "You can create any floor plan you like, but the space can't exceed 50 cubes, each cube being 10 feet on each side. The place is furnished and decorated as you choose. It contains sufficient food to serve a nine course banquet for up to 100 people. A staff of 100 near-transparent servants attends all who enter. You decide the visual appearance of these servants and their attire. They are completely obedient to your orders. Each servant can perform any task a normal human servant could perform, but they can't attack or take any action that would directly harm another creature. Thus the servants can fetch things, clean, mend, fold clothes, light fires, serve food, pour wine, and so on. The servants can go anywhere in the mansion but can't leave it. Furnishings and other objects created by this spell dissipate into smoke if removed from the mansion. When the spell ends, any creatures inside the extradimensional space are expelled into the open spaces nearest to the entrance."
    ],
    higherLevel: [],
    range: "300 feet",
    material:
      "A miniature portal carved from ivory, a small piece of polished marble, and a tiny silver spoon, each item worth at least 5 gp.",
    ritual: false,
    concentration: false,
    duration: "24 hours",
    castingTime: "1 minute",
    school: "Conjuration",
    level: 7,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 261
      }
    ]
  },
  {
    name: "Major Image",
    description: [
      "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-foot cube. The image appears at a spot that you can see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted. You can't create sufficient heat or cold to cause damage, a sound loud enough to deal thunder damage or deafen a creature, or a smell that might sicken a creature (like a troglodyte's stench).",
      "As long as you are within range of the illusion, you can use your action to cause the image to move to any other spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Similarly, you can cause the illusion to make different sounds at different times, even making it carry on a conversation, for example.",
      "Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 6th level or higher, the spell lasts until dispelled, without requiring your concentration."
    ],
    range: "120 feet",
    material: "A bit of fleece.",
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Illusion",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 258
      }
    ]
  },
  {
    name: "Mass Cure Wounds",
    description: [
      "A wave of healing energy washes out from a point of your choice within range. Choose up to six creatures in a 30-foot-radius sphere centered on that point. Each target regains hit points equal to 3d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 6th level or higher, the healing increases by 1d8 for each slot level above 5th."
    ],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Conjuration",
    level: 5,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 258
      }
    ]
  },
  {
    name: "Mass Heal",
    description: [
      "A flood of healing energy flows from you into injured creatures around you. You restore up to 700 hit points, divided as you choose among any number of creatures that you can see within range. Creatures healed by this spell are also cured of all diseases and any effect making them blinded or deafened. This spell has no effect on undead or constructs."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Conjuration",
    level: 9,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 258
      }
    ]
  },
  {
    name: "Mass Healing Word",
    description: [
      "As you call out words of restoration, up to six creatures of your choice that you can see within range regain hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 4th level or higher, the healing increases by 1d4 for each slot level above 3rd."
    ],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 bonus action",
    school: "Evocation",
    level: 3,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 258
      }
    ]
  },
  {
    name: "Mass Suggestion",
    description: [
      "You suggest a course of activity (limited to a sentence or two) and magically influence up to twelve creatures of your choice that you can see within range and that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act automatically negates the effect of the spell.",
      "Each target must make a wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.",
      "You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a group of soldiers give all their money to the first beggar they meet. If the condition isn't met before the spell ends, the activity isn't performed.",
      "If you or any of your companions damage a creature affected by this spell, the spell ends for that creature."
    ],
    higherLevel: [
      "When you cast this spell using a 7th-level spell slot, the duration is 10 days. When you use an 8th-level spell slot, the duration is 30 days. When you use a 9th-level spell slot, the duration is a year and a day."
    ],
    range: "60 feet",
    material:
      "A snake's tongue and either a bit of honeycomb or a drop of sweet oil.",
    ritual: false,
    concentration: false,
    duration: "24 hours",
    castingTime: "1 action",
    school: "Enchantment",
    level: 6,
    components: ["V", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 258
      }
    ]
  },
  {
    name: "Maze",
    description: [
      "You banish a creature that you can see within range into a labyrinthine demiplane. The target remains there for the duration or until it escapes the maze.",
      "The target can use its action to attempt to escape. When it does so, it makes a DC 20 Intelligence check. If it succeeds, it escapes, and the spell ends (a minotaur or goristro demon automatically succeeds).",
      "When the spell ends, the target reappears in the space it left or, if that space is occupied, in the nearest unoccupied space."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Conjuration",
    level: 8,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 258
      }
    ]
  },
  {
    name: "Meld into Stone",
    description: [
      "You step into a stone object or surface large enough to fully contain your body, melding yourself and all the equipment you carry with the stone for the duration. Using your movement, you step into the stone at a point you can touch. Nothing of your presence remains visible or otherwise detectable by nonmagical senses.",
      "While merged with the stone, you can't see what occurs outside it, and any Wisdom (Perception) checks you make to hear sounds outside it are made with disadvantage. You remain aware of the passage of time and can cast spells on yourself while merged in the stone. You can use your movement to leave the stone where you entered it, which ends the spell. You otherwise can't move.",
      "Minor physical damage to the stone doesn't harm you, but its partial destruction or a change in its shape (to the extent that you no longer fit within it) expels you and deals 6d6 bludgeoning damage to you. The stone's complete destruction (or transmutation into a different substance) expels you and deals 50 bludgeoning damage to you. If expelled, you fall prone in an unoccupied space closest to where you first entered."
    ],
    higherLevel: [],
    range: "Touch",
    material: null,
    ritual: true,
    concentration: false,
    duration: "8 hours",
    castingTime: "1 action",
    school: "Transmutation",
    level: 3,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 259
      }
    ]
  },
  {
    name: "Mending",
    description: [
      "This spell repairs a single break or tear in an object you touch, such as a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no longer than 1 foot in any dimension, you mend it, leaving no trace of the former damage.",
      "This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object."
    ],
    higherLevel: [],
    range: "Touch",
    material: "Two lodestones.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 minute",
    school: "Transmutation",
    level: 0,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 259
      }
    ]
  },
  {
    name: "Message",
    description: [
      "You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.",
      "You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have to follow a straight line and can travel freely around corners or through openings."
    ],
    higherLevel: [],
    range: "120 feet",
    material: "A short piece of copper wire.",
    ritual: false,
    concentration: false,
    duration: "1 round",
    castingTime: "1 action",
    school: "Transmutation",
    level: 0,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 259
      }
    ]
  },
  {
    name: "Meteor Swarm",
    description: [
      "Blazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-foot-radius sphere centered on each point you choose must make a dexterity saving throw. The sphere spreads around corners. A creature takes 20d6 fire damage and 20d6 bludgeoning damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one fiery burst is affected only once.",
      "The spell damages objects in the area and ignites flammable objects that aren't being worn or carried."
    ],
    higherLevel: [],
    range: "1 mile",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 9,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 259
      }
    ]
  },
  {
    name: "Mind Blank",
    description: [
      "Until the spell ends, one willing creature you touch is immune to psychic damage, any effect that would sense its emotions or read its thoughts, divination spells, and the charmed condition. The spell even foils wish spells and spells or effects of similar power used to affect the target's mind or to gain information about the target."
    ],
    higherLevel: [],
    range: "Touch",
    material: null,
    ritual: false,
    concentration: false,
    duration: "24 hours",
    castingTime: "1 action",
    school: "Abjuration",
    level: 8,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 259
      }
    ]
  },
  {
    name: "Minor Illusion",
    description: [
      "You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.",
      "If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.",
      "If you create an image of an object-such as a chair, muddy footprints, or a small chest-it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.",
      "If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature."
    ],
    higherLevel: [],
    range: "30 feet",
    material: "A bit of fleece.",
    ritual: false,
    concentration: false,
    duration: "1 minute",
    castingTime: "1 action",
    school: "Illusion",
    level: 0,
    components: ["S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 260
      }
    ]
  },
  {
    name: "Mirage Arcane",
    description: [
      "You make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain. The terrain's general shape remains the same, however. Open fields or a road could be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road.",
      "Similarly, you can alter the appearance of structures, or add them where none are present. The spell doesn't disguise, conceal, or add creatures.",
      "The illusion includes audible, visual, tactile, and olfactory elements, so it can turn clear ground into difficult terrain (or vice versa) or otherwise impede movement through the area. Any piece of the illusory terrain (such as a rock or stick) that is removed from the spell's area disappears immediately.",
      "Creatures with truesight can see through the illusion to the terrain's true form; however, all other elements of the illusion remain, so while the creature is aware of the illusion's presence, the creature can still physically interact with the illusion."
    ],
    higherLevel: [],
    range: "Sight",
    material: null,
    ritual: false,
    concentration: false,
    duration: "10 days",
    castingTime: "10 minutes",
    school: "Illusion",
    level: 7,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 260
      }
    ]
  },
  {
    name: "Mirror Image",
    description: [
      "Three illusionary duplicates of yourself appear in your space. Until the end of the spell, duplicates move with you and imitate your actions, swapping their position so that it is impossible to determine which image is real. You can use your action to dispel the illusory duplicates.",
      "Whenever a creature is targeting you with an attack during the duration of the spell, roll 1d20 to determine if the attack does not target rather one of your duplicates.",
      "If you have three duplicates, you need 6 or more on your throw to lead the target of the attack to a duplicate. With two duplicates, you need 8 or more. With one duplicate, you need 11 or more.",
      "The CA of a duplicate is 10 + your Dexterity modifier. If an attack hits a duplicate, it is destroyed. A duplicate may be destroyed not just an attack on key. It ignores other damage and effects. The spell ends if the three duplicates are destroyed.",
      "A creature is unaffected by this fate if she can not see if it relies on a different meaning as vision, such as blind vision, or if it can perceive illusions as false, as with clear vision."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: false,
    concentration: false,
    duration: "1 minute",
    castingTime: "1 action",
    school: "Illusion",
    level: 2,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 260
      }
    ]
  },
  {
    name: "Mislead",
    description: [
      "You become invisible at the same time that an illusory double of you appears where you are standing. The double lasts for the duration, but the invisibility ends if you attack or cast a spell.",
      "You can use your action to move your illusory double up to twice your speed and make it gesture, speak, and behave in whatever way you choose.",
      "You can see through its eyes and hear through its ears as if you were located where it is. On each of your turns as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are blinded and deafened in regard to your own surroundings."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 action",
    school: "Illusion",
    level: 5,
    components: ["S"],
    page: [
      {
        book: "phb",
        pageNumber: 260
      }
    ]
  },
  {
    name: "Misty Step",
    description: [
      "Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 bonus action",
    school: "Conjuration",
    level: 2,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 260
      }
    ]
  },
  {
    name: "Modify Memory",
    description: [
      "You attempt to reshape another creature's memories. One creature that you can see must make a wisdom saving throw. If you are fighting the creature, it has advantage on the saving throw. On a failed save, the target becomes charmed by you for the duration. The charmed target is incapacitated and unaware of its surroundings, though it can still hear you. If it takes any damage or is targeted by another spell, this spell ends, and none of the target's memories are modified.",
      "While this charm lasts, you can affect the target's memory of an event that it experienced within the last 24 hours and that lasted no more than 10 minutes. You can permanently eliminate all memory of the event, allow the target to recall the event with perfect clarity and exacting detail, change its memory of the details of the event, or create a memory of some other event.",
      "You must speak to the target to describe how its memories are affected, and it must be able to understand your language for the modified memories to take root. Its mind fills in any gaps in the details of your description. If the spell ends before you have finished describing the modified memories, the creature's memory isn't altered. Otherwise, the modified memories take hold when the spell ends.",
      "A modified memory doesn't necessarily affect how a creature behaves, particularly if the memory contradicts the creature's natural inclinations, alignment, or beliefs. An illogical modified memory, such as implanting a memory of how much the creature enjoyed dousing itself in acid, is dismissed, perhaps as a bad dream. The DM might deem a modified memory too nonsensical to affect a creature in a significant manner.",
      "A remove curse or greater restoration spell cast on the target restores the creature's true memory."
    ],
    higherLevel: [
      "If you cast this spell using a spell slot of 6th level or higher, you can alter the target's memories of an event that took place up to 7 days ago (6th level), 30 days ago (7th level), 1 year ago (8th level), or any time in the creature's past (9th level)."
    ],
    range: "30 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Enchantment",
    level: 5,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 261
      }
    ]
  },
  {
    name: "Moonbeam",
    description: [
      "A silvery beam of pale light shines down in a 5-footradius, 40-foot-high cylinder centered on a point within range. Until the spell ends, dim light fills the cylinder.",
      "When a creature enters the spell's area for the first time on a turn or starts its turn there, it is engulfed in ghostly flames that cause searing pain, and it must make a constitution saving throw. It takes 2d10 radiant damage on a failed save, or half as much damage on a successful one.",
      "A shapechanger makes its saving throw with disadvantage. If it fails, it also instantly reverts to its original form and can't assume a different form until it leaves the spell's light.",
      "On each of your turns after you cast this spell, you can use an action to move the beam 60 feet in any direction."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1dlO for each slot level above 2nd."
    ],
    range: "120 feet",
    material:
      "Several seeds of any moonseed plant and a piece of opalescent feldspar.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Evocation",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 261
      }
    ]
  },
  {
    name: "Move Earth",
    description: [
      "Choose an area of terrain no larger than 40 feet on a side within range. You can reshape dirt, sand, or clay in the area in any manner you choose for the duration. You can raise or lower the area's elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can't exceed half the area's largest dimension. So, if you affect a 40-foot square, you can create a pillar up to 20 feet high, raise or lower the square's elevation by up to 20 feet, dig a trench up to 20 feet deep, and so on. It takes 10 minutes for these changes to complete.",
      "At the end of every 10 minutes you spend concentrating on the spell, you can choose a new area of terrain to affect.",
      "Because the terrain's transformation occurs slowly, creatures in the area can't usually be trapped or injured by the ground's movement.",
      "This spell can't manipulate natural stone or stone construction. Rocks and structures shift to accommodate the new terrain. If the way you shape the terrain would make a structure unstable, it might collapse.",
      "Similarly, this spell doesn't directly affect plant growth. The moved earth carries any plants along with it."
    ],
    higherLevel: [],
    range: "120 feet",
    material:
      "An iron blade and a small bag containing a mixture of soils-clay, loam, and sand.",
    ritual: false,
    concentration: true,
    duration: "Up to 2 hours",
    castingTime: "1 action",
    school: "Transmutation",
    level: 6,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 263
      }
    ]
  },
  {
    name: "Nondetection",
    description: [
      "For the duration, you hide a target that you touch from divination magic. The target can be a willing creature or a place or an object no larger than 10 feet in any dimension. The target can't be targeted by any divination magic or perceived through magical scrying sensors."
    ],
    higherLevel: [],
    range: "Touch",
    material:
      "A pinch of diamond dust worth 25 gp sprinkled over the target, which the spell consumes.",
    ritual: false,
    concentration: false,
    duration: "8 hours",
    castingTime: "1 action",
    school: "Abjuration",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 263
      }
    ]
  },
  {
    name: "Pass without Trace",
    description: [
      "A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can't be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage."
    ],
    higherLevel: [],
    range: "Self",
    material: "Ashes from a burned leaf of mistletoe and a sprig of spruce.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 action",
    school: "Abjuration",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 264
      }
    ]
  },
  {
    name: "Passwall",
    description: [
      "A passage appears at a point of your choice that you can see on a wooden, plaster, or stone surface (such as a wall, a ceiling, or a floor) within range, and lasts for the duration. You choose the opening's dimensions: up to 5 feet wide, 8 feet tall, and 20 feet deep. The passage creates no instability in a structure surrounding it.",
      "When the opening disappears, any creatures or objects still in the passage created by the spell are safely ejected to an unoccupied space nearest to the surface on which you cast the spell."
    ],
    higherLevel: [],
    range: "30 feet",
    material: "A pinch of sesame seeds.",
    ritual: false,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Transmutation",
    level: 5,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 264
      }
    ]
  },
  {
    name: "Phantasmal Killer",
    description: [
      "You tap into the nightmares of a creature you can see within range and create an illusory manifestation of its deepest fears, visible only to that creature. The target must make a wisdom saving throw. On a failed save, the target becomes frightened for the duration. At the start of each of the target's turns before the spell ends, the target must succeed on a wisdom saving throw or take 4 d10 psychic damage. On a successful save, the spell ends."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1dlO for each slot level above 4th."
    ],
    range: "120 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Illusion",
    level: 4,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 265
      }
    ]
  },
  {
    name: "Phantom Steed",
    description: [
      "A Large quasi-real, horselike creature appears on the ground in an unoccupied space of your choice within range. You decide the creature's appearance, but it is equipped with a saddle, bit, and bridle. Any of the equipment created by the spell vanishes in a puff of smoke if it is carried more than 10 feet away from the steed.",
      "For the duration, you or a creature you choose can ride the steed. The creature uses the statistics for a riding horse, except it has a speed of 100 feet and can travel 10 miles in an hour, or 13 miles at a fast pace. When the spell ends, the steed gradually fades, giving the rider 1 minute to dismount. The spell ends if you use an action to dismiss it or if the steed takes any damage."
    ],
    higherLevel: [],
    range: "30 feet",
    material: null,
    ritual: true,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 minute",
    school: "Illusion",
    level: 3,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 265
      }
    ]
  },
  {
    name: "Planar Ally",
    description: [
      "You beseech an otherworldly entity for aid. The being must be known to you: a god, a primordial, a demon prince, or some other being of cosmic power. That entity sends a celestial, an elemental, or a fiend loyal to it to aid you, making the creature appear in an unoccupied space within range. If you know a specific creature's name, you can speak that name when you cast this spell to request that creature, though you might get a different creature anyway (DM's choice).",
      "When the creature appears, it is under no compulsion to behave in any particular way. You can ask the creature to perform a service in exchange for payment, but it isn't obliged to do so. The requested task could range from simple (fly us across the chasm, or help us fight a battle) to complex (spy on our enemies, or protect us during our foray into the dungeon). You must be able to communicate with the creature to bargain for its services.",
      "Payment can take a variety of forms. A celestial might require a sizable donation of gold or magic items to an allied temple, while a fiend might demand a living sacrifice or a gift of treasure. Some creatures might exchange their service for a quest undertaken by you.",
      "As a rule of thumb, a task that can be measured in minutes requires a payment worth 100 gp per minute. A task measured in hours requires 1,000 gp per hour. And a task measured in days (up to 10 days) requires 10,000 gp per day. The DM can adjust these payments based on the circumstances under which you cast the spell. If the task is aligned with the creature's ethos, the payment might be halved or even waived. Nonhazardous tasks typically require only half the suggested payment, while especially dangerous tasks might require a greater gift. Creatures rarely accept tasks that seem suicidal.",
      "After the creature completes the task, or when the agreed-upon duration of service expires, the creature returns to its home plane after reporting back to you, if appropriate to the task and if possible. If you are unable to agree on a price for the creature's service, the creature immediately returns to its home plane.",
      "A creature enlisted to join your group counts as a member of it, receiving a full share of experience points awarded."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "10 minutes",
    school: "Conjuration",
    level: 6,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 265
      }
    ]
  },
  {
    name: "Planar Binding",
    description: [
      "With this spell, you attempt to bind a celestial, an elemental, a fey, or a fiend to your service. The creature must be within range for the entire casting of the spell. (Typically, the creature is first summoned into the center of an inverted magic circle in order to keep it trapped while this spell is cast.) At the completion of the casting, the target must make a charisma saving throw. On a failed save, it is bound to serve you for the duration. If the creature was summoned or created by another spell, that spell's duration is extended to match the duration of this spell.",
      "A bound creature must follow your instructions to the best of its ability. You might command the creature to accompany you on an adventure, to guard a location, or to deliver a message. The creature obeys the letter of your instructions, but if the creature is hostile to you, it strives to twist your words to achieve its own objectives. If the creature carries out your instructions completely before the spell ends, it travels to you to report this fact if you are on the same plane of existence. If you are on a different plane of existence, it returns to the place where you bound it and remains there until the spell ends."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of a higher level, the duration increases to 10 days with a 6th-level slot, to 30 days with a 7th-level slot, to 180 days with an 8th-level slot, and to a year and a day with a 9th-level spell slot."
    ],
    range: "60 feet",
    material: "A jewel worth at least 1,000 gp, which the spell consumes.",
    ritual: false,
    concentration: false,
    duration: "24 hours",
    castingTime: "1 hour",
    school: "Abjuration",
    level: 5,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 265
      }
    ]
  },
  {
    name: "Plane Shift",
    description: [
      "You and up to eight willing creatures who link hands in a circle are transported to a different plane of existence. You can specify a target destination in general terms, such as the City of Brass on the Elemental Plane of Fire or the palace of Dispater on the second level of the Nine Hells, and you appear in or near that destination. If you are trying to reach the City of Brass, for example, you might arrive in its Street of Steel, before its Gate of Ashes, or looking at the city from across the Sea of Fire, at the DM's discretion.",
      "Alternatively, if you know the sigil sequence of a teleportation circle on another plane of existence, this spell can take you to that circle. If the teleportation circle is too small to hold all the creatures you transported, they appear in the closest unoccupied spaces next to the circle.",
      "You can use this spell to banish an unwilling creature to another plane. Choose a creature within your reach and make a melee spell attack against it. On a hit, the creature must make a charisma saving throw. If the creature fails this save, it is transported to a random location on the plane of existence you specify. A creature so transported must find its own way back to your current plane of existence."
    ],
    higherLevel: [],
    range: "Touch",
    material:
      "A forked, metal rod worth at least 250 gp, attuned to a particular plane of existence.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Conjuration",
    level: 7,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 266
      }
    ]
  },
  {
    name: "Plant Growth",
    description: [
      "This spell channels vitality into plants within a specific area. There are two possible uses for the spell, granting either immediate or long-term benefits.",
      "If you cast this spell using 1 action, choose a point within range. All normal plants in a 100-foot radius centered on that point become thick and overgrown. A creature moving through the area must spend 4 feet of movement for every 1 foot it moves.",
      "You can exclude one or more areas of any size within the spell's area from being affected.",
      "If you cast this spell over 8 hours, you enrich the land. All plants in a half-mile radius centered on a point within range become enriched for 1 year. The plants yield twice the normal amount of food when harvested."
    ],
    higherLevel: [],
    range: "150 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Transmutation",
    level: 3,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 266
      }
    ]
  },
  {
    name: "Poison Spray",
    description: [
      "You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a constitution saving throw or take 1d12 poison damage.",
      "This spell’s damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12)."
    ],
    higherLevel: [],
    range: "10 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Conjuration",
    level: 0,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 266
      }
    ]
  },
  {
    name: "Polymorph",
    description: [
      "This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a wisdom saving throw to avoid the effect. A shapechanger automatically succeeds on this saving throw.",
      "The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast whose challenge rating is equal to or less than the target's (or the target's level, if it doesn't have a challenge rating). The target's game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality.",
      "The target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious.",
      "The creature is limited in the actions it can perform by the nature of its new form, and it can't speak, cast spells, or take any other action that requires hands or speech.",
      "The target's gear melds into the new form. The creature can't activate, use, wield, or otherwise benefit from any of its equipment."
    ],
    higherLevel: [],
    range: "60 feet",
    material: "A caterpillar cocoon.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 action",
    school: "Transmutation",
    level: 4,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 266
      }
    ]
  },
  {
    name: "Power Word Kill",
    description: [
      "You utter a word of power that can compel one creature you can see within range to die instantly. If the creature you choose has 100 hit points or fewer, it dies. Otherwise, the spell has no effect."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Enchantment",
    level: 9,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 266
      }
    ]
  },
  {
    name: "Power Word Stun",
    description: [
      "You speak a word of power that can overwhelm the mind of one creature you can see within range, leaving it dumbfounded. If the target has 150 hit points or fewer, it is stunned. Otherwise, the spell has no effect.",
      "The stunned target must make a constitution saving throw at the end of each of its turns. On a successful save, this stunning effect ends."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Enchantment",
    level: 8,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 267
      }
    ]
  },
  {
    name: "Prayer of Healing",
    description: [
      "Up to six creatures of your choice that you can see within range each regain hit points equal to 2d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 3rd level or higher, the healing increases by 1d8 for each slot level above 2nd."
    ],
    range: "30 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "10 minutes",
    school: "Evocation",
    level: 2,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 267
      }
    ]
  },
  {
    name: "Prestidigitation",
    description: [
      "This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within 'range':",
      "You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.",
      "You instantaneously light or snuff out a candle, a torch, or a small campfire.",
      "You instantaneously clean or soil an object no larger than 1 cubic foot.",
      "You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.",
      "You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.",
      "You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn.",
      "If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
    ],
    higherLevel: [],
    range: "10 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Transmutation",
    level: 0,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 267
      }
    ]
  },
  {
    name: "Prismatic Spray",
    description: [
      "Eight multicolored rays of light flash from your hand. Each ray is a different color and has a different power and purpose. Each creature in a 60-foot cone must make a dexterity saving throw. For each target, roll a d8 to determine which color ray affects it.",
      "1. Red.",
      " The target takes 10d6 fire damage on a failed save, or half as much damage on a successful one.",
      "2. Orange.",
      " The target takes 10d6 acid damage on a failed save, or half as much damage on a successful one.",
      "3. Yellow.",
      " The target takes 10d6 lightning damage on a failed save, or half as much damage on a successful one.",
      "4. Green.",
      " The target takes 10d6 poison damage on a failed save, or half as much damage on a successful one.",
      "5. Blue.",
      " The target takes 10d6 cold damage on a failed save, or half as much damage on a successful one.",
      "6. Indigo.",
      " On a failed save, the target is restrained. It must then make a constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrified condition. The successes and failures don't need to be consecutive; keep track of both until the target collects three of a kind.",
      "7. Violet.",
      " On a failed save, the target is blinded. It must then make a wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of existence of the DM's choosing and is no longer blinded. (Typically, a creature that is on a plane that isn't its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.)",
      "8. Special.",
      " The target is struck by two rays. Roll twice more, rerolling any 8."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 7,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 267
      }
    ]
  },
  {
    name: "Prismatic Wall",
    description: [
      "A shimmering, multicolored plane of light forms a vertical opaque wall-up to 90 feet long, 30 feet high, and 1 inch thick-centered on a point you can see within range. Alternatively, you can shape the wall into a sphere up to 30 feet in diameter centered on a point you choose within range. The wall remains in place for the duration. If you position the wall so that it passes through a space occupied by a creature, the spell fails, and your action and the spell slot are wasted.",
      "The wall sheds bright light out to a range of 100 feet and dim light for an additional 100 feet. You and creatures you designate at the time you cast the spell can pass through and remain near the wall without harm. If another creature that can see the wall moves to within 20 feet of it or starts its turn there, the creature must succeed on a constitution saving throw or become blinded for 1 minute.",
      "The wall consists of seven layers, each with a different color. When a creature attempts to reach into or pass through the wall, it does so one layer at a time through all the wall's layers. As it passes or reaches through each layer, the creature must make a dexterity saving throw or be affected by that layer's properties as described below.",
      "The wall can be destroyed, also one layer at a time, in order from red to violet, by means specific to each layer. Once a layer is destroyed, it remains so for the duration of the spell. A rod of cancellation destroys a prismatic wall, but an antimagic field has no effect on it.",
      "1. Red.",
      " The creature takes 10d6 fire damage on a failed save, or half as much damage on a successful one. While this layer is in place, nonmagical ranged attacks can't pass through the wall. The layer can be destroyed by dealing at least 25 cold damage to it.",
      "2. Orange.",
      " The creature takes 10d6 acid damage on a failed save, or half as much damage on a successful one. While this layer is in place, magical ranged attacks can't pass through the wall. The layer is destroyed by a strong wind.",
      "3. Yellow.",
      " The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 60 force damage to it.",
      "4. Green.",
      " The creature takes 10d6 poison damage on a failed save, or half as much damage on a successful one. A passwall spell, or another spell of equal or greater level that can open a portal on a solid surface, destroys this layer.",
      "5. Blue.",
      " The creature takes 10d6 cold damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 25 fire damage to it.",
      "6. Indigo.",
      " On a failed save, the creature is restrained. It must then make a constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrified condition. The successes and failures don't need to be consecutive; keep track of both until the creature collects three of a kind.",
      "While this layer is in place, spells can't be cast through the wall. The layer is destroyed by bright light shed by a daylight spell or a similar spell of equal or higher level.",
      "7. Violet.",
      " On a failed save, the creature is blinded. It must then make a wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of the DM's choosing and is no longer blinded. (Typically, a creature that is on a plane that isn't its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.) This layer is destroyed by a dispel magic spell or a similar spell of equal or higher level that can end spells and magical effects."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "10 minutes",
    castingTime: "1 action",
    school: "Abjuration",
    level: 9,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 267
      }
    ]
  },
  {
    name: "Private Sanctum",
    description: [
      "You make an area within range magically secure. The area is a cube that can be as small as 5 feet to as large as 100 feet on each side. The spell lasts for the duration or until you use an action to dismiss it.",
      "When you cast the spell, you decide what sort of security the spell provides, choosing any or all of the following properties:",
      "- Sound can't pass through the barrier at the edge of the warded area.",
      "- The barrier of the warded area appears dark and foggy, preventing vision (including darkvision) through it.",
      "- Sensors created by divination spells can't appear inside the protected area or pass through the barrier at its perimeter.",
      "- Creatures in the area can't be targeted by divination spells.",
      "- Nothing can teleport into or out of the warded area.",
      "- Planar travel is blocked within the warded area.",
      "Casting this spell on the same spot every day for a year makes this effect permanent."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 5th level or higher, you can increase the size of the cube by 100 feet for each slot level beyond 4th. Thus you could protect a cube that can be up to 200 feet on one side by using a spell slot of 5th level."
    ],
    range: "120 feet",
    material:
      "A thin sheet of lead, a piece of opaque glass, a wad of cotton or cloth, and powdered chrysolite.",
    ritual: false,
    concentration: false,
    duration: "24 hours",
    castingTime: "10 minutes",
    school: "Abjuration",
    level: 4,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 262
      }
    ]
  },
  {
    name: "Produce Flame",
    description: [
      "A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again.",
      "You can also attack with the flame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 fire damage.",
      "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: false,
    concentration: false,
    duration: "10 minutes",
    castingTime: "1 action",
    school: "Conjuration",
    level: 0,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 269
      }
    ]
  },
  {
    name: "Programmed Illusion",
    description: [
      "You create an illusion of an object, a creature, or some other visible phenomenon within range that activates when a specific condition occurs. The illusion is imperceptible until then. It must be no larger than a 30-foot cube, and you decide when you cast the spell how the illusion behaves and what sounds it makes. This scripted performance can last up to 5 minutes.",
      "When the condition you specify occurs, the illusion springs into existence and performs in the manner you described. Once the illusion finishes performing, it disappears and remains dormant for 10 minutes. After this time, the illusion can be activated again.",
      "The triggering condition can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the area. For example, you could create an illusion of yourself to appear and warn off others who attempt to open a trapped door, or you could set the illusion to trigger only when a creature says the correct word or phrase.",
      "Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature."
    ],
    higherLevel: [],
    range: "120 feet",
    material: "A bit of fleece and jade dust worth at least 25 gp.",
    ritual: false,
    concentration: false,
    duration: "Until dispelled",
    castingTime: "1 action",
    school: "Illusion",
    level: 6,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 269
      }
    ]
  },
  {
    name: "Project Image",
    description: [
      "You create an illusory copy of yourself that lasts for the duration. The copy can appear at any location within range that you have seen before, regardless of intervening obstacles. The illusion looks and sounds like you but is intangible. If the illusion takes any damage, it disappears, and the spell ends.",
      "You can use your action to move this illusion up to twice your speed, and make it gesture, speak, and behave in whatever way you choose. It mimics your mannerisms perfectly.",
      "You can see through its eyes and hear through its ears as if you were in its space. On your turn as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are blinded and deafened in regard to your own surroundings.",
      "Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature."
    ],
    higherLevel: [],
    range: "500 miles",
    material: "A small replica of you made from materials worth at least 5 gp.",
    ritual: false,
    concentration: true,
    duration: "Up to 24 hours",
    castingTime: "1 action",
    school: "Illusion",
    level: 7,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 270
      }
    ]
  },
  {
    name: "Protection from Energy",
    description: [
      "For the duration, the willing creature you touch has resistance to one damage type of your choice: acid, cold, fire, lightning, or thunder."
    ],
    higherLevel: [],
    range: "Touch",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 action",
    school: "Abjuration",
    level: 3,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 270
      }
    ]
  },
  {
    name: "Protection from Evil and Good",
    description: [
      "Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead.",
      "The protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can't be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect."
    ],
    higherLevel: [],
    range: "Touch",
    material:
      "Holy water or powdered silver and iron, which the spell consumes.",
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Abjuration",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 270
      }
    ]
  },
  {
    name: "Protection from Poison",
    description: [
      "You touch a creature. If it is poisoned, you neutralize the poison. If more than one poison afflicts the target, you neutralize one poison that you know is present, or you neutralize one at random.",
      "For the duration, the target has advantage on saving throws against being poisoned, and it has resistance to poison damage."
    ],
    higherLevel: [],
    range: "Touch",
    material: null,
    ritual: false,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Abjuration",
    level: 2,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 270
      }
    ]
  },
  {
    name: "Purify Food and Drink",
    description: [
      "All nonmagical food and drink within a 5-foot radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease."
    ],
    higherLevel: [],
    range: "10 feet",
    material: null,
    ritual: true,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Transmutation",
    level: 1,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 270
      }
    ]
  },
  {
    name: "Raise Dead",
    description: [
      "You return a dead creature you touch to life, provided that it has been dead no longer than 10 days. If the creature's soul is both willing and at liberty to rejoin the body, the creature returns to life with 1 hit point.",
      "This spell also neutralizes any poisons and cures nonmagical diseases that affected the creature at the time it died. This spell doesn't, however, remove magical diseases, curses, or similar effects; if these aren't first removed prior to casting the spell, they take effect when the creature returns to life. The spell can't return an undead creature to life.",
      "This spell closes all mortal wounds, but it doesn't restore missing body parts. If the creature is lacking body parts or organs integral for its survival-its head, for instance-the spell automatically fails.",
      "Coming back from the dead is an ordeal. The target takes a -4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears."
    ],
    higherLevel: [],
    range: "Touch",
    material: "A diamond worth at least 500gp, which the spell consumes.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 hour",
    school: "Necromancy",
    level: 5,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 270
      }
    ]
  },
  {
    name: "Ray of Enfeeblement",
    description: [
      "A black beam of enervating energy springs from your finger toward a creature within range. Make a ranged spell attack against the target. On a hit, the target deals only half damage with weapon attacks that use Strength until the spell ends.",
      "At the end of each of the target's turns, it can make a constitution saving throw against the spell. On a success, the spell ends."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Necromancy",
    level: 2,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 271
      }
    ]
  },
  {
    name: "Ray of Frost",
    description: [
      "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn.",
      "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 0,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 271
      }
    ]
  },
  {
    name: "Regenerate",
    description: [
      "You touch a creature and stimulate its natural healing ability. The target regains 4d8 + 15 hit points. For the duration of the spell, the target regains 1 hit point at the start of each of its turns (10 hit points each minute).",
      "The target's severed body members (fingers, legs, tails, and so on), if any, are restored after 2 minutes. If you have the severed part and hold it to the stump, the spell instantaneously causes the limb to knit to the stump."
    ],
    higherLevel: [],
    range: "Touch",
    material: "A prayer wheel and holy water.",
    ritual: false,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 minute",
    school: "Transmutation",
    level: 7,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 271
      }
    ]
  },
  {
    name: "Reincarnate",
    description: [
      "You touch a dead humanoid or a piece of a dead humanoid. Provided that the creature has been dead no longer than 10 days, the spell forms a new adult body for it and then calls the soul to enter that body. If the target's soul isn't free or willing to do so, the spell fails.",
      "The magic fashions a new body for the creature to inhabit, which likely causes the creature's race to change. The DM rolls a d 100 and consults the following table to determine what form the creature takes when restored to life, or the DM chooses a form.",
      "01-04",
      " Dragonborn",
      "05-13",
      " Dwarf, hill",
      "14-21",
      " Dwarf, mountain",
      "22-25",
      " Elf, dark",
      "26-34",
      " Elf, high",
      "35-42",
      " Elf, wood",
      "43-46",
      " Gnome, forest",
      "47-52",
      " Gnome, rock",
      "53-56",
      " Half-elf",
      "57-60",
      " Half-orc",
      "61-68",
      " Halfling, lightfoot",
      "69-76",
      " Halfling, stout",
      "77-96",
      " Human",
      "97-00",
      " Tiefling",
      "The reincarnated creature recalls its former life and experiences. It retains the capabilities it had in its original form, except it exchanges its original race for the new one and changes its racial traits accordingly."
    ],
    higherLevel: [],
    range: "Touch",
    material:
      "Rare oils and unguents worth at least 1,000 gp, which the spell consumes.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 hour",
    school: "Transmutation",
    level: 5,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 271
      }
    ]
  },
  {
    name: "Remove Curse",
    description: [
      "At your touch, all curses affecting one creature or object end. If the object is a cursed magic item, its curse remains, but the spell breaks its owner's attunement to the object so it can be removed or discarded."
    ],
    higherLevel: [],
    range: "Touch",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Abjuration",
    level: 3,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 271
      }
    ]
  },
  {
    name: "Resilient Sphere",
    description: [
      "A sphere of shimmering force encloses a creature or object of Large size or smaller within range. An unwilling creature must make a dexterity saving throw. On a failed save, the creature is enclosed for the duration.",
      "Nothing-not physical objects, energy, or other spell effects-can pass through the barrier, in or out, though a creature in the sphere can breathe there. The sphere is immune to all damage, and a creature or object inside can't be damaged by attacks or effects originating from outside, nor can a creature inside the sphere damage anything outside it.",
      "The sphere is weightless and just large enough to contain the creature or object inside. An enclosed creature can use its action to push against the sphere's walls and thus roll the sphere at up to half the creature's speed. Similarly, the globe can be picked up and moved by other creatures.",
      "A disintegrate spell targeting the globe destroys it without harming anything inside it."
    ],
    higherLevel: [],
    range: "30 feet",
    material:
      "A hemispherical piece of clear crystal and a matching hemispherical piece of gum arabic.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Evocation",
    level: 4,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 264
      }
    ]
  },
  {
    name: "Resistance",
    description: [
      "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after making the saving throw. The spell then ends."
    ],
    higherLevel: [],
    range: "Touch",
    material: "A miniature cloak.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Abjuration",
    level: 0,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 272
      }
    ]
  },
  {
    name: "Resurrection",
    description: [
      "You touch a dead creature that has been dead for no more than a century, that didn't die of old age, and that isn't undead. If its soul is free and willing, the target returns to life with all its hit points.",
      "This spell neutralizes any poisons and cures normal diseases afflicting the creature when it died. It doesn't, however, remove magical diseases, curses, and the like; if such effects aren't removed prior to casting the spell, they afflict the target on its return to life.",
      "This spell closes all mortal wounds and restores any missing body parts.",
      "Coming back from the dead is an ordeal. The target takes a -4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears.",
      "Casting this spell to restore life to a creature that has been dead for one year or longer taxes you greatly. Until you finish a long rest, you can't cast spells again, and you have disadvantage on all attack rolls, ability checks, and saving throws."
    ],
    higherLevel: [],
    range: "Touch",
    material: "A diamond worth at least 1,000gp, which the spell consumes.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 hour",
    school: "Necromancy",
    level: 7,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 272
      }
    ]
  },
  {
    name: "Reverse Gravity",
    description: [
      "This spell reverses gravity in a 50-foot-radius, 100-foot high cylinder centered on a point within range. All creatures and objects that aren't somehow anchored to the ground in the area fall upward and reach the top of the area when you cast this spell. A creature can make a dexterity saving throw to grab onto a fixed object it can reach, thus avoiding the fall.",
      "If some solid object (such as a ceiling) is encountered in this fall, falling objects and creatures strike it just as they would during a normal downward fall. If an object or creature reaches the top of the area without striking anything, it remains there, oscillating slightly, for the duration.",
      "At the end of the duration, affected objects and creatures fall back down."
    ],
    higherLevel: [],
    range: "100 feet",
    material: "A lodestone and iron filings.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Transmutation",
    level: 7,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 272
      }
    ]
  },
  {
    name: "Revivify",
    description: [
      "You touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell can't return to life a creature that has died of old age, nor can it restore any missing body parts."
    ],
    higherLevel: [],
    range: "Touch",
    material: "Diamonds worth 300gp, which the spell consumes.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Conjuration",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 272
      }
    ]
  },
  {
    name: "Rope Trick",
    description: [
      "You touch a length of rope that is up to 60 feet long. One end of the rope then rises into the air until the whole rope hangs perpendicular to the ground. At the upper end of the rope, an invisible entrance opens to an extradimensional space that lasts until the spell ends.",
      "The extradimensional space can be reached by climbing to the top of the rope. The space can hold as many as eight Medium or smaller creatures. The rope can be pulled into the space, making the rope disappear from view outside the space.",
      "Attacks and spells can't cross through the entrance into or out of the extradimensional space, but those inside can see out of it as if through a 3-foot-by-5-foot window centered on the rope.",
      "Anything inside the extradimensional space drops out when the spell ends."
    ],
    higherLevel: [],
    range: "Touch",
    material: "Powdered corn extract and a twisted loop of parchment.",
    ritual: false,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Transmutation",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 272
      }
    ]
  },
  {
    name: "Sacred Flame",
    description: [
      "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.",
      "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 0,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 272
      }
    ]
  },
  {
    name: "Sanctuary",
    description: [
      "You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from area effects, such as the explosion of a fireball.",
      "If the warded creature makes an attack or casts a spell that affects an enemy creature, this spell ends."
    ],
    higherLevel: [],
    range: "30 feet",
    material: "A small silver mirror.",
    ritual: false,
    concentration: false,
    duration: "1 minute",
    castingTime: "1 bonus action",
    school: "Abjuration",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 272
      }
    ]
  },
  {
    name: "Scorching Ray",
    description: [
      "You generate three rays of fire and will throw to targets in the range of the spell. You can project them on one or more targets.",
      "Perform a remote attack spell for each department. If it hits, the target takes 2d6 fire damage."
    ],
    higherLevel: [
      "When you cast this spell using a 3 or higher level spell slot, you generate an additional radius for each level of higher spell slot 2."
    ],
    range: "120 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 2,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 273
      }
    ]
  },
  {
    name: "Scrying",
    description: [
      "You can see and hear a particular creature you choose that is on the same plane of existence as you. The target must make a wisdom saving throw, which is modified by how well you know the target and the sort of physical connection you have to it. If a target knows you're casting this spell, it can fail the saving throw voluntarily if it wants to be observed.",
      "Knowledge &amp; Save Modifier",
      "",
      "Secondhand (you have heard of the target) +5",
      "Firsthand (you have met the target) +0",
      "Familiar (you know the target well) -5",
      "Connection &amp; Save Modifier",
      "",
      "Likeness or picture -2",
      "Possession or garment -4",
      "Body part, lock of hair, bit of nail, or the like -10",
      "On a successful save, the target isn't affected, and you can't use this spell against it again for 24 hours.",
      "On a failed save, the spell creates an invisible sensor within 10 feet of the target. You can see and hear through the sensor as if you were there. The sensor moves with the target, remaining within 10 feet of it for the duration. A creature that can see invisible objects sees the sensor as a luminous orb about the size of your fist.",
      "Instead of targeting a creature, you can choose a location you have seen before as the target of this spell. When you do, the sensor appears at that location and doesn't move."
    ],
    higherLevel: [],
    range: "Self",
    material:
      "A focus worth at least 1,000 gp, such as a crystal ball, a silver mirror, or a font filled with holy water.",
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "10 minutes",
    school: "Divination",
    level: 5,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 273
      }
    ]
  },
  {
    name: "Secret Chest",
    description: [
      "You hide a chest, and all its contents, on the Ethereal Plane. You must touch the chest and the miniature replica that serves as a material component for the spell. The chest can contain up to 12 cubic feet of nonliving material (3 feet by 2 feet by 2 feet).",
      "While the chest remains on the Ethereal Plane, you can use an action and touch the replica to recall the chest. It appears in an unoccupied space on the ground within 5 feet of you. You can send the chest back to the Ethereal Plane by using an action and touching both the chest and the replica.",
      "After 60 days, there is a cumulative 5 percent chance per day that the spell's effect ends. This effect ends if you cast this spell again, if the smaller replica chest is destroyed, or if you choose to end the spell as an action. If the spell ends and the larger chest is on the Ethereal Plane, it is irretrievably lost."
    ],
    higherLevel: [],
    range: "Touch",
    material:
      "An exquisite chest, 3 feet by 2 feet by 2 feet, constructed from rare materials worth at least 5,000 gp, and a Tiny replica made from the same materials worth at least 50 gp.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Conjuration",
    level: 4,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 254
      }
    ]
  },
  {
    name: "See Invisibility",
    description: [
      "For the duration of the spell, you see invisible creatures and objects as if they were visible, and you can see through Ethereal. The ethereal objects and creatures appear ghostly translucent."
    ],
    higherLevel: [],
    range: "Self",
    material: "A dash of talc and a small amount of silver powder.",
    ritual: false,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Divination",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 274
      }
    ]
  },
  {
    name: "Seeming",
    description: [
      "This spell allows you to change the appearance of any number of creatures that you can see within range. You give each target you choose a new, illusory appearance. An unwilling target can make a charisma saving throw, and if it succeeds, it is unaffected by this spell.",
      "The spell disguises physical appearance as well as clothing, armor, weapons, and equipment. You can make each creature seem 1 foot shorter or taller and appear thin, fat, or in between. You can't change a target's body type, so you must choose a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The spell lasts for the duration, unless you use your action to dismiss it sooner.",
      "The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to a creature's outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel the creature's head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.",
      "A creature can use its action to inspect a target and make an Intelligence (Investigation) check against your spell save DC. If it succeeds, it becomes aware that the target is disguised."
    ],
    higherLevel: [],
    range: "30 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "8 hours",
    castingTime: "1 action",
    school: "Illusion",
    level: 5,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 274
      }
    ]
  },
  {
    name: "Sending",
    description: [
      "You send a short message of twenty-five words or less to a creature with which you are familiar. The creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately. The spell enables creatures with Intelligence scores of at least 1 to understand the meaning of your message.",
      "You can send the message across any distance and even to other planes of existence, but if the target is on a different plane than you, there is a 5 percent chance that the message doesn't arrive."
    ],
    higherLevel: [],
    range: "Unlimited",
    material: "A short piece of fine copper wire.",
    ritual: false,
    concentration: false,
    duration: "1 round",
    castingTime: "1 action",
    school: "Evocation",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 274
      }
    ]
  },
  {
    name: "Sequester",
    description: [
      "By means of this spell, a willing creature or an object can be hidden away, safe from detection for the duration. When you cast the spell and touch the target, it becomes invisible and can't be targeted by divination spells or perceived through scrying sensors created by divination spells.",
      "If the target is a creature, it falls into a state of suspended animation. Time ceases to flow for it, and it doesn't grow older.",
      'You can set a condition for the spell to end early. The condition can be anything you choose, but it must occur or be visible within 1 mile of the target. Examples include "after 1,000 years" or "when the tarrasque awakens." This spell also ends if the target takes any damage.'
    ],
    higherLevel: [],
    range: "Touch",
    material:
      "A powder composed of diamond, emerald, ruby, and sapphire dust worth at least 5,000 gp, which the spell consumes.",
    ritual: false,
    concentration: false,
    duration: "Until dispelled",
    castingTime: "1 action",
    school: "Transmutation",
    level: 7,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 274
      }
    ]
  },
  {
    name: "Shapechange",
    description: [
      "You assume the form of a different creature for the duration. The new form can be of any creature with a challenge rating equal to your level or lower. The creature can't be a construct or an undead, and you must have seen the sort of creature at least once. You transform into an average example of that creature, one without any class levels or the Spellcasting trait.",
      "Your game statistics are replaced by the statistics of the chosen creature, though you retain your alignment and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus listed in its statistics is higher than yours, use the creature's bonus in place of yours. You can't use any legendary actions or lair actions of the new form.",
      "You assume the hit points and Hit Dice of the new form. When you revert to your normal form, you return to the number of hit points you had before you transformed. If you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
      "You retain the benefit of any features from your class, race, or other source and can use them, provided that your new form is physically capable of doing so. You can't use any special senses you have (for example, darkvision) unless your new form also has that sense. You can only speak if the creature can normally speak.",
      "When you transform, you choose whether your equipment falls to the ground, merges into the new form, or is worn by it. Worn equipment functions as normal. The DM determines whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change shape or size to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge into your new form. Equipment that merges has no effect in that state.",
      "During this spell's duration, you can use your action to assume a different form following the same restrictions and rules for the original form, with one exception: if your new form has more hit points than your current one, your hit points remain at their current value."
    ],
    higherLevel: [],
    range: "Self",
    material:
      "A jade circlet worth at least 1,500 gp, which you must place on your head before you cast the spell.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 action",
    school: "Transmutation",
    level: 9,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 274
      }
    ]
  },
  {
    name: "Shatter",
    description: [
      "A strong resonant sound painfully intense sounds of a desired point in the range of the spell. Each creature has a sphere with a 10-foot-radius sphere centered on that point must make a constitution saving throw or it suffers 3d8 thunder damage. If successful, the damage is halved. A creature made of inorganic materials such as stone, crystal or metal, makes its saving throw with a disadvantage.",
      "A non-magical item that is not worn or carried also suffers damage if it is in the area of the spell."
    ],
    higherLevel: [
      "When you cast this spell using a 3 or higher level spell slot, the damage of the spell increases by 1d8 for each level of higher spell slot 2."
    ],
    range: "60 feet",
    material: "A burst of mica.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 275
      }
    ]
  },
  {
    name: "Shield",
    description: [
      "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: false,
    concentration: false,
    duration: "1 round",
    castingTime: "1 reaction",
    school: "Abjuration",
    level: 1,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 275
      }
    ]
  },
  {
    name: "Shield of Faith",
    description: [
      "A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration."
    ],
    higherLevel: [],
    range: "60 feet",
    material: "A small parchment with a bit of holy text written on it.",
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 bonus action",
    school: "Abjuration",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 275
      }
    ]
  },
  {
    name: "Shillelagh",
    description: [
      "The wood of a club or a quarterstaff you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon."
    ],
    higherLevel: [],
    range: "Touch",
    material: "Mistletoe, a shamrock leaf, and a club or quarterstaff.",
    ritual: false,
    concentration: false,
    duration: "1 minute",
    castingTime: "1 bonus action",
    school: "Transmutation",
    level: 0,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 275
      }
    ]
  },
  {
    name: "Shocking Grasp",
    description: [
      "Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn.",
      "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
    ],
    higherLevel: [],
    range: "Touch",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 0,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 275
      }
    ]
  },
  {
    name: "Silence",
    description: [
      "For the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it.",
      "Casting a spell that includes a verbal component is impossible there."
    ],
    higherLevel: [],
    range: "120 feet",
    material: null,
    ritual: true,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Illusion",
    level: 2,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 275
      }
    ]
  },
  {
    name: "Silent Image",
    description: [
      "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn't accompanied by sound, smell, or other sensory effects.",
      "You can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.",
      "Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image."
    ],
    higherLevel: [],
    range: "60 feet",
    material: "A bit of fleece.",
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Illusion",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 276
      }
    ]
  },
  {
    name: "Simulacrum",
    description: [
      "You shape an illusory duplicate of one beast or humanoid that is within range for the entire casting time of the spell. The duplicate is a creature, partially real and formed from ice or snow, and it can take actions and otherwise be affected as a normal creature. It appears to be the same as the original, but it has half the creature's hit point maximum and is formed without any equipment. Otherwise, the illusion uses all the statistics of the creature it duplicates.",
      "The simulacrum is friendly to you and creatures you designate. It obeys your spoken commands, moving and acting in accordance with your wishes and acting on your turn in combat. The simulacrum lacks the ability to learn or become more powerful, so it never increases its level or other abilities, nor can it regain expended spell slots.",
      "If the simulacrum is damaged, you can repair it in an alchemical laboratory, using rare herbs and minerals worth 100 gp per hit point it regains. The simulacrum lasts until it drops to 0 hit points, at which point it reverts to snow and melts instantly.",
      "If you cast this spell again, any currently active duplicates you created with this spell are instantly destroyed."
    ],
    higherLevel: [],
    range: "Touch",
    material:
      "Snow or ice in quantities sufficient to made a life-size copy of the duplicated creature; some hair, fingernail clippings, or other piece of that creature's body placed inside the snow or ice; and powdered ruby worth 1,500 gp, sprinkled over the duplicate and consumed by the spell.",
    ritual: false,
    concentration: false,
    duration: "Until dispelled",
    castingTime: "12 hours",
    school: "Illusion",
    level: 7,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 276
      }
    ]
  },
  {
    name: "Sleep",
    description: [
      "This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures).",
      "Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.",
      "Undead and creatures immune to being charmed aren't affected by this spell."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st."
    ],
    range: "90 feet",
    material: "A pinch of fine sand, rose petals, or a cricket.",
    ritual: false,
    concentration: false,
    duration: "1 minute",
    castingTime: "1 action",
    school: "Enchantment",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 276
      }
    ]
  },
  {
    name: "Sleet Storm",
    description: [
      "Until the spell ends, freezing rain and sleet fall in a 20-foot-tall cylinder with a 40-foot radius centered on a point you choose within range. The area is heavily obscured, and exposed flames in the area are doused.",
      "The ground in the area is covered with slick ice, making it difficult terrain. When a creature enters the spell's area for the first time on a turn or starts its turn there, it must make a dexterity saving throw. On a failed save, it falls prone.",
      "If a creature is concentrating in the spell's area, the creature must make a successful constitution saving throw against your spell save DC or lose concentration."
    ],
    higherLevel: [],
    range: "150 feet",
    material: "A pinch of dust and a few drops of water.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Conjuration",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 276
      }
    ]
  },
  {
    name: "Slow",
    description: [
      "You alter time around up to six creatures of your choice in a 40-foot cube within range. Each target must succeed on a wisdom saving throw or be affected by this spell for the duration.",
      "An affected target's speed is halved, it takes a -2 penalty to AC and dexterity saving throws, and it can't use reactions. On its turn, it can use either an action or a bonus action, not both. Regardless of the creature's abilities or magic items, it can't make more than one melee or ranged attack during its turn.",
      "If the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or higher, the spell doesn't take effect until the creature's next turn, and the creature must use its action on that turn to complete the spell. If it can't, the spell is wasted.",
      "A creature affected by this spell makes another wisdom saving throw at the end of its turn. On a successful save, the effect ends for it."
    ],
    higherLevel: [],
    range: "120 feet",
    material: "A drop of molasses.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Transmutation",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 277
      }
    ]
  },
  {
    name: "Spare the Dying",
    description: [
      "You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs."
    ],
    higherLevel: [],
    range: "Touch",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Necromancy",
    level: 0,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 277
      }
    ]
  },
  {
    name: "Speak with Animals",
    description: [
      "You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at a minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM's discretion."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: true,
    concentration: false,
    duration: "10 minutes",
    castingTime: "1 action",
    school: "Divination",
    level: 1,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 277
      }
    ]
  },
  {
    name: "Speak with Dead",
    description: [
      "You grant the semblance of life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a mouth and can't be undead. The spell fails if the corpse was the target of this spell within the last 10 days.",
      "Until the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are hostile to it or it recognizes you as an enemy. This spell doesn't return the creature's soul to its body, only its animating spirit. Thus, the corpse can't learn new information, doesn't comprehend anything that has happened since it died, and can't speculate about future events."
    ],
    higherLevel: [],
    range: "10 feet",
    material: "Burning incense.",
    ritual: false,
    concentration: false,
    duration: "10 minutes",
    castingTime: "1 action",
    school: "Necromancy",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 277
      }
    ]
  },
  {
    name: "Speak with Plants",
    description: [
      "You imbue plants within 30 feet of you with limited sentience and animation, giving them the ability to communicate with you and follow your simple commands. You can question plants about events in the spell's area within the past day, gaining information about creatures that have passed, weather, and other circumstances.",
      "You can also turn difficult terrain caused by plant growth (such as thickets and undergrowth) into ordinary terrain that lasts for the duration. Or you can turn ordinary terrain where plants are present into difficult terrain that lasts for the duration, causing vines and branches to hinder pursuers, for example.",
      "Plants might be able to perform other tasks on your behalf, at the DM's discretion. The spell doesn't enable plants to uproot themselves and move about, but they can freely move branches, tendrils, and stalks.",
      "If a plant creature is in the area, you can communicate with it as if you shared a common language, but you gain no magical ability to influence it.",
      "This spell can cause the plants created by the entangle spell to release a restrained creature."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: false,
    concentration: false,
    duration: "10 minutes",
    castingTime: "1 action",
    school: "Transmutation",
    level: 3,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 277
      }
    ]
  },
  {
    name: "Spider Climb",
    description: [
      "Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free. The target also gains a climbing speed equal to its walking speed."
    ],
    higherLevel: [],
    range: "Touch",
    material: "A drop of bitumen and a spider.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 action",
    school: "Transmutation",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 277
      }
    ]
  },
  {
    name: "Spike Growth",
    description: [
      "The ground in a 20-foot radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels.",
      "The development of land is camouflaged to look natural. Any creature that does not see the area when the spell is spell casts must make a Wisdom (Perception) opposite the DD backup your fate or it does not recognize the dangerous nature of the ground before entering."
    ],
    higherLevel: [],
    range: "150 feet",
    material: "Seven sharp spines or seven twigs cut peak.",
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Transmutation",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 277
      }
    ]
  },
  {
    name: "Spirit Guardians",
    description: [
      "You call forth spirits to protect you. They flit around you to a distance of 15 feet for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish.",
      "When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. An affected creature's speed is halved in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a wisdom saving throw. On a failed save, the creature takes 3d8 radiant damage (if you are good or neutral) or 3d8 necrotic damage (if you are evil). On a successful save, the creature takes half as much damage."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd."
    ],
    range: "Self",
    material: "A holy symbol.",
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Conjuration",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 278
      }
    ]
  },
  {
    name: "Spiritual Weapon",
    description: [
      "You create a floating, spectral weapon within range that lasts for the duration or until you cast this spell again. When you cast the spell, you can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes force damage equal to 1d8 + your spellcasting ability modifier.",
      "As a bonus action on your turn, you can move the weapon up to 20 feet and repeat the attack against a creature within 5 feet of it.",
      "The weapon can take whatever form you choose. Clerics of deities who are associated with a particular weapon (as St. Cuthbert is known for his mace and Thor for his hammer) make this spell's effect resemble that weapon."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for every two slot levels above the 2nd."
    ],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "1 minute",
    castingTime: "1 bonus action",
    school: "Evocation",
    level: 2,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 278
      }
    ]
  },
  {
    name: "Stinking Cloud",
    description: [
      "You create a 20-foot-radius sphere of yellow, nauseating gas centered on a point within range. The cloud spreads around corners, and its area is heavily obscured. The cloud lingers in the air for the duration.",
      "Each creature that is completely within the cloud at the start of its turn must make a constitution saving throw against poison. On a failed save, the creature spends its action that turn retching and reeling. Creatures that don't need to breathe or are immune to poison automatically succeed on this saving throw.",
      "A moderate wind (at least 10 miles per hour) disperses the cloud after 4 rounds. A strong wind (at least 20 miles per hour) disperses it after 1 round."
    ],
    higherLevel: [],
    range: "90 feet",
    material: "A rotten egg or several skunk cabbage leaves.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Conjuration",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 278
      }
    ]
  },
  {
    name: "Stone Shape",
    description: [
      "You touch a stone object of Medium size or smaller or a section of stone no more than 5 feet in any dimension and form it into any shape that suits your purpose. So, for example, you could shape a large rock into a weapon, idol, or coffer, or make a small passage through a wall, as long as the wall is less than 5 feet thick. You could also shape a stone door or its frame to seal the door shut. The object you create can have up to two hinges and a latch, but finer mechanical detail isn't possible."
    ],
    higherLevel: [],
    range: "Touch",
    material:
      "Soft clay, to be crudely worked into the desired shape for the stone object.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Transmutation",
    level: 4,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 278
      }
    ]
  },
  {
    name: "Stoneskin",
    description: [
      "This spell turns the flesh of a willing creature you touch as hard as stone. Until the spell ends, the target has resistance to nonmagical bludgeoning, piercing, and slashing damage."
    ],
    higherLevel: [],
    range: "Touch",
    material: "Diamond dust worth 100 gp, which the spell consumes.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 action",
    school: "Abjuration",
    level: 4,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 278
      }
    ]
  },
  {
    name: "Storm of Vengeance",
    description: [
      "A churning storm cloud forms, centered on a point you can see and spreading to a radius of 360 feet. Lightning flashes in the area, thunder booms, and strong winds roar. Each creature under the cloud (no more than 5,000 feet beneath the cloud) when it appears must make a constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 5 minutes.",
      "Each round you maintain concentration on this spell, the storm produces additional effects on your turn.",
      "Round 2.",
      " Acidic rain falls from the cloud. Each creature and object under the cloud takes 1d6 acid damage.",
      "Round 3.",
      " You call six bolts of lightning from the cloud to strike six creatures or objects of your choice beneath the cloud. A given creature or object can't be struck by more than one bolt. A struck creature must make a dexterity saving throw. The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one.",
      "Round 4.",
      " Hailstones rain down from the cloud. Each creature under the cloud takes 2d6 bludgeoning damage.",
      "Round 5-10.",
      " Gusts and freezing rain assail the area under the cloud. The area becomes difficult terrain and is heavily obscured. Each creature there takes 1d6 cold damage. Ranged weapon attacks in the area are impossible. The wind and rain count as a severe distraction for the purposes of maintaining concentration on spells. Finally, gusts of strong wind (ranging from 20 to 50 miles per hour) automatically disperse fog, mists, and similar phenomena in the area, whether mundane or magical."
    ],
    higherLevel: [],
    range: "Sight",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Conjuration",
    level: 9,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 279
      }
    ]
  },
  {
    name: "Suggestion",
    description: [
      "You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell.",
      "The target must make a wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.",
      "You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a knight give her warhorse to the first beggar she meets. If the condition isn't met before the spell expires, the activity isn't performed.",
      "If you or any of your companions damage the target, the spell ends."
    ],
    higherLevel: [],
    range: "30 feet",
    material:
      "A snake's tongue and either a bit of honeycomb or a drop of sweet oil.",
    ritual: false,
    concentration: true,
    duration: "Up to 8 hours",
    castingTime: "1 action",
    school: "Enchantment",
    level: 2,
    components: ["V", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 279
      }
    ]
  },
  {
    name: "Sunbeam",
    description: [
      "A beam of brilliant light flashes out from your hand in a 5-foot-wide, 60-foot-long line. Each creature in the line must make a constitution saving throw. On a failed save, a creature takes 6d8 radiant damage and is blinded until your next turn. On a successful save, it takes half as much damage and isn't blinded by this spell. Undead and oozes have disadvantage on this saving throw.",
      "You can create a new line of radiance as your action on any turn until the spell ends.",
      "For the duration, a mote of brilliant radiance shines in your hand. It sheds bright light in a 30-foot radius and dim light for an additional 30 feet. This light is sunlight."
    ],
    higherLevel: [],
    range: "Self",
    material: "A magnifying glass.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Evocation",
    level: 6,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 279
      }
    ]
  },
  {
    name: "Sunburst",
    description: [
      "Brilliant sunlight flashes in a 60-foot radius centered on a point you choose within range. Each creature in that light must make a constitution saving throw. On a failed save, a creature takes 12d6 radiant damage and is blinded for 1 minute. On a successful save, it takes half as much damage and isn't blinded by this spell. Undead and oozes have disadvantage on this saving throw.",
      "A creature blinded by this spell makes another constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded.",
      "This spell dispels any darkness in its area that was created by a spell."
    ],
    higherLevel: [],
    range: "150 feet",
    material: "Fire and a piece of sunstone.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 8,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 279
      }
    ]
  },
  {
    name: "Symbol",
    description: [
      "When you cast this spell, you inscribe a harmful glyph either on a surface (such as a section of floor, a wall, or a table) or within an object that can be closed to conceal the glyph (such as a book, a scroll, or a treasure chest). If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place; if the object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.",
      "The glyph is nearly invisible, requiring an Intelligence (Investigation) check against your spell save DC to find it.",
      "You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or stepping on the glyph, removing another object covering it, approaching within a certain distance of it, or manipulating the object that holds it. For glyphs inscribed within an object, the most common triggers are opening the object, approaching within a certain distance of it, or seeing or reading the glyph.",
      "You can further refine the trigger so the spell is activated only under certain circumstances or according to a creature's physical characteristics (such as height or weight), or physical kind (for example, the ward could be set to affect hags or shapechangers). You can also specify creatures that don't trigger the glyph, such as those who say a certain password.",
      "When you inscribe the glyph, choose one of the options below for its effect. Once triggered, the glyph glows, filling a 60-foot-radius sphere with dim light for 10 minutes, after which time the spell ends. Each creature in the sphere when the glyph activates is targeted by its effect, as is a creature that enters the sphere for the first time on a turn or ends its turn there.",
      "Death.",
      " Each target must make a constitution saving throw, taking 10d 10 necrotic damage on a failed save, or half as much damage on a successful save.",
      "Discord.",
      " Each target must make a constitution saving throw. On a failed save, a target bickers and argues with other creatures for 1 minute. During this time, it is incapable of meaningful communication and has disadvantage on attack rolls and ability checks.",
      "Fear.",
      " Each target must make a wisdom saving throw and becomes frightened for 1 minute on a failed save. While frightened, the target drops whatever it is holding and must move at least 30 feet away from the glyph on each of its turns, if able.",
      "Hopelessness.",
      " Each target must make a charisma saving throw. On a failed save, the target is overwhelmed with despair for 1 minute. During this time, it can't attack or target any creature with harmful abilities, spells, or other magical effects.",
      "Insanity.",
      " Each target must make an intelligence saving throw. On a failed save, the target is driven insane for 1 minute. An insane creature can't take actions, can't understand what other creatures say, can't read, and speaks only in gibberish. The DM controls its movement, which is erratic.",
      "Pain.",
      " Each target must make a constitution saving throw and becomes incapacitated with excruciating pain for 1 minute on a failed save.",
      "Sleep.",
      " Each target must make a wisdom saving throw and falls unconscious for 10 minutes on a failed save. A creature awakens if it takes damage or if someone uses an action to shake or slap it awake.",
      "Stunning.",
      " Each target must make a wisdom saving throw and becomes stunned for 1 minute on a failed save."
    ],
    higherLevel: [],
    range: "Touch",
    material:
      "Mercury, phosphorus, and powdered diamond and opal with a total value of at least 1,000 gp, which the spell consumes.",
    ritual: false,
    concentration: false,
    duration: "Until dispelled",
    castingTime: "1 minute",
    school: "Abjuration",
    level: 7,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 280
      }
    ]
  },
  {
    name: "Telekinesis",
    description: [
      "You gain the ability to move or manipulate creatures or objects by thought. When you cast the spell, and as your action each round for the duration, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round, or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell.",
      "Creature.",
      " You can try to move a Huge or smaller creature. Make an ability check with your spellcasting ability contested by the creature's Strength check. If you win the contest, you move the creature up to 30 feet in any direction, including upward but not beyond the range of this spell. Until the end of your next turn, the creature is restrained in your telekinetic grip. A creature lifted upward is suspended in mid-air.",
      "On subsequent rounds, you can use your action to attempt to maintain your telekinetic grip on the creature by repeating the contest.",
      "Object.",
      " You can try to move an object that weighs up to 1,000 pounds. If the object isn't being worn or carried, you automatically move it up to 30 feet in any direction, but not beyond the range of this spell.",
      "If the object is worn or carried by a creature, you must make an ability check with your spellcasting ability contested by that creature's Strength check. If you succeed, you pull the object away from that creature and can move it up to 30 feet in any direction but not beyond the range of this spell.",
      "You can exert fine control on objects with your telekinetic grip, such as manipulating a simple tool, opening a door or a container, stowing or retrieving an item from an open container, or pouring the contents from a vial."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Transmutation",
    level: 5,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 280
      }
    ]
  },
  {
    name: "Telepathic Bond",
    description: [
      "You forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Creatures with Intelligence scores of 2 or less aren't affected by this spell.",
      "Until the spell ends, the targets can communicate telepathically through the bond whether or not they have a common language. The communication is possible over any distance, though it can't extend to other planes of existence."
    ],
    higherLevel: [],
    range: "30 feet",
    material: "Pieces of eggshell from two different kinds of creatures",
    ritual: true,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Divination",
    level: 5,
    components: ["V", "S", "M"],
    page: [
      {
        book: "srd",
        pageNumber: 183
      }
    ]
  },
  {
    name: "Teleport",
    description: [
      "This spell instantly transports you and up to eight willing creatures of your choice that you can see within range, or a single object that you can see within range, to a destination you select. If you target an object, it must be able to fit entirely inside a 10-foot cube, and it can't be held or carried by an unwilling creature.",
      "The destination you choose must be known to you, and it must be on the same plane of existence as you. Your familiarity with the destination determines whether you arrive there successfully. The DM rolls d100 and consults the table."
    ],
    higherLevel: [],
    range: "10 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Conjuration",
    level: 7,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 281
      }
    ]
  },
  {
    name: "Teleportation Circle",
    description: [
      "As you cast the spell, you draw a 10-foot-diameter circle on the ground inscribed with sigils that link your location to a permanent teleportation circle of your choice whose sigil sequence you know and that is on the same plane of existence as you. A shimmering portal opens within the circle you drew and remains open until the end of your next turn. Any creature that enters the portal instantly appears within 5 feet of the destination circle or in the nearest unoccupied space if that space is occupied.",
      "Many major temples, guilds, and other important places have permanent teleportation circles inscribed somewhere within their confines. Each such circle includes a unique sigil sequence-a string of magical runes arranged in a particular pattern. When you first gain the ability to cast this spell, you learn the sigil sequences for two destinations on the Material Plane, determined by the DM. You can learn additional sigil sequences during your adventures. You can commit a new sigil sequence to memory after studying it for 1 minute.",
      "You can create a permanent teleportation circle by casting this spell in the same location every day for one year. You need not use the circle to teleport when you cast the spell in this way."
    ],
    higherLevel: [],
    range: "10 feet",
    material:
      "Rare chalks and inks infused with precious gems with 50 gp, which the spell consumes.",
    ritual: false,
    concentration: false,
    duration: "1 round",
    castingTime: "1 minute",
    school: "Conjuration",
    level: 5,
    components: ["V", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 282
      }
    ]
  },
  {
    name: "Thaumaturgy",
    description: [
      "You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range.",
      "- Your voice booms up to three times as loud as normal for 1 minute.",
      "- You cause flames to flicker, brighten, dim, or change color for 1 minute.",
      "- You cause harmless tremors in the ground for 1 minute.",
      "- You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.",
      "- You instantaneously cause an unlocked door or window to fly open or slam shut.",
      "- You alter the appearance of your eyes for 1 minute.",
      "If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action."
    ],
    higherLevel: [],
    range: "30 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "1 minute",
    castingTime: "1 action",
    school: "Transmutation",
    level: 0,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 282
      }
    ]
  },
  {
    name: "Thunderwave",
    description: [
      "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed.",
      "In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
    ],
    range: "Self",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Evocation",
    level: 1,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 282
      }
    ]
  },
  {
    name: "Time Stop",
    description: [
      "You briefly stop the flow of time for everyone but yourself. No time passes for other creatures, while you take 1d4 + 1 turns in a row, during which you can use actions and move as normal.",
      "This spell ends if one of the actions you use during this period, or any effects that you create during this period, affects a creature other than you or an object being worn or carried by someone other than you. In addition, the spell ends if you move to a place more than 1,000 feet from the location where you cast it."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Transmutation",
    level: 9,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 283
      }
    ]
  },
  {
    name: "Tiny Hut",
    description: [
      "A 10-foot-radius immobile dome of force springs into existence around and above you and remains stationary for the duration. The spell ends if you leave its area.",
      "Nine creatures of Medium size or smaller can fit inside the dome with you. The spell fails if its area includes a larger creature or more than nine creatures. Creatures and objects within the dome when you cast this spell can move through it freely. All other creatures and objects are barred from passing through it. Spells and other magical effects can't extend through the dome or be cast through it. The atmosphere inside the space is comfortable and dry, regardless of the weather outside.",
      "Until the spell ends, you can command the interior to become dimly lit or dark. The dome is opaque from the outside, of any color you choose, but it is transparent from the inside."
    ],
    higherLevel: [],
    range: "Self",
    material: "A small crystal bead.",
    ritual: true,
    concentration: false,
    duration: "8 hours",
    castingTime: "1 minute",
    school: "Evocation",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 255
      }
    ]
  },
  {
    name: "Tongues",
    description: [
      "This spell grants the creature you touch the ability to understand any spoken language it hears. Moreover, when the target speaks, any creature that knows at least one language and can hear the target understands what it says."
    ],
    higherLevel: [],
    range: "Touch",
    material: "A small clay model of a ziggurat.",
    ritual: false,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Divination",
    level: 3,
    components: ["V", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 283
      }
    ]
  },
  {
    name: "Transport via Plants",
    description: [
      "This spell creates a magical link between a Large or larger inanimate plant within range and another plant, at any distance, on the same plane of existence. You must have seen or touched the destination plant at least once before. For the duration, any creature can step into the target plant and exit from the destination plant by using 5 feet of movement."
    ],
    higherLevel: [],
    range: "10 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "1 round",
    castingTime: "1 action",
    school: "Conjuration",
    level: 6,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 283
      }
    ]
  },
  {
    name: "Tree Stride",
    description: [
      "You gain the ability to enter a tree and move from inside it to inside another tree of the same kind within 500 feet. Both trees must be living and at least the same size as you. You must use 5 feet of movement to enter a tree. You instantly know the location of all other trees of the same kind within 500 feet and, as part of the move used to enter the tree, can either pass into one of those trees or step out of the tree you're in. You appear in a spot of your choice within 5 feet of the destination tree, using another 5 feet of movement. If you have no movement left, you appear within 5 feet of the tree you entered.",
      "You can use this transportation ability once per round for the duration. You must end each turn outside a tree."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Conjuration",
    level: 5,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 283
      }
    ]
  },
  {
    name: "True Polymorph",
    description: [
      "Choose one creature or nonmagical object that you can see within range. You transform the creature into a different creature, the creature into an object, or the object into a creature (the object must be neither worn nor carried by another creature). The transformation lasts for the duration, or until the target drops to 0 hit points or dies. If you concentrate on this spell for the full duration, the transformation becomes permanent.",
      "Shapechangers aren't affected by this spell. An unwilling creature can make a wisdom saving throw, and if it succeeds, it isn't affected by this spell.",
      "Creature into Creature.",
      " If you turn a creature into another kind of creature, the new form can be any kind you choose whose challenge rating is equal to or less than the target's (or its level, if the target doesn't have a challenge rating). The target's game statistics, including mental ability scores, are replaced by the statistics of the new form. It retains its alignment and personality.",
      "The target assumes the hit points of its new form, and when it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious.",
      "The creature is limited in the actions it can perform by the nature of its new form, and it can't speak, cast spells, or take any other action that requires hands or speech unless its new form is capable of such actions.",
      "The target's gear melds into the new form. The creature can't activate, use, wield, or otherwise benefit from any of its equipment.",
      "Object into Creature.",
      " You can turn an object into any kind of creature, as long as the creature's size is no larger than the object's size and the creature's challenge rating is 9 or lower. The creature is friendly to you and your companions. It acts on each of your turns. You decide what action it takes and how it moves. The DM has the creature's statistics and resolves all of its actions and movement.",
      "If the spell becomes permanent, you no longer control the creature. It might remain friendly to you, depending on how you have treated it.",
      "Creature into Object.",
      " If you turn a creature into an object, it transforms along with whatever it is wearing and carrying into that form. The creature's statistics become those of the object, and the creature has no memory of time spent in this form, after the spell ends and it returns to its normal form."
    ],
    higherLevel: [],
    range: "30 feet",
    material: "A drop of mercury, a dollop of gum arabic, and a wisp of smoke.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 action",
    school: "Transmutation",
    level: 9,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 283
      }
    ]
  },
  {
    name: "True Resurrection",
    description: [
      "You touch a creature that has been dead for no longer than 200 years and that died for any reason except old age. If the creature's soul is free and willing, the creature is restored to life with all its hit points.",
      "This spell closes all wounds, neutralizes any poison, cures all diseases, and lifts any curses affecting the creature when it died. The spell replaces damaged or missing organs and limbs.",
      "The spell can even provide a new body if the original no longer exists, in which case you must speak the creature's name. The creature then appears in an unoccupied space you choose within 10 feet of you."
    ],
    higherLevel: [],
    range: "Touch",
    material:
      "A sprinkle of holy water and diamonds worth at least 25,000gp, which the spell consumes.",
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 hour",
    school: "Necromancy",
    level: 9,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 284
      }
    ]
  },
  {
    name: "True Seeing",
    description: [
      "This spell gives the willing creature you touch the ability to see things as they actually are. For the duration, the creature has truesight, notices secret doors hidden by magic, and can see into the Ethereal Plane, all out to a range of 120 feet."
    ],
    higherLevel: [],
    range: "Touch",
    material:
      "An ointment for the eyes that costs 25gp; is made from mushroom powder, saffron, and fat; and is consumed by the spell.",
    ritual: false,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Divination",
    level: 6,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 284
      }
    ]
  },
  {
    name: "True Strike",
    description: [
      "You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended."
    ],
    higherLevel: [],
    range: "30 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 round",
    castingTime: "1 action",
    school: "Divination",
    level: 0,
    components: ["S"],
    page: [
      {
        book: "phb",
        pageNumber: 284
      }
    ]
  },
  {
    name: "Unseen Servant",
    description: [
      "This spell creates an invisible, mindless, shapeless force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can't attack. If it drops to 0 hit points, the spell ends.",
      "Once on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring wind. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command.",
      "If you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends."
    ],
    higherLevel: [],
    range: "60 feet",
    material: "A piece of string and a bit of wood.",
    ritual: true,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Conjuration",
    level: 1,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 284
      }
    ]
  },
  {
    name: "Vampiric Touch",
    description: [
      "The touch of your shadow-wreathed hand can siphon life force from others to heal your wounds. Make a melee spell attack against a creature within your reach. On a hit, the target takes 3d6 necrotic damage, and you regain hit points equal to half the amount of necrotic damage dealt. Until the spell ends, you can make the attack again on each of your turns as an action."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
    ],
    range: "Self",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Necromancy",
    level: 3,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 285
      }
    ]
  },
  {
    name: "Vicious Mockery",
    description: [
      "You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.",
      "This spell’s damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Enchantment",
    level: 0,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 285
      }
    ]
  },
  {
    name: "Wall of Fire",
    description: [
      "You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration.",
      "When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 fire damage, or half as much damage on a successful save.",
      "One side of the wall, selected by you when you cast this spell, deals 5d8 fire damage to each creature that ends its turn within 10 feet o f that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side o f the wall deals no damage.",
      "The other side of the wall deals no damage."
    ],
    higherLevel: [
      "When you cast this spell using a level spell slot 5 or more, the damage of the spell increases by 1d8 for each level of higher spell slot to 4."
    ],
    range: "120 feet",
    material: "A small piece of phosphorus.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Evocation",
    level: 4,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 285
      }
    ]
  },
  {
    name: "Wall of Force",
    description: [
      "An invisible wall of force springs into existence at a point you choose within range. The wall appears in any orientation you choose, as a horizontal or vertical barrier or at an angle. It can be free floating or resting on a solid surface. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-by-10-foot panels. Each panel must be contiguous with another panel. In any form, the wall is 1/4 inch thick. It lasts for the duration. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice which side).",
      "Nothing can physically pass through the wall. It is immune to all damage and can't be dispelled by dispel magic. A disintegrate spell destroys the wall instantly, however. The wall also extends into the Ethereal Plane, blocking ethereal travel through the wall."
    ],
    higherLevel: [],
    range: "120 feet",
    material: "A pinch of powder made by crushing a clear gemstone.",
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Evocation",
    level: 5,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 285
      }
    ]
  },
  {
    name: "Wall of Ice",
    description: [
      "You create a wall of ice on a solid surface within range. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-square panels. Each panel must be contiguous with another panel. In any form, the wall is 1 foot thick and lasts for the duration.",
      "If the wall cuts through a creature's space when it appears, the creature within its area is pushed to one side of the wall and must make a dexterity saving throw. On a failed save, the creature takes 10d6 cold damage, or half as much damage on a successful save.",
      "The wall is an object that can be damaged and thus breached. It has AC 12 and 30 hit points per 10-foot section, and it is vulnerable to fire damage. Reducing a 10-foot section of wall to 0 hit points destroys it and leaves behind a sheet of frigid air in the space the wall occupied. A creature moving through the sheet of frigid air for the first time on a turn must make a constitution saving throw. That creature takes 5d6 cold damage on a failed save, or half as much damage on a successful one."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 7th level or higher, the damage the wall deals when it appears increases by 2d6, and the damage from passing through the sheet of frigid air increases by 1d6, for each slot level above 6th."
    ],
    range: "120 feet",
    material: "A small piece of quartz.",
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Evocation",
    level: 6,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 285
      }
    ]
  },
  {
    name: "Wall of Stone",
    description: [
      "A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with at least one other panel. Alternatively, you can create 10-foot-by-20-foot panels that are only 3 inches thick.",
      "If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a dexterity saving throw. On a success, it can use its reaction to move up to its speed so that it is no longer enclosed by the wall.",
      "The wall can have any shape you desire, though it can't occupy the same space as a creature or object. The wall doesn't need to be vertical or rest on any firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus, you can use this spell to bridge a chasm or create a ramp.",
      "If you create a span greater than 20 feet in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create crenellations, battlements, and so on.",
      "The wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 30 hit points per inch of thickness. Reducing a panel to 0 hit points destroys it and might cause connected panels to collapse at the DM's discretion.",
      "If you maintain your concentration on this spell for its whole duration, the wall becomes permanent and can't be dispelled. Otherwise, the wall disappears when the spell ends."
    ],
    higherLevel: [],
    range: "120 feet",
    material: "A small block of granite.",
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Evocation",
    level: 5,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 287
      }
    ]
  },
  {
    name: "Wall of Thorns",
    description: [
      "You create a wall of tough, pliable, tangled brush bristling with needle-sharp thorns. The wall appears within range on a solid surface and lasts for the duration. You choose to make the wall up to 60 feet long, 10 feet high, and 5 feet thick or a circle that has a 20-foot diameter and is up to 20 feet high and 5 feet thick. The wall blocks line of sight.",
      "When the wall appears, each creature within its area must make a dexterity saving throw. On a failed save, a creature takes 7d8 piercing damage, or half as much damage on a successful save.",
      "A creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature moves through the wall, it must spend 4 feet of movement. Furthermore, the first time a creature enters the wall on a turn or ends its turn there, the creature must make a dexterity saving throw. It takes 7d8 slashing damage on a failed save, or half as much damage on a successful one."
    ],
    higherLevel: [
      "When you cast this spell using a spell slot of 7th level or higher, both types of damage increase by 1d8 for each slot level above 6th."
    ],
    range: "120 feet",
    material: "A handful of thorns.",
    ritual: false,
    concentration: true,
    duration: "Up to 10 minutes",
    castingTime: "1 action",
    school: "Conjuration",
    level: 6,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 287
      }
    ]
  },
  {
    name: "Warding Bond",
    description: [
      "This spell wards a willing creature you touch and creates a mystic connection between you and the target until the spell ends. While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and it has resistance to all damage. Also, each time it takes damage, you take the same amount of damage.",
      "The spell ends if you drop to 0 hit points or if you and the target become separated by more than 60 feet.",
      "It also ends if the spell is cast again on either of the connected creatures. You can also dismiss the spell as an action."
    ],
    higherLevel: [],
    range: "Touch",
    material:
      "A pair of platinum rings worth at least 50gp each, which you and the target must wear for the duration.",
    ritual: false,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Abjuration",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 287
      }
    ]
  },
  {
    name: "Water Breathing",
    description: [
      "This spell gives a maximum of ten willing creatures within range and you can see, the ability to breathe underwater until the end of its term. Affected creatures also retain their normal breathing pattern."
    ],
    higherLevel: [],
    range: "30 feet",
    material: "A short piece of reed or straw.",
    ritual: true,
    concentration: false,
    duration: "24 hours",
    castingTime: "1 action",
    school: "Transmutation",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 287
      }
    ]
  },
  {
    name: "Water Walk",
    description: [
      "This spell grants the ability to move across any liquid surface-such as water, acid, mud, snow, quicksand, or lava-as if it were harmless solid ground (creatures crossing molten lava can still take damage from the heat). Up to ten willing creatures you can see within range gain this ability for the duration.",
      "If you target a creature submerged in a liquid, the spell carries the target to the surface of the liquid at a rate of 60 feet per round."
    ],
    higherLevel: [],
    range: "30 feet",
    material: null,
    ritual: true,
    concentration: false,
    duration: "1 hour",
    castingTime: "1 action",
    school: "Transmutation",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 287
      }
    ]
  },
  {
    name: "Web",
    description: [
      "You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube from that point for the duration. The webs are difficult terrain and lightly obscure their area.",
      "If the webs aren't anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet.",
      "Each creature that starts its turn in the webs or that enters them during its turn must make a dexterity saving throw. On a failed save, the creature is restrained as long as it remains in the webs or until it breaks free.",
      "A creature restrained by the webs can use its action to make a Strength check against your spell save DC. If it succeeds, it is no longer restrained.",
      "The webs are flammable. Any 5-foot cube of webs exposed to fire burns away in 1 round, dealing 2d4 fire damage to any creature that starts its turn in the fire."
    ],
    higherLevel: [],
    range: "60 feet",
    material: "A bit of spiderweb.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 hour",
    castingTime: "1 action",
    school: "Conjuration",
    level: 2,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 287
      }
    ]
  },
  {
    name: "Weird",
    description: [
      "Drawing on the deepest fears of a group of creatures, you create illusory creatures in their minds, visible only to them. Each creature in a 30-foot-radius sphere centered on a point of your choice within range must make a wisdom saving throw. On a failed save, a creature becomes frightened for the duration. The illusion calls on the creature's deepest fears, manifesting its worst nightmares as an implacable threat. At the start of each of the frightened creature's turns, it must succeed on a wisdom saving throw or take 4 d10 psychic damage. On a successful save, the spell ends for that creature."
    ],
    higherLevel: [],
    range: "120 feet",
    material: null,
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Illusion",
    level: 9,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 288
      }
    ]
  },
  {
    name: "Wind Walk",
    description: [
      "You and up to ten willing creatures you can see within range assume a gaseous form for the duration, appearing as wisps of cloud. While in this cloud form, a creature has a flying speed of 300 feet and has resistance to damage from nonmagical weapons. The only actions a creature can take in this form are the Dash action or to revert to its normal form. Reverting takes 1 minute, during which time a creature is incapacitated and can't move. Until the spell ends, a creature can revert to cloud form, which also requires the 1-minute transformation.",
      "If a creature is in cloud form and flying when the effect ends, the creature descends 60 feet per round for 1 minute until it lands, which it does safely. If it can't land after 1 minute, the creature falls the remaining distance."
    ],
    higherLevel: [],
    range: "30 feet",
    material: "Fire and holy water.",
    ritual: false,
    concentration: false,
    duration: "8 hours",
    castingTime: "1 minute",
    school: "Transmutation",
    level: 6,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 288
      }
    ]
  },
  {
    name: "Wind Wall",
    description: [
      "A wall of strong wind rises from the ground at a point you choose within range. You can make the wall up to 50 feet long, 15 feet high, and 1 foot thick. You can shape the wall in any way you choose so long as it makes one continuous path along the ground. The wall lasts for the duration.",
      "When the wall appears, each creature within its area must make a strength saving throw. A creature takes 3d8 bludgeoning damage on a failed save, or half as much damage on a successful one.",
      "The strong wind keeps fog, smoke, and other gases at bay. Small or smaller flying creatures or objects can't pass through the wall. Loose, lightweight materials brought into the wall fly upward. Arrows, bolts, and other ordinary projectiles launched at targets behind the wall are deflected upward and automatically miss. (Boulders hurled by giants or siege engines, and similar projectiles, are unaffected.) Creatures in gaseous form can't pass through it."
    ],
    higherLevel: [],
    range: "120 feet",
    material: "A tiny fan and a feather of exotic origin.",
    ritual: false,
    concentration: true,
    duration: "Up to 1 minute",
    castingTime: "1 action",
    school: "Evocation",
    level: 3,
    components: ["V", "S", "M"],
    page: [
      {
        book: "phb",
        pageNumber: 288
      }
    ]
  },
  {
    name: "Wish",
    description: [
      "Wish is the mightiest spell a mortal creature can cast. By simply speaking aloud, you can alter the very foundations of reality in accord with your desires.",
      "The basic use of this spell is to duplicate any other spell of 8th level or lower. You don’t need to meet any requirements in that spell, including costly components. The spell simply takes effect.",
      "Alternatively, you can create one of the following effects of your choice:",
      "- You create one object of up to 25,000 gp in value that isn’t a magic item. The object can be no more than 300 feet in any dimension, and it appears in an unoccupied space you can see on the ground.",
      "- You allow up to twenty creatures that you can see to regain all hit points, and you end all effects on them described in the greater restoration spell.",
      "- You grant up to ten creatures that you can see resistance to a damage type you choose.",
      "- You grant up to ten creatures you can see immunity to a single spell or other magical effect for 8 hours. For instance, you could make yourself and all your companions immune to a lich’s life drain attack.",
      "- You undo a single recent event by forcing a reroll of any roll made within the last round (including your last turn). Reality reshapes itself to accommodate the new result. For example, a wish spell could undo an opponent’s successful save, a foe’s critical hit, or a friend’s failed save. You can force the reroll to be made with advantage or disadvantage, and you can choose whether to use the reroll or the original roll.",
      "You might be able to achieve something beyond the scope of the above examples. State your wish to the GM as precisely as possible. The GM has great latitude in ruling what occurs in such an instance; the greater the wish, the greater the likelihood that something goes wrong. This spell might simply fail, the effect you desire might only be partly achieved, or you might suffer some unforeseen consequence as a result of how you worded the wish. For example, wishing that a villain were dead might propel you forward in time to a period when that villain is no longer alive, effectively removing you from the game. Similarly, wishing for a legendary magic item or artifact might instantly transport you to the presence of the item’s current owner.",
      "The stress of casting this spell to produce any effect other than duplicating another spell weakens you. After enduring that stress, each time you cast a spell until you finish a long rest, you take 1d10 necrotic damage per level of that spell. This damage can’t be reduced or prevented in any way. In addition, your Strength drops to 3, if it isn’t 3 or lower already, for 2d4 days. For each of those days that you spend resting and doing nothing more than light activity, your remaining recovery time decreases by 2 days. Finally, there is a 33 percent chance that you are unable to cast wish ever again if you suffer this stress."
    ],
    higherLevel: [],
    range: "Self",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Conjuration",
    level: 9,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 288
      }
    ]
  },
  {
    name: "Word of Recall",
    description: [
      "You and up to five willing creatures within 5 feet of you instantly teleport to a previously designated sanctuary. You and any creatures that teleport with you appear in the nearest unoccupied space to the spot you designated when you prepared your sanctuary (see below). If you cast this spell without first preparing a sanctuary, the spell has no effect.",
      "You must designate a sanctuary by casting this spell within a location, such as a temple, dedicated to or strongly linked to your deity. If you attempt to cast the spell in this manner in an area that isn't dedicated to your deity, the spell has no effect."
    ],
    higherLevel: [],
    range: "5 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "Instantaneous",
    castingTime: "1 action",
    school: "Conjuration",
    level: 6,
    components: ["V"],
    page: [
      {
        book: "phb",
        pageNumber: 289
      }
    ]
  },
  {
    name: "Zone of Truth",
    description: [
      "You create a magical zone that guards against deception in a 15-foot-radius sphere centered on a point of your choice within range. Until the spell ends, a creature that enters the spell's area for the first time on a turn or starts its turn there must make a Charisma saving throw. On a failed save, a creature can't speak a deliberate lie while in the radius. You know whether each creature succeeds or fails on its saving throw.",
      "An affected creature is aware of the fate and can avoid answering questions she would normally have responded with a lie. Such a creature can remain evasive in his answers as they remain within the limits of truth."
    ],
    higherLevel: [],
    range: "60 feet",
    material: null,
    ritual: false,
    concentration: false,
    duration: "10 minutes",
    castingTime: "1 action",
    school: "Enchantment",
    level: 2,
    components: ["V", "S"],
    page: [
      {
        book: "phb",
        pageNumber: 289
      }
    ]
  }
];
