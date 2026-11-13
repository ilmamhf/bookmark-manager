const DATE_LOCALE = "id-ID"
const TIME_ZONE = "Asia/Jakarta"

export function formatDate (isoString: string | null) {
    if (!isoString) return "-"
    const date = new Date(isoString);

    return new Intl.DateTimeFormat(DATE_LOCALE, {
        day:"numeric",
        month:"short",
        year:"numeric",
    }).format(date)
}