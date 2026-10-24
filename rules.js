const RULES={
  "edition": "Pathfinder First Edition",
  "templatesSource": "https://legacy.aonprd.com/bestiary/monsterAdvancement.html",
  "templateEligibilitySource": "https://legacy.aonprd.com/coreRulebook/spells/summonMonster.html",
  "templateNotes": [
    "Summon monster starred entries: good caster uses celestial, evil caster uses fiendish, neutral caster chooses either.",
    "Summon nature's ally does not automatically add celestial or fiendish.",
    "Fiendish is the PF1E template name; infernal is not its rules name.",
    "For all templates retain better existing darkvision, energy resistance and SR. Same-energy resistance does not add."
  ],
  "templates": {
    "celestial": {
      "darkvision": 60,
      "resistances": [
        "acid",
        "cold",
        "electricity"
      ],
      "drBypass": "evil",
      "smiteTarget": "evil"
    },
    "fiendish": {
      "darkvision": 60,
      "resistances": [
        "cold",
        "fire"
      ],
      "drBypass": "good",
      "smiteTarget": "good"
    },
    "entropic": {
      "darkvision": 60,
      "resistances": [
        "acid",
        "fire"
      ],
      "drBypass": "lawful",
      "smiteTarget": "lawful"
    },
    "resolute": {
      "darkvision": 60,
      "resistances": [
        "acid",
        "cold",
        "fire"
      ],
      "drBypass": "chaotic",
      "smiteTarget": "chaotic"
    }
  },
  "templateScaling": {
    "crIncrease": "HD >= 5 ? 1 : 0",
    "sr": "newCR + 5",
    "tiers": [
      {
        "minHD": 1,
        "maxHD": 4,
        "resistance": 5,
        "dr": 0
      },
      {
        "minHD": 5,
        "maxHD": 10,
        "resistance": 10,
        "dr": 5
      },
      {
        "minHD": 11,
        "resistance": 15,
        "dr": 10
      }
    ],
    "smite": {
      "usesPerDay": 1,
      "action": "swift",
      "attackBonus": "max(0, floor((Charisma-10)/2))",
      "damageBonus": "HD",
      "duration": "until target dies or creature rests",
      "notes": "Only applies against appropriate alignment. No paladin-style deflection AC or automatic double damage."
    }
  },
  "feats": [
    {
      "id": "augment",
      "name": "Augment Summoning",
      "source": "https://aonprd.com/FeatDisplay.aspx?ItemName=Augment+Summoning",
      "prerequisites": "Spell Focus (conjuration)",
      "scope": "any summon spell",
      "effects": {
        "strengthEnhancement": 4,
        "constitutionEnhancement": 4
      },
      "calculation": [
        "Use highest enhancement bonus, not sum with existing enhancement.",
        "Absent existing enhancement, +2 Str modifier and +2 Con modifier.",
        "HP +2 per HD; Fortitude +2; Str-based attack +2; CMB/CMD +2 unless these use a different ability.",
        "Str-based damage: recompute multiplier from new Str modifier; primary natural usually 1x, secondary 0.5x, sole natural attack usually 1.5x. Floor each modifier, do not blindly add +2 to every damage roll.",
        "Con-based ability DC +2; Str-based ability DC +2. Other DCs unchanged.",
        "Weapon Finesse melee attack using Dex does not receive Str attack bonus. Ranged attacks use their own ability; thrown damage may use Str.",
        "Con absent means no Con/HP/Fort change."
      ]
    },
    {
      "id": "superior",
      "name": "Superior Summoning",
      "source": "https://aonprd.com/FeatDisplay.aspx?ItemName=Superior+Summoning",
      "prerequisites": "Augment Summoning; caster level 3",
      "effects": {
        "additionalCreaturesWhenTotalGreaterThanOne": 1
      },
      "notes": "Strict actual-count interpretation: 1d3 result of 1 remains 1; table rulings may instead add +1 whenever lower-tier multi-summon mode is selected. Official feat text does not explicitly resolve that edge case. Single highest-tier summon never becomes 2."
    },
    {
      "id": "starlight",
      "name": "Starlight Summons",
      "source": "https://aonprd.com/FeatDisplay.aspx?ItemName=Starlight+Summons",
      "prerequisites": "Spell Focus (conjuration); able to cast summon nature's ally",
      "scope": "creatures you summon",
      "effects": {
        "feats": [
          "Blind-Fight"
        ],
        "conditionalSkillBonus": {
          "condition": "dim light or darkness",
          "Perception": 5,
          "Stealth": 5
        },
        "naturalWeaponDRBypass": [
          "cold iron"
        ]
      }
    },
    {
      "id": "moonlight",
      "name": "Moonlight Summons",
      "source": "https://aonprd.com/FeatDisplay.aspx?ItemName=Moonlight+Summons",
      "prerequisites": "Spell Focus (conjuration); able to cast summon nature's ally",
      "scope": "creatures you summon",
      "effects": {
        "light": "as light spell",
        "immunities": [
          "confusion",
          "sleep"
        ],
        "naturalWeaponDRBypass": [
          "silver"
        ]
      },
      "notes": "Silver DR bypass is not actual silver construction and does not impose silver weapon damage penalty."
    },
    {
      "id": "sunlight",
      "name": "Sunlight Summons",
      "source": "https://aonprd.com/FeatDisplay.aspx?ItemName=Sunlight+Summons",
      "prerequisites": "Spell Focus (conjuration); able to cast summon nature's ally",
      "scope": "creatures you summon",
      "effects": {
        "light": "as light spell",
        "immunities": [
          "blinding effects",
          "dazzling effects"
        ],
        "naturalWeaponDRBypass": [
          "magic"
        ]
      },
      "notes": "Does not grant an enhancement bonus or actual sunlight."
    },
    {
      "id": "evolved",
      "name": "Evolved Summoned Monster",
      "source": "https://aonprd.com/FeatDisplay.aspx?ItemName=Evolved+Summoned+Monster",
      "prerequisites": "Augment Summoning; Spell Focus (conjuration); summon monster I",
      "effects": {
        "evolutionPointsPerFeat": 1
      },
      "notes": "Choose one 1-point eidolon evolution other than pounce/reach per feat per casting. Meet evolution restrictions. Evolutions adding/enhancing attacks require Medium+ creature. One creature benefits per feat instance; multiple feat instances can distribute among summoned creatures."
    },
    {
      "id": "versatileMonster",
      "name": "Versatile Summon Monster",
      "source": "https://aonprd.com/FeatDisplay.aspx?ItemName=Versatile+Summon+Monster",
      "prerequisites": "Knowledge (arcana) 1 rank; Knowledge (planes) 1 rank",
      "notes": "Pick two of aerial, aqueous, chthonic, dark, fiery, primordial. Replace normal celestial/fiendish/entropic/resolute template on eligible summon monster creatures; do not stack. Each summoned creature may use a different unlocked template. Repeatable to unlock two more."
    },
    {
      "id": "versatileNature",
      "name": "Versatile Summon Nature's Ally",
      "source": "https://aonprd.com/FeatDisplay.aspx?ItemName=Versatile+Summon+Nature%27s+Ally",
      "prerequisites": "Augment Summoning; Spell Focus (conjuration); Knowledge (nature) 1 rank; Knowledge (planes) 1 rank",
      "notes": "For SNA animal/humanoid/vermin, replace Augment Summoning benefit with aerial/aqueous/chthonic/fiery/primordial template. All creatures in one casting use same template. No dark option."
    },
    {
      "id": "good",
      "name": "Summon Good Monster",
      "source": "https://aonprd.com/FeatDisplay.aspx?ItemName=Summon+Good+Monster",
      "prerequisites": "good alignment",
      "notes": "Adds feat-specific list. Only creatures selected via that list gain Diehard, not all standard-list summons."
    },
    {
      "id": "evil",
      "name": "Summon Evil Monster",
      "source": "https://aonprd.com/FeatDisplay.aspx?ItemName=Summon+Evil+Monster",
      "prerequisites": "evil alignment",
      "notes": "Adds feat-specific list; those summons may be cast as standard action, but cannot act until caster next turn. They can make AoOs and are not flat-footed. Sacred Summons can use matching alignment instead of subtype for this feat's list."
    },
    {
      "id": "neutral",
      "name": "Summon Neutral Monster",
      "source": "https://aonprd.com/FeatDisplay.aspx?ItemName=Summon+Neutral+Monster",
      "prerequisites": "CN, LN, or N alignment",
      "notes": "Adds feat-specific list and permits counterpoised replacement for eligible standard entries. Feat-list and counterpoised summons gain +2 resistance Will bonus (does not stack other resistance bonuses). Counterpoised template resists cold/electricity/fire; DR adamantine; smite targets LG/LE/CG/CE; otherwise celestial scaling."
    },
    {
      "id": "expanded",
      "name": "Expanded Summon Monster",
      "source": "https://aonprd.com/FeatDisplay.aspx?ItemName=Expanded+Summon+Monster",
      "prerequisites": "ability to cast summon monster",
      "notes": "Permanently choose two creatures per spell tier from feat's list. Repeatable for two additional per tier. Does not automatically grant every listed creature."
    },
    {
      "id": "plant",
      "name": "Summon Plant Ally",
      "source": "https://aonprd.com/FeatDisplay.aspx?ItemName=Summon+Plant+Ally",
      "prerequisites": "Knowledge (nature) 1 rank; able to cast SNA",
      "list": {
        "1": [
          "leaf leshy",
          "vegepygmy"
        ],
        "2": [
          "gourd leshy",
          "leaf ray (without seed)"
        ],
        "3": [
          "fungus leshy",
          "weedwhip"
        ],
        "4": [
          "assassin vine",
          "seaweed leshy (without air cyst)"
        ],
        "5": [
          "mandragora",
          "shambling mound"
        ],
        "6": [
          "tendriculos",
          "treant"
        ],
        "7": [
          "giant flytrap"
        ],
        "8": [
          "jinmenju"
        ],
        "9": [
          "alraune"
        ]
      }
    },
    {
      "id": "sacred",
      "name": "Sacred Summons",
      "source": "https://aonprd.com/FeatDisplay.aspx?ItemName=Sacred+Summons",
      "prerequisites": "Aura class feature; able to cast summon monster",
      "notes": "Standard-action summon monster when creature alignment subtype(s) exactly match caster aura. Alignment itself is insufficient. Celestial/fiendish template does not add alignment subtype."
    }
  ]
}
;
