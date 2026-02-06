export const funemojis = [
    "😀", "😂", "🤣", "😊", "😍", "😎", "😜", "🤔", "🙃", "😇",
    "😈", "👻", "💩", "👽", "🤖", "🎃", "👾", "🧠", "🦄", "🐶",]
export const getRandomEmoji = () => {
    return funemojis[Math.floor(Math.random() * funemojis.length)];
}