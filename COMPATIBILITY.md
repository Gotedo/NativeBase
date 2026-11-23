# React Native compatibility

This Gotedo fork targets React Native 0.88 and newer with the New Architecture.
The verified baseline is **React Native 0.88.1 / React 19.3.1**, using Hermes and
Fabric. Later React Native releases still require their own acceptance run.

## Setup

Use Node 26 (`.nvmrc`) and npm. Each example has its own npm lockfile.

```sh
npm ci
npm --prefix RNBareExample ci
npm --prefix example ci
npm --prefix expo-example ci
npm --prefix next-example ci
```

`npm run bootstrap` installs the library and all four examples. The library is
linked into the examples with `file:..`; Metro resolves the library source.
The native template is based on `@react-native-community/template@0.88.1`.

## Checks

```sh
npm run typecheck
npm run typecheck:examples
npm test -- --runInBand
npm run build
npm pack --dry-run
npm --prefix next-example run build
(cd expo-example && npx expo export --platform web)
(cd example && npx expo export --platform web)
```

The library check includes its TypeScript tests and all maintained accessibility
adapters. Declaration builds exclude test files. The package build produces
CommonJS, ES modules and declarations, with the `types` entry pointing to the
emitted declarations. The compatibility workflow runs library checks and each
example's type check; it also builds the web examples.

The historical Storyshots fixtures in `example/tests` predate React 19 and
Storybook 10. Their old snapshot runner is not part of these compatibility checks;
`npm --prefix example test` runs the current library compatibility suite.

## Storybook browser regression

```sh
npx playwright install chromium
npm run test:storybook:web
```

The browser check starts its own Expo server on port 8191 and uses one Chromium
worker. It renders Formik Basic, React Hook Form Usage and DemoForm, FlatList
Basic and ScrollView Basic, exercises form input, and fails on React/runtime
console errors. CI runs this check in addition to exporting the web bundle.

Both Expo examples resolve shared React and native renderer peers from their own
application directory, including imports originating in the library source.
`nodeModulesPaths` and `extraNodeModules` alone do not override the library's
nearer development dependencies. After changing Metro configuration, stop the
existing server and restart with `npm --prefix example run web -- --clear`.

## Native builds with one architecture

The bare example defaults to Android `arm64-v8a`, Hermes, the New Architecture and
two Gradle workers. Metro also uses two workers and does not require Watchman.

```sh
npm --prefix RNBareExample run pods
(cd RNBareExample/android && ./gradlew :app:assembleDebug --no-daemon --max-workers=2 -PreactNativeArchitectures=arm64-v8a)
```

For an Apple Silicon simulator, substitute the selected simulator's UDID below:

```sh
mkdir -p .validation
cd RNBareExample/ios
xcodebuild -workspace RNBareExample.xcworkspace -scheme RNBareExample \
  -configuration Release -sdk iphonesimulator -destination 'id=SIMULATOR_UDID' \
  -derivedDataPath ../../.validation/ios-build -jobs 2 \
  ONLY_ACTIVE_ARCH=YES ARCHS=arm64 COMPILER_INDEX_STORE_ENABLE=NO \
  CODE_SIGNING_ALLOWED=NO build
```

The release app includes its JavaScript bundle and can launch without Metro.
The app identifiers are `com.rnbareexample` on Android and
`org.reactjs.native.example.RNBareExample` on iOS. The demo mounts inputs,
checkboxes, radios, selection, sliders, switches, SVG and an overlay trigger.
For debug acceptance, `NATIVEBASE_OFFLINE_BUNDLE=1` loads `main.jsbundle` from the
app bundle when one has been supplied.

## Changes affecting consumers

- React Native supplies its own types; do not install `@types/react-native`.
- React 19 refs use `props.ref`, and composed refs preserve cleanup callbacks.
- Event subscriptions use their returned `remove()` methods.
- Native measurement uses host refs; no legacy renderer internals are required.
- Native SVG and safe-area peers use their Fabric-capable major versions.
- The accessibility adapters are maintained under `src/aria`, with their upstream
  license and provenance. Applications do not need npm overrides for their
  transitive accessibility dependencies.
- Expo examples use SDK 58; Storybook uses CSF stories and native controls in place
  of the retired knobs addon. Next.js uses native transpilation configuration.

## Acceptance scope

Validation covers all five TypeScript projects, the library tests and declaration
build, the three production web bundles, Android compilation for `arm64-v8a`, and
an iOS simulator release for `arm64`. The iOS app was installed and its rendered
compatibility screen inspected. Physical devices and an Android app launch were
not exercised.

The final runtime audit (`npm audit --omit=dev`) reported zero advisories.
The full development tool graph still reports advisories; it is not included in
that runtime result.
