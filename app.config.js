export default {
  expo: {
    name: "AuthScreen",
    slug: "AuthScreen",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    plugins: ["@react-native-google-signin/google-signin"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.mahamuduhalic.authscreen",
      gooleServiceFile: "GOOGLE_SERVICES_INFOPLIST",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.mahamuduhalic.authscreen",
      gooleServiceFile: "GOOGLE_SERVICES_JSON",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "4d5d6338-4f3c-4395-94bf-0e6cb843fae4",
      },
    },
    runtimeVersion: {
      policy: "appVersion",
    },
    updates: {
      url: "https://u.expo.dev/4d5d6338-4f3c-4395-94bf-0e6cb843fae4",
    },
  },
};
