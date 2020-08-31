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

## Contributing

To make changes to recomended config edit `packages/eslint-plugin/configs/recomended.js`

### Adding custom rules

1. Create a new rule file in `packages/eslint-plugin/rules`. You can take inspiration from the header rule.
1. Export the rule in `packages/eslint-plugin/index.js`.
1. Use the rule with the like `"dxos/<rule name>": "error"` in the eslint config.