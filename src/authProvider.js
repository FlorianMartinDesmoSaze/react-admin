const authProvider = {
    // called when user tries to log in
    login: ({ username }) => {
        localStorage.setItem('username', username);

        // accept all username/password combinations
        return Promise.resolve();
    },

    // called when the user clicks on the logout EditButton
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },

    // called when API returns an error
    checkError: ({status}) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },

    // called when the user navigates to a new location, to check for authentification
    checkAuth: () => {
        return localStorage.getItem('username')
        ? Promise.resolve()
        : Promise.reject();
    },

    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
}

export default authProvider;