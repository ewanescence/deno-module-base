# Deno Module Base

This repository is a minimal, ready-to-use template for easily creating new Deno
modules.

---

## ⚙️ Creating a new Module from this template

Follow these steps to create your own module based on this template:

### 1. 🌀 Clone this Repository

```sh
git clone https://github.com/ewanescence/deno-module-base newModule
code newModule
```

### 2. ✏️ Customize Files

Update these files with information relevant to your new module:

- `README.md`
- `LICENSE`
- License information at the top of `.ts` files

### 3. 🚧 Start Developing

Begin developing by creating/editing your functions in the `./lib/` directory.
For publicly exposed functions, make sure to write tests.

To make them public, export them using `./mod.ts`:

```typescript
// Example:
export * from "./lib/example.ts";
```

### 4. 📖 Update the README

Replace this README with documentation specific to your module.

### 5. 🚀 Publish your package (optional)

Before publishing:

- Check the requirements
  [here](https://docs.deno.com/runtime/reference/cli/publish/#package-requirements)
- Create the package in the registry by visiting: https://jsr.io/new

Then you are ready to publish your current workspace:

```sh
deno publish
```

## ✅ Best Practices

- Always run these commands before each commit:

```sh
deno task ok
```

- Write a clear `README.md` and keep it up to date.
- Specify a clear license (`LICENSE`).

---

🎉 You're now ready to quickly and efficiently create new Deno modules!

---

## 🔗 Useful Links

- [Official Deno Documentation](https://docs.deno.com)
- [Official Deno Style Guide](https://docs.deno.com/runtime/contributing/style_guide/)
