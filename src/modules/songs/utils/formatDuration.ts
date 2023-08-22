export function formatDuration(duration: number) {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${appendZero(seconds)}`

    function appendZero(n: number) {
        if (n < 10) {
            return `0${n}`
        }
        return n.toString()
    }
}
