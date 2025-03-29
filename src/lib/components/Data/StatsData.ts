interface Stats {
    shorthand: string,
    label: string,
    value: number,
    bonus?: number
}
export const statsData:Stats[] = [
    { 
        shorthand: "WS",
        label: "Weapon Skill",
        value: 99,
        bonus: 7,
    },  
    { 
        shorthand: "BS",
        label: "Ballistic Skill",
        value: 99,
        bonus: 5,
    },
    { 
        shorthand: "STR",
        label: "Strength",
        value: 99,
        bonus: 5,
    },
    { 
        shorthand: "TGH",
        label: "Toughness",
        value: 99,
        bonus: 5,
    },
    { 
        shorthand: "AGI",
        label: "Agility",
        value: 99,
        bonus: 5,
    },
    { 
        shorthand: "INT",
        label: "Intelligence",
        value: 99,
        bonus: 5,
    },
    { 
        shorthand: "PER",
        label: "Perception",
        value: 99,
        bonus: 10,
    },
    {   
        shorthand: "WP",
        label: "Willpower",
        value: 99,
    },
    { 
        shorthand: "FEL",
        label: "Fellowship",
        value: 99,
        bonus: 25,
    },
]