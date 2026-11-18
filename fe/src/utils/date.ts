const DATE_LOCALE = "id-ID"

export function formatDate (isoString: string | null) {
    if (!isoString) return "-"
    const date = new Date(isoString);

    return new Intl.DateTimeFormat(DATE_LOCALE, {
        day:"numeric",
        month:"short",
        year:"numeric",
    }).format(date)
}