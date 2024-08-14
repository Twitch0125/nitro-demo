export default eventHandler((event) => {
    setHeader(event, 'Content-Type', 'text/css')
    return useStorage('public').getItem('css:uno.css')
})