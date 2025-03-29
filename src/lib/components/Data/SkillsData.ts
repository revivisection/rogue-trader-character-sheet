interface Skills {
    shorthand: string,
    name: string,
    value: number,
    bonus?: number
}

// START EDITING BELOW ⤵ //
export const skillsData:Skills[] = [
    {
        shorthand: "STR",
        name: "Athletic",
        value: 99,
    },
    {
        shorthand: "PER",
        name: "Awareness",
        value: 99,
        bonus: 7,
    },
    {
        shorthand: "TGH",
        name: "Carouse",
        value: 99,
        bonus: -2
    },
    {
        shorthand: "FEL",
        name: "Coercion",
        value: 99,
        bonus: 15
    },
    {
        shorthand: "INT",
        name: "Commerce",
        value: 99,
        bonus: 20,
    },
    {
        shorthand: "PER",
        name: "Demolition",
        value: 99
    },
    {
        shorthand: "INT",
        name: "Logic",
        value: 99,
        bonus: 20,
    },
    {
        shorthand: "INT",
        name: "Lore (Imperium)",
        value: 99,
        bonus: 35
    },
    {
        shorthand: "INT",
        name: "Lore (Wrap)",
        value: 99,
        bonus: 7
    },
    {
        shorthand: "INT",
        name: "Lore (Xenos)",
        value: 99,
        bonus: 20,
    },
    {
        shorthand: "INT",
        name: "Medicae",
        value: 99,
    },
    {
        shorthand: "FEL",
        name: "Persuasion",
        value: 99,
        bonus: 40
    },
    {
        shorthand: "INT",
        name: "Tech-Use",
        value: 99,
    },
]