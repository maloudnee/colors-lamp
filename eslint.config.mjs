import js from "@eslint/js";
    export default [
        js.configs.recommended,
        {
            languageOptions: {
                globals: {
                    window: "readonly",
                    document: "readonly"
                }
            },
            rules: {
                "no-unused-vars": "off",
                "no-undef": "off"
            }
        }
    ];
