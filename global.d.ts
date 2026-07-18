// Ambient declarations for non-code imports.
// Lets the TypeScript language server resolve side-effect stylesheet imports
// such as `import "./globals.css"` under moduleResolution: "bundler".
declare module "*.css";
