export const environment = {
  production: true,

  appName: 'Angular Web Portal',

  apiBaseUrl: 'https://backend-ecommerce-2-nnbi.onrender.com',

   endpoints: {
    login: '/api/v1/public/login',
    register: '/api/v1/public/createUser',
   productdetail:'/product/',
   productlists:'/api/v1/public/products'
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