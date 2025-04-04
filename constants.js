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
    }, {
        id: 3,
        name: 'Berserker'
    }, {
        id: 4,
        name: 'Pyromancer'
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
    }, {
        id: 6,
        name: 'Fire'
    }, {
        id: 7,
        name: 'Ice'
    }
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
        cost: 8,
        class: [1, 2],
        id: 3
    },
    {
        name: 'glowing_crown',
        display_name: 'Glowing Crown',
        description: 'Every 2.4s: Cleanse 1 Blind and heal for 5. Use 10 mana: Become invulnerable for 2s (once)',
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
        description: 'Gemstones are offered in the shop. Shop entered: Generate a chipped gemstone.',
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
        description: 'Playing cards are offered in the shop. Start of battle: Gain 2 Luck. Start revealing the star Playing card',
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
        description: 'Every 1.6s: Gain 1 Luck, 1 Spikes, or 1 Mana, depending on what you have the least of. Use 7 Block, 7 Luck, 7 Spikes, 7 Mana, and 27 Health: Give the star Weapon +27 damage',
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
        description: 'Randomly gain 1 Empower or 3 Mana and remove 2 Mana from opponent or remove 1 stamina from opponent. Triggers 10% faster for each Star item',
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
        description: 'Every 4.7s: Randomly gain 12 Block or 2 stamina or 2 Luck. Triggers 10% faster for each star item',
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
        description: 'Star item activates: 50% chance to gain 1 Mana. Use 35 Mana: Gain 20 random other buffs (once).',
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
        description: 'Start of battle: Gain 65 block. Gain 2 Regeneration for each star Holy item. Every 2.2s: Cleanse 2 Poison',
        name: 'holy_armor',
        display_name: 'Holy Armor',
        rarity: 4,
        type: 2,
        subtype: 2,
        cost: 13,
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
        description: 'Add 4 backpack slots. First Potion inside consumed: Gain a random buff. 4 Potions inside consumed: Cleanse 8 debuffs',
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
        description: 'Add 1 backpack slot. Start of battle: Gain 15 Block',
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
        description: 'Every 2.7s: Cleanse 1 random debuff. If you have at least 5 Luck: 55% chance to gain 1 Empower',
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
        description: 'Every 4.1s: Inflict 1 Poison',
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
        description: 'Every 4s: Gain 3 Block. 30% chance to remove 1 Vampirism from you opponent',
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
        description: 'Every 3.3s: Gain 1 Spikes and heal for 4',
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
        damage: '6-12 (1.8/s)',
        stamina: '0 (0/s)',
        cooldown: '5s',
        accuracy: '90%',
        description: 'On hit: 50% chance to stun for 0.5s. Fatigue starts: Gain 10 Heat',
        name: 'pumpkin',
        display_name: 'Pumpkin',
        rarity: 6,
        type: [4,12],
        subtype: 3,
        cost: 8,
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
        damage: '10-16 (3.3/s)',
        stamina: '0 (0/s)',
        accuracy: '90%',
        cooldown: '4s',
        description: 'Star items give 100% Vampirism. Attacks 5% faster for every Vampirism',
        name: 'blood_harvester',
        display_name: 'Blood Harvester',
        rarity: 6,
        type: 8,
        subtype: 5,
        cost: 7,
        class: [1, 2],
        id: 34
    },
    {
        min_damage: 2, // for calculating damage range,
        max_damage: 4, // for calculating damage range,
        stamina: 1.2,
        accuracy: 95,
        cooldown: 1.7,
        description: 'Opponent misses attack: Gain +2 damage for the next attack. On hit: 33% chance to inflict 1 Blind',
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
        min_damage: 2, // for calculating damage range,
        max_damage: 5, // for calculating damage range,
        stamina: 0,
        accuracy: 95,
        cooldown: 3.5,
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
        damage: '10-16 (9.3/s)',
        min_damage: 10, // for calculating damage range,
        max_damage: 16, // for calculating damage range,
        stamina: 0.8,
        accuracy: 60,
        cooldown: 1.4,
        description: 'On hit: Use 3 Luck to gain 3 damage. On miss: Gain 3 Luck',
        name: 'fancy_fencing_rapier',
        display_name: 'Fancy Fencing Rapier',
        rarity: 5,
        type: 8,
        subtype: null,
        cost: 12,
        class: [1, 2],
        id: 37
    },
    {
        min_damage: 10, // for calculating damage range,
        max_damage: 13, // for calculating damage range,
        stamina: 3,
        accuracy: 75,
        cooldown: 2,
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
        damage: '3-6 (2.8/s)',
        min_damage: 3, // for calculating damage range,
        max_damage: 6, // for calculating damage range,
        stamina: 1,
        accuracy: 90,
        cooldown: 1.6,
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
        min_damage: 40, // for calculating damage range,
        max_damage: 50, // for calculating damage range,
        stamina: 5,
        accuracy: 90,
        cooldown: 5,
        description: 'While you have at least 5 Empower, decrease stamina usage to 3 and cooldown to 3s',
        name: 'impractically_large_greatsword',
        display_name: 'Impractically Large Greatsowrd',
        rarity: 5,
        type: 8,
        subtype: null,
        cost: 14,
        class: [1, 2],
        id: 40
    },
    {
        min_damage: 8, // for calculating damage range,
        max_damage: 12, // for calculating damage range,
        stamina: 1.2,
        accuracy: 95,
        cooldown: 1.5,
        description: 'Use 3 Regeneration: Inflict 8 Blind for 6s (unstackable). Deals +1 damage for each Blind of your opponent',
        name: 'lightsaber',
        display_name: 'Lightsaber',
        rarity: 5,
        type: 8,
        subtype: 2,
        cost: 10,
        class: [1, 2],
        id: 41
    },
    {
        min_damage: 4, // for calculating damage range,
        max_damage: 5,
        stamina: 2,
        accuracy: 85,
        cooldown: 2.2,
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
        min_damage: 8, // for calculating damage range,
        max_damage: 10, // for calculating damage range,
        stamina: 1.5,
        accuracy: 90,
        cooldown: 1.8,
        description: 'On hit: Remove 1 damage gained from all opponent Weapons and gain 0.5 damage',
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
        min_damage: 3, // for calculating damage range,
        max_damage: 8, // for calculating damage range,
        stamina: 1,
        accuracy: 85,
        cooldown: 1.5,
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
        min_damage: 4, // for calculating damage range,
        max_damage: 9, // for calculating damage range,
        stamina: 2.2,
        accuracy: 80,
        cooldown: 2.2,
        description: 'On hit: Gain 1 Spikes. Deals +1 damage per Spikes',
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
        min_damage: 2, // for calculating damage range,
        max_damage: 4, // for calculating damage range,
        stamina: 0.3,
        accuracy: 90,
        cooldown: 1.3,
        description: 'Star Melee Weapons deal -2 damage. Deals +4 damage for each Star Melee Weapon',
        name: 'villian_sword',
        display_name: 'Villain Sword',
        rarity: 6,
        type: 8,
        subtype: 1,
        cost: 7,
        class: [1, 2],
        id: 46
    },
    {
        min_damage: 1, // for calculating damage range,
        max_damage: 3, // for calculating damage range,
        stamina: 1,
        accuracy: 90,
        cooldown: 1.4,
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
        description: 'Start of battle: Gain 4 heat. Reflect 3 debuffs. Hatches after 2 rounds in your backpack',
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
        cost: 8,
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
        description: 'On reveal: Your next hit is critical. If the number of cards before is odd, gain 2 Luck and 3 spikes',
        name: 'ace_of_spades',
        display_name: 'Ace of Spades',
        rarity: 2,
        type: 10,
        subtype: null,
        cost: 3,
        class: [2],
        id: 51
    },
    {
        description: 'On reveal: For each card before, gain 3 Mana and remove 3 random buffs from your opponent',
        name: 'darkest_lotus',
        display_name: 'Darkest Lotus',
        rarity: 5,
        type: 10,
        subtype: null,
        cost: 6,
        class: [2],
        id: 52
    },
    {
        description: 'On reveal: Increase effect damage by 8%. Deal 12 effect damage + 4 for each card before. Gain 4 Heat',
        name: 'holo_fire_lizard',
        display_name: 'Holo Fire Lizard',
        rarity: 4,
        type: 10,
        subtype: null,
        cost: 5,
        class: [2],
        id: 53
    },
    {
        description: 'On reveal: Deal 7 effect damage with 100% lifesteal. If the number of cards before is even, gain 2 Regeneration and your healing is increased by 6%.',
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
        description: 'On reveal: You take -10% effect damage. Gain 12 Block + 6 for each card before. Inflict 4 Cold',
        name: 'white_eyes_blue_dragon',
        display_name: 'White Eyes Blue Dragon',
        rarity: 4,
        type: 10,
        subtype: null,
        cost: 4,
        class: [2],
        id: 55
    },
    {
        description: 'Opponent drops below 50% health: Consume this and deal 0.3 effect damage for each debuff on your opponent',
        name: 'demonic_flask',
        display_name: 'Demonic Flask',
        rarity: 5,
        type: 11,
        subtype: null,
        cost: 7,
        class: [2],
        id: 56
    },
    {
        description: 'Health drops below 50%: Consume this and heal 12 and cleanse 4 Poison',
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
        cost: 7,
        name: 'pestilence_flask',
        rarity: 3,
        type: 11,
        subtype: null,
        class: [1,2,3,4],
        id: 59
    },
    {
        description: '45 block reached: Consume this and convert 15 health to 30 Block',
        display_name: 'Stoneskin Potion',
        cost: 6,
        name: 'stoneskin_potion',
        rarity: 3,
        type: 11,
        subtype: null,
        class: [1,2,3,4],
        id: 60
    },
    {
        description: 'Can only be thrown once per battle. On hit: Inflict 3 Cold. Star Weapon hits: Inflict 1 Cold',
        display_name: 'Artifact Stone: Cold',
        name: 'artifact_stone_cold',
        cost: 10,
        rarity: 6,
        type: [12],
        subtype: 
    },
    {
        min_damage: 6, // for calculating damage range,
        max_damage: 9, // for calculating damage range,
        stamina: 1.2,
        accuracy: 85,
        cooldown: 3,
        name: 'bow_and_arrow',
        description: 'Star Weapon hits: Bow and Arrow gains +1 damage (up to 7)',
        display_name: 'Bow and Arrow',
        cost: 8
    },
    {
        damage: '2-4 (1.2/s)',
        min_damage: 2, // for calculating damage range,
        max_damage: 4, // for calculating damage range,
        stamina: 0,
        accuracy: 70,
        cooldown: 2.5,
        description: 'Can only be thrown once per battle. On hit: Destroy 4 Block',
        name: 'stone',
        display_name: 'Stone',
        cost: 1
    },
    {
        description: 'Star items give 30% more Block. On attacked (melee): 30% chance to prevent 14 damage and remove 0.7 stamina from opponent.',
        display_name: 'Shield of Valor',
        name: 'shield_of_valor',
        cost: 12
    },
    {
        description: 'On attacked (melee): 30% chance to prevent 7 damage and remove 0.3 stamina from opponent',
        display_name: 'Wooden Buckler',
        name: 'wooden_buckler',
        cost: 4
    },
    {
        description: 'Health drops below 70%: Gain 1 Luck, 1 Empower, and 15 Block (once)',
        display_name: 'Dragonskin Boots',
        name: 'dragonskin_boots',
        cost: 6
    },
    {
        description: 'Weapon socket: On hit: 20% chance to remove a random buff from your opponent. Armor & other sockets: Reduce opponent\'s healing by 15%. Backpack: Every 3.2s: Cleanse a random debuff',
        display_name: 'Chipped Amethyst',
        name: 'chipped_amethyst',
        rarity: 1,
        type: 5,
        subtypee: null,
        class: [1,2,3,4],
        cost: 1
    },
    {
        description: 'Weapon socket: On hit: 30% chance to remove a random buff from your opponent. Armor & other sockets: Reduce opponent\'s healing by 20%. Backpack: Every 2.5s: Cleanse a random debuff',
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
        description: 'Weapon socket: On hit: 45% chance to remove a random buff from your opponent. Armor & other sockets: Reduce opponent\'s healing by 25%. Backpack: Every 2s: Cleanse a random debuff',
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
        description: 'Weapon socket: On hit: 65% chance to remove a random buff from your opponent. Armor & other sockets: Reduce opponent\'s healing by 30%. Backpack: Every 1.6s: Cleanse a random debuff',
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
        description: 'Weapon socket: On hit: 100% chance to remove a random buff from your opponent. Armor & other sockets: Reduce opponent\'s healing by 40%. Backpack: Every 1s: Cleanse a random debuff',
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
        description: 'Weapon socket: 35% chance to inflict 1 Poison. Armor & other sockets: 10% chance to resist Poison. Backpack: After 3s: Gain 1 Regeneration',
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
        description: 'Weapon socket: 50% chance to inflict 1 Poison. Armor & other sockets: 15% chance to resist Poison. Backpack: After 4s: Gain 2 Regeneration',
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
        description: 'Weapon socket: 80% chance to inflict 1 Poison. Armor & other sockets: 20% chance to resist Poison. Backpack: After 4s: Gain 3 Regeneration',
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
        description: 'Weapon socket: 80% chance to inflict 2 Poison. Armor & other sockets: 25% chance to resist Poison. Backpack: After 3.5s: Gain 4 Regeneration',
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
        description: 'Weapon socket: 100% chance to inflict 3 Poison. Armor & other sockets: 35% chance to resist Poison. Backpack: After 3s: Gain 6 Regeneration',
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
        description: 'Weapon socket: Gain 10% lifesteal. Armor & other sockets: Increase healing by 10%. Backpack: After 5s: Deal 4 effect damage with 100% lifesteal',
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
        description: 'Weapon socket: Gain 15% lifesteal. Armor & other sockets: Increase healing by 15%. Backpack: After 5s: Deal 6 effect damage with 100% lifesteal',
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
        description: 'Weapon socket: Gain 20% lifesteal. Armor & other sockets: Increase healing by 20%. Backpack: After 5s: Deal 10 effect damage with 100% lifesteal',
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
        description: 'Weapon socket: Gain 25% lifesteal. Armor & other sockets: Increase healing by 25%. Backpack: After 5s: Deal 15 effect damage with 100% lifesteal',
        display_name: 'Flawless Ruby',
        name: 'flawless_ruby',
        cost: 8
    },
    {
        description: 'Weapon socket: Gain 35% lifesteal. Armor & other sockets: Increase healing by 35%. Backpack: After 5s: Deal 30 effect damage with 100% lifesteal',
        display_name: 'Perfect Ruby',
        name: 'perfect_ruby',
        cost: 16
    },
    {
        description: 'Weapon socket: 15% chance to ignore block, gain 1 Mana, and inflict 1 Cold. Armor & other sockets: 5 Mana gained: Gain 2 Block. After 3s: Inflict 1 Cold',
        display_name: 'Chipped Sapphire',
        name: 'chipped_sapphire',
        cost: 1
    },
    {
        description: 'Weapon socket: 25% chance to ignore block, gain 1 Mana, and inflict 1 Cold. Armor & other sockets: 5 Mana gained: Gain 3 Block. After 4s: Inflict 2 Cold',
        display_name: 'Flawed Sapphire',
        name: 'flawed_sapphire',
        cost: 2
    },
    {
        description: 'Weapon socket: 40% chance to ignore block, gain 1 Mana, and inflict 1 Cold. Armor & other sockets: 5 Mana gained: Gain 4 Block. After 4s: Inflict 3 Cold',
        display_name: 'Regular Sapphire',
        name: 'regular_sapphire',
        cost: 4
    },
    {
        description: 'Weapon socket: 60% chance to ignore block, gain 1 Mana, and inflict 1 Cold. Armor & other sockets: 5 Mana gained: Gain 5 Block. After 3.5s: Inflict 4 Cold',
        display_name: 'Flawless Sapphire',
        name: 'flawless_sapphire',
        cost: 8
    },
    {
        description: 'Weapon socket: 80% chance to ignore block, gain 1 Mana, and inflict 1 Cold. Armor & other sockets: 5 Mana gained: Gain 7 Block. After 3s: Inflict 6 Cold',
        display_name: 'Perfect Sapphire',
        name: 'perfect_sapphire',
        cost: 16
    },
    {
        description: 'Weapon socket: Attacks 10% faster. Armor & other sockets: 10% chance to resist a stun. 4% chance to resist critical hits. Backpack: Increase base stamina regeneration by +8%',
        display_name: 'Chipped Topaz',
        name: 'chipped_topaz',
        cost: 1
    },
    {
        description: 'Weapon socket: Attacks 15% faster. Armor & other sockets: 15% chance to resist a stun. 6% chance to resist critical hits. Backpack: Increase base stamina regeneration by +12%',
        display_name: 'Flawed Topaz',
        name: 'flawed_topaz',
        cost: 2
    },
    {
        description: 'Weapon socket: Attacks 20% faster. Armor & other sockets: 20% chance to resist a stun. 8% chance to resist critical hits. Backpack: Increase base stamina regeneration by +20%',
        display_name: 'Regular Topaz',
        name: 'regular_topaz',
        cost: 4
    },
    {
        description: 'Weapon socket: Attacks 25% faster. Armor & other sockets: 30% chance to resist a stun. 10% chance to resist critical hits. Backpack: Increase base stamina regeneration by +30%',
        display_name: 'Flawless Topaz',
        name: 'flawless_topaz',
        cost: 8
    },
    {
        description: 'Weapon socket: Attacks 35% faster. Armor & other sockets: 35% chance to resist a stun. 15% chance to resist critical hits. Backpack: Increase base stamina regeneration by +45%',
        display_name: 'Perfect Topaz',
        name: 'perfect_topaz',
        cost: 16
    },
    {
        damage: '5-8 (2.7/s)',
        min_damage: 5, // for calculating damage range,
        max_damage: 8, // for calculating damage range,
        stamina: 1.7,
        accuracy: 95,
        cooldown: 2.4,
        description: 'Shop entered: Dig up a random item. On hit: 40% chance to inflict 1 Blind.',
        display_name: 'Shovel',
        name: 'shovel',
        recipe: 'Broom + Pan'
    },
    {
        damage: '2-3 (1.8/s)',
        min_damage: 2, // for calculating damage range,
        max_damage: 3, // for calculating damage range,
        stamina: 1,
        accuracy: 90,
        cooldown: 1.4,
        description: 'On hit: 25% chance to gain 1 damage',
        display_name: 'Torch',
        name: 'torch',
        recipe: 'Coal + Wooden Sword'
    },
    {
        description: 'On attacked (Melee): 30% chance to prevent 7 damage, remove 0.3 stamina from opponent, and gain 1 Spikes (up to 5)',
        display_name: 'Spiked Shield',
        name: 'spiked_shield',
        recipe: 'Tusk + Wooden Buckler'
    },
    {
        description: 'Weapon socket: 12% chance to deal +6 damage and gain 1 Heat. Armor & other sockets: Start of battle: Gain 15 Block, resist 5 Cold. Backpack: After 5s: Gain 2 Heat, cleanse 3 debuffs',
        display_name: 'Burning Coal',
        name: 'burning_coal',
        recipe: 'Coal + fire source'
    },
    {
        description: "They don't do anything. But you can sell them for profit!",
        display_name: 'Bunch of Coins',
        name: 'bunch_of_coins',
        recipe: 'Piggybank + Hammer'
    },
    {
        min_damage: 2, // for calculating damage range,
        max_damage: 4, // for calculating damage range,
        stamina: 0.7,
        accuracy: 90,
        cooldown: 1.4,
        description: 'Start of battle: Star weapons gain 2 damage',
        display_name: 'Hero Sword',
        name: 'hero_sword',
        recipe: 'Whetstone + Wooden Sword'
    },
    {
        min_damage: 4, // for calculating damage range,
        max_damage: 7, // for calculating damage range,
        stamina: 0,
        accuracy: 95,
        cooldown: 2.2,
        description: 'On hit: Inflict 2 Poison. On stun: Triggers extra attack',
        display_name: 'Poison Dagger',
        recipe: 'Dagger + Pestilence Flask'
    },
    {
        min_damage: 4, // for calculating damage range,
        max_damage: 5, // for calculating damage range,
        stamina: 0.5,
        accuracy: 90,
        cooldown: 1.6,
        description: 'Attacks 5% faster for every Spikes. After 4 hits, gain 1 Empower',
        display_name: 'Claws of Attack',
        recipe: 'Gloves of Haste + Tusk'
    },
    {
        min_damage: 2, // for calculating damage range,
        max_damage: 3, // for calculating damage range,
        stamina: 1,
        accuracy: 90,
        cooldown: 1.4,
        description: 'Start of battle: Gain 2 Heat. On hit: 30% chance to gain 1 damage.',
        display_name: 'Burning Torch',
        recipe: 'Torch + fire item'
    },
    {
        min_damage: 6, // for calculating damage range,
        max_damage: 8, // for calculating damage range,
        stamina: 1,
        accuracy: 90,
        cooldown: 1.8,
        description: 'On attack: Use 3 Mana to deal +6 damage and gain 2 damage.',
        display_name: 'Magic Staff',
        name: 'magic_staff',
        recipe: 'Broom + Mana Orb'
    },
    {
        display_name: 'Strong Health Potion',
        name: 'strong_health_potion',
        description: 'Health drops below 50%: Consume this and heal for 24, gain 3 Regeneration, and cleanse 4 Poison.',
        recipe: 'Healing Herbs + Health Potion'
    },
    {
        display_name: 'Mana Potion',
        name: 'mana_potion',
        description: 'Mana used or health drops below 50%: Consume this and gain 4 Mana and 18 maximum health',
        recipe: 'Blueberry + Health Potion'
    },
    {
        display_name: 'Platinum Customer Card',
        description: 'Reflect 2 debuffs per Star Legendary, Godly, and Unique item. 20% chance to protect your buffs from removal. Chance to find Unique items +30%. You can obtain +1 Unique item',
        recipe: 'Customer Card + Customer Card'
    },
    {
        min_damage: 1, // for calculating damage range,
        max_damage: 3, // for calculating damage range,
        stamina: 0,
        accuracy: 95,
        cooldown: 3,
        display_name: 'Spectral Dagger',
        description: 'On attack: Use 1 Mana to attack health directly and deal +6 damage. On stun: Triggers extra attack',
        recipe: 'Dagger + Mana Potion'
    },
    {
        damage: '6-8 (3.9/s)',
        stamina: '1 (0.6/s)',
        accuracy: '90%',
        cooldown: '1.8s',
        display_name: 'Critwood Staff',
        description: 'On attack: Use 3 Mana to deal +7 damage and for the next 1.2s, all your attacks are critical.',
        recipe: 'Acorn Collar + Magic Staff'
    },
    {
        display_name: 'Carrot Goobert',
        name: 'carrot_goobert',
        description: '6 Star item activations: Cleanse 4 random debuffs and gain 2 Empower for 8s',
        recipe: 'Carrot + Carrot + Goobert'
    },
    {
        display_name: 'Steel Goobert',
        name: 'steel_goobert',
        description: '5 Star item activations: Diamond Weapons gain +2 damage. Gain 16 Block',
        recipe: 'Goobert + Hero Sword'
    },
    {
        display_name: 'Lucky Piggy',
        description: 'Shop entered: Gain 1 gold. Start of battle: Gain 2 Luck. Chance-based effects of the Star item are 15% more likely to trigger',
        recipe: 'Lucky Clover + Lucky Clover + Piggybank'
    },
    {
        damage: '8-10 (5.6/s)',
        stamina: '1 (0.6/s)',
        accuracy: '90%',
        cooldown: '1.6s',
        display_name: 'Hero Longsword',
        description: 'Start of battle: Star Weapons gain 3 damage',
        recipe: 'Hero Sword + Whetstone + Whetstone'
    },
    {
        damage: '4-5 (2.6/s)',
        stamina: '1 (0.5/s)',
        accuracy: '100%',
        cooldown: '1.7s',
        display_name: 'Falcon Blade',
        description: 'Start of battle: Star items trigger 40% faster. Attacks twice',
        recipe: 'Gloves of Haste + Gloves of Haste + Hero Sword'
    },
    {
        damage: '8-9 (5.3/s)',
        stamina: '1.3 (0.9/s)',
        accuracy: '90%',
        cooldown: '1.6s',
        display_name: 'Eggscalibur',
        description: ' On attack: Use 11 Mana: Trigger all Star food. Deals +1 damage for each Star food.',
        recipe: 'Heroic Potion + Pan'
    },
    {
        damage: '9-11 (5/s)',
        stamina: '0.7 (0.3/s)',
        accuracy: '90%',
        cooldown: '2s',
        display_name: 'Pandamonium',
        description: 'Star Food activates: Inflict 1 Poison',
        recipe: 'Corrupted Crystal + Pan'
    },
    {
        damage: '3-6 (3/s)',
        stamina: '1 (0.7/s)',
        accuracy: '200%',
        cooldown: '1.5s',
        display_name: 'Magic Torch',
        name: 'magic_torch',
        description: 'On hit: Use 1 Mana: This and Star Weapons gain 1 damage',
        recipe: 'Mana Potion + Torch'
    },
    {
        display_name: 'Strong Stone Skin Potion',
        name: 'strong_stoneskin_potion',
        description: 'When you have at least 45 Block: Consume this and convert 15 health to 35 Block and gain 2 Spikes for 4s.',
        recipe: 'Stone + Stone + Stone Skin Potion'
    },
    {
        damage: '4-7 (2.3/s)',
        stamina: '0 (0/s)',
        accuracy: '95%',
        cooldown: '2.4s',
        display_name: 'Bloody Dagger',
        description: 'On hit: Gain 1 Vampirism (up to 5 per battle). Heal 4 per Star Vampiric Item. On stun: Triggers extra attack.',
        recipe: 'Blood Gem + Dagger'
    },
    {
        damage: '5-7 (4.3/s)',
        stamina: '0.5 (0.4/s)',
        accuracy: '200%',
        cooldown: '1.4s',
        display_name: 'Manathirst',
        name: 'manathirst',
        description: 'On hit: Gain 2 Mana. 30 Mana gained: Deal 10 effect damage with 100% lifesteal. Deal +1 for each Vampirism.',
        recipe: 'Hungry Blade + Mana Orb'
    },
    {
        display_name: 'Strong Heroic Potion',
        name: 'strong_heroic_potion',
        description: 'Out of stamina: Consume this and regenerate 4 stamina and gain 1 Empower',
        recipe: 'Banana + Heroic Potion'
    },
    {
        display_name: 'Vampiric Armor',
        name: 'vampiric_armor',
        description: 'Start of battle: Convert 45 health into 100 Block and gain 2 Vampirism. Every 2.8s: Convert 10 health into 20 Block.',
        recipe: 'Blood Gem + Leather Armor'
    },
    {
        display_name: 'Strong Pestilence Flask',
        description: 'Opponent regenerates health: Consume this and inflice 3 Poison and 1 Poison to yourself. After 5s, inflict another 3 Poison',
        recipe: 'Fly Argaric + Pestilence Flask'
    },
    {
        display_name: 'Blood Goobert',
        description: 'Start of battle: Gain 2 Vampirism. 6 item activations: Deal 10 effect damage. Deal +1 for each Vampirism.',
        recipe: 'Blood Gem + Goobert'
    },
    {
        damage: '9-12 (3.5/s)',
        stamina: '1.2 (0.4/s)',
        accuracy: '85%',
        cooldown: '3s',
        display_name: 'Tusk Piercer',
        description: 'Start of battle: Gain 4 Spikes. Star Weapon hits: Use 1 spike to deal +8 damage on the next attack.',
        recipe: 'Bow and Arrow + Tusk'
    },
    {
        damage: '6-9 (2.5/s)',
        stamina: '1.2 (0.4/s)',
        accuracy: '85%',
        cooldown: '3s',
        display_name: "Fortuna's Grace",
        description: "Start of battle: Gain 3 Luck. Star Weapon crits: Attack twice on the next attack.",
        recipe: 'Bow and Arrow + Lucky Clover + Lucky Clover'
    },
    {
        display_name: 'Vampiric Gloves',
        description: 'After 4s: Gain 6 Vampirism, Star items trigger 35% faster',
        recipe: 'Blood Gem + Gloves of Haste'
    },
    {
        damage: '9-12 (3.5/s)',
        stamina: '1.2 (0.4/s)',
        accuracy: '85%',
        cooldown: '3s',
        display_name: "Belladonna's Whisper",
        description: "For every 5 damage star Weapon deals: Inflict +1 Poison on the next attack. Deals 0.5 damage per Poison of your opponent.",
        recipe: "Bow and Arrow + Pestilence Flask"
    },
    {
        damage: '4-8 (3.8/s)',
        stamina: '1.6 (1/s)',
        accuracy: '90%',
        cooldown: '1.6s',
        display_name: 'Bloodthorne',
        description: 'On hit: Convert 1 Regeneration into 1 Vampirism and 1 Spikes. Deals +1 damage for each Vampirism and Spikes',
        recipe: "Hungry Blade + Thorn Whip"
    },
    {
        display_name: 'Light Goobert',
        description: '6 item activations: Heal for 22 and inflict 7 Blind for 3s',
        recipe: 'Goobert + Lightsaber'
    },
    {
        display_name: 'Staff of Unhealing',
        stamina: '1.5 (0.8/s)',
        cooldown: '2s',
        description: 'Every 2s: Heal for 22. Use 5 Mana: For 2s, deal 100% of your healing as effect damage.',
        recipe: 'Demonic Flask + Magic Staff'
    },
    {
        damage: '9-14 (7.7/s)',
        stamina: '1.4 (0.9/s)',
        accuracy: '95%',
        cooldown: '1.5s',
        display_name: 'Darksaber',
        description: 'On attack: Use 1 Mana to inflict 1 Blind. Deal +0.5 damage for each debuff of your opponent.',
        recipe: 'Corrupted Crystal + Lightsaber'
    },
    {
        damage: '8-11 (6.8/s)',
        stamina: '1 (0.7/s)',
        accuracy: '100%',
        cooldown: '1.4s',
        display_name: 'Crossblades',
        description: 'Start of battle: The Star Weapon gains 10 damage. The diamond item triggers 60% faster. On hit: Gain 1 damage and attack 4% faster.',
        recipe: 'Falcon Blade + Hero Longsword'
    },
    {
        damage: '13-18 (6.2/s)',
        stamina: '0.4 (0.2/s)',
        accuracy: '200%',
        cooldown: '2.5s',
        display_name: 'Holy Spear',
        description: 'On hit: Destroy 10 Block and cleanse 1 debuff for each Star free slot or Holy item. Use 10 Mana: Become invulnerable and attack 100% faster for 3s (once)',
        recipe: 'Glowing Crown + Spear'
    },
    {
        display_name: 'Rainbow Goobert Megasludge Alphapuddle',
        description: '6 item activations: Heal for 20, gain 20 Block, 2 Vampirism and 2 Empower, inflict 3 Blind, and give Star Weapons +4 damage',
        recipe: 'Blood Goobert + Carrot Goobert + Goobert + Light Goobert + Steel Goobert'
    },
    {
        display_name: 'Strong Demonic Flask',
        description: "Opponent drops below 50% or you drop below 25%: Consume this and deal 0.6 damage for each debuff of your opponent with 100% lifesteal. For 3s, reduce opponent's healing by 30%",
        recipe: 'Corrupted Crystal + Demonic Flask'
    },
    {
        damage: '15-20 (8/s)',
        stamina: '0 (0/s)',
        accuracy: '90%',
        cooldown: '2.2s',
        display_name: 'Ruby Chonk',
        description: 'On hit: Gain 1 Heat. When you have at least 12 Heat, has a 30% chance to stun your opponent for 0.4s',
        recipe: 'Holo Fire Lizard + Ruby Whelp'
    },
    {
        display_name: 'Rainbow Goobert Omegaooze Primeslime',
        description: '6 item activations: Heal for 20, gain 20 Block and 2 Vampirism, inflict 3 Blind and 3 Poison, and give Star Weapons +4 damage',
        recipe: 'Blood Goobert + Light Goobert + Goobert + Poison Goobert + Steel Goobert'
    },
    {
        display_name: 'Cap of Discomfort',
        description: "Start of battle: Reduce damage taken by 25% for 5s. Opponent gains buff: 15% chance to nullify it. Your opponent's healing is reduced by 30%.",
        recipe: 'Corrupted Crystal + Cap of Resilience'
    },
    {
        display_name: 'Tim',
        description: 'Weapon socket: On hit: 50% chance to steal a random buff from your opponent. Armor & other sockets: 25% chance to resist a debuff or critical hits. Backpack: Opponent drops below 30% health: Heal for 50 and gain 5 empower.',
        cost: 11
    },
    {
        display_name: 'Gingerbread Jerry',
        description: 'Start of battle: Gain 40 maximum health. Every 3s: Use 1 Luck, 1 Heat, and 1 Mana: Gain 1 Empower, 3 Regeneration, and 20 maximum health.',
        cost: 8
    },
    {
        display_name: 'Mr. Struggles',
        description: 'Every 3s: Inflict Fatigue damage. On debuffed: 25% chance to inflict the same debuff. Health drops below 50%: Star items trigger 140% faster for 8s (once). Plushies are offered in the shop.',
        cost: 10
    },
    {
        display_name: 'Piercing Arrow',
        description: 'Star Weapons deal +50% critical damage. They remove 15 Block on crit. Diamond Item activates: 65% chance to gain 1 Luck.',
        cost: 10
    },
    {
        display_name: 'Yggdrasil Leaf',
        description: 'Start of battle: Gain 1 Mana and 2 Regeneration for each Star Nature item. 5 Mana used: Heal for 5 and cleanse 2 debuffs',
        cost: 10
    },
    {
        display_name: 'Poison Ivy',
        description: 'You have a 5% chance to resist debuffs for each Star Nature item. Spike gained: Inflict 2 Poison. Opponent reaches 19 Poison: They take +25% damage.',
        cost: 10
    },
    {
        damage: '4-7 (2.6/s)',
        stamina: '0 (0/s)',
        accuracy: '95%',
        cooldown: '2.1s',
        display_name: 'Cursed Dagger',
        description: 'On stun: Triggers extra attack. On hit: Inflict 2 random debuffs. This and Star items have +1% accuracy and +1% critical hit chance per debuff of your opponent.',
        cost: 10
    },
    {
        display_name: 'Nocturnal Lock Lifter',
        description: 'Start of battle: Gain 2 Vampirism. Star Weapons steal 25% life + 8% per Diamond Vampiric item. Your healing is amplified by 25%.',
        cost: 10
    },
    {
        display_name: 'Ranger Bag',
        description: 'Add 6 backpack slots. Items inside gain 12% critical hit chance + 3% for each Luck.',
        cost: 16
    },
    {
        display_name: 'Storage Coffin',
        description: 'Add 8 backpack slots. Item inside activates: 25% chance to inflict 1 Poison',
        cost: 20
    },
    {
        display_name: 'Moon Shield',
        description: 'Star items give +30% Block. For ever 12 Block they gain, gain 1 Mana. On attacked (melee/ranged): 30% chance to prevent 12 damage and remove 0.7 stamina from your opponent',
        recipe: 'Mana Orb + Shield of Valor'
    },
    {
        display_name: 'Corrupted Armor',
        description: 'Star Holy items gain Dark. 10% chance for each Star Dark item to protect debuffs on your opponent from being cleansed. Start of battle: Gain 7085 Block. Ever 2.4s: Cleanse 2 debuffs and inflict them on your opponent.',
        recipe: 'Corrupted Crystal + Holy Armor'
    },
    {
        damage: '15-20 (8/s)',
        stamina: '2 (0.9/s)',
        accuracy: '85%',
        cooldown: '2.2s',
        display_name: 'Dancing Dragon',
        description: 'You have a 2% chance to resist debuffs for each Luck. Start of battle: Gain 2 Heat and 2 Luck for each Star Magic item. Deals +0.5 damage per Heat. ',
        cost: 9
    },
    {
        display_name: 'Wolpertinger',
        description: 'Increase stamina regeneration by 0.7% for each buff you have. Every 5s: Gain 3 of the buff you have the least of. Triggers 15% faster for each Star Pet',
        cost: 12
    },
    {
        display_name: 'Heart Container',
        description: 'Every 3s: Gain 1 Regeneration. User 7 Regeneration: Gain 100 maximum health, 2 Empower and your healing is increased by 15% (once).',
        cost: 12
    },
    {
        display_name: 'The Fool',
        description: 'On reveal: Cards are revealed 50% faster. If this is the first card in the chain: Gain 1 Empower.',
        cost: 5
    },
    {
        display_name: 'Heart of Darkness',
        description: "Every 4s: Steal 2 buffs, prioritizing Regeneration. Triggers 20% faster for each star Dark item. Use 7 Regeneration: Gain 100 maximum health, 5 Empower, and your opponent's healing is reduced by 40% (once)",
        recipe: 'Corrupted Cystal + Heart Container'
    },
    {
        display_name: 'Stone Helm',
        description: 'Start of battle: Reduce damage taken by 25% for 5s and gain 35 Block. 25% chance to resist critical hits. 30% chance to resist stuns.',
        recipe: 'Cap of Resilience + Stone Skin Potion'
    },
    {
        display_name: 'Shortbow',
        damage: '2-3 (1.5/s)',
        accuracy: '85%',
        cooldown: '1.7s',
        cost: 4
    },
    {
        display_name: 'Rat',
        description: 'Every 3.3s: Deal 5 Effect damage. 75% chance to inflict 1 Poison. 10% chance to inflict 1 Blind. Triggers 155 faster for each star Pet or Food.',
        cost: 4
    },
    {
        display_name: 'Flame',
        description: 'Start of Battle: Gain 1 Heat.',
        cost: 1
    }, {
        display_name: 'Squirrel',
        description: 'Every 4s: Steal a random buff. Triggers 15% faster for each Star Pet or Food.',
        cost: 5
    }, {
        display_name: 'Draconic Orb',
        description: '15 Heat reached: Your next 3 hits are critical. Every 3.8s: Remove 1 Spikes from your opponent and gain 1 Heat per removed Spikes.',
        cost: 8
    }, {
        display_name: 'Tusk Poker',
        damage: '2-3 (1.5/s)',
        stamina: '0.7 (0.4/s)',
        accuracy: '85%',
        cooldown: '1.7s',
        description: 'On hit: 50% chance to gain 1 Spikes.',
        recipe: 'Shortbow + Tusk'
    }, {
        display_name: 'Reverse!',
        description: 'On reveal: Reflect 3 debuffs. If there are no duplicate cards before, steal 3 buffs.',
        cost: 3
    }, {
        display_name: 'Axe',
        damage: '3-6 (2.3/s)',
        stamina: '1.4 (0.7/s)',
        accuracy: '85%',
        cooldown: '2s',
        description: 'On hit: Gain 1 damage',
        cost: 6
    }, {
        display_name: 'Chili Pepper',
        description: 'Every 4.8s: Gain 1 Heat and heal 5. If you have at least 10 Heat, cleanse 1 debuff.',
        cost: 5
    }, {
        display_name: 'Spell Scroll: Frostbolt',
        description: 'Every 3s: Deal 5 Effect-damage and inflict 4 Cold for 3s. Max uses: 3 + 1 for each Star Cold-item (except Spell scrolls)',
        cost: 4
    }, {
        display_name: 'Book of Ice',
        description: 'Every 3.2s: Use 2 Mana to inflict 3 Cold. 10% chance to cast the star Spell scroll for free.',
        cost: 10
    }, {
        display_name: 'Frozen Buckler',
        description: 'On attacked (melee weapon): 30% chance to prevent 12 damage, remove 0.7 stamina from opponent and inflict 1 Cold (up to 10).',
        cost: 8,
        recipe: 'Wooden Buckler + Snowball'
    }, {
        display_name: 'Ice Armor',
        description: 'Start of battle: Gain 80 Block and inflict 4 Cold. Every 5s: Use 1 Heat to inflict 2 Cold and gain 10 Block.',
        cost: 11,
        recipe: 'Leather Armor + Snowball'
    }, {
        display_name: 'Hedgehog',
        description: 'Every 5s: Deal 10 Effect-damage + 0.5 for each Spikes. Health drops below 70%: Gain 2 Spikes and 25 Block (once). Triggers 15% faster for each Star Pet or Food.',
        cost: 7
    }, 
    {
        display_name: 'Fortuna\'s Hope',
        damage: '2-3 (1.5/s)',
        stamina: '0.7 (0.4/s)',
        accuracy: '100%',
        cooldown: '1.7s',
        description: 'On hit: 75% chance to gain 1 Luck.',
        cost: 8,
        recipe: 'Shortbow + Lucky Clover + Lucky Clover'
    }, {
        display_name: 'Miss Fortune',
        description: 'Every 2.1s: Use 1 Luck to gain 3 buffs of the tupe of which you have the most.',
        cost: 7
    }, {
        display_name: 'Dragon Claws',
        description: '10% chance to resist Poison. During Battle Rage: Star items trigger 40% faster.',
        cost: 4,
        recipe: 'Gloves of Haste + Forging Hammer / Gloves of Haste + Utility Pouch'
    }, {
        display_name: 'Dragonskin Boots',
        description: '20% chance to resist Cold. Battle Rage entered: Cleanse 3 debuffs, gain 1 Empower and 20 Block.',
        cost: 6,
        recipe: 'Leather Boots + Forging Hammer / Leather Boots + Utility Pouch'
    }, 
    {
        display_name: 'Dragonscale Armor',
        description: 'Battle Rage entered: Gain 40 Block. During Battle Rage: Damage taken reduced by 10%.',
        cost: 7,
        recipe: 'Leather Armor + Forging Hammer / Leather Armor + Utility Pouch'
    }, {
        display_name: 'Chili Goobert',
        description: '6 star item activations: Heal for 12 and gain 2 Heat.',
        cost: 11,
        recipe: 'Goobert + Chili Pepper'
    }, {
        display_name: 'Belladonna\'s Shade',
        damage: '2-11 (3.8/s)',
        stamina: '0.7 (0.4/s)',
        accuracy: '85%',
        cooldown: '1.7s',
        description: 'On hit: 70% chance to inflict 2 Poison and a random debuff.',
        cost: 11,
        recipe: 'Shortbow + Pestilence Flask'
    }, {
        display_name: 'Strong Mana Potion',
        description: 'Mana used or health drops below 50%: Consume this and gain 9 Mana and 25 maximum health.',
        cost: 7,
        recipe: 'Mana Potion + Cauldron'
    }, {
        display_name: 'Spiked Collar',
        description: 'Battle Rage lasts 2s longer. Battle Rage entered: Gain 1 Spikes.',
        cost: 6
    }, {
        display_name: 'Stone Armor',
        description: 'Items use +20% stamina. Start of battle: Gain 110 Block. Every 4s: Remove 1 Spikes and 2 Empower from opponent. Health drops below 50%: Gain Block equal to 40% of your missing health (once).',
        cost: 13,
        recipe: 'Stoneskin Potion + Leather Armor'
    }, {
        display_name: 'Molten Dagger',
        min_damage: 3,
        max_damage: 7,
        stamina: 0,
        accuracy: 95,
        cooldown: 3.5,
        description: 'On hit: Use 1 Heat to gain 2 damage. On stun: Triggers extra attack.',
        cost: 6,
        recipe: 'Dagger + Flame + Flame'
    }, {
        display_name: 'Double Axe',
        min_damage: 6,
        max_damage: 12,
        stamina: 2,
        accuracy: 85,
        cooldown: 1.8,
        description: 'On hit: Gain 2 damage. Battle rage entered: Trigger extra attack. Damage gain increased to 3.',
        cost: 12,
        recipe: 'Axe + Axe'
    }, {
        display_name: 'Molten Spear',
        min_damage: 3,
        max_damage: 8,
        stamina: 1,
        accuracy: 65,
        cooldown: 1.5,
        description: 'Before miss: Use 1 Heat to hit instead and deal +5 damage. On hit: Destroy 5 Block for each star Fire item.',
        cost: 8,
        recipe: 'Spear + Flame + Flame'
    },{
        display_name: 'Burning Swort',
        min_damage: 2,
        max_damage: 4,
        stamina: 1,
        accuracy: 90,
        cooldown: 1.6,
        description: 'On hit: 60% chance to gain 1 Heat. 7 Heat gained: This and star Weapons gain +1 damage.',
        cost: 9,
        recipe: 'Hero Sword + Flame + Flame'
    },{
        display_name: 'Vampiric Potion',
        description: 'Both characters drop bwlow 50% health: Consume this and gain 3 Vampirism and deal 15 Effect-damage with 100% lifesteal.',
        cost: 8,
        recipe: 'Strong Health Potion + Blood Gem'
    }, {
        display_name: 'Gloves of Power',
        description: 'Start of battle: Star Weapons deal +20% damage but attack 10% slower. Star Weapon hits: Gain 7 Block.',
        cost: 10,
        recipe: 'Gloves of Haste + Stoneskin Potion'
    }, {
        display_name: 'Frostbite',
        min_damage: 4,
        max_damage: 7,
        stamina: 1,
        accuracy: 90,
        cooldown: 1.7,
        description: 'On hit: 45% chance to inflict 1 Cold. Opponent reaches 30 Cold: Gain 5 Vampirism (once). Deals +1 damage per Vampirism and +0.4 per Cold of your opponent.',
        cost: 11,
        recipe: 'Hungry Blade + Snowball'
    },{
        display_name: 'Mrs. Struggles',
        description: 'Every 4s: Remove 1 buff of each type from your opponent. Triggers 10% faster for each star Dark-item.',
        cost: 7
    }, {
        display_name: 'Badger Rune',
        description: 'Weapon sockets: On hit: Attack 3% faster. Armor & other sockets: During Battle Rage: Reduce Melee/Ranged damage taken by 7. Backpack: Items use -10% stamina.',
        cost: 4
    }, {
        display_name: 'Elephant Rune',
        description: 'Weapon sockets: On hit: 25% chance to stun for 0.5s (cooldown 3s). Armor & other sockets: 40% chance to resist debuffs for 4s. Backpack: Gain 40 maximum health.',
        cost: 4
    }, {
        display_name: 'Cheese',
        description: 'Every 3.8s: Gain 10 maximum health and a random buff.',
        cost: 8
    }, {
        display_name: 'Courage Puppy',
        min_damage: 5,
        max_damage: 7,
        stamina: 0,
        accuracy: 95,
        cooldown: 3.5,
        description: 'Deals +2 damage for each Star Pet.',
        cost: 7,
    },{
        display_name: 'Power Puppy',
        description: 'Every 3.2s: Randomly gain 1 Luck or 1 Regeneration or 1 Empower. Triggers 10% faster for each star Pet.',
        cost: 7
    }, {
        display_name: 'Hawk Rune',
        description: 'Weapon sockets: Critical hit chance +12%. Critical damage +15%. Armor & other sockets: 25% chance to resist Blind. Backpack: Every 2.8s: Inflict 1 Blind.',
        cost: 4
    }, {
        display_name: 'Chain Whip',
        min_damage: 4,
        max_damage: 9,
        stamina: 2.1,
        accuracy: 85,
        cooldown: 2.4,
        description: 'During Battle Rage additionally heal for 8. Deals +1 damage for each buff you removed from your opponent. On hit: Remove 2 random buffs from your opponent.',
        cost: 8,
        recipe: 'Thorn Whip + Forging Hammer / Thorn Whip + Utility Pouch'
    },{
        display_name: 'Brass Knuckles',
        min_damage: 3,
        max_damage: 5,
        stamina: 0,
        accuracy: 90,
        cooldown: 2.5,
        description: 'On hit: 50% chance to stun for 0.3s, this and star Items gain 5% accuracy and 5% critical hit chance. During Battle Rage: Trigger 50% faster.',
        cost: 10,
    },{
        display_name: 'Burning Blade',
        min_damage: 10,
        max_damage: 12,
        stamina: 1,
        accuracy: 90,
        cooldown: 1.6,
        description: 'On hit: Gain 1 Heat. 6 Heat gained: This and star Weapons gain 1 damage.',
        cost: 17,
        recipe: 'Hero Longsword + Flame + Flame / Burning Sword + Whetstone + Whetstone'
    },{
        display_name: 'Divine Potion',
        description: 'You reached 10 debuffs: Consume this and cleanse 10 debuffs.',
        cost: 7
    }, {
        display_name: 'Strong Vampiric Potion',
        description: 'Both characters drop below 80% health: Consume this and gain 5 Vampirism and 35% lifesteal for 6s.',
        cost: 12,
        recipe: 'Vampiric Potion + Cauldron'
    }, {
        display_name: 'Wisdom Puppy',
        description: 'Every 4s: Gain 10 Block and cleanse 1 Cold. Triggers 15% faster for each Star Pet.',
        cost: 7,
    }, {
        display_name: 'Wolf Emblem',
        description: 'Wolf companions are offered in the shop. Star Weapons have 10% critical hit chance (+12% for each Diamond Pet). Every 3s: If you have at least 10 Block, gain 1 Empower. Otherwise, gain 10 Block.',
        cost: 10
    }, {
        display_name: 'Emerald Egg',
        description: 'Start of battle: Gain 3 Luck. Hatches after 2 rounds in your backpack.',
        cost: 10
    }, {
        display_name: 'Sapphire Egg',
        description: 'Start of battle: Gain 4 Mana. Hatches after 2 rounds in your backpack.',
        cost: 10
    }, {
        display_name: 'Amethyst Egg',
        description: 'Start of battle: Inflict 4 random debuffs. Hatches after 2 rounds in your backpack.',
        cost: 10
    }, {
        display_name: 'Flame Whip',
        min_damage: 6,
        max_damage: 10,
        stamina: 1.5,
        accuracy: 90,
        cooldown: 1.7,
        description: 'On hit: Use 1 Spikes to gain 4 Heat and deal +8 damage.',
        cost: 10,
        recipe: 'Thorn Whip + Flame + Flame'
    },{
        display_name: 'Staff of Fire',
        min_damage: 10,
        max_damage: 12,
        stamina: 1,
        accuracy: 90,
        cooldown: 1.8,
        description: 'On attack: Use 2 Mana and 2 Heat to gain 6 damage.',
        cost: 18,
        recipe: 'Magic Staff + Draconic Orb'
    },{
        display_name: 'Phoenix',
        min_damage: 15,
        max_damage: 20,
        stamina: 0,
        accuracy: 85,
        cooldown: 2.5,
        description: 'On attack: Lose 11 health. Before defeat: Use all your heat to reincarnate with 6 health per Heat (once).',
        cost: 11,
    },{
        display_name: 'Moon Armor',
        description: 'Start of battle: Gain 50 Block + 20 Block for each Star Mana-item. Every 2.6s: Gain 3 Mana and reflect 2 debuffs.',
        cost: 19,
        recipe: 'Holy Armor + Mana Orb'
    }, {
        display_name: 'Strong Divine Potion',
        description: 'You reached 10 debuffs: Consume this and clenase 10 debuffs and gain 8 random buffs.',
        cost: 15,
        recipe: 'Divine Potion + Cauldron'
    }, {
        display_name: 'Busted Blade',
        min_damage: 30,
        max_damage: 50,
        stamina: 5,
        accuracy: 95,
        cooldown: 5,
        description: 'During Battle Rsage: Debcrease stamina usage to 3 and cooldown to 3s. Deals +5 damage per Empower.',
        cost: 14,
        recipe: 'Impractically Large Greatsword + Forging Hammer / Impractically Large Greatsword + Utility Pouch'
    },{
        display_name: 'Cheese Goobert',
        description: '5 Star item activations: Gain 20 maximum health and 2 random buffs.',
        cost: 14,
        recipe: 'Goobert + Cheese'
    }, {
        display_name: 'Rainbow Goobert Deathslushy Mansquisher',
        description: '9 Star item activations: Gain 20 maximum health, 20 Block, 2 Vampirism and 2 random buffs, inflict 3 Blind, and Star Weapons gain 4 damage.',
        cost: 57,
        recipe: 'Cheese Goobert + Light Goobert + Steel Goobert + Blood Goobert'
    }, {
        display_name: 'Armored Courage Puppy',
        min_damage: 7,
        max_damage: 9,
        stamina: 0,
        accuracy: 95,
        cooldown: 3.5,
        description: 'Cannot be blocked by shields or trigger Spikes. Deals +2 damage for each Star Pet.',
        cost: 7,
        recipe: 'Courage Puppy + Forging Hammer / Courage Puppy + Utility Pouch'
    },{
        display_name: 'Armored Wisdom Puppy',
        description: 'Every 4s: Gain 14 Block and cleanse 1 Cold. Increase Block gain by 1. Triggers 15% faster for each Star Pet.',
        cost: 7,
        recipe: 'Wisdom Puppy + Forging Hammer / Wisdom Puppy + Utility Pouch'
    }, {
        display_name: 'Armored Power Puppy',
        description: 'Every 2.8s: Randomly gain 1 Luck or 1 Regeneration or 1 Empower. Triggers 10% faster for each Star Pet. Triggers 20% faster for each Star Food.',
        cost: 7,
        recipe: 'Power Puppy + Forging Hammer / Power Puppy + Utility Pouch'
    }, {
        display_name: 'Emerald Whelp',
        min_damage: 5,
        max_damage: 10,
        stamina: 0,
        accuracy: 90,
        cooldown: 2.1,
        description: 'Start of battle: Gain 3 Luck. On hit: Inflict 3 Poison.',
        cost: 14,
    },{
        display_name: 'Sapphire Whelp',
        min_damage: 5,
        max_damage: 10,
        stamina: 0,
        accuracy: 90,
        cooldown: 2.1,
        description: 'Start of battle: Gain 4 Mana. On hit: Use 1 Mana to Gain 5 Block and a random other buff.',
        cost: 14,
    },{
        display_name: 'Amethyst Whelp',
        min_damage: 5,
        max_damage: 10,
        stamina: 0,
        accuracy: 90,
        cooldown: 2.1,
        description: 'Start of battle: Inflict 4 random debuffs. On hit: Remove a random buff from your opponent.',
        cost: 14,
    },{
        display_name: 'Obsidian Dragon',
        min_damage: 11,
        max_damage: 16,
        stamina: 0,
        accuracy: 90,
        cooldown: 2.1,
        description: '10 Heat gained: Gain 2 damage and the next hit of the Star Weapon is critical.',
        cost: 18,
        recipe: 'Ruby Whelp + Draconic Orb'
    },{
        display_name: 'Sun Shield',
        description: 'Star items gained 12 Block: Deal 4 Effect-damage. On attacked (melee/ranged): 30% chance to prevent 15 damage and remove 0.7 stamina from your opponent.',
        cost: 14,
        recipe: 'Shield of Valor + Flame + Flame'
    }, {
        display_name: 'Sun Armor',
        description: 'Star Fire-items gain Holy. Start of battle: Gain 70 Block. Gain 1 Heat for each Star Holy-item. Every 3s: Use 1 Heat to heal for 12 and cleanse 2 debuffs.',
        cost: 15,
        recipe: 'Holy Armor + Flame + Flame'
    }, {
        display_name: 'Rainbow Goobert Epicglob Uberviscous',
        description: '6 Star item activations: Heal for 14, gain 20 Block, 2 Vampirism and 4 Heat, inflict 3 Blind, and Star Weapons gain 4 damage.',
        cost: 54,
        recipe: 'Chili Goobert + Light Goobert + Steel Goobert + Blood Goobert'
    }, {
        display_name: 'Ice Dragon',
        min_damage: 15,
        max_damage: 20,
        stamina: 0,
        accuracy: 90,
        cooldown: 2.1,
        description: 'On hit: Inflict 1 Cold. Opponent reaches 10 Cold: Gain 60 Block. You take -20% Effect-damage.',
        cost: 14,
        recipe: 'Ruby Whelp + White-Eyes Blue Dragon'
    },{
        display_name: 'Big Bowl of Treats',
        description: 'Every 3.7s: Gain 2 random buffs and make Star Food trigger 25% faster (up to 100%). All your Pets have a 20% chance to activate twice. Friends of the forest are offered in the shop.',
        cost: 10
    }, {
        display_name: 'Mega Clover',
        description: 'Sale chance +5%. Chance to find Unique-items +20%. Shop entered: Generate two Lucky Clovers. 15 Luck reached: Gain 25 random other buffs.',
        cost: 10
    }, {
        display_name: 'Snake',
        description: '4% chance for each Luck to protect Poison on your opponent from being cleansed. Start of battle: Gain 4 Luck and 50 maximum health for each Star Pet. Every 2.3s: Inflict 2 Poison.',
        cost: 10
    }, {
        display_name: 'Cauldron',
        description: 'Shop enetered: Upgrade an adjacent Potion. Every 3.5s: Heal for 20 or gain 6 Mana or gain 5 Heat. Triggers 15% faster for each Star Food or Potion.',
        cost: 10
    }, {
        display_name: 'Forging Hammer',
        min_damage: 2,
        max_damage: 5,
        stamina: 0,
        accuracy: 95,
        cooldown: 3.5,
        description: 'Deals additional +1 damage per Empower.',
        cost: 3
    }, {
        display_name: 'Anvil',
        description: 'Item crafted: Generate a Flame. For each Star crafted item, the Diamond Weapons deal +1 damage and use -5% stamina.',
        cost: 10
    }, {
        display_name: 'Deerwood Gaurdian',
        description: 'Damage taken reduced by 10%. Battle Rage lasts 0.8s longer for each Star Nature-item. Every 1s during Battle Rage: Heal for 13 and gain 3 Mana.',
        cost: 10
    }, {
        display_name: 'Shaman Mask',
        description: 'Runes are offered in the shop. Start of battle: Gain 1 Luck for each socketed Gemstone. Every 3.4s: Use 2 Luck to gain 5 random buffs.',
        cost: 10,
    }, {
        display_name: 'Friendly Fire',
        description: 'Every 2.8s: Use 1 Mana to gain 2 Heat. Triggers 10% faster for each Star Fire-item. 20 Heat reached: Gain 5 Luck. 40 Heat reached: Gain 15 Regeneration. 60 Heat reached: Deal 100 Effect-damage.',
        cost: 10
    }, {
        display_name: 'Burning Banner',
        description: '25% chance to protect your buffs from removal and your opponent\'s debuffs from cleansing. Star Holy-item activates: 50% chance to inflict 1 Blind for 5s. Every 3.8s: Remove 2 buffs from your opponent and gain 2 Regeneration.',
        cost: 10
    }, {
        display_name: 'Dark Lantern',
        description: 'Start of battle: Lose 50% health. Before defeat: Reincarnate with 50% health and befome invulnerable for 1.5s (once). On reincarnation: Deal 5 Effect-damage for each Star Fire-item and inflict 7 debuffs for each Diamond Dark-item.',
        cost: 10,
    }, {
        display_name: 'Frozen Flame',
        description: 'Start of battle: Gain 30 Block for each Star Ice-item. 6 Heat gained: Inflict 2 COld. For each Cold of your opponent, the Diamond item has +1.5% critical hit chance and +2% critical damage. Additional Ice-items are offered in the shop.',
        cost: 10
    }, {
        display_name: 'Dragon Nest',
        description: 'Start of battle: Gain 2 Luck, 2 Regeneration, 4 Mana, and 2 Heat. Star Dragon attacks: Heal for 5. Star Gradon eggs hatch after 1 round. Additional dragon eggs are offered in the shop.',
        cost: 10
    }, {
        display_name: 'Duffle Bag',
        description: 'Add 6 backpack slots. Health drops below 50%: Enter Battle Rage for 5s (once). During Battle Rage: Items inside trigger 30% faster. You take 22% reduced damage.',
        cost: 16
    }, {
        display_name: 'Fire Pit',
        description: 'Add 9 backpack slots. Shop entered: Spend 1 Gold to generate a Flame. Start of battle: Gain 5 maximum health for each Fire-item inside.',
        cost: 20
    }, 
    {
        display_name: 'Serpent Staff',
        min_damage: 8,
        max_damage: 10,
        stamina: 1,
        accuracy: 90,
        cooldown: 1.8,
        description: 'On attack: Use 4 Mana to gain 2 damage and inflict 1 Poison for each 4 damage dealt. You have 30% chance to duplicate Poison you inflict.',
        cost: 17,
        recipe: 'Mana Staff + Pestilence Flask'
    },
    {
        display_name: 'Spiked Staff',
        min_damage: 10,
        max_damage: 12,
        stamina: 1,
        accuracy: 90,
        cooldown: 1.8,
        description: 'On attack: Use 3 Mana to gain 2 Empower, and during Battle Rage also gain 2 Spikes.',
        cost: 16,
        recipe: 'Mana Staff + Spiked Collar'
    },
    {
        display_name: 'Thornbloom',
        min_damage: 7,
        max_damage: 12,
        stamina: 2.1,
        accuracy: 80,
        cooldown: 2.1,
        description: 'On hit: Gain 1 Spikes. 60% chance to gain 1 Empower. Empower gained: Gain 11 maximum health. Deals +1 damage per Spikes.',
        cost: 14,
        recipe: 'Thorn Whip + Heroic Potion'
    },
    {
        display_name: 'King Crown',
        description: 'Every 2.4s: Heal for 8 and protect 1 buff from removal. Use 10 Mana: Become invulnerable for 2.5s (once). Effects of Gemstones socketed in this are increased by 50%',
        cost: 17,
        recipe: 'Glowing Crown + Box of Riches'
    }, {
        display_name: 'King GOobert',
        description: '6 Star item activations: Heal for 35, protect 3 buffs from removal and use 4 Mana to become invulnerable for 1.5s (up to 3 times). Effects of Gemstones socketed in this are increased by 50%.',
        cost: 23,
        recipe: 'Goobert + King Crown'
    }, {
        display_name: 'Leaf Badge',
        description: 'Ranger items are offered in the shop. Star items gain 2% critical hit chance for each Luck. Every 2.2s: Gain 1 Luck.',
        cost: 5
    }, {
        display_name: 'Skull Badge',
        description: 'Reaper items are offered in the shop. Every 1.5s: Inflict a random debuff.',
        cost: 5
    }, {
        display_name: 'Wolf Badge',
        description: 'Berserker items are offered in the shop. Health drops below 50%: Enter Battle Rage for 5s (once). During Battle Rage: Star items trigger 25% faster. You take 18% reduced damage.',
        cost: 5
    }, {
        display_name: 'Flame Badge',
        description: 'Pyromancer items are offered in the shop. Shop entered: 65% chance to spend 1 Gold to generate a Flame. Start of battle: Gain 6 Heat.',
        cost: 5
    }, {
        display_name: 'Rainbow Badge',
        description: 'Items of all classes are offered in the shop. After 7s: Gain 1 of every type of buff.',
        cost: 5
    }, {
        display_name: 'Stone Badge',
        description: 'Your starting class items are no longer offered in the shop (even when this item is in storage). Shop entered: Generate items worth 1 Gold. Every 3s: Gain 4 Block.',
        cost: 5
    }, {
        display_name: 'Jimbo',
        description: 'On reveal: Gain 6 random buffs. For each pair before: Resist 1 critical hit. For each three of a kind before: Your Weapons use -25% stamina. For each four of a kind before: Activate 2 random revealed cards (except Jimbos).',
        cost: 5
    }, {
        display_name: 'Shiny Shell',
        description: 'After 5s: Heal for 5 + 3 for each Star Holy-item.',
        cost: 2
    }, {
        display_name: 'Unidentified Amulet',
        description: 'On buy: Gain a random effect.',
        cost: 6
    }, {
        display_name: 'Amulet of Life',
        description: 'Start of battle: Gain 20 maximum health. Your healing is increased by 20%.',
        cost: 6
    }, {
        display_name: 'Amulet of Steel',
        description: 'Start of battle: Gain 30 Block. Star items gained 40 Block: Gain 1 Empower.',
        cost: 6
    }, {
        display_name: 'Amulet of Feasting',
        description: 'Star Food triggers 40% faster. Food bought: Restock with a random Food.',
        cost: 6
    }, {
        display_name: 'Amulet of Energy',
        description: 'Start of battle: The Star item triggers 100% faster for 1s. Buff used: Refund 25% of the used buffs.',
        cost: 6
    }, {
        display_name: 'Amulet of the Wild',
        description: 'After 5s: Trigger the Star Pet and gain 4 Spikes. Return damage limit of Spikes against Melee and Ranged attacks +50%.',
        cost: 6
    }, {
        display_name: 'Amulet of Alchemy',
        description: 'Start of battle: Gain 3 random buffs. Star Potion consumed: 70% chance to repeat its effect after 2.5s.',
        cost: 6
    }, {
        display_name: 'Shell Totem',
        stamina: 2,
        description: 'Every 3.6s: If your health is above 70%, gain 1 Empower. Otherwise, heal for 8. Uses -15% stamina for each Star Holy-item.',
        cost: 5,
        recipe: 'Wooden Sword + Shiny Shell'
    }, {
        display_name: 'Oil Lamp',
        description: 'Start of battle: Gain 2 Heat. Every 3.4s: The Star Weapon gains 1 damage and 5% accuracy.',
        cost: 7
    }, {
        display_name: 'Toad',
        description: 'Star items gained 10 buffs: Heal for 12. Star items used 10 buffs: Gain 1 Luck and 1 Mana. Every 3.8: Gain 1 Luck and 1 Mana.',
        cost: 6
    }, {
        display_name: 'Box of Prosperity',
        description: 'Add 4 backpack slots. SHop entered: If this has at least 2 Godly or Unique items inside, generate a chipped Gemstone.',
        cost: 5,
        recipe: 'Box of Riches + Maneki-Neko'
    }, {
        display_name: 'Maneki-neko',
        description: 'Sale chance +3%. Value of Star items > 20 Gold: 15% chance to resist critical hits. Value of Star items > 40 Gold: Godly and Unique items trigger 15% faster.',
        cost: 10
    }, {
        display_name: 'Prismatic Orb',
        description: 'Start of battle: For each...Star Mana-item: Gain 2 Mana. Star Vampiric-item: Gain 1 Vampirism. Star Holy-item: Increase your healing by 4%. Star Dark-item: Inflict a random debuff. Every 8s: Gain 1 of every type of buff.',
        cost: 14
    },  {
        display_name: 'Prismatic Sword',
        min_damage: 10,
        max_damage: 16,
        stamina: 1,
        accuracy: 90,
        cooldown: 1.4,
        description: 'For each...Star Mana=item: +8% attack speed. Star Vampiric-item: +15% lifesteal. Star Holy-item: Gain +0.3 damage on hit. Star Dark-item: +10% chance to inflict 4 random debuffs on hit.',
        cost: 17,
        recipe: 'Wooden Sword + Prismatic Orb'
    }, {
        display_name: 'Stone Golem',
        min_damage: 8,
        max_damage: 13,
        stamina: 0,
        accuracy: 85,
        cooldown: 5.5,
        description: 'On hit: Gain 1 Empower. 30% chance to stun for 0.5s. Use 7 Regeneration: Reduce cooldown to 2.6s and gain 150 Block (once). Deals +10 damage for each Star Bag of Stones.',
        cost: 3
    },{
        display_name: 'Rat Chef',
        description: 'Start of battle: Gain 1 Regeneration for each Star Food. Every 7s: Regenerate 2 stamina and gain 1 Empower. Triggers 15% faster for each Star Pet or Food.',
        cost: 
    }, {
        display_name: 'Squirrel Archer',
        min_damage: 2,
        max_damage: 3,
        stamina: 0,
        accuracy: 85,
        cooldown: 3.2,
        description: 'On hit: Steal a random buff. Triggers 15% faster for each Star Pet or Food.',
        cost: 9,
        recipe: 'Squirrel + Shortbow'
    },{
        display_name: 'Goobling',
        description: '3 Star item activations: Heal for 4.',
        cost: 2
    }, {
        display_name: 'Doom Cap',
        description: 'Every 2.9: Inflict 3 Poison and reduce opponent\'s healing by 10%.',
        cost: 10,
        recipe: 'Fly Agaric + Demonic Flask'
    }, {
        display_name: 'Spicy Banana',
        description: 'Star Banana activates: 40% chance to gain 1 Heat. 1 stamina used: Heal for 3.',
        cost: 5
    }, {
        display_name: 'Smelly Wall',
        description: 'Star Garlic gains +5 Block. 18 Block gained: Inflict 1 Poison.',
        cost: 5
    }, {
        display_name: 'Piggy Pinata',
        description: 'Destroying a Piggybank generates items instead. Shop entered: Piggybanks have a 30% chance to explode. Star items gain 5% critical hit chance.',
        cost: 5
    }, {
        display_name: 'Investment Opportunity',
        description: 'Shop entered: Gain 1 Gold. Star item used buff: Gain 4 maximum health.',
        cost: 5
    }, {
        display_name: 'Superspacious',
        description: 'Bags appear more often in the shop and have +30% chance to be on sale. Star items trigger 7% faster for each free Diamond slot.',
        cost: 5
    }, {
        display_name: 'It\'s Slime Time!',
        description: 'Gooblings are offered in the shop. On buy: Generate a Goobling. Every 1.9s: Advance all Gooberts and GOoblings by 1 activation.',
        cost: 5
    }, {
        display_name: 'Smithing For Dummies',
        description: 'On buy: Generate a Whetstone. Start of battle: Star Crafted Weapons gain 1 damage and use -22% stamina.',
        cost: 5
    }, {
        display_name: 'Markswoman',
        description: 'Star Ranged-Weapons deal +20% damage, attack +25% faster and have +15% accuracy.',
        cost: 5
    }, {
        display_name: 'Mushroom Farm',
        description: 'SHop entered: If you have at least 2 Mushrooms, generate a Fly Agaric. Start of battle: Star Mushrooms trigger 50% faster.',
        cost: 5
    }, {
        display_name: 'Extra Angy',
        description: 'Battle Rage ended: After 4s, enter Battle Rage for 60% of the duration (once).',
        cost: 5
    }, {
        display_name: 'Everburning',
        description: 'Burning Sword and Burning Blade use -60% stamina. After 7s: Gain 1 Heat for each Flame.',
        cost: 5
    }, {
        display_name: 'Shielded',
        description: 'Star Shields have +30% chance to block. Star Armors trigger 60% faster.',
        cost: 5
    }, {
        display_name: 'Stoned',
        description: 'Stone or Stone GOlem dealt damage: Gain 65% of the damage as Block. While you have Block: You take -15% damage.',
        cost: 5
    }, {
        display_name: 'Mana Master',
        description: 'Mana Orbs gain +20 random buffs. Every 4.7s: Gain 3 Mana. Triggers 20% faster for each Star Mana-item.',
        cost: 5
    }, {
        display_name: 'Power of the Moon',
        description: 'Fatigue starts 5s earlier. Star Moon Armor activates: Inflict 1 Blind. Star Moon SHield activates: Reflect 1 debuff. Fatigue starts: Increase your maximum health by 65%.',
        cost: 5
    }, {
        display_name: 'Hardwood',
        description: 'Star Common Melee-Weapons deal +150% damage. Start of battle: Gain 20 Block for each Star Common item.',
        cost: 5
    }, {
        display_name: 'Acorn Ace',
        description: 'Acorn Collars have more Star slots. Items affected by Acorn Collar use -12% stamina. Critwood Staffs use -75% stamina.',
        cost: 5
    }, {
        display_name: 'Dark Ritual',
        description: 'After 17s: Inflict 20 debuffs, gain 10 Vampirism. Triggers 20% faster for each Star Dark-item.',
        cost: 5
    }, {
        display_name: 'Dragon Set',
        description: 'Every 1.2s during Battle Rage: Gain 1 Heat. If you have Dragonscale Armor, Dragonskin Boots and Dragon Claws: You have +2% lifesteal for each Heat (up to 20%).',
        cost: 5
    }, {
        display_name: 'Solaris',
        description: '15% chance to duplicate any Heat you gain. Star Sun SHield blocked damage: 60% chance to gain 1 Heat. Star Sun Armor uses Heat: Gain 16 Block.',
        cost: 5
    }, {
        display_name: 'Unstable Recombobulator',
        description: 'Shop entered: Consume this and Star items. Create different items based on the combined value. Every 4s: Gain 1 random buff and cleanse 1 debuff.',
        cost: 5
    }, {
        display_name: 'Artifact Stone: Death',
        min_damage: 7,
        max_damage: 9,
        stamina: 0,
        accuracy: 90,
        cooldown: 1.7,
        description: 'Can only be thrown once per battle. On hit: Inflict Fatigue damage. Star items have +8% critical hit chance per Fatigue level of your opponent.',
        cost: 8
    },
    {
        display_name: 'Cubert',
        description: 'Star item activates: 55% chance to gain 1 Regeneration. Diamond item activates: 55% chance to use 1 Regeneration to gain 1 Empower.',
        cost: 8
    }, {
        display_name: 'Unsettling Presence',
        description: 'Deal 30% of your healing as Effect-damage. Every 3s: Use a random buff to heal for 12.',
        cost: 10
    }, {
        display_name: 'Stable Recombobulator',
        description: 'Shop entered: Consume Star items. Create different items based on the combined value. Every 2.5s: Gain 1 random buff and cleanse 1 debuff.',
        cost: 6
    }, {
        display_name: 'Star of Courage',
        description: 'Chance to find Unique-items +5%. Your Weapons use -5% stamina. (Rewarded for starting as a random character.)',
        cost: 1
    }, {
        display_name: 'Time Dilator',
        description: 'Your and your opponent\'s Weapons attack 30% slower. Every 1s: your item with the highest cooldown triggers 6% faster.',
        cost: 8
    }, {
        display_name: 'Sack of Surprises',
        description: 'Game started: Replace this with random starting bags and items.',
        cost: 10
    }, {
        display_name: 'Vineweave Basket',
        description: 'Add 9 backpack slots. Your healing is amplified by 10% + 5% per Nature-item inside. In rounds 1 and 10, sale chance is increased by 20%.',
        cost: 20
    }, {
        display_name: 'Relic Case',
        description: 'Add 4 backpack slots. Every 3.2s: Weapons inside deal +5% damage and use -5% stamina.',
        cost: 12
    }, {
        display_name: 'Utility Pouch',
        description: 'Add 8 backpack slots. Weapons insde deal +30% damage but attack 30% slower. After 5s: Enter Battle Rage for 6s. During Battle Rage: +35% lifesteal.',
        cost: 18
    }, {
        display_name: 'Offering Bowl',
        description: 'Add 4 backpack slots. Start of battle: Gain 1 Empower. Shop entered: Consume all items inside. Create a Flame and different items based on the combined value.',
        cost: 8
    }, {
        display_name: 'Amulet of Darkness',
        description: '22 Effect-damage dealt: Inflict 1 random debuff. Star item activates: 30% chance to deal 7 Effect-damage.',
        cost: 6
    }, {
        display_name: 'Shepherd\'s Crook',
        description: 'Start of battle: Star Weapons gain 2 damage. 35% chance to protect your buffs from removal. 50% chance to resist Blind and Cold.',
        cost: 8,
        recipe: 'Broom + Whetstone'
    }, {
        display_name: 'Wonky Snowman',
        description: 'On buy: Split into 2 Snowballs.',
        cost: 8
    }, {
        display_name: 'Snowball',
        description: 'Start of battle: Inflict 2 Cold. Your opponent gains 15% less maximum health from items.',
        cost: 4
    }, {
        display_name: 'Snow Stick',
        min_damage: 6,
        max_damage: 9,
        stamina: 1.2,
        accuracy: 95,
        cooldown: 2.1,
        description: 'On hit: Inflict 3 Cold and 2 Cold to yourself.',
        cost: 8,
        recipe: 'Broom + Snowball'
    },{
        display_name: 'Stone Shoes',
        description: 'Health drops below 70%: Gain 1 Luck, 1 Empower, and 45 Block. Reduce Ranged/Effect-damage taken by 35% for 7s (once).',
        cost: 12,
        recipe: 'Leather Boots + Stoneskin Potion'
    }, {
        display_name: 'Katana',
        min_damage: 8,
        max_damage: 10,
        stamina: 1.4,
        accuracy: 90,
        cooldown: 1.7,
        description: 'On hit: Remove 1 damage gained in battle from all opponent Weapons and gain 1 damage. If your opponent has at least 20 buffs, remove 2 of the type they have the most of.',
        cost: 14,
        recipe: 'Ripsaw Blade + Whetstone'
    },{
        display_name: 'Just Stats',
        description: 'Start of battle: Gain 10% maximum health and 10% base stamina regeneration. Always offered in round 4.',
        cost: 5
    }, {
        display_name: 'Uniquely Unique',
        description: 'The Star item triggers 20% faster + 10% for each Diamond Unique item, Customer Card or Platinum Customer Card. Chance to find Unique-items +50%. You can obtain +2 Unique-items.',
        cost: 5
    }, {
        display_name: 'Heavy Drinking',
        description: 'Every 10s: Trigger the effect of a random Potion. Triggers 50% faster for each distinct Star Potion.',
        cost: 5
    }, {
        display_name: 'Girl Power',
        description: 'Every 6.7: Gain 2 Regeneration or 2 Empower, depending on which you have less of. Triggers 20% faster for each distinct Star Class item.',
        cost: 5
    }, {
        display_name: 'Blood Manipulation',
        description: 'Deal 15% of your healing as Effect-damage. Every 4s: Gain 1 Vampirism. Triggers 15% faster for each Star Vampiric-item.',
        cost: 5
    }, {
        display_name: 'Thornburst',
        description: 'Every 6.5s: tun for 0.3s and gain 2 Spikes (up to 5 times). Triggers 5% faster fo reach Spikes.',
        cost: 5
    }, {
        display_name: 'Heart of the Cards',
        description: 'Requires: Deck of Cards. Card revealed: Gain 3 Regeneration. If the card is at position 3 or highers in the chain, also gain 4 Mana.',
        cost: 5
    }, {
        display_name: 'Buy the Holy Light',
        description: 'Holy-Items have +20% chance to be on sale. Oil Lamps and Djinn Lamps gain Holy. Star Holy-Items trigger 40% faster.',
        cost: 5
    }, {
        display_name: 'Bagtacular',
        description: 'Fanny Packs give +5% trigger speed. Stamina Sacks give 5% base stamina regeneration. Potion Belts give 2 buffs when a Potion inside is consumed. Protective Purses give +15 Block.',
        cost: 5
    }, {
        display_name: 'More Stats',
        description: 'Start of battle: Gain 10% maximum health. Your Weapons deal +5% damage. Always offered in round 10.',
        cost: 5
    }, {
        display_name: 'Snowcake',
        description: 'Every 2.3s: Inflict 1 Cold. If your opponent has at least 10 Cold, increase Effect-damage by 10% and deal 10 Effect-damage.',
        cost: 6
    }, {
        display_name: 'Pop',
        min_damage: 2,
        max_damage: 3,
        stamina: 0,
        accuracy: 90,
        cooldown: 1.5,
        description: 'Attacks 4% faster for each Mana (up to 60%).',
        cost: 3
    },{
        display_name: 'Cthulhu',
        description: 'Every 3.5s: Deal 10 Effect-damage with 100% lifesteal and trigger a random Star Food. Star Food gains Dark. Triggers 15% faster for each Star Dark-item.',
        cost: 8
    }, {
        display_name: 'Sir Sand',
        description: 'Start of battle: Both players take -25% damage for 7s (unstackable). Inflict 2 Blind to both players.',
        cost: 5
    }, {
        display_name: 'Paradise Birb',
        description: 'Every 2.7s: Star items gain 7% chance to duplicate buffs they gain, heal 7% more and trigger 7% faster (up to 10 times).',
        cost: 22,
        recipe: 'Jynx Torquilla + Prismatic Orb'
    }, {
        display_name: 'Double Rainbow',
        description: 'Star items have 20% chance to duplicate buffs they gain. Every 6s: Gain a random buff. Triggers 15% faster for each Diamond Holy-item.',
        cost: 5
    }, {
        display_name: 'False Life',
        description: 'Items give +30% maximum health. Overhealed: Gain the overheal as maximum health. Every 6s: Heal for 10 + 4 for each Star Dark-item.',
        cost: 5
    }, {
        display_name: 'Full Body Protection',
        description: 'Star items give +30% Block. If you have exactly 1 Armor, Helmet and Shoes: Reduce Melee/Ranged/Effect-damage taken by 8. Every 5s: Gain 10 Block.',
        cost: 5
    }, {
        display_name: 'Repeater',
        description: 'After 12s: Repeat the Start of battle effects of the Star items.',
        cost: 5
    }, {
        display_name: 'Winged Boots',
        description: 'Health drops below 70%: Gain 1 Empower, cleanse 20 debuffs and dodge the next 3 Melee/Ranged-attacks (once).',
        cost: 13,
        recipe: 'Leather Boots + Divine Potion'
    }, {
        display_name: 'Echoing Battlecry',
        description: 'Every 15s: Repeat a random Star Start of battle effect (once per item). Triggers 50% faster for each Star Start of battle item.',
        cost: 5
    }, {
        display_name: 'Enchanted Weapons',
        description: 'Attack effects of the Star Weapons have a 20% chance to repeat. Every 5.2s: Gain 1 of the buff you have least of.',
        cost: 5
    }, {
        display_name: 'No Rush Please',
        description: 'Start of battle: Both players take -35% damage for 10s. Inflict 4 Cold.',
        cost: 5
    }, {
        display_name: 'Time Melting',
        description: 'Start of battle: Gain 5 Heat. Effect durations of Star items are increased by 60%.',
        cost: 5
    }, {
        display_name: 'Happy Bomb',
        description: 'After 12s: Use all your buffs, your opponent takes +4% damage for each buff used. Deal 30 Effect-damage.',
        cost: 7
    }, {
        display_name: 'Shelly',
        description: 'Cleanse effects have 25% chance to cleanse an additional debuff. Every 12s: Cleanse 6 debuffs and heal for 40. Triggers 15% faster for each Star Potion.',
        cost: 6,
        recipe: 'Shiny Shell + Health Potion'
    }, {
        display_name: 'Holdall',
        description: 'Add 6 backpack slots. Start of battle: Gain 8 Block for each Neutral item inside.',
        cost: 7,
        recipe: 'Leather Armor + Goobert'
    }, {
        display_name: 'Posion Spear',
        min_damage: 9,
        max_damage: 14,
        stamina: 1,
        accuracy: 85,
        cooldown: 1.5,
        description: 'On hit: Inflict 3 Poison and 2 Posion to yourself. Destroy 6 Block for each Star free slot or Nature-item.',
        cost: 13,
        recipe: 'Spear + Pestilence Flask'
    },{
        display_name: 'Dig Deeper',
        description: 'Requires: Shovel. Shovels dig up more valuable items. Start of battle: Inflict 2 Blind.',
        cost: 5
    }, {
        display_name: 'Knife to Meet Your',
        description: 'Daggers attack 40% faster. After 12s: Your Weapons deal +50% damage. Triggers 30% faster for each Star Dagger',
        cost: 5
    }, {
        display_name: 'Lil Chestnut',
        description: 'Shop refreshed: 30% chance for a Trade offer. Every 6s: Gain 3 buffs of the type you have most of. Triggers 1% faster for each Gold the Star items are worth.',
        cost: 5
    }, 
]