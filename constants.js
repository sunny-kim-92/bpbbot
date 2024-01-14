export const odds = [{
    round: 1,
    common: 90,
    rare: 10,
    epic: 0,
    legendary: 0,
    godly: 0
},
{
    round: 2,
    common: 84,
    rare: 15,
    epic: 1,
    legendary: 0,
    godly: 0
},
{
    round: 3,
    common: 75,
    rare: 20,
    epic: 5,
    legendary: 0,
    godly: 0
},
{
    round: 4,
    common: 64,
    rare: 25,
    epic: 10,
    legendary: 0,
    godly: 0
},
{
    round: 5,
    common: 45,
    rare: 35,
    epic: 15,
    legendary: 1,
    godly: 0
},
{
    round: 6,
    common: 29,
    rare: 40,
    epic: 20,
    legendary: 5,
    godly: 1
},
{
    round: 7,
    common: 20,
    rare: 35,
    epic: 25,
    legendary: 10,
    godly: 5
},
{
    round: 8,
    common: 20,
    rare: 30,
    epic: 25,
    legendary: 15,
    godly: 10
},
{
    round: 9,
    common: 20,
    rare: 28,
    epic: 25,
    legendary: 15,
    godly: 12
},
{
    round: 10,
    common: 20,
    rare: 25,
    epic: 25,
    legendary: 15,
    godly: 15
},
{
    round: 11,
    common: 20,
    rare: 23,
    epic: 23,
    legendary: 15,
    godly: 17
},
{
    round: 12,
    common: 20,
    rare: 20,
    epic: 20,
    legendary: 20,
    godly: 20
},
]

export const rarities = [
    {
        id: 1,
        name: 'common'
    }, {
        id: 2,
        name: 'rare'
    }, {
        id: 3,
        name: 'epic'
    }, {
        id: 4,
        name: 'legendary'
    }, {
        id: 5,
        name: 'godly'
    }, {
        id: 6,
        name: 'unique'
    }
]

export const classes = [
    {
        id: 1,
        name: 'Ranger'
    }, {
        id: 2,
        name: 'Reaper'
    }
]

export const subtypes = [
    {
        id: 1,
        name: 'Dark'
    }, {
        id: 2,
        name: 'Holy'
    }, {
        id: 3,
        name: 'Magic'
    }, {
        id: 4,
        name: 'Nature'
    }, {
        id: 5,
        name: 'Vampiric'
    },
]

export const types = [
    {
        id: 1,
        name: 'Accessory'
    }, {
        id: 2,
        name: 'Armor'
    }, {
        id: 3,
        name: 'Bag'
    }, {
        id: 4,
        name: 'Food'
    }, {
        id: 5,
        name: 'Gemstone'
    }, {
        id: 6,
        name: 'Gloves'
    }, {
        id: 7,
        name: 'Helmet'
    }, {
        id: 8,
        name: 'Melee Weapon'
    }, {
        id: 9,
        name: 'Pet'
    }, {
        id: 10,
        name: 'Playing Card'
    }, {
        id: 11,
        name: 'Potion'
    }, {
        id: 12,
        name: 'Ranged Weapon'
    }, {
        id: 13,
        name: 'Shield'
    }, {
        id: 14,
        name: 'Shoes'
    },
]

