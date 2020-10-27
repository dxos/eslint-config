# DXOS eslint config

An eslint config for DXOS packages. Extends semistandard with typescript support. Has a rule for copyright header.

## Usage

Install dependencies

```
yarn add -D @dxos/eslint-plugin typescript
```

Add this to your `.eslintrc.json`:

```json
{
  "extends": "plugin:@dxos/recomended"
}
```

Or for react projects:

```
yarn add -D @dxos/eslint-plugin typescript eslint-plugin-react
```

```json
{
  "extends": "plugin:@dxos/react"
}
```

## Common issues

**Error message:**

```
Oops! Something went wrong! :(

ESLint: 7.9.0

Error: package.json » plugin:@dxos/recomended:
        Configuration for rule "import/order" is invalid:
        Value {"pathGroups":[{"pattern":"@material-ui/**","group":"external","position":"after"},{"pattern":"@{dxos,wirelineio}/**","group":"internal","position":"before"}],"pathGroupsExcludedImportTypes":["@{dxos,wirelineio}/**","@material-ui/**"],"newlines-between":"always","groups":[["builtin","external"],"internal"],"alphabetize":{"order":"asc"}} should NOT have additional properties.
```

**Workaround:**

Do a clean re-install of node_modules:

```
git clean -fdx # at repo root
yarn
```

## Contributing

To make changes to recomended config edit `packages/eslint-plugin/configs/recomended.js`

### Adding custom rules

1. Create a new rule file in `packages/eslint-plugin/rules`. You can take inspiration from the header rule.
1. Export the rule in `packages/eslint-plugin/index.js`.
1. Use the rule with the like `"dxos/<rule name>": "error"` in the eslint config.
