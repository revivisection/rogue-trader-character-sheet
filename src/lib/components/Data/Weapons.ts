interface Weapon {
    name: string,
    hand: string,
    damage: string,
    ammo: number,
    penetration: number,
    range: string,
    ability: string,
}

export const weaponsData: Array<Weapon> = [
    {
        name: "Unshakeable Tenet",
        hand: "Two Handed",
        damage: `27 <br>max 41`,
        ammo: 14,
        penetration: 25,
        range: `12`,
        ability: `Single shot<br>Burst Fire`
    }
]