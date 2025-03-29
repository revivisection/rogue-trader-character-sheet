interface activeAbilities {
    talentOneOpen: boolean,
    talentTwoOpen: boolean,
    exemplarOpen: boolean,
    archetypeTalentOne: Array<string>,
    archetypeTalentTwo: Array<string>,
    archetypeTalentExemplar: Array<string>
}

interface Talents {
    originTabOpen: boolean,
    talentOneOpen: boolean,
    talentTwoOpen: boolean,
    exemplarOpen: boolean,
    originTalents: Array<string>,
    archetypeTalentOne: Array<string>,
    archetypeTalentTwo: Array<string>,
    archetypeTalentExemplar: Array<string>
}

export const ActiveAbilities: activeAbilities = {
    talentOneOpen: true,
    talentTwoOpen: true,
    exemplarOpen: true,
    archetypeTalentExemplar: [],
    archetypeTalentOne: [],
    archetypeTalentTwo: [`Aim for opening`, `Death Whisper`, `Death Whisper - Second Hand`, `Dispatch`, `Dispatch - Second Weapon`, `Poised to Strike`, `Feinting Attack`]
}

export const TalentsData: Talents = {
    originTabOpen: true,
    talentOneOpen: false,
    talentTwoOpen: false,
    exemplarOpen: true,
    originTalents: ["Voidborn", "Fortune", "Noble", "You. Serve Me", "Shadow of Torment", "Apex of Brilliance", "Malediction of Rykad Minoris", "Otherworldly Observer", "Blood of Scipione 84-249", "Celestial Inspiration", "Champion of the Abyss", "Master of Interrogation", "Legacy of the Dead", "Discipline of the Damned", "Frequency of Faith", "Punisher", "Expert Cryptographer", "Secret of Ancient Cybersmiths", "Aeldari Machine Taming", "I Will Fear No Poison", "Dark Revelation", "The Hammer and the Cog", "Benevolent Protection", "Triumph Over Expanse", "Mistress of Flame", "Ghost of Vheabos VI", "Holy Woman", "Blessing of the Data-Angels", "Exalted Instruments of War", "Merciful Saviour", "Battle Mastery", "Patroness of Cults", "Bestower of Freedom"],
    archetypeTalentOne: [],
    archetypeTalentTwo: [],
    archetypeTalentExemplar: [`Exemplar`,"Unbreakable Will", `Sharpshooter`, `Imminent Demise`, `Aeldari Weapon Proficiency`, `Intimidation`, `Perfection Under Fire`, `Lethality Heightens`, `Ballistic Calculation`, `Danse Macabre`, `Deadly Calculation`, `AP Increase`, `Know-It-All`, `Continuous Analysis`, `Passive Learning`, `Ambush`, `Critical Velocity`, `Combat Insight`, `Outsmart`, `Sniper Expertise`, `Base Skill: Lore [Warp]`, `Feinting Attack`, `Cataclysm`, `AP Increase`, `Offensive Pattern Prediction`]
}