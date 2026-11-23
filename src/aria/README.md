# React Native accessibility adapters

These adapters were imported from the MIT-licensed `@react-native-aria` packages
published by gluestack (https://github.com/gluestack/gluestack-ui). Their versions
at import were button 0.2.10, checkbox 0.2.10, combobox 0.2.7, focus 0.2.9,
interactions 0.2.16, listbox 0.2.9, overlays 0.3.15, radio 0.2.13,
slider 0.2.12, tabs 0.2.13, toggle 0.2.11 and utils 0.2.12.

They are maintained here because the published packages pin React 17-era
React Aria dependencies and removed APIs. Application-level npm overrides do not
ship to consumers of NativeBase. Keeping the adapters in the source lets us
update their direct React Aria dependencies, check every adapter with TypeScript,
and ship identical native and web behavior in the source and compiled package.

Files carrying Adobe copyright notices retain their Apache-2.0 license headers;
the complete license is included in LICENSE-APACHE-2.0.
