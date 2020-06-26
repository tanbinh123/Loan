class AuthService {
    successfulLogin(username, password)
    {
        console.log('Login Sucess');
        sessionStorage.setItem('authenticatedUser', username);
    }
    logout()
    {
        sessionStorage.removeItem('authenticatedUser');
        sessionStorage.clear();

    }
    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user === null)
        {
            return false;
        }
        return true;
    }
    getUserLogged()
        {
            let user = sessionStorage.getItem('authenticatedUser')
            if(user === null)
            {
                return '';
            }
            return user;
        }
    

}
export default new AuthService()