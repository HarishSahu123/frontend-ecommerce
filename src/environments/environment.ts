export const environment = {
  production: true,

  appName: 'Angular Web Portal',

  apiBaseUrl: 'http://localhost:8080',

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
    enableLogs: false,
    enableDebugMode: false
  }
};