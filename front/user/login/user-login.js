console.log('hello from JS');
(async () => {
    const response = await fetch('http://localhost:3003/user/login', {
        method: 'GET',
    });
    const body = await response.json();
    console.log('body', body);
})();
