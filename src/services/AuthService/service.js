export async function authService() {
    try {
        const response = await fetch(process.env.REACT_APP_AUTH_API + '7771961361' + '?otp=1234', {
            method: 'POST'
        });
        
        return response.json();
    } catch (e) {
        console.log(e)
    }
}