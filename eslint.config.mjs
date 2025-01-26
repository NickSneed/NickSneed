import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
    { 
        languageOptions: { 
            globals: {
                ...globals.browser
            },
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true
                }
            }
        } ,
        plugins: {
            react: pluginReact
        },
        settings: {
            react: {
                version: "detect"
            }
        },
        rules: {
            ...pluginReact.configs.recommended.rules,
            "react/react-in-jsx-scope": "off"
        }
    },
    pluginJs.configs.recommended
];