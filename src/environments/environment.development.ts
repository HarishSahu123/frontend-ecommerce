export const environment = {
  production: false,

  appName: 'Angular Web Portal',

   apiBaseUrl: 'http://localhost:8080',

 endpoints: {
    login: '/api/v1/public/login',
    register: '/api/v1/public/createUser',
    // tasks: '/task',
    // notifications: '/notification'
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