const beautifyDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('it-IT', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
}

export { beautifyDate };