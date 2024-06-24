export default () => {
    return {
      name: process.env.APP_ENV === 'production' ? 'Breathing App' : 'Breathing App (DEV)',
      ios: {
        bundleIdentifier: process.env.APP_ENV === 'production' ? 'com.breathing.app' : 'com.breathing.app-dev',
      },
      // ... other config here
    };
  };  