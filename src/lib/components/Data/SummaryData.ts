// THIS SECTION IS FOR TECH PRIESTS ONLY 
interface BasicData {
    homeworld: string,
    origin: string,
    triumph: string,
    darkestHour: string
}
interface historyEntry {
    entry: string,
    conviction?: ConvictionType,
    convictionChanges?: number,
}
enum ConvictionType {
    iconoclast = "Iconoclast",
    dogmatic = "Dogmatic",
    heretic = "Heretic"
}
interface Conviction {
    dogmatic: number,
    iconoclast: number,
    heretical: number,
}
// END SECTION

// START EDITING BELOW ⤵ //
export const basicData: BasicData = {
    homeworld: "Hive World",
    origin: "Commissar",
    triumph: "Apex of Brilliance",
    darkestHour: "Shadow of Torment"
}

export const convictionData: Conviction = {
    dogmatic: 5,
    iconoclast: 1,
    heretical: 0,
}


export const HistoryData: Array<historyEntry> = [
    {
        entry: `Stuff that your character has done in game.`,
    },
    {
        entry: `Or even before the events of the game, for lorebuilding purposes.`,
    },
    {
        entry: `Works the same as the "History" section seen in game!`,
    },
    {
        entry: `Exterminatus!`,
        conviction: ConvictionType.dogmatic,
        convictionChanges: 99
    },
    {
        entry: `Acquired THE Cool Hat™`,
        conviction: ConvictionType.dogmatic,
        convictionChanges: 99
    },
    {
        entry: `"Lady Cassia, the hat stays on during [entry redacted]"`,
        conviction: ConvictionType.dogmatic,
        convictionChanges: 99
    }
]