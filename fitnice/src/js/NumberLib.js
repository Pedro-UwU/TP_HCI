export function isNumber(evt) {
    if (!(evt instanceof Event)) return false;
    if ((evt.keyCode > 31 && (evt.keyCode < 48 || evt.keyCode > 57)) && evt.keyCode !== 46) {
        evt.preventDefault();
        return false;
    }
    return true;
}