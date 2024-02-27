let nome = "John"
let nivelXp = 8908
let ranking


if (nivelXp < 1000) {
    ranking = "Ferro"
} else if (nivelXp >= 1001 && nivelXp <= 2000) {
    ranking = "Bronze"
} else if (nivelXp >= 2001 && nivelXp <= 5000) {
    ranking = "Prata"
} else if (nivelXp >= 5001 && nivelXp <= 6000) {
    ranking = "Ouro"
} else if (nivelXp >= 6001 && nivelXp <= 7000) {
    ranking = "Platina"
} else if (nivelXp >= 7001 && nivelXp <= 8000) {
    ranking = "Diamante"
} else if (nivelXp >= 8001 && nivelXp <= 9000) {
    ranking = "Ascendente"
} else if (nivelXp >= 9001 && nivelXp <= 10000) {
    ranking = "Imortal"
} else if (nivelXp <= 10001) {
    ranking = "Radiante"
}

console.log ("O herói de nome " + nome + ", está no nível " + ranking + ".")
