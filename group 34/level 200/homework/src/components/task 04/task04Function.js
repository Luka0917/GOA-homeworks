export function changeTheme(setTheme){
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
};