export const items = [
    {
        name: 'acorn_collar',
        display_name: 'Acorn Collar',
        description: 'Star items gain 5% critical hit chance per luck',
        rarity: 3,
        type: 1,
        subtype: 3,
        cost: 6,
        class: [1],
        id: 1
    },
    {
        name: 'bag_of_stones',
        display_name: 'Bag of Stones',
        description: 'Star stones above can be thrown repeatedly',
        rarity: 2,
        type: 1,
        subtype: null,
        cost: 3,
        class: [1, 2],
        id: 2
    },
    {
        name: 'blood_amulet',
        display_name: 'Blood Amulet',
        description: 'Start of battle: Gain 2 Vampirism and 20 maximum health',
        rarity: 4,
        type: 1,
        subtype: 5,
        cost: 9,
        class: [1, 2],
        id: 3
    },
    {
        name: 'glowing_crown',
        display_name: 'Glowing Crown',
        description: 'Every 2.5s: Cleanse 1 Blind and heal for 5. Use 10 mana: Become invulnerable for 2s (once)',
        rarity: 5,
        type: 1,
        subtype: 2,
        cost: 12,
        class: [1, 2],
        id: 4
    },
    {
        name: 'box_of_riches',
        display_name: 'Box of Riches',
        description: 'Shop entered: Generate a low-quality gemstone. Gemstones are offered in the shop',
        rarity: 2,
        type: 1,
        subtype: null,
        cost: 5,
        class: [1, 2],
        id: 5
    },
    {
        description: 'Increases the rarity of 1 item in the shop every time it refreshes',
        name: 'customer_card',
        display_name: 'Customer Card',
        rarity: 2,
        type: 1,
        subtype: null,
        cost: 4,
        class: [1, 2],
        id: 6
    },
    {
        description: 'Playing cards are offered in the shop. Start of battle: Gain 2 Luck. After 1s: reveal the star Playing card',
        name: 'deck_of_cards',
        display_name: 'Deck of Cards',
        rarity: 2,
        type: 1,
        subtype: null,
        cost: 3,
        class: [2],
        id: 7
    },
    {
        description: 'Every 2s: Gain 1 Luck, 1 Spikes, or 1 Mana, depending on what you have the least of. Use 7 Block, 7 Luck, 7 Spikes, 7 Mana, and 27 Health: Give the star Weapon +27 damage.',
        name: 'djinn_lamp',
        display_name: 'Djinn Lamp',
        rarity: 5,
        type: 1,
        subtype: null,
        cost: 11,
        class: [1, 2],
        id: 8
    },
    {
        description: 'Every 1s: Remove 1 stamina from your opponent. Increase cooldown by 0.8s. 5 star items in front: After 5 activations of Fanfare, stun for 1s',
        name: 'fanfare',
        display_name: 'Fanfare',
        rarity: 4,
        type: 1,
        subtype: null,
        cost: 7,
        class: [1, 2],
        id: 9
    },
    {
        description: 'Every 5s: Randomly gain 12 Block or 2 stamina or 2 Luck. Triggers 10% faster for each star item',
        name: 'flute',
        display_name: 'Flute',
        rarity: 3,
        type: 1,
        subtype: null,
        cost: 6,
        class: [1, 2],
        id: 10
    },
    {
        description: 'Start of battle: Gain 2 Regeneration',
        name: 'healing_herbs',
        display_name: 'Healing Herbs',
        rarity: 1,
        type: 1,
        subtype: 3,
        cost: 4,
        class: [1, 2],
        id: 11
    },
    {
        description: 'Start of battle: Gain 2 Luck',
        name: 'lucky_clover',
        display_name: 'Lucky Clover',
        rarity: 2,
        type: 1,
        subtype: 3,
        cost: 2,
        class: [1],
        id: 12
    },
    {
        description: 'Star item activates: 50% chance to gain 1 Mana. Use 30 Mana: Gain 12 random other buffs',
        name: 'mana_orb',
        display_name: 'Mana Orb',
        rarity: 3,
        type: 1,
        subtype: null,
        cost: 6,
        class: [1, 2],
        id: 13
    },
    {
        description: 'Shop entered: Gain 1 gold. Start of battle: Gain 2 maximum health for each star Start of Battle item',
        name: 'piggybank',
        display_name: 'Piggybank',
        rarity: 1,
        type: 1,
        subtype: null,
        cost: 3,
        class: [1, 2],
        id: 14
    },
    {
        description: 'Start of battle: Inflict 1 Blind',
        name: 'pocket_sand',
        display_name: 'Pocket Sand',
        rarity: 1,
        type: 1,
        subtype: 3,
        cost: 2,
        class: [1, 2],
        id: 15
    },
    {
        description: 'Start of battle: Gain 1 Spikes',
        name: 'walrus_tusk',
        display_name: 'Walrus Tusk',
        rarity: 1,
        type: 1,
        subtype: 3,
        cost: 4,
        class: [1, 2],
        id: 16
    },
    {
        description: 'Start of battle: Star weapons gain +1 damage',
        name: 'whetstone',
        display_name: 'Whetstone',
        rarity: 1,
        type: 1,
        subtype: null,
        cost: 4,
        class: [1, 2],
        id: 17
    },
    {
        description: 'Start of battle: Gain 55 block. Gain 2 Regeneration for each star Holy item. Every 3s: Cleanse 2 Poison',
        name: 'holy_armor',
        display_name: 'Holy Armor',
        rarity: 4,
        type: 2,
        subtype: 2,
        cost: 14,
        class: [1, 2],
        id: 18
    },
    {
        description: 'Start of battle: Gain 45 Block. Resist 3 debuffs',
        name: 'leather_armor',
        display_name: 'Leather Armor',
        rarity: 2,
        type: 2,
        subtype: null,
        cost: 7,
        class: [1, 2],
        id: 19
    },
    {
        description: 'Add 2 backpack slots. Items inside trigger 10% faster',
        name: 'fanny_pack',
        display_name: 'Fanny Pack',
        rarity: 2,
        type: 3,
        subtype: null,
        cost: 3,
        class: [1, 2],
        id: 20
    },
    {
        description: 'Add 4 backpack slots',
        name: 'leather_bag',
        display_name: 'Leather Bag',
        rarity: 1,
        type: 3,
        subtype: null,
        cost: 4,
        class: [1, 2],
        id: 21
    },
    {
        description: 'Add 4 backpack slots. First Potion inside consumed: Gain a random buff. 4 Potions inside consumed: Cleanse 4 debuffs',
        name: 'potion_belt',
        display_name: 'Potion Belt',
        rarity: 4,
        type: 3,
        subtype: null,
        cost: 5,
        class: [1, 2],
        id: 22
    },
    {
        description: 'Add 1 backpack slot. Start of battle: Gain 5 Block',
        name: 'protective_purse',
        display_name: 'Protective Purse',
        rarity: 5,
        type: 3,
        subtype: null,
        cost: 2,
        class: [1, 2],
        id: 23
    },
    {
        description: 'Add 3 backpack slots. Gain 1 maximum stamina',
        name: 'stamina_sack',
        display_name: 'Stamina Sack',
        rarity: 3,
        type: 3,
        subtype: null,
        cost: 5,
        class: [1, 2],
        id: 24
    },
    {
        description: 'Every 5s: Heal for 4 and regenerate 1 stamina',
        name: 'banana',
        display_name: 'Banana',
        rarity: 1,
        type: 4,
        subtype: 3,
        cost: 3,
        class: [1, 2],
        id: 25
    },
    {
        description: 'Every 3.5s: Gain 1 Mana. If you have at least 10 Mana: Gain 1 Luck instead',
        name: 'blueberries',
        display_name: 'Blueberries',
        rarity: 2,
        type: 4,
        subtype: 3,
        cost: 2,
        class: [1, 2],
        id: 26
    },
    {
        description: 'Every 3.5s: Cleanse 1 random debuff. If you have at least 5 Luck: 50% chance to gain 1 Empower',
        name: 'carrot',
        display_name: 'Carrot',
        rarity: 2,
        type: 4,
        subtype: 3,
        cost: 3,
        class: [1],
        id: 27
    },
    {
        description: 'Every 5s: Inflict 1 Poison',
        name: 'fly_agaric',
        display_name: 'Fly Agaric',
        rarity: 2,
        type: 4,
        subtype: 3,
        cost: 3,
        class: [2],
        id: 28
    },
    {
        description: 'Every 4s: Gain 3 Block. 30% chance to remove 1 Vampirism from you opponent.',
        name: 'garlic',
        display_name: 'Garlic',
        rarity: 1,
        type: 4,
        subtype: 3,
        cost: 2,
        class: [1, 2],
        id: 29
    },
    {
        description: 'Every 4s: Gain 1 Spikes and heal for 3',
        name: 'pineapple',
        display_name: 'Pineapple',
        rarity: 4,
        type: 4,
        subtype: 3,
        cost: 7,
        class: [1, 2],
        id: 30
    },
    {
        damage: '6-9 (2.5/s)',
        stamina: '0 (0/s)',
        cooldown: '5s',
        accuracy: '90%',
        description: 'On hit: 50% chance to stun for 0.5s. Fatigue starts: Gain 10 Heat',
        name: 'pumpkin',
        display_name: 'Pumpkin',
        rarity: 6,
        type: 4,
        subtype: 3,
        cost: 11,
        class: [1, 2],
        id: 31,
    },
    {
        description: 'Start of battle: Star items trigger 20% faster',
        name: 'gloves_of_haste',
        display_name: 'Gloves of Haste',
        rarity: 2,
        type: 6,
        subtype: null,
        cost: 4,
        class: [1, 2],
        id: 32
    },
    {
        description: 'Start of battle: Reduce damage taken by 25% for 3s. 15% chance to prevent a hit from being critical. 15% chance to prevent being stunned',
        name: 'cap_of_resilience',
        display_name: 'Cap of Resilience',
        rarity: 3,
        type: 7,
        subtype: null,
        cost: 7,
        class: [1, 2],
        id: 33
    },
    {
        damage: '8-14 (2.8/s)',
        stamina: '0.5 (0.1/s)',
        accuracy: '90%',
        cooldown: '4s',
        description: 'Star items give 100% Vampirism. Attacks 5% faster for every Vampirism',
        name: 'blood_harvester',
        display_name: 'Blood Harvester',
        rarity: 6,
        type: 8,
        subtype: 5,
        cost: 12,
        class: [1, 2],
        id: 34
    },
    {
        damage: '2-4 (1.8/s)',
        stamina: '1.2 (0.7/s)',
        accuracy: '95%',
        cooldown: '1.7s',
        description: 'Opponent misses attack: Gain +2 damage for the next attack. On hit: 35% chance to inflict 1 Blind.',
        name: 'broom',
        display_name: 'Broom',
        rarity: 1,
        type: 8,
        subtype: null,
        cost: 4,
        class: [1, 2],
        id: 35
    },
    {
        damage: '2-5 (1/s)',
        stamina: '0 (0/s)',
        accuracy: '95%',
        cooldown: '3.5s',
        description: 'On stun: Trigger extra attack',
        name: 'dagger',
        display_name: 'Dagger',
        rarity: 2,
        type: 8,
        subtype: null,
        cost: 4,
        class: [1, 2],
        id: 36
    },
    {
        damage: '10-16 (7.2/s)',
        stamina: '1 (0.6/s)',
        accuracy: '60%',
        cooldown: '1.8s',
        description: 'On hit: Use 3 Luck to gain 3 damage. On miss: Gain 3 Luck',
        name: 'fancy_fencing_rapier',
        display_name: 'Fancy Fencing Rapier',
        rarity: 5,
        type: 8,
        subtype: null,
        cost: 13,
        class: [1, 2],
        id: 37
    },
    {
        damage: '8-12 (5/s)',
        stamina: '3 (1.5/s)',
        accuracy: '75%',
        cooldown: '2s',
        description: 'On hit: 50% chance to stun your opponent for 0.5s',
        name: 'hammer',
        display_name: 'Hammer',
        rarity: 2,
        type: 8,
        subtype: null,
        cost: 8,
        class: [1, 2],
        id: 38
    },
    {
        damage: '2-5 (2.2/s)',
        stamina: '1 (0.6/s)',
        accuracy: '90%',
        cooldown: '1.6s',
        description: 'Start of battle: Gain 1 Vampirism. On hit: Convert 1 Regeneration to 1 Vampirism. Maximum damage increased by 1 per Vampirism',
        name: 'hungry_blade',
        display_name: 'Hungry Blade',
        rarity: 3,
        type: 8,
        subtype: 5,
        cost: 7,
        class: [1, 2],
        id: 39
    },
    {
        damage: '40-50 (9/s)',
        stamina: '5 (1/s)',
        accuracy: '90%',
        cooldown: '5s',
        description: 'While you have at least 5 Empower, decrease stamina usage to 3 and cooldown to 3s',
        name: 'impractically_large_greatsword',
        display_name: 'Impractically Large Greatsowrd',
        rarity: 5,
        type: 8,
        subtype: null,
        cost: 15,
        class: [1, 2],
        id: 40
    },
    {
        damage: '5-9 (4.7/s)',
        stamina: '1.2 (0.8/s)',
        accuracy: '95%',
        cooldown: '1.5s',
        description: 'Use 3 Regeneration: Inflict 7 Blind for 5s (unstackable). Deals +1 damage for each Blind of your opponent',
        name: 'lightsaber',
        display_name: 'Lightsaber',
        rarity: 5,
        type: 8,
        subtype: 2,
        cost: 12,
        class: [1, 2],
        id: 41
    },
    {
        damage: '3-4 (1.6/s)',
        stamina: '2 (0.9/s)',
        accuracy: '85%',
        cooldown: '2.2s',
        description: 'Deals +1 damage for each Star food',
        name: 'pan',
        display_name: 'Pan',
        rarity: 1,
        type: 8,
        subtype: null,
        cost: 4,
        class: [1, 2],
        id: 42
    },
    {
        damage: '8-10 (5/s)',
        stamina: '1.5 (0.8/s)',
        accuracy: '90%',
        cooldown: '1.8s',
        description: 'On hit: Remove 2 Regeneration and 2 Spikes from your opponent',
        name: 'ripsaw_blade',
        display_name: 'Ripsaw Blade',
        rarity: 5,
        type: 8,
        subtype: null,
        cost: 10,
        class: [1, 2],
        id: 43
    },
    {
        damage: '2-8 (3.3/s)',
        stamina: '1 (0.7/s)',
        accuracy: '85%',
        cooldown: '1.5s',
        description: 'On hit: Destroy 4 block for each free Star space',
        name: 'spear',
        display_name: 'Spear',
        rarity: 2,
        type: 8,
        subtype: null,
        cost: 6,
        class: [1, 2],
        id: 44
    },
    {
        damage: '4-9 (2.7/s)',
        stamina: '2.5 (1/s)',
        accuracy: '80%',
        cooldown: '2.4s',
        description: 'On hit: Gain 1 Spikes. Deals +1 damage per Spikes.',
        name: 'thorn_whip',
        display_name: 'Thorn Whip',
        rarity: 3,
        type: 8,
        subtype: 3,
        cost: 8,
        class: [1, 2],
        id: 45
    },
    {
        damage: '2-4 (2.5/s)',
        stamina: '0.7 (0.6/s)',
        accuracy: '90%',
        cooldown: '1.2s',
        description: 'Star Melee Weapons deal -2 damage. Deals +4 damage for each Star Melle Weapon',
        name: 'villian_sword',
        display_name: 'Villain Sword',
        rarity: 6,
        type: 8,
        subtype: 1,
        cost: 11,
        class: [1, 2],
        id: 46
    },
    {
        damage: '1-3 (1.4/s)',
        stamina: '1 (0.7/s)',
        accuracy: '90%',
        cooldown: '1.4s',
        description: '',
        name: 'wooden_sword',
        display_name: 'Wooden Sword',
        rarity: 1,
        type: 8,
        subtype: null,
        cost: 3,
        class: [1, 2],
        id: 47
    },
    {
        description: 'Reflect 2 debuffs. Hatches after 2 rounds in your backpack',
        name: 'ruby_egg',
        display_name: 'Ruby Egg',
        rarity: 4,
        type: 9,
        subtype: null,
        cost: 10,
        class: [1, 2],
        id: 48
    },
    {
        description: 'Every 3s: Star items trigger 5% faster (up to 40%). Remove 1 Luck from your opponent',
        name: 'jynx_torquilla',
        display_name: 'Jynx Torquilla',
        rarity: 4,
        type: 9,
        subtype: 3,
        cost: 9,
        class: [1, 2],
        id: 49
    },
    {
        description: '5 Star activations: Heal for 9',
        name: 'goobert',
        display_name: 'Goobert',
        rarity: 2,
        type: 9,
        subtype: null,
        cost: 6,
        class: [1, 2],
        id: 50
    },
    {
        description: 'On reveal: Your next hit is critical. If the number of cards before is odd, gain 2 Luck and 2 spikes',
        name: 'ace_of_spades',
        display_name: 'Ace of Spades',
        rarity: 2,
        type: 10,
        subtype: null,
        cost: 4,
        class: [2],
        id: 51
    },
    {
        description: 'On reveal: For each card before, gain 3 Mana and remove 3 random buffs from your opponent.',
        name: 'darkest_lotus',
        display_name: 'Darkest Lotus',
        rarity: 5,
        type: 10,
        subtype: null,
        cost: 7,
        class: [2],
        id: 52
    },
    {
        description: 'On reveal: Deal 10 + 4 damage for each card before. Gain 3 Heat.',
        name: 'holo_fire_lizard',
        display_name: 'Holo Fire Lizard',
        rarity: 4,
        type: 10,
        subtype: null,
        cost: 6,
        class: [2],
        id: 53
    },
    {
        description: 'On reveal: Steal 11 life. If the number of cards before is even, gain 2 Regeneration.',
        name: 'the_lovers',
        display_name: 'The Lovers',
        rarity: 1,
        type: 10,
        subtype: null,
        cost: 3,
        class: [2],
        id: 54
    },
    {
        description: 'On reveal: Gain 12 Block + 3 for each card before. Inflict 3 Cold.',
        name: 'white_eyes_blue_dragon',
        display_name: 'White Eyes Blue Dragon',
        rarity: 4,
        type: 10,
        subtype: null,
        cost: 5,
        class: [2],
        id: 55
    },
    {
        description: 'Opponent drops below 50% health: Consume this and deal 0.35 damage for each debuff on your opponent',
        name: 'demonic_flask',
        display_name: 'Demonic Flask',
        rarity: 5,
        type: 11,
        subtype: null,
        cost: 8,
        class: [2],
        id: 56
    },
    {
        description: 'Health drops below 50%: Consume this and heal 12 and cleanse 4 Poison.',
        name: 'health_potion',
        display_name: 'Health Potion',
        rarity: 2,
        type: 11,
        subtype: null,
        cost: 4,
        class: [1, 2],
        id: 57
    },
    {
        description: 'Out of stamina: Consume this and gain 2 stamina and 1 Empower',
        name: 'heroic_potion',
        display_name: 'Heroic Potion',
        rarity: 4,
        type: 11,
        subtype: null,
        cost: 6,
        class: [1, 2],
        id: 58
    },
    {
        description: 'Opponent regenerates health: Consume this and inflict 3 Poison and 1 Poison to yourself',
        display_name: 'Pestilence Flask',
    },
    {
        description: 'When you have at least 20 Block: Consume this and convert 15 health to 30 Block',
        display_name: 'Stoneskin Potion',
    },
    {
        description: 'Can only be thrown once per battle. On hit: Inflict 3 Cold. Star Weapon hits: Inflict 1 Cold.',
        display_name: 'Artifact Stone: Cold',
    },
    {
        description: 'Star Weapon hits: Bow and Arrow gains +1 damage (up to 7)',
        display_name: 'Bow and Arrow',
    },
    {
        description: 'Can only be thrown once per battle. On hit: Destroy 3 Block',
        display_name: 'Stone',
    },
    {
        description: 'On attacked (melee): 35% chance to prevent 12 damage and remove 0.7 stamina from opponent. Star items give 30% more Block',
        display_name: 'Shield of Valor',
    },
    {
        description: 'On attacked (melee): 35% chance to prevent 4 damage and remove 0.3 stamina from opponent.',
        display_name: 'Wooden Buckler',
    },
    {
        description: 'Health drops below 70%: Gain 1 Luck, 1 Empower, and 8 Block (once)',
        display_name: 'Dragonskin Boots',
    },
    {
        description: 'Weapon socket: On hit: 20% chance to remove a random buff from your opponent. Armor & other sockets: Your opponents healing is reduced by 15%. Backpack: Every 8s: Cleanse a random debuff.',
        display_name: 'Chipped Amethyst',
    },
    {
        description: 'Weapon socket: On hit: 30% chance to remove a random buff from your opponent. Armor & other sockets: Your opponents healing is reduced by 20%. Backpack: Every 6s: Cleanse a random debuff.',
        name: 'flawed_amethyst',
        display_name: 'Flawed Amethyst',
        rarity: 2,
        type: 5,
        subtype: null,
        cost: 2,
        class: [1, 2],
        id: 69
    },
    {
        description: 'Weapon socket: On hit: 45% chance to remove a random buff from your opponent. Armor & other sockets: Your opponents healing is reduced by 25%. Backpack: Every 5s: Cleanse a random debuff.',
        name: 'regular_amethyst',
        display_name: 'Regular Amethyst',
        rarity: 3,
        type: 5,
        subtype: null,
        cost: 4,
        class: [1, 2],
        id: 70
    },
    {
        description: 'Weapon socket: On hit: 65% chance to remove a random buff from your opponent. Armor & other sockets: Your opponents healing is reduced by 30%. Backpack: Every 4s: Cleanse a random debuff.',
        name: 'flawless_amethyst',
        display_name: 'Flawless Amethyst',
        rarity: 4,
        type: 5,
        subtype: null,
        cost: 8,
        class: [1, 2],
        id: 71
    },
    {
        description: 'Weapon socket: On hit: 100% chance to remove a random buff from your opponent. Armor & other sockets: Your opponents healing is reduced by 40%. Backpack: Every 2.5s: Cleanse a random debuff.',
        name: 'perfect_amethyst',
        display_name: 'Perfect Amethyst',
        rarity: 5,
        type: 5,
        subtype: null,
        cost: 16,
        class: [1, 2],
        id: 72
    },
    {
        description: 'Weapon socket: 25% chance to inflict 1 Poison. Armor & other sockets: 10% chance to resist Poison. Backpack: Every 13s: Use 1 Poison of your opponent to gain 2 Regeneration.',
        name: 'chipped_emerald',
        display_name: 'Chipped Emerald',
        rarity: 1,
        type: 5,
        subtype: null,
        cost: 1,
        class: [1, 2],
        id: 73
    },
    {
        description: 'Weapon socket: 35% chance to inflict 1 Poison. Armor & other sockets: 15% chance to resist Poison. Backpack: Every 11s: Use 1 Poison of your opponent to gain 2 Regeneration.',
        name: 'flawed_emerald',
        display_name: 'Flawed Emerald',
        rarity: 2,
        type: 5,
        subtype: null,
        cost: 2,
        class: [1, 2],
        id: 74
    },
    {
        description: 'Weapon socket: 50% chance to inflict 1 Poison. Armor & other sockets: 20% chance to resist Poison. Backpack: Every 9s: Use 1 Poison of your opponent to gain 2 Regeneration.',
        name: 'regular_emerald',
        display_name: 'Regular Emerald',
        rarity: 3,
        type: 5,
        subtype: null,
        cost: 4,
        class: [1, 2],
        id: 75
    },
    {
        description: 'Weapon socket: 60% chance to inflict 1 Poison. Armor & other sockets: 25% chance to resist Poison. Backpack: Every 7s: Use 1 Poison of your opponent to gain 2 Regeneration.',
        name: 'flawless_emerald',
        display_name: 'Flawless Emerald',
        rarity: 4,
        type: 5,
        subtype: null,
        cost: 8,
        class: [1, 2],
        id: 76
    },
    {
        description: 'Weapon socket: 80% chance to inflict 1 Poison. Armor & other sockets: 35% chance to resist Poison. Backpack: Every 4s: Use 1 Poison of your opponent to gain 2 Regeneration.',
        name: 'perfect_emerald',
        display_name: 'Perfect Emerald',
        rarity: 5,
        type: 5,
        subtype: null,
        cost: 16,
        class: [1, 2],
        id: 77
    },
    {
        description: 'Weapon socket: Lifesteal 10% of damage dealt. Armor & other sockets: Increase healing by 10%. Backpack: Every 5s: Steal 1 life.',
        name: 'chipped_ruby',
        display_name: 'Chipped Ruby',
        rarity: 1,
        type: 5,
        subtype: null,
        cost: 1,
        class: [1, 2],
        id: 78
    },
    {
        description: 'Weapon socket: Lifesteal 15% of damage dealt. Armor & other sockets: Increase healing by 15%. Backpack: Every 4s: Steal 1 life.',
        name: 'flawed_ruby',
        display_name: 'Flawed Ruby',
        rarity: 2,
        type: 5,
        subtype: null,
        cost: 2,
        class: [1, 2],
        id: 79
    },
    {
        description: 'Weapon socket: Lifesteal 20% of damage dealt. Armor & other sockets: Increase healing by 20%. Backpack: Every 4s: Steal 2 life.',
        name: 'regular_ruby',
        display_name: 'Regular Ruby',
        rarity: 3,
        type: 5,
        subtype: null,
        cost: 4,
        class: [1, 2],
        id: 80
    },
    {
        description: 'Weapon socket: Lifesteal 25% of damage dealt. Armor & other sockets: Increase healing by 25%. Backpack: Every 4s: Steal 3 life.',
        display_name: 'Flawless Ruby',
    },
    {
        description: 'Weapon socket: Lifesteal 35% of damage dealt. Armor & other sockets: Increase healing by 35%. Backpack: Every 4s: Steal 5 life.',
        display_name: 'Perfect Ruby',
    },
    {
        description: 'Weapon socket: 20% chance to attack health directly, gain 1 Mana, and inflict 1 Cold. Armor & other sockets: 5 Mana gained: Gain 2 Block. Backpack: Every 11s: Inflict 1 Cold.',
        display_name: 'Chipped Sapphire',
    },
    {
        description: 'Weapon socket: 30% chance to attack health directly, gain 1 Mana, and inflict 1 Cold. Armor & other sockets: 5 Mana gained: Gain 3 Block. Backpack: Every 9s: Inflict 1 Cold.',
        display_name: 'Flawed Sapphire',
    },
    {
        description: 'Weapon socket: 50% chance to attack health directly, gain 1 Mana, and inflict 1 Cold. Armor & other sockets: 5 Mana gained: Gain 4 Block. Backpack: Every 7s: Inflict 1 Cold.',
        display_name: 'Regular Sapphire',
    },
    {
        description: 'Weapon socket: 70% chance to attack health directly, gain 1 Mana, and inflict 1 Cold. Armor & other sockets: 5 Mana gained: Gain 5 Block. Backpack: Every 5s: Inflict 1 Cold.',
        display_name: 'Flawless Sapphire',
    },
    {
        description: 'Weapon socket: 100% chance to attack health directly, gain 1 Mana, and inflict 1 Cold. Armor & other sockets: 5 Mana gained: Gain 7 Block. Backpack: Every 3.5s: Inflict 1 Cold.',
        display_name: 'Perfect Sapphire',
    },
    {
        description: 'Weapon socket: Attacks 10% faster. Armor & other sockets: 15% chance to resist a stun. Backpack: Every 11.5s: Regenerate 1 stamina. When your stamina is full, gain 1 Empower.',
        display_name: 'Chipped Topaz',
    },
    {
        description: 'Weapon socket: Attacks 15% faster. Armor & other sockets: 20% chance to resist a stun. Backpack: Every 9s: Regenerate 1 stamina. When your stamina is full, gain 1 Empower.',
        display_name: 'Flawed Topaz',
    },
    {
        description: 'Weapon socket: Attacks 20% faster. Armor & other sockets: 25% chance to resist a stun. Backpack: Every 7s: Regenerate 1 stamina. When your stamina is full, gain 1 Empower.',
        display_name: 'Regular Topaz',
    },
    {
        description: 'Weapon socket: Attacks 25% faster. Armor & other sockets: 35% chance to resist a stun. Backpack: Every 5s: Regenerate 1 stamina. When your stamina is full, gain 1 Empower.',
        display_name: 'Flawless Topaz',
    },
    {
        description: 'Weapon socket: Attacks 35% faster. Armor & other sockets: 50% chance to resist a stun. Backpack: Every 3.5s: Regenerate 1 stamina. When your stamina is full, gain 1 Empower.',
        display_name: 'Perfect Topaz',
    },
    {
        damage: '4-7 (2.3/s)',
        stamina: '1.7 (0.7/s)',
        accuracy: '95%',
        cooldown: '2.4s',
        description: 'On hit: 40% chance to inflict 1 Blind. Shop entered: Dig up a random item.',
        display_name: 'Shovel',
    },
    {
        damage: '2-3 (1.8/s)',
        stamina: '1 (0.7/s)',
        accuracy: '90%',
        cooldown: '1.4s',
        description: 'On hit: 25% chance to gain 1 damage',
        display_name: 'Torch'
    },
    {
        description: 'On attacked (Melee): 35% chance to prevent 4 damage, remove 0.3 stamina from opponent, and gain 1 Spikes (up to 3)',
        display_name: 'Spiked Shield',
    },
    {
        description: 'Weapon socket: 12% chance to deal +6 damage and gain 1 Heat. Armor & other sockets: Start of battle: Gain 12 Block, resist 3 Cold. Backpack: After 5s: Gain 2 Heat, cleanse 2 debuffs.',
        display_name: 'Burning Coal',
    },
    {
        description: "They don't do anything. But you can sell them for profit!",
        display_name: 'Bunch of Coins',
    },
    {
        damage: '2-4 (2.1/s)',
        stamina: '0.7 (0.5/s)',
        accuracy: '90%',
        cooldown: '1.4s',
        description: 'Start of battle: Star weapons gain 2 damage.',
        display_name: 'Hero Sword',
    },
    {
        damage: '2-5 (1.2/s)',
        stamina: '0 (0/s)',
        accuracy: '95%',
        cooldown: '3s',
        description: 'On hit: Inflict 2 Poison. On stun: Triggers extra attack.',
        display_name: 'Poison Dagger',
    },
    {
        damage: '3-5 (2.5/s)',
        stamina: '0.5 (0.3/s)',
        accuracy: '90%',
        cooldown: '1.6s',
        description: 'Attacks 5% faster for every Spikes. After 5 hits, gain 1 Empower',
        display_name: 'Claws of Attack',
    },
    {
        damage: '2-4 (2.1/s)',
        stamina: '1 (0.7/s)',
        accuracy: '90%',
        cooldown: '1.4s',
        description: 'Start of battle: Gain 2 Heat. On hit: 25% chance to gain 1 damage. If you have at least 15 Heat, gain 2 damage instead.',
        display_name: 'Burning Torch',
    },
    {
        damage: '4-6 (2.5/s)',
        stamina: '1 (0.5/s)',
        accuracy: '90%',
        cooldown: '2s',
        description: 'On attack: Use 3 Mana to deal +6 damage and increase its damage by 2 until the end of battle.',
        display_name: 'Magic Staff',
    },
    {
        display_name: 'Strong Health Potion',
        description: 'Health drops below 50%: Consume this and heal for 18, gain 2 Regeneration, and cleanse 4 Poison.',
    },
    {
        display_name: 'Mana Potion',
        description: 'Mana used or health drops below 50%: Consume this and gain 4 Mana and 15 maximum health.',
    },
    {
        display_name: 'Platinum Customer Card',
        description: 'Reflect 2 debuffs per Star Legendary, Godly, and Unique item. Increases chance to find Unique items by 6%. You can obtain +1 Unique item.',
    },
    {
        damage: '2-5 (1.4/s)',
        stamina: '0 (0/s)',
        accuracy: '95%',
        cooldown: '2.5s',
        display_name: 'Spectral Dagger',
        description: 'On attack: Use 1 Mana to attack health directly and deal +7 damage. On stun: Triggers extra attack.',
    },
    {
        damage: '5-7 (3.3/s)',
        stamina: '1 (0.6/s)',
        accuracy: '90%',
        cooldown: '1.8s',
        display_name: 'Critwood Staff',
        description: 'On attack: Use 4 Mana to deal +7 damage and for the next 1s, all your attacks are critical',
    },
    {
        display_name: 'Carrot Goobert',
        description: '5 Star item activations: Cleanse 3 random debuffs and gain 2 Empower for 4s.',
    },
    {
        display_name: 'Steel Goobert',
        description: '5 Star item activations: Diamond Weapons gain +2 damage. Gain 16 Block.',
    },
    {
        display_name: 'Lucky Piggy',
        description: 'Shop entered: Gain 1 gold. Start of battle: Gain 2 Luck. Chance-based effects of the Star item are 25% more likely to trigger.',
    },
    {
        damage: '5-7 (3.8/s)',
        stamina: '1 (0.6/s)',
        accuracy: '90%',
        cooldown: '1.6s',
        display_name: 'Hero Longsword',
        description: 'Start of battle: Star Weapons gain 4 damage',
    },
    {
        damage: '4-5 (2/s)',
        stamina: '1 (0.5/s)',
        accuracy: '100%',
        cooldown: '2.2s',
        display_name: 'Falcon Blade',
        description: 'Attacks twice. Start of battle: Star items trigger 30% faster',
    },
    {
        damage: '6-7 (4.3/s)',
        stamina: '1.3 (0.9/s)',
        accuracy: '90%',
        cooldown: '1.5s',
        display_name: 'Eggscalibur',
        description: 'Deals +1 damage for each Star food. On attack: Use 13 Mana: Trigger all Star food.',
    },
    {
        damage: '6-8 (3.5/s)',
        stamina: '0.7 (0.3/s)',
        accuracy: '90%',
        cooldown: '2s',
        display_name: 'Pandamonium',
        description: 'Star Food activates: Inflict 1 Poison',
    },
    {
        damage: '3-6 (3.2/s)',
        stamina: '1 (0.7/s)',
        accuracy: '200%',
        cooldown: '1.4s',
        display_name: 'Magic Torch',
        description: 'On hit: Use 1 Mana: This and Star Weapons gain 1 damage',
    },
    {
        display_name: 'Strong Stone Skin Potion',
        description: 'When you have at least 20 Block: Consume this and convert 15 health to 35 Block and gain 2 Spikes for 4s.',
    },
    {
        damage: '4-7 (1.8/s)',
        stamina: '0 (0/s)',
        accuracy: '95%',
        cooldown: '3s',
        display_name: 'Bloody Dagger',
        description: 'On hit: Gain 1 Vampirism (up to 5 per battle). Heal 4 per Star Vampiric Item. On stun: Triggers extra attack.',
    },
    {
        damage: '4-6 (3.6/s)',
        stamina: '0.5 (0.4/s)',
        accuracy: '200%',
        cooldown: '1.4s',
        display_name: 'Manathirst',
        description: 'On hit: Gain 1 Mana. 20 Mana gained: Steal 12 life, increased by 1 for each Vampirism.',
    },
    {
        display_name: 'Strong Heroic Potion',
        description: 'Out of stamina: Consume this and regenerate 4 stamina and gain 1 Empower',
    },
    {
        display_name: 'Vampiric Armor',
        description: 'Start of battle: Convert 30 health into 60 Block and gain 2 Vampirism. Every 3s: Convert 10 health into 20 Block.',
    },
    {
        display_name: 'Strong Pestilence Flask',
        description: 'Opponent regenerates health: Consume this and inflice 3 Poison and 1 Poison to yourself. After 5s, inflict another 3 Poison.',
    },
    {
        display_name: 'Blood Goobert',
        description: 'Start of battle: Gain 2 Vampirism. 6 item activations: Steal 10 life, increased by 1 for each Vampirism.',
    },
    {
        damage: '8-11 (3.2/s)',
        stamina: '1.5 (0.5/s)',
        accuracy: '85%',
        cooldown: '3s',
        display_name: 'Tusk Piercer',
        description: 'Start of battle: Gain 2 Spikes. Star Weapon hits: Use 1 Spikes: Next attack with Tusk Piercer deals +8 damage.',
    },
    {
        damage: '6-9 (2.5/s)',
        stamina: '1.5 (0.5/s)',
        accuracy: '85%',
        cooldown: '3s',
        display_name: "Fortuna's Grace",
        description: "Start of battle: Gain 2 Luck. Star Weapon crits: Next attack with Fortuna's Grace hits twice",
    },
    {
        display_name: 'Vampiric Gloves',
        description: 'After 4s: Gain 5 Vampirism, Star items trigger 35% faster.',
    },
    {
        damage: '6-9 (2.5/s)',
        stamina: '1.5 (0.5/s)',
        accuracy: '85%',
        cooldown: '3s',
        display_name: "Belladonna's Whisper",
        description: "Star Weapon deals 7 damage: Next attack with Belladonna's Whisper inflicts +1 Poison. Deals 0.5 damage per Poison of your opponent.",
    },
    {
        damage: '4-8 (3.8/s)',
        stamina: '1.8 (1.1/s)',
        accuracy: '90%',
        cooldown: '1.6s',
        display_name: 'Bloodthorne',
        description: 'On hit: Convert 1 Regeneration into 1 Vampirism and 1 Spikes. Deals +1 damage for each Vampirism and Spikes.',
    },
    {
        display_name: 'Light Goobert',
        description: '6 item activations: Heal for 20 and inflict 6 Blind for 3s.',
    },
    {
        display_name: 'Staff of Unhealing',
        description: 'Every 2s: Heal for 10. Use 6 Mana: Heal +4 more and for 2s, healing also deals damage.',
    },
    {
        damage: '7-12 (6.8/s)',
        stamina: '1 (0.7/s)',
        accuracy: '95%',
        cooldown: '1.4s',
        display_name: 'Darksaber',
        description: 'Deal +0.5 damage for each debuff of your opponent. On attack: Use 1 Mana to inflict 1 Blind.',
    },
    {
        damage: '7-10 (5.3/s)',
        stamina: '1 (0.6/s)',
        accuracy: '100%',
        cooldown: '1.6s',
        display_name: 'Crossblades',
        description: 'Start of battle: The Star Weapon gains 10 damage. The diamond item triggers 60% faster.',
    },
    {
        damage: '5-12 (3.3/s)',
        stamina: '1 (0.7/s)',
        accuracy: '100%',
        cooldown: '1.4s',
        display_name: 'Holy Spear',
        description: 'On hit: Destroy 6 Block and cleanse 1 debuff for each Star free slot or Holy item in front of it. Use 25 Mana: Become invulnerable and attack 100% faster for 3s (once)',
    },
    {
        display_name: 'Rainbow Goobert Megasludge Alphapuddle',
        description: '6 item activations: Heal for 20, gain 20 Block, 2 Vampirism and 2 Empower, inflict 4 Blind, and give Star Weapons +4 damage.',
    },
    {
        display_name: 'Strong Demonic Flask',
        description: 'Opponent drops below 50%: Consume this and steal 0.4 life for each debuff of your opponent.',
    },
    {
        damage: '9-14 (5.8/s)',
        stamina: '0 (0/s)',
        accuracy: '90%',
        cooldown: '2s',
        display_name: 'Ruby Chonk',
        description: 'On hit: Gain 1 Heat. When you have at least 15 Heat, has a 30% chance to stun your opponent for 0.4s.',
    },
    {
        display_name: 'Rainbow Goobert Omegaooze Primeslime',
        description: '6 item activations: Heal for 20, gain 20 Block and 2 Vampirism, inflict 4 Blind and 4 Poison, and give Star Weapons +4 damage.',
    },
    {
        display_name: 'Cap of Discomfort',
        description: "Start of battle: Reduce damage taken by 25% for 5s. Opponent gains buff: 15% chance to nullify it. Your opponent's healing is reduced by 30%",
    },
]