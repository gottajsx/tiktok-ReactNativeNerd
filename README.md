## Get started

1. Project creation

```bash
npx create-expo-app@latest
```

2. Project start

```bash
npm run android
npm run ios
npm run web
```

or 

```bash
npx expo start
```

## Supabase setup

1. Supabase installation

```bash
npx expo install @supabase/supabase-js @react-native-async-storage/async-storage react-native-url-polyfill
```

2. Supabase env

Create `.env` that contains

```bash
EXPO_PUBLIC_SUPABASE_URL=
EXPO_PUBLIC_SUPABASE_ANON_KEY=
DATABASE_URL=
DIRECT_URL=
```

