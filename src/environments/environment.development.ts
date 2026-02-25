export const environment = {
  production: false,

  appName: 'Angular Web Portal',

   apiBaseUrl: 'http://localhost:8081',

  endpoints: {
    login: '/auth/login',
    register: '/auth/register',
    tasks: '/task',
    notifications: '/notification'
  },

  jwt: {
    tokenKey: 'access_token',
    refreshTokenKey: 'refresh_token'
  },

  features: {
    enableLogs: true,
    enableDebugMode: true
  }
};