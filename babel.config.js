module.exports = {
  presets: [
    // Your existing presets here (e.g., @babel/preset-env, @babel/preset-react)
  ],
  plugins: [
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
  ],
};
