export function changeValue(item, e) {
    return {
        type: 'VALUE_CHANGED',
        payload: item
    }
}