module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gunmetal-100": "#090B0C",
        "gunmetal-200": "#121517",
        "gunmetal-300": "#1B1F22",
        "gunmetal-400": "#24292D",
        "gunmetal-500": "#2D3439",
        "gunmetal-600": "#363E44",
        "gunmetal-700": "#3F4850",
        "gunmetal-800": "#48525B",
        "gunmetal-900": "#515D67",

        "slate-100": "#0E1A1A",
        "slate-200": "#152828",
        "slate-300": "#1C3535",
        "slate-400": "#234343",
        "slate-500": "#2A5050",
        "slate-600": "#315E5E",
        "slate-700": "#386B6B",
        "slate-800": "#3F7878",
        "slate-900": "#468686",

        "cerulean-100": "#194961",
        "cerulean-200": "#1D5572",
        "cerulean-300": "#216282",
        "cerulean-400": "#256E93",
        "cerulean-500": "#297AA3",
        "cerulean-600": "#2D87B4",
        "cerulean-700": "#3193C4",
        "cerulean-800": "#3B9DCE",
        "cerulean-900": "#4BA5D2",

        "ecru-100": "#A38F52",
        "ecru-200": "#AD995C",
        "ecru-300": "#B4A16A",
        "ecru-400": "#BBAA77",
        "ecru-500": "#C1B285",
        "ecru-600": "#C8BB92",
        "ecru-700": "#CFC4A0",
        "ecru-800": "#D6CDAE",
        "ecru-900": "#DDD6BB",

        "columbia-100": "#85BCFF",
        "columbia-200": "#99C7FF",
        "columbia-300": "#ADD2FF",
        "columbia-400": "#C2DDFF",
        "columbia-500": "#D6E9FF",
        "columbia-600": "#EBF4FF",
        "columbia-700": "#FFFFFF",
        // Cannot pass 700 since it is white

        danger: "#e74c3c",
        "danger-light": "#e67e22",
        success: "#05c46b",
        "success-light": "#0be881",

        // ABOVE WILL BE REPLACED

        black: "#000000",
        white: "#FFFFFF",
        faded: "#C8C8C8",
        "less-faded": "#615D5A"
      }
    }
  },
  plugins: []
}